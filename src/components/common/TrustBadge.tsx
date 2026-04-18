import { siteConfig } from "@/config/site";

const iconPaths = [
  "M12 8v8m-4-4h8M4 7h16M5 7l1 12h12l1-12",
  "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  "M5 12l5 5L20 7",
  "M12 3l8 4v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z",
];

export default function TrustBadge() {
  return (
    <section className="border-y border-zinc-200 bg-zinc-50">
      <div className="container mx-auto px-4 py-8 md:py-10">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {siteConfig.trustBadges.map((item, index) => (
            <div key={item} className="flex items-center gap-3">
              <svg
                className="h-5 w-5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.4}
                  d={iconPaths[index]}
                />
              </svg>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
