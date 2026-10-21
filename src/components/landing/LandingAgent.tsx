"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useInView } from "framer-motion";
import { AudioLines, Loader2, MessageCircle, Mic, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { LANDING_AGENT_ID, LANDING_PHONE_HREF } from "@/lib/data/landing";
import { CHAT_WIDGET_AGENT, CHAT_WIDGET_LABEL, CHAT_WIDGET_SRC } from "@/lib/chatWidget";
import type { Language } from "@/lib/i18n/translations";
import { primaryCta } from "@/components/ui/styles";
import { useLandingAgent, type AgentMode } from "./LandingAgentContext";
import { useLandingCopy } from "./useLandingCopy";

const agentLink = "inline-flex min-h-[44px] items-center gap-1.5 rounded-[4px] hover:underline";

/**
 * The page's centerpiece: the Orlando agent, embedded in the hero. A branded
 * start screen offers chat or voice; picking one mounts the Datagran widget
 * inside the card. A dock brings visitors back once the card scrolls away.
 */
export function LandingAgent() {
  const { copy } = useLandingCopy();
  const { mode } = useLandingAgent();
  const cardRef = useRef<HTMLDivElement>(null);
  const cardInView = useInView(cardRef, { initial: true });

  return (
    <>
      <div
        id={LANDING_AGENT_ID}
        ref={cardRef}
        role="region"
        aria-label={copy.agent.regionLabel}
        className="scroll-mt-24 overflow-hidden rounded-[20px] bg-white shadow-lg"
      >
        <AgentHeader />
        {mode ? <AgentConversation mode={mode} /> : <AgentStart />}
      </div>
      <AgentDock visible={!cardInView} />
    </>
  );
}

function AgentOrb({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue to-accent text-white",
        className
      )}
    >
      <AudioLines size={18} strokeWidth={1.5} />
    </span>
  );
}

function AgentHeader() {
  const a = useLandingCopy().copy.agent;
  const { mode, start, reset } = useLandingAgent();

  return (
    <div className="flex items-center gap-3 border-b border-border px-5 py-4 sm:px-6">
      <AgentOrb className="h-10 w-10" />
      <div className="min-w-0 flex-1">
        <p className="font-heading font-semibold text-navy text-[20px] leading-tight">{a.name}</p>
        <p
          className={cn(
            "flex items-center gap-1.5 font-body text-[13px] text-charcoal/80",
            mode && "hidden sm:flex"
          )}
        >
          <span aria-hidden className="h-2 w-2 rounded-full bg-accent" />
          {a.status}
        </p>
      </div>
      {mode && (
        <>
          <button
            type="button"
            onClick={() => start(mode === "chat" ? "voice" : "chat")}
            className="min-h-[44px] rounded-[8px] px-2 font-body font-medium text-[13px] text-blue hover:underline"
          >
            {mode === "chat" ? a.switchToVoice : a.switchToChat}
          </button>
          <button
            type="button"
            onClick={reset}
            aria-label={a.close}
            className="flex h-11 w-11 items-center justify-center rounded-full text-charcoal/70 hover:bg-surface hover:text-navy"
          >
            <X size={18} strokeWidth={1.5} aria-hidden />
          </button>
        </>
      )}
    </div>
  );
}

function AgentStart() {
  const a = useLandingCopy().copy.agent;
  const { start } = useLandingAgent();

  return (
    <div className="px-5 pb-5 pt-5 sm:px-8 sm:pb-6 sm:pt-6">
      <h2 className="font-heading font-bold uppercase text-navy text-[28px] leading-[1.05] sm:text-[30px]">
        {a.heading}
      </h2>
      <p className="mt-2 font-body text-[15px] leading-relaxed text-charcoal/80">{a.subtitle}</p>
      <button type="button" onClick={() => start("chat")} className={cn(primaryCta, "mt-6 w-full")}>
        <MessageCircle size={18} strokeWidth={1.5} aria-hidden />
        {a.chat}
      </button>
      {/* One primary action; voice and calling stay one tap away without competing. */}
      <div className="mt-2 flex flex-wrap items-center justify-center gap-x-6 font-body text-[14px] font-medium text-blue">
        <button type="button" onClick={() => start("voice")} className={agentLink}>
          <Mic size={16} strokeWidth={1.5} aria-hidden />
          {a.voice}
        </button>
        <a href={LANDING_PHONE_HREF} className={agentLink}>
          <Phone size={16} strokeWidth={1.5} aria-hidden />
          {a.call}
        </a>
      </div>
    </div>
  );
}

function AgentConversation({ mode }: { mode: AgentMode }) {
  const { copy, language } = useLandingCopy();
  const containerRef = useRef<HTMLDivElement>(null);
  const status = useAgentEmbed(containerRef, mode, language);

  return (
    <div className="relative min-h-[420px]">
      {status !== "ready" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
          {status === "loading" ? (
            <>
              <Loader2 size={28} strokeWidth={1.5} aria-hidden className="animate-spin text-blue" />
              <p role="status" className="font-body text-[15px] text-charcoal/80">{copy.agent.loading}</p>
            </>
          ) : (
            <>
              <p role="alert" className="font-body text-[15px] text-charcoal">{copy.agent.failed}</p>
              <a href={LANDING_PHONE_HREF} className={primaryCta}>{copy.agent.call}</a>
            </>
          )}
        </div>
      )}
      <div ref={containerRef} />
    </div>
  );
}

type EmbedStatus = "loading" | "ready" | "failed";

/**
 * Mounts the widget in "controlled" inline mode inside `containerRef`: it
 * fills the card and drops its own launcher and close button. A new mode or
 * language remounts it; teardown fires `datagran:destroy` so the old session
 * and microphone stop.
 */
function useAgentEmbed(
  containerRef: React.RefObject<HTMLDivElement>,
  mode: AgentMode,
  language: Language
): EmbedStatus {
  const [status, setStatus] = useState<EmbedStatus>("loading");

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    setStatus("loading");

    const script = document.createElement("script");
    script.src = CHAT_WIDGET_SRC;
    script.async = true;
    Object.assign(script.dataset, {
      agent: CHAT_WIDGET_AGENT,
      label: CHAT_WIDGET_LABEL,
      inline: "true",
      controlled: "true",
      mode,
      language,
    });
    script.onerror = () => setStatus("failed");

    const findHost = () => container.querySelector("[data-datagran-agent]");
    const observer = new MutationObserver(() => findHost() && setStatus("ready"));
    observer.observe(container, { childList: true });
    const timeout = window.setTimeout(() => !findHost() && setStatus("failed"), 12000);
    container.appendChild(script);

    return () => {
      observer.disconnect();
      window.clearTimeout(timeout);
      findHost()?.dispatchEvent(new Event("datagran:destroy"));
      container.replaceChildren();
    };
  }, [containerRef, mode, language]);

  return status;
}

/**
 * Rendered on <body>: the hero is its own stacking context (`isolate`), so a
 * dock inside it sat under later sections however high its z-index.
 */
function AgentDock({ visible }: { visible: boolean }) {
  const a = useLandingCopy().copy.agent;
  const { mode, start } = useLandingAgent();
  const [host, setHost] = useState<HTMLElement | null>(null);
  useEffect(() => setHost(document.body), []);
  if (!host) return null;

  return createPortal(
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 px-4 pb-[calc(env(safe-area-inset-bottom,0px)+12px)] transition-all duration-200 md:inset-x-auto md:bottom-6 md:right-6 md:p-0",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      )}
    >
      <button
        type="button"
        tabIndex={visible ? 0 : -1}
        aria-hidden={!visible}
        onClick={() => start(mode ?? "chat")}
        className="flex min-h-[56px] w-full items-center justify-center gap-3 rounded-full bg-navy px-6 font-heading font-semibold text-[17px] uppercase tracking-[0.05em] text-white shadow-lg transition-transform duration-150 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:w-auto"
      >
        <AgentOrb className="h-9 w-9" />
        {a.dock}
      </button>
    </div>,
    host
  );
}
