import Link from "next/link";
import { events, siteConfig, groupMeta } from "@/data";
import { countryOf, holderEn, holderZh, isRatified, markValue, zhDate } from "@/lib/display";
import type { EventGroup } from "@/lib/types";
import type { RecordEntry } from "@/lib/types";

function wrOf(event: (typeof events)[number]): RecordEntry {
  const ratified = event.progression.filter(isRatified);
  return ratified[ratified.length - 1];
}

export default function Home() {
  const totalRecords = events.reduce((n, e) => n + e.progression.length, 0);
  const featured = events.find((e) => e.slug === "mens-100m")!;
  const featuredWr = wrOf(featured);
  const others = events.filter((e) => e.slug !== featured.slug);

  const recent = events
    .flatMap((e) =>
      e.progression
        .filter(isRatified)
        .slice(-3)
        .map((r) => ({ event: e, record: r })),
    )
    .sort((a, b) => (a.record.date < b.record.date ? 1 : -1))
    .slice(0, 6);

  const firstYear = Math.min(
    ...events.map((e) => Number(e.progression[0].date.slice(0, 4))),
  );
  const lastYear = Math.max(
    ...events.map((e) => Number(wrOf(e).date.slice(0, 4))),
  );

  const totalChampions = events.reduce(
    (n, e) => n + (e.champions?.length ?? 0),
    0,
  );
  const stats = [
    { label: "收录项目", value: String(events.length) },
    { label: "纪录条目", value: `${totalRecords}` },
    { label: "历届大赛冠军", value: `${totalChampions} 条` },
    { label: "数据跨越", value: `${firstYear}–${lastYear}` },
  ];

  return (
    <div>
      {/* 英雄区 */}
      <section className="relative overflow-hidden bg-gradient-to-br from-track-950 via-track-800 to-track-600 text-white">
        <svg
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 h-24 w-full opacity-25"
          aria-hidden
        >
          <path
            d="M0 70 H1380 A 60 60 0 0 0 1380 10 H60 A 60 60 0 0 0 60 70 Z"
            fill="none"
            stroke="#ffffff"
            strokeWidth="3"
          />
          <path
            d="M0 100 H1310 A 30 30 0 0 0 1310 40 H130 A 30 30 0 0 0 130 100 Z"
            fill="none"
            stroke="#ffffff"
            strokeWidth="3"
            opacity="0.6"
          />
          <line x1="120" y1="10" x2="120" y2="130" stroke="#ffffff" strokeWidth="3" opacity="0.6" />
        </svg>
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-24">
          <p className="text-sm tracking-[0.3em] text-track-200">
            ATHLETICS HISTORY · {firstYear}—{lastYear}
          </p>
          <h1 className="mt-4 text-5xl font-bold tracking-wide sm:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="mt-3 text-lg text-track-100">{siteConfig.tagline}</p>
          <p className="mt-5 max-w-2xl leading-relaxed text-track-100/90">
            {siteConfig.description}
            每个项目还收录奥运会、世界锦标赛、亚运会三大系列的历届冠军与夺冠成绩；被兴奋剂追回的纪录同样入册——历史不只有被承认的部分。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/events/"
              className="rounded-full bg-white px-6 py-2.5 text-sm font-medium text-track-800 transition-colors hover:bg-track-50"
            >
              浏览全部项目
            </Link>
            <Link
              href="/about/"
              className="rounded-full border border-white/40 px-6 py-2.5 text-sm text-white transition-colors hover:bg-white/10"
            >
              关于数据来源
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur"
              >
                <div className="font-mono text-2xl font-bold tabular-nums">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-track-100/80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 焦点纪录 */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold text-track-950">焦点纪录</h2>
          <Link
            href="/events/"
            className="text-sm text-track-600 hover:text-track-700"
          >
            全部项目 →
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <div className="flex flex-col justify-between rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-6">
            <div>
              <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-medium text-amber-700">
                男子 100 米 · 现世界纪录
              </span>
              <div className="mt-4 font-mono text-6xl font-bold tabular-nums text-track-900">
                {featuredWr.mark}
              </div>
              <div className="mt-3 text-lg font-semibold text-track-950">
                {holderZh(featuredWr.holder)}
                {holderEn(featuredWr.holder) && (
                  <span className="ml-2 text-sm font-normal text-slate-400">
                    {holderEn(featuredWr.holder)}
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {zhDate(featuredWr.date)}，{featuredWr.meet}决赛（顺风{featuredWr.wind} m/s）。
                9.58 是电计时时代最长寿的百米世界纪录——十七年过去，最接近的一次仍差0.11秒。
              </p>
            </div>
            <Link
              href={`/events/${featured.slug}/`}
              className="mt-6 self-start text-sm font-medium text-track-700 hover:text-track-600"
            >
              查看完整演进（{featured.progression.filter(isRatified).length} 条纪录）→
            </Link>
          </div>

          {others.map((e) => {
            const wr = wrOf(e);
            const c = countryOf(wr.country);
            return (
              <div
                key={e.slug}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-track-400 hover:shadow-md hover:shadow-track-100"
              >
                <div>
                  <span className="rounded-full bg-track-50 px-2.5 py-1 text-xs font-medium text-track-700">
                    {e.name} · 现世界纪录
                  </span>
                  <div className="mt-4 font-mono text-5xl font-bold tabular-nums text-track-900">
                    {wr.mark}
                  </div>
                  <div className="mt-3 text-lg font-semibold text-track-950">
                    {c.flag && <span className="mr-1">{c.flag}</span>}
                    {holderZh(wr.holder)}
                    {holderEn(wr.holder) && (
                      <span className="ml-2 text-sm font-normal text-slate-400">
                        {holderEn(wr.holder)}
                      </span>
                    )}
                  </div>
                </div>
                <Link
                  href={`/events/${e.slug}/`}
                  className="mt-6 self-start text-sm font-medium text-track-700 hover:text-track-600"
                >
                  查看完整演进（{e.progression.filter(isRatified).length} 条纪录）→
                </Link>
              </div>
            );
          })}

          <div className="flex flex-col justify-between rounded-2xl border border-dashed border-slate-300 bg-white/50 p-6 text-slate-400">
            <div>
              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium">
                更多项目
              </span>
              <div className="mt-4 text-xl font-semibold">即将收录</div>
              <p className="mt-2 text-sm leading-relaxed">
                径赛全距离、跨栏、田赛与接力项目将陆续上线——每个项目一个数据文件，按男子百米的样板复制接入。
              </p>
            </div>
            <Link
              href="/about/"
              className="mt-6 self-start text-sm font-medium text-slate-500 hover:text-slate-600"
            >
              了解收录路线 →
            </Link>
          </div>
        </div>
      </section>

      {/* 按大项浏览 */}
      <section className="border-y border-track-100 bg-white/60">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold text-track-950">按大项浏览</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {(Object.keys(groupMeta) as EventGroup[]).map((g) => {
              const list = events.filter((e) => e.group === g);
              const active = list.length > 0;
              const inner = (
                <>
                  <div className="text-lg font-semibold">{groupMeta[g].zh}</div>
                  <div className="mt-2 text-sm opacity-75">
                    {active ? `${list.length} 个项目` : "即将收录"}
                  </div>
                </>
              );
              return active ? (
                <Link
                  key={g}
                  href="/events/"
                  className="rounded-2xl border border-track-200 bg-track-50 p-5 text-track-800 transition-colors hover:border-track-400 hover:bg-track-100"
                >
                  {inner}
                </Link>
              ) : (
                <div
                  key={g}
                  className="rounded-2xl border border-dashed border-slate-200 p-5 text-slate-400"
                >
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 最近的纪录刷新 */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold text-track-950">最近的纪录刷新</h2>
        <div className="mt-6 divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-white">
          {recent.map(({ event, record }) => {
            const c = countryOf(record.country);
            return (
              <Link
                key={`${event.slug}-${record.date}-${record.holder}`}
                href={`/events/${event.slug}/`}
                className="flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-track-50/60"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <span className="w-24 shrink-0 text-sm tabular-nums text-slate-400">
                    {record.date}
                  </span>
                  <span className="shrink-0 font-mono text-lg font-bold tabular-nums text-track-700">
                    {record.mark}
                  </span>
                  <span className="truncate text-sm text-slate-600">
                    {c.flag && <span className="mr-1">{c.flag}</span>}
                    {holderZh(record.holder)}
                    <span className="ml-2 text-slate-400">{event.name}</span>
                  </span>
                </div>
                <span className="shrink-0 text-xs text-slate-300">
                  {markValue(record.mark).toFixed(2)}
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
