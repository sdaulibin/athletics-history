import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProgressionChart, type ChartMark } from "@/components/ProgressionChart";
import { RecordsTable } from "@/components/RecordsTable";
import { ChampionsExplorer } from "@/components/ChampionsExplorer";
import { events, genderMeta, groupMeta } from "@/data";
import {
  FLAG_ZH,
  countryOf,
  holderEn,
  holderZh,
  isRatified,
  markValue,
  zhDate,
} from "@/lib/display";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const CHART_MARKS: Record<string, ChartMark[]> = {
  "mens-100m": [
    { date: "1968-10-14", label: "电计时时代开始" },
    { date: "1988-09-24", label: "汉城之殇" },
    { date: "2009-08-16", label: "柏林 9.58" },
  ],
  "womens-100m": [
    { date: "1968-10-15", label: "电计时时代开始" },
    { date: "1977-07-01", label: "首次突破11秒" },
    { date: "1988-07-16", label: "印第安纳波利斯 10.49" },
  ],
  "mens-pole-vault": [
    { date: "1984-05-26", label: "布勃卡登场" },
    { date: "1994-07-31", label: "6.14 悬置二十六年" },
    { date: "2020-09-17", label: "杜普兰蒂斯 6.15" },
    { date: "2025-09-15", label: "东京 6.30" },
  ],
  "womens-pole-vault": [
    { date: "1996-01-28", label: "乔治 4.41" },
    { date: "2005-07-22", label: "首次越过5米" },
    { date: "2009-08-28", label: "苏黎世 5.06" },
  ],
};

const UNIT_OF: Record<string, string> = {
  time: "秒",
  distance: "米",
  points: "分",
};

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) return {};
  return {
    title: `${event.name}：世界纪录与历史`,
    description: event.summary,
  };
}

export default async function EventPage({ params }: PageProps) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) notFound();

  const idx = events.findIndex((e) => e.slug === slug);
  const prev = events[(idx - 1 + events.length) % events.length];
  const next = events[(idx + 1) % events.length];

  const ratified = event.progression.filter(isRatified);
  const wr = ratified[ratified.length - 1];
  const first = ratified[0];
  const wrCountry = countryOf(wr.country);
  const unit = UNIT_OF[event.markKind];
  const improvement =
    event.markKind === "time"
      ? markValue(first.mark) - markValue(wr.mark)
      : markValue(wr.mark) - markValue(first.mark);

  const chartRecords = ratified.map((r) => ({
    mark: r.mark,
    value: markValue(r.mark),
    holder: r.holder,
    holderDisplay: holderZh(r.holder),
    countryZh: countryOf(r.country).zh,
    date: r.date,
    dateLabel: zhDate(r.date),
    meet: r.meet,
  }));

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      {/* 面包屑 */}
      <nav className="text-sm text-slate-400">
        <Link href="/" className="hover:text-track-700">
          首页
        </Link>
        <span className="mx-2">/</span>
        <Link href="/events/" className="hover:text-track-700">
          项目
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-600">{event.name}</span>
      </nav>

      {/* 页头 */}
      <header className="mt-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-track-100 px-2.5 py-1 text-xs font-medium text-track-700">
            {genderMeta[event.gender].zh}
          </span>
          <span className="rounded-full bg-track-100 px-2.5 py-1 text-xs font-medium text-track-700">
            {groupMeta[event.group].zh}
          </span>
          <span className="rounded-full bg-track-100 px-2.5 py-1 text-xs font-medium text-track-700">
            室外
          </span>
        </div>
        <h1 className="mt-3 text-3xl font-bold text-track-950 sm:text-4xl">
          {event.name}
        </h1>
        <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">
          {event.summary}
        </p>
      </header>

      {/* 现世界纪录 */}
      <section className="mt-8 overflow-hidden rounded-2xl bg-gradient-to-r from-track-950 via-track-800 to-track-600 text-white">
        <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[auto_1fr] lg:items-center">
          <div>
            <div className="text-sm text-track-200">现世界纪录</div>
            <div className="mt-2 font-mono text-6xl font-bold tabular-nums sm:text-7xl">
              {wr.mark}
              {wr.wind && (
                <span className="ml-2 align-middle font-sans text-base font-normal text-track-200">
                  ({wr.wind} m/s)
                </span>
              )}
            </div>
            <div className="mt-1 text-sm text-track-200">
              {wrCountry.flag} {wrCountry.zh}
            </div>
          </div>
          <div className="lg:border-l lg:border-white/20 lg:pl-8">
            <div className="text-xl font-semibold">
              {holderZh(wr.holder)}
              {holderEn(wr.holder) && (
                <span className="ml-2 text-sm font-normal text-track-200">
                  {holderEn(wr.holder)}
                </span>
              )}
            </div>
            <div className="mt-1 text-track-100">
              {zhDate(wr.date)}
              {wr.meet ? ` · ${wr.meet}` : ""}
              {wr.place ? ` · ${wr.place}` : ""}
            </div>
            {wr.flags && wr.flags.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {wr.flags.map((f) => (
                  <span
                    key={f}
                    className="rounded-full bg-white/15 px-2 py-0.5 text-xs"
                  >
                    {FLAG_ZH[f]}
                  </span>
                ))}
              </div>
            )}
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-track-100">
              <span>
                收录 <b className="font-mono text-base">{ratified.length}</b>{" "}
                条纪录（被承认）
              </span>
              <span>
                首项纪录 {first.date.slice(0, 4)} 年
              </span>
              <span>
                累计提升{" "}
                <b className="font-mono text-base">
                  {improvement.toFixed(2)}
                </b>{" "}
                {unit}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 亚洲纪录 / 中国纪录 */}
      {(event.asianRecord || event.chineseRecord) && (
        <section className="mt-4 grid gap-4 sm:grid-cols-2">
          {[
            { rec: event.asianRecord, key: "asian", label: "亚洲纪录（室外）", chip: "bg-rose-100 text-rose-700" },
            { rec: event.chineseRecord, key: "chinese", label: "中国纪录（室外）", chip: "bg-amber-100 text-amber-700" },
          ]
            .filter(({ rec }) => Boolean(rec))
            .map(({ rec, key, label, chip }) => {
              const r = rec!;
              const rc = countryOf(r.country);
              return (
                <div
                  key={key}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-medium ${chip}`}
                    >
                      {label}
                    </span>
                    {r.wr && (
                      <span className="text-xs font-medium text-amber-600">
                        世界纪录
                      </span>
                    )}
                  </div>
                  <div className="mt-3 font-mono text-4xl font-bold tabular-nums text-track-800">
                    {r.mark}
                    {r.wind && (
                      <span className="ml-2 align-middle font-sans text-sm font-normal text-slate-400">
                        ({r.wind})
                      </span>
                    )}
                  </div>
                  <div className="mt-2 text-slate-700">
                    {rc.flag && <span className="mr-1">{rc.flag}</span>}
                    {holderZh(r.holder)}
                    {holderEn(r.holder) && (
                      <span className="ml-1.5 text-xs text-slate-400">
                        {holderEn(r.holder)}
                      </span>
                    )}
                  </div>
                  <div className="mt-1 text-xs text-slate-400">
                    {[r.meet, r.place, r.date?.replace(/-/g, ".")]
                      .filter(Boolean)
                      .join(" · ")}
                  </div>
                  {r.note && (
                    <div className="mt-2 text-xs leading-relaxed text-slate-500">
                      {r.note}
                    </div>
                  )}
                </div>
              );
            })}
        </section>
      )}

      {/* 纪录演进图 */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-track-950">纪录演进</h2>
        <p className="mt-1 text-sm text-slate-500">
          阶梯线为被承认的世界纪录；被取消的纪录（兴奋剂追回等）不连线、见表格标注；悬停查看每项纪录。
        </p>
        <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
          <ProgressionChart
            records={chartRecords}
            marks={CHART_MARKS[event.slug] ?? []}
            unit={unit}
            higherIsBetter={event.markKind === "distance"}
          />
        </div>
      </section>

      {/* 历史最好成绩榜 */}
      {event.topList && event.topList.length > 0 && (
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-track-950">
            历史最好成绩 · {event.topListTitle ?? `前${event.topList.length}`}
            <span className="ml-2 align-middle text-sm font-normal text-slate-400">
              {event.markKind === "time" ? "室外 · 合规风速" : "室外"} · 截至 {event.dataAsOf}
            </span>
          </h2>
          {event.topListNote && (
            <p className="mt-1 text-sm text-slate-500">{event.topListNote}</p>
          )}
          <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[560px] text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-track-50/60 text-left text-xs tracking-wide text-slate-500">
                  <th className="px-4 py-3 font-medium">#</th>
                  <th className="px-4 py-3 font-medium">成绩</th>
                  <th className="px-4 py-3 font-medium">运动员</th>
                  <th className="px-4 py-3 font-medium">国家 / 地区</th>
                  <th className="px-4 py-3 font-medium">赛事 · 日期</th>
                </tr>
              </thead>
              <tbody>
                {event.topList.map((r, i) => {
                  const c = countryOf(r.country);
                  return (
                    <tr
                      key={`${r.mark}-${r.holder}-${i}`}
                      className={`border-b border-slate-100 last:border-0 hover:bg-track-50/50 ${
                        i === 0 ? "border-l-4 border-l-amber-400 bg-amber-50/60" : ""
                      }`}
                    >
                      <td className="px-4 py-2.5 tabular-nums text-slate-400">
                        {i + 1}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2.5 font-mono font-semibold tabular-nums text-track-800">
                        {r.mark}
                        {r.wind && (
                          <span className="ml-1.5 text-xs font-normal text-slate-400">
                            ({r.wind})
                          </span>
                        )}
                        {r.wr && (
                          <span className="ml-2 rounded bg-amber-100 px-1.5 py-0.5 text-xs font-medium text-amber-700">
                            WR
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-2.5">
                        <span className="font-medium">{holderZh(r.holder)}</span>
                        {holderEn(r.holder) && (
                          <span className="ml-1.5 text-xs text-slate-400">
                            {holderEn(r.holder)}
                          </span>
                        )}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2.5">
                        {c.flag && <span className="mr-1">{c.flag}</span>}
                        {c.zh}
                      </td>
                      <td className="px-4 py-2.5 text-slate-600">
                        {r.meet}
                        {r.date && ` · ${r.date.replace(/-/g, ".")}`}
                        {r.note && (
                          <span className="ml-2 text-xs text-slate-400">
                            {r.note}
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* 历届大赛冠军 */}
      {event.champions && event.champions.length > 0 && (
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-track-950">历届大赛冠军</h2>
          <p className="mt-1 text-sm text-slate-500">
            {event.champions.some((c) => c.series === "majors")
              ? "奥运会、世界锦标赛、亚运会三大系列，并附世界马拉松大满贯近十五年的冠军（因赛事取消或成绩低于总榜下限，个别届次从缺）。"
              : "奥运会、世界锦标赛与亚运会的该项冠军及夺冠成绩。"}
          </p>
          <div className="mt-4">
            <ChampionsExplorer champions={event.champions} />
          </div>
        </section>
      )}

      {/* 完整纪录表 */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-track-950">
          完整纪录表
          <span className="ml-2 align-middle text-sm font-normal text-slate-400">
            共 {event.progression.length} 条（含{" "}
            {event.progression.length - ratified.length} 条已被取消）
          </span>
        </h2>
        <div className="mt-4">
          <RecordsTable records={event.progression} />
        </div>
      </section>

      {/* 项目历史 */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-track-950">项目历史</h2>
        <div className="mt-6 space-y-10">
          {event.history.map((section) => (
            <article key={section.heading}>
              <h3 className="text-lg font-semibold text-track-800">
                {section.heading}
              </h3>
              <div className="mt-3 space-y-3 leading-loose text-slate-600">
                {section.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 数据来源 */}
      <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-500">
        <div className="font-medium text-slate-600">数据来源（截至{event.dataAsOf}）</div>
        <ul className="mt-2 space-y-1">
          {event.sources.map((s) => (
            <li key={s.url}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-track-600 hover:text-track-700 hover:underline"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs leading-relaxed text-slate-400">
          纪录演进数据对照世界田联（World Athletics）官方纪录与 Alltime-Athletics 历史总榜逐条核对；赛事与地点名为中文译写。被取消的纪录（兴奋剂追回等）以「已被取消」标记保留为史实。如发现错漏，欢迎对照来源指出。
        </p>
      </section>

      {/* 上一项 / 下一项 */}
      <nav className="mt-10 flex items-center justify-between gap-4 border-t border-track-100 pt-6 text-sm">
        <Link
          href={`/events/${prev.slug}/`}
          className="text-slate-500 hover:text-track-700"
        >
          ← {prev.name}
        </Link>
        <Link
          href={`/events/${next.slug}/`}
          className="text-slate-500 hover:text-track-700"
        >
          {next.name} →
        </Link>
      </nav>
    </div>
  );
}
