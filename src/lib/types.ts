/**
 * 田径史数据模型
 *
 * 每个田径项目（AthleticsEvent）对应 src/data/events/ 下的一个文件，
 * progression 按时间顺序收录该项目的（室外）世界纪录演进。
 * 田径数据的三条特殊纪律：
 *  1. 成绩分三类：径赛时间 / 田赛距离（含高度）/ 全能分数；
 *  2. 短跑与部分田赛成绩带风速，顺风超过 +2.0 m/s 不计为纪录；
 *  3. 历史上存在因兴奋剂被取消的纪录（ratified: false），保留原条目以存史实。
 */

export type EventGroup =
  | "track" // 径赛
  | "field" // 田赛
  | "combined" // 全能
  | "relay"; // 接力

/** 成绩类型 */
export type MarkKind =
  | "time" // 时间（径赛 / 接力）
  | "distance" // 距离或高度（米，田赛）
  | "points"; // 分数（全能）

export type Venue = "outdoor" | "indoor";

export type Gender = "men" | "women";

/** 纪录附加标记 */
export type RecordFlag =
  | "h" // 预赛 / 资格赛
  | "sf" // 半决赛
  | "eq" // 平当时纪录
  | "r"; // 接力第一棒

export interface RecordEntry {
  /** 成绩原文：时间 "9.58"、"1:42.09"；距离 "2.45"、"98.48"；分数 "9126" */
  mark: string;
  holder: string;
  /** 国家/地区代码（IOC） */
  country: string;
  /** 日期，ISO 格式 yyyy-mm-dd；个别无法核实到日的可只写 yyyy 或 yyyy-mm */
  date: string;
  meet?: string;
  place?: string;
  /** 风速（m/s，如 "+0.9"）；缺省表示不适用或未能核实 */
  wind?: string;
  flags?: RecordFlag[];
  /** 是否被世界田联承认；缺省为 true。被取消的纪录保留为史实条目 */
  ratified?: boolean;
  note?: string;
}

export interface HistorySection {
  heading: string;
  paragraphs: string[];
}

/** 大赛系列 */
export type MeetSeries =
  | "olympics" // 奥运会
  | "worlds" // 世界锦标赛（室外）
  | "worldsIndoor" // 世界室内锦标赛
  | "asiangames"; // 亚运会

/** 一届大赛的冠军成绩 */
export interface ChampionEntry {
  series: MeetSeries;
  year: number;
  city?: string;
  champion: string;
  country: string;
  mark?: string;
  wind?: string;
  wr?: boolean;
  /** 奥运纪录 */
  or?: boolean;
  note?: string;
}

export interface SourceLink {
  label: string;
  url: string;
}

/** 区域级纪录（亚洲纪录 / 中国纪录等） */
export interface SecondaryRecord {
  mark: string;
  holder: string;
  country: string;
  date?: string;
  meet?: string;
  place?: string;
  wind?: string;
  wr?: boolean;
  note?: string;
}

/** 历史最好成绩榜条目（前 N 名，成绩升序） */
export interface TopPerformance {
  mark: string;
  holder: string;
  country: string;
  date?: string;
  meet?: string;
  place?: string;
  wind?: string;
  flags?: RecordFlag[];
  wr?: boolean;
  note?: string;
}

export interface AthleticsEvent {
  /** URL 路径标识，如 mens-100m */
  slug: string;
  group: EventGroup;
  markKind: MarkKind;
  gender: Gender;
  /** 目前只收录室外 */
  venue: "outdoor";
  /** 项目中文名，如 "男子 100 米" */
  name: string;
  summary: string;
  dataAsOf: string;
  /** 世界纪录演进，按时间升序 */
  progression: RecordEntry[];
  champions?: ChampionEntry[];
  asianRecord?: SecondaryRecord;
  chineseRecord?: SecondaryRecord;
  topList?: TopPerformance[];
  /** 榜单标题，如 "前五十"；并列同成绩全部收录 */
  topListTitle?: string;
  topListNote?: string;
  history: HistorySection[];
  sources: SourceLink[];
}
