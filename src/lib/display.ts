import { zhNames } from "@/data/names";
import type { MeetSeries, RecordFlag } from "@/lib/types";

/** 大赛系列元信息 */
export const SERIES_META: Record<
  MeetSeries,
  { zh: string; color: string }
> = {
  olympics: { zh: "奥运会", color: "bg-amber-100 text-amber-700" },
  worlds: { zh: "世锦赛", color: "bg-track-100 text-track-700" },
  worldsIndoor: { zh: "室内世锦赛", color: "bg-violet-100 text-violet-700" },
  asiangames: { zh: "亚运会", color: "bg-rose-100 text-rose-700" },
};

/** 国家/地区：中文名 + 旗帜 emoji（历史上已消失的国家无对应 emoji） */
export const COUNTRIES: Record<string, { zh: string; flag: string | null }> = {
  USA: { zh: "美国", flag: "🇺🇸" },
  JAM: { zh: "牙买加", flag: "🇯🇲" },
  CAN: { zh: "加拿大", flag: "🇨🇦" },
  GBR: { zh: "英国", flag: "🇬🇧" },
  TRI: { zh: "特立尼达和多巴哥", flag: "🇹🇹" },
  THA: { zh: "泰国", flag: "🇹🇭" },
  CHN: { zh: "中国", flag: "🇨🇳" },
  JPN: { zh: "日本", flag: "🇯🇵" },
  QAT: { zh: "卡塔尔", flag: "🇶🇦" },
  SKN: { zh: "圣基茨和尼维斯", flag: "🇰🇳" },
  KSA: { zh: "沙特阿拉伯", flag: "🇸🇦" },
  ITA: { zh: "意大利", flag: "🇮🇹" },
  GER: { zh: "德国", flag: "🇩🇪" },
  FRA: { zh: "法国", flag: "🇫🇷" },
  AUS: { zh: "澳大利亚", flag: "🇦🇺" },
  URS: { zh: "苏联", flag: null },
  GDR: { zh: "民主德国", flag: null },
  RUS: { zh: "俄罗斯", flag: "🇷🇺" },
  KEN: { zh: "肯尼亚", flag: "🇰🇪" },
  ETH: { zh: "埃塞俄比亚", flag: "🇪🇹" },
  CUB: { zh: "古巴", flag: "🇨🇺" },
  BRA: { zh: "巴西", flag: "🇧🇷" },
  NED: { zh: "荷兰", flag: "🇳🇱" },
  BEL: { zh: "比利时", flag: "🇧🇪" },
  NAM: { zh: "纳米比亚", flag: "🇳🇦" },
  ZAF: { zh: "南非", flag: "🇿🇦" },
  NGR: { zh: "尼日利亚", flag: "🇳🇬" },
  CIV: { zh: "科特迪瓦", flag: "🇨🇮" },
  POR: { zh: "葡萄牙", flag: "🇵🇹" },
  ESP: { zh: "西班牙", flag: "🇪🇸" },
  POL: { zh: "波兰", flag: "🇵🇱" },
  HUN: { zh: "匈牙利", flag: "🇭🇺" },
  SWE: { zh: "瑞典", flag: "🇸🇪" },
  FIN: { zh: "芬兰", flag: "🇫🇮" },
  NZL: { zh: "新西兰", flag: "🇳🇿" },
  GRE: { zh: "希腊", flag: "🇬🇷" },
};

export const FLAG_ZH: Record<RecordFlag, string> = {
  h: "预赛",
  sf: "半决赛",
  eq: "平纪录",
  r: "接力第一棒",
};

export function countryOf(code: string): { zh: string; flag: string | null } {
  return COUNTRIES[code] ?? { zh: code, flag: null };
}

/** 运动员中文译名（names.ts 未收录时回退为原文） */
export function holderZh(holder: string): string {
  return zhNames[holder] ?? holder;
}

/** 成绩数值化：时间 "9.58"→9.58、"1:42.09"→102.09；距离/分数原样 parseFloat */
export function markValue(mark: string): number {
  const m = mark.match(/^(\d+):(\d+(?:\.\d+)?)$/);
  if (m) return Number(m[1]) * 60 + Number(m[2]);
  return Number.parseFloat(mark);
}

/** 时间秒数转显示格式 */
export function formatSeconds(sec: number): string {
  if (sec >= 60) {
    const m = Math.floor(sec / 60);
    const s = sec - m * 60;
    return `${m}:${s.toFixed(2).padStart(5, "0")}`;
  }
  return sec.toFixed(2);
}

/** "1961-05-02" -> "1961年5月2日" */
export function zhDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  if (!m) return `${y}年`;
  if (!d) return `${y}年${m}月`;
  return `${y}年${m}月${d}日`;
}

export function isRatified(entry: { ratified?: boolean }): boolean {
  return entry.ratified !== false;
}
