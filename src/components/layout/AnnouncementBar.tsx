"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function AnnouncementBar() {
  const { t } = useLanguage();

  return (
    <div className="bg-navy text-white/90 py-2 text-center">
      <p className="font-body text-sm font-medium">
        {t.announcement.text} &middot;{" "}
        <a
          href="tel:+19546255318"
          className="font-semibold text-white underline underline-offset-2 hover:text-accent transition-colors"
        >
          (954) 625-5318
        </a>
        {" \u00b7 "}
        <Link
          href="https://titan.orlandotgroupinc.com/status-tracking"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-white underline underline-offset-2 hover:text-accent transition-colors"
        >
          {t.announcement.trackOrder}
        </Link>
      </p>
    </div>
  );
}
