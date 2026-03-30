import Link from "next/link";

export function AnnouncementBar() {
  return (
    <div className="bg-navy text-white/90 py-2 text-center">
      <p className="font-body text-sm font-medium">
        Free in-home consultation &amp; estimate &middot;{" "}
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
          Track Your Order
        </Link>
      </p>
    </div>
  );
}
