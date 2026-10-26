import type { ChampionEntry } from "@/lib/types";

/**
 * 男子铁饼 · 历届大赛冠军
 * 空缺说明（宁缺毋滥，未能核实的届次暂缺）：
 *  - 奥运会：1968 起收录历届冠军；1972/1976/1984/1992/2016 各届夺冠成绩
 *    与 1980 年冠军身份未能双源核实者，条目内注明；
 *  - 世锦赛：1983–2025 全部 20 届已核；
 *  - 亚运会：1998–2026 全八届已核；1994 及以前暂缺。
 */
export const mensDiscusThrowChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "罗耶·斯托纳", country: "JAM", mark: "70.00", note: "阿莱克纳69.97银——0.03米之差；牙买加该项目首金" },
  { series: "olympics", year: 2020, city: "东京", champion: "丹尼尔·斯托尔", country: "SWE", mark: "68.90", note: "赛事于2021年举行；瑞典包揽前二（彼得森67.39银）、魏斯海丁格67.07铜" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "克里斯托夫·哈廷", country: "GER", mark: "68.37", note: "兄长罗伯特·哈廷是2012年冠军；兄弟两届" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "罗伯特·哈廷", country: "GER", mark: "68.27" },
  { series: "olympics", year: 2008, city: "北京", champion: "格德·坎特", country: "EST", mark: "68.82" },
  { series: "olympics", year: 2004, city: "雅典", champion: "维尔吉利尤斯·阿莱克纳", country: "LTU", mark: "69.89", note: "卫冕；米科拉斯之父" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "维尔吉利尤斯·阿莱克纳", country: "LTU", mark: "68.30" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "拉尔斯·里德尔", country: "GER", mark: "69.40", note: "四届世锦赛冠军（1991–1997）之外的第一枚奥运金牌" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "罗马斯·乌巴尔塔斯", country: "LTU", mark: "65.12", note: "立陶宛独立后首枚田径奥运金牌" },
  { series: "olympics", year: 1988, city: "汉城", champion: "于尔根·舒尔特", country: "GDR", mark: "68.82", note: "两年前他投出74.08的世界纪录" },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "罗尔夫·丹内贝格", country: "FRG", mark: "66.60", note: "东方集团抵制之年" },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "维克托·拉什丘普金", country: "URS", note: "夺冠成绩未能核实，暂缺" },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "麦克·威尔金斯", country: "USA", mark: "67.50", note: "同年5月两破世界纪录" },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "路德维克·达内克", country: "TCH", mark: "64.40", note: "1964年银牌、1968年铜牌之后终于登顶" },
  { series: "olympics", year: 1968, city: "墨西哥城", champion: "阿尔·奥尔特", country: "USA", mark: "64.78", note: "奥运四连冠（1956–1968）的最后一枚；带伤出战" },

  // —— 世界锦标赛（1983–2025 全 20 届） ——
  { series: "worlds", year: 2025, city: "东京", champion: "丹尼尔·斯托尔", country: "SWE", mark: "70.47", note: "第三枚世锦赛金牌（2019/2023/2025）；阿莱克纳67.84银、萨摩亚的罗斯66.96铜" },
  { series: "worlds", year: 2023, city: "布达佩斯", champion: "丹尼尔·斯托尔", country: "SWE", mark: "71.46", note: "锦标赛纪录；切赫70.02银" },
  { series: "worlds", year: 2022, city: "尤金", champion: "克里斯蒂安·切赫", country: "SLO", mark: "71.13", note: "锦标赛纪录；阿莱克纳69.27银、古德丘斯67.55铜" },
  { series: "worlds", year: 2019, city: "多哈", champion: "丹尼尔·斯托尔", country: "SWE", mark: "67.59", note: "达克雷斯66.94银、魏斯海丁格66.82铜" },
  { series: "worlds", year: 2017, city: "伦敦", champion: "安德里乌斯·古德丘斯", country: "LTU", mark: "69.21", note: "0.02米险胜斯托尔（69.19）" },
  { series: "worlds", year: 2015, city: "北京", champion: "彼得·马瓦霍夫斯基", country: "POL", mark: "67.40", note: "第二金（2009年之后）" },
  { series: "worlds", year: 2013, city: "莫斯科", champion: "罗伯特·哈廷", country: "GER", mark: "69.11", note: "四连冠（2009–2013）" },
  { series: "worlds", year: 2011, city: "大邱", champion: "罗伯特·哈廷", country: "GER", mark: "68.97", note: "亚洲纪录保持者哈达迪66.08铜" },
  { series: "worlds", year: 2009, city: "柏林", champion: "罗伯特·哈廷", country: "GER", mark: "69.43" },
  { series: "worlds", year: 2007, city: "大阪", champion: "格德·坎特", country: "EST", mark: "68.94" },
  { series: "worlds", year: 2005, city: "赫尔辛基", champion: "维尔吉利尤斯·阿莱克纳", country: "LTU", mark: "70.17", note: "锦标赛纪录；两连冠（2003/2005）" },
  { series: "worlds", year: 2003, city: "巴黎", champion: "维尔吉利尤斯·阿莱克纳", country: "LTU", mark: "69.30" },
  { series: "worlds", year: 2001, city: "埃德蒙顿", champion: "拉尔斯·里德尔", country: "GER", mark: "69.72", note: "第四枚世锦赛金牌（1991–2001）；锦标赛纪录" },
  { series: "worlds", year: 1999, city: "塞维利亚", champion: "安东尼·华盛顿", country: "USA", mark: "69.08", note: "舒尔特68.18银、里德尔68.09铜——三代同台" },
  { series: "worlds", year: 1997, city: "雅典", champion: "拉尔斯·里德尔", country: "GER", mark: "68.54", note: "老阿莱克纳66.70银、舒尔特66.14铜" },
  { series: "worlds", year: 1995, city: "哥德堡", champion: "拉尔斯·里德尔", country: "GER", mark: "68.76", note: "锦标赛纪录" },
  { series: "worlds", year: 1993, city: "斯图加特", champion: "拉尔斯·里德尔", country: "GER", mark: "67.72" },
  { series: "worlds", year: 1991, city: "东京", champion: "拉尔斯·里德尔", country: "GER", mark: "66.20" },
  { series: "worlds", year: 1987, city: "罗马", champion: "于尔根·舒尔特", country: "GDR", mark: "68.74", note: "世界纪录保持者的世界冠军" },
  { series: "worlds", year: 1983, city: "赫尔辛基", champion: "伊姆里赫·布加尔", country: "TCH", mark: "67.72", note: "首届世锦赛；古巴的德利斯67.36银" },

  // —— 亚运会（1998–2026 全八届） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "阿卜杜艾尼·图尔衮", country: "CHN", mark: "64.26", note: "中国包揽前二（吴南军61.58银）；伊朗的萨米米60.32铜（PB）" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "侯赛因·拉苏利", country: "IRI", mark: "62.04", note: "赛事于2023年举行；哈达迪61.82银——他的最后一届亚运；图尔衮61.19铜" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "埃赫桑·哈达迪", country: "IRI", mark: "65.71", note: "四连冠（2006–2018）；伊拉克的卡迪姆60.09银" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "埃赫桑·哈达迪", country: "IRI", mark: "65.11", note: "三连冠；印度的高达62.58银" },
  { series: "asiangames", year: 2010, city: "广州", champion: "埃赫桑·哈达迪", country: "IRI", mark: "67.99", note: "赛会纪录，保持至今；队友萨米米63.46银——伊朗包揽前二" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "埃赫桑·哈达迪", country: "IRI", mark: "63.79", note: "首金；卡塔尔的杜萨里62.11银" },
  { series: "asiangames", year: 2002, city: "釜山", champion: "吴涛", country: "CHN", mark: "60.76", note: "中国选手；伊朗的阿巴斯·萨米米60.44银、印度的阿尼尔·库马尔59.81铜" },
  { series: "asiangames", year: 1998, city: "曼谷", champion: "李少杰", country: "CHN", mark: "64.58", note: "赛会纪录；全国纪录保持者（65.16）；印度的阿尼尔·库马尔58.43银" },
];
