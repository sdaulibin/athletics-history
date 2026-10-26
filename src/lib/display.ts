import { enNames, zhNames } from "@/data/names";
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
  majors: { zh: "六大满贯", color: "bg-sky-100 text-sky-700" },
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
  EUN: { zh: "独联体", flag: null },
  PHI: { zh: "菲律宾", flag: "🇵🇭" },
  GDR: { zh: "民主德国", flag: null },
  FRG: { zh: "联邦德国", flag: null },
  RUS: { zh: "俄罗斯", flag: "🇷🇺" },
  KEN: { zh: "肯尼亚", flag: "🇰🇪" },
  ETH: { zh: "埃塞俄比亚", flag: "🇪🇹" },
  CUB: { zh: "古巴", flag: "🇨🇺" },
  BRA: { zh: "巴西", flag: "🇧🇷" },
  NED: { zh: "荷兰", flag: "🇳🇱" },
  BEL: { zh: "比利时", flag: "🇧🇪" },
  NAM: { zh: "纳米比亚", flag: "🇳🇦" },
  ZAF: { zh: "南非", flag: "🇿🇦" },
  ARM: { zh: "亚美尼亚", flag: "🇦🇲" },
  BUR: { zh: "布基纳法索", flag: "🇧🇫" },
  CMR: { zh: "喀麦隆", flag: "🇨🇲" },
  COL: { zh: "哥伦比亚", flag: "🇨🇴" },
  CRO: { zh: "克罗地亚", flag: "🇭🇷" },
  DMA: { zh: "多米尼克", flag: "🇩🇲" },
  ERI: { zh: "厄立特里亚", flag: "🇪🇷" },
  GEO: { zh: "格鲁吉亚", flag: "🇬🇪" },
  KGZ: { zh: "吉尔吉斯斯坦", flag: "🇰🇬" },
  LTU: { zh: "立陶宛", flag: "🇱🇹" },
  PAN: { zh: "巴拿马", flag: "🇵🇦" },
  ROC: { zh: "俄罗斯奥委会", flag: null },
  SRB: { zh: "塞尔维亚", flag: "🇷🇸" },
  TUN: { zh: "突尼斯", flag: "🇹🇳" },
  VEN: { zh: "委内瑞拉", flag: "🇻🇪" },

  NGR: { zh: "尼日利亚", flag: "🇳🇬" },
  CIV: { zh: "科特迪瓦", flag: "🇨🇮" },
  POR: { zh: "葡萄牙", flag: "🇵🇹" },
  ESP: { zh: "西班牙", flag: "🇪🇸" },
  POL: { zh: "波兰", flag: "🇵🇱" },
  HUN: { zh: "匈牙利", flag: "🇭🇺" },
  SWE: { zh: "瑞典", flag: "🇸🇪" },
  FIN: { zh: "芬兰", flag: "🇫🇮" },
  MAR: { zh: "摩洛哥", flag: "🇲🇦" },
  SOM: { zh: "索马里", flag: "🇸🇴" },
  LUX: { zh: "卢森堡", flag: "🇱🇺" },
  TAN: { zh: "坦桑尼亚", flag: "🇹🇿" },
  NZL: { zh: "新西兰", flag: "🇳🇿" },
  GRE: { zh: "希腊", flag: "🇬🇷" },
  BLR: { zh: "白俄罗斯", flag: "🇧🇾" },
  UKR: { zh: "乌克兰", flag: "🇺🇦" },
  BRN: { zh: "巴林", flag: "🇧🇭" },
  LCA: { zh: "圣卢西亚", flag: "🇱🇨" },
  IVB: { zh: "英属维尔京群岛", flag: "🇻🇬" },
  BAH: { zh: "巴哈马", flag: "🇧🇸" },
  BOT: { zh: "博茨瓦纳", flag: "🇧🇼" },
  CAY: { zh: "开曼群岛", flag: "🇰🇾" },
  DOM: { zh: "多米尼加", flag: "🇩🇴" },
  GRN: { zh: "格林纳达", flag: "🇬🇩" },
  IND: { zh: "印度", flag: "🇮🇳" },
  KAZ: { zh: "哈萨克斯坦", flag: "🇰🇿" },
  KUW: { zh: "科威特", flag: "🇰🇼" },
  MEX: { zh: "墨西哥", flag: "🇲🇽" },
  RSA: { zh: "南非", flag: "🇿🇦" },
  SEN: { zh: "塞内加尔", flag: "🇸🇳" },
  SGP: { zh: "新加坡", flag: "🇸🇬" },
  SRI: { zh: "斯里兰卡", flag: "🇱🇰" },
  TCH: { zh: "捷克斯洛伐克", flag: null },
  TTO: { zh: "特立尼达和多巴哥", flag: "🇹🇹" },
  TUR: { zh: "土耳其", flag: "🇹🇷" },
  UZB: { zh: "乌兹别克斯坦", flag: "🇺🇿" },
  ZAM: { zh: "赞比亚", flag: "🇿🇲" },
  ALG: { zh: "阿尔及利亚", flag: "🇩🇿" },
  BDI: { zh: "布隆迪", flag: "🇧🇮" },
  BUL: { zh: "保加利亚", flag: "🇧🇬" },
  CZE: { zh: "捷克", flag: "🇨🇿" },
  DEN: { zh: "丹麦", flag: "🇩🇰" },
  IRI: { zh: "伊朗", flag: "🇮🇷" },
  IRL: { zh: "爱尔兰", flag: "🇮🇪" },
  IRQ: { zh: "伊拉克", flag: "🇮🇶" },
  KOR: { zh: "韩国", flag: "🇰🇷" },
  MOZ: { zh: "莫桑比克", flag: "🇲🇿" },
  NOR: { zh: "挪威", flag: "🇳🇴" },
  ROU: { zh: "罗马尼亚", flag: "🇷🇴" },
  SLO: { zh: "斯洛文尼亚", flag: "🇸🇮" },
  SUD: { zh: "苏丹", flag: "🇸🇩" },
  SUI: { zh: "瑞士", flag: "🇨🇭" },
  UGA: { zh: "乌干达", flag: "🇺🇬" },
  ARE: { zh: "阿联酋", flag: "🇦🇪" },
  BAR: { zh: "巴巴多斯", flag: "🇧🇧" },
  PUR: { zh: "波多黎各", flag: "🇵🇷" },
  SVK: { zh: "斯洛伐克", flag: "🇸🇰" },
  VIE: { zh: "越南", flag: "🇻🇳" },
  EST: { zh: "爱沙尼亚", flag: "🇪🇪" },
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

/** 运动员拉丁字母原名（运动员列小字显示；未收录时返回 null 不显示） */
export function holderEn(holder: string): string | null {
  return enNames[holder] ?? null;
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
