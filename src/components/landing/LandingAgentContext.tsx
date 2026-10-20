"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { LANDING_AGENT_ID } from "@/lib/data/landing";

export type AgentMode = "chat" | "voice";

interface LandingAgentValue {
  /** The running conversation, or null while the card shows its start screen. */
  mode: AgentMode | null;
  /** Brings the agent card into view and starts (or keeps) this mode. */
  start: (mode: AgentMode) => void;
  /** Ends the conversation and returns the card to its start screen. */
  reset: () => void;
}

const LandingAgentContext = createContext<LandingAgentValue | null>(null);

export function LandingAgentProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<AgentMode | null>(null);

  const start = useCallback((next: AgentMode) => {
    setMode(next);
    document.getElementById(LANDING_AGENT_ID)?.scrollIntoView({ block: "start" });
  }, []);

  const reset = useCallback(() => setMode(null), []);

  const value = useMemo(() => ({ mode, start, reset }), [mode, start, reset]);

  return <LandingAgentContext.Provider value={value}>{children}</LandingAgentContext.Provider>;
}

export function useLandingAgent(): LandingAgentValue {
  const value = useContext(LandingAgentContext);
  if (!value) throw new Error("useLandingAgent must be used inside <LandingAgentProvider>");
  return value;
}
