const BADGES = [
  "Licensed & Insured",
  "Miami-Dade NOA Certified",
  "3 Years Free Maintenance",
  "Free In-Home Estimate",
  "Permit Handling Included",
];

export function ProductBadgeStrip() {
  return (
    <section className="py-10 bg-blue" aria-label="Trust badges">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {BADGES.map((badge) => (
            <span
              key={badge}
              className="flex items-center gap-2 font-body font-medium text-[13px] text-white/75 uppercase tracking-[0.07em]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
