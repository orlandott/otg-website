import Link from "next/link";

export function AnnouncementBar() {
  return (
    <div className="bg-accent text-primary py-2 text-center">
      <p className="font-body text-sm font-medium">
        Free in-home consultation & estimate ·{" "}
        <a href="tel:+19546255318" className="underline font-semibold hover:opacity-80">
          (954) 625-5318
        </a>
        {" · "}
        <Link href="https://titan.orlandotgroupinc.com/status-tracking" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:opacity-80">
          Track Your Order
        </Link>
      </p>
    </div>
  );
}
