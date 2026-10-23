import type { ChampionEntry } from "@/lib/types";

/**
 * 女子 10000 米 · 历届大赛冠军
 * 奥运会、世界锦标赛、亚运会三大系列；逐届成绩来自数据核对面（见项目页来源）。
 */
export const womens10000mChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "比阿特丽斯·切贝特", country: "KEN", mark: "30:43.25" },
  { series: "olympics", year: 2020, city: "东京", champion: "西凡·哈桑", country: "NED", mark: "29:55.32" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "阿尔马兹·阿雅娜", country: "ETH", mark: "29:17.45", wr: true },
  { series: "olympics", year: 2012, city: "伦敦", champion: "蒂鲁内什·迪巴巴", country: "ETH", mark: "30:20.75" },
  { series: "olympics", year: 2008, city: "北京", champion: "蒂鲁内什·迪巴巴", country: "ETH", mark: "29:54.66", or: true },
  { series: "olympics", year: 2004, city: "雅典", champion: "邢慧娜", country: "CHN", mark: "30:24.36" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "德拉尔图·图卢", country: "ETH", mark: "30:17.49", or: true },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "费尔南达·里贝罗", country: "POR", mark: "31:01.63", or: true },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "德拉尔图·图卢", country: "ETH", mark: "31:06.02" },
  { series: "olympics", year: 1988, city: "汉城", champion: "奥尔加·邦达连科", country: "URS", mark: "31:05.21", or: true },

  // —— 世界锦标赛 ——
  { series: "worlds", year: 2025, city: "东京", champion: "比阿特丽斯·切贝特", country: "KEN", mark: "30:37.61" },
  { series: "worlds", year: 2023, city: "布达佩斯", champion: "古达夫·特斯盖", country: "ETH", mark: "31:27.18" },
  { series: "worlds", year: 2022, city: "尤金", champion: "莱特森贝特·吉迪", country: "ETH", mark: "30:09.94" },
  { series: "worlds", year: 2019, city: "多哈", champion: "西凡·哈桑", country: "NED", mark: "30:17.62" },
  { series: "worlds", year: 2017, city: "伦敦", champion: "阿尔马兹·阿雅娜", country: "ETH", mark: "30:16.32" },
  { series: "worlds", year: 2015, city: "北京", champion: "薇薇安·切鲁伊约特", country: "KEN", mark: "31:41.31" },
  { series: "worlds", year: 2013, city: "莫斯科", champion: "蒂鲁内什·迪巴巴", country: "ETH", mark: "30:43.35" },
  { series: "worlds", year: 2011, city: "大邱", champion: "薇薇安·切鲁伊约特", country: "KEN", mark: "30:48.98" },
  { series: "worlds", year: 2009, city: "柏林", champion: "利内特·马赛", country: "KEN", mark: "30:51.24" },
  { series: "worlds", year: 2005, city: "赫尔辛基", champion: "蒂鲁内什·迪巴巴", country: "ETH", mark: "30:24.02" },
  { series: "worlds", year: 2003, city: "巴黎", champion: "贝尔哈内·阿德雷", country: "ETH", mark: "30:04.18" },
  { series: "worlds", year: 2001, city: "埃德蒙顿", champion: "德拉尔图·图卢", country: "ETH", mark: "31:48.81" },
  { series: "worlds", year: 1999, city: "塞维利亚", champion: "格特·瓦米", country: "ETH", mark: "30:24.56" },
  { series: "worlds", year: 1997, city: "雅典", champion: "萨莉·巴尔索西奥", country: "KEN", mark: "31:32.92" },
  { series: "worlds", year: 1995, city: "哥德堡", champion: "费尔南达·里贝罗", country: "POR", mark: "31:04.99" },
  { series: "worlds", year: 1993, city: "斯图加特", champion: "王军霞", country: "CHN", mark: "30:49.30" },
  { series: "worlds", year: 1991, city: "东京", champion: "莉兹·麦科尔根", country: "GBR", mark: "31:14.31" },
  { series: "worlds", year: 1987, city: "罗马", champion: "英格丽德·克里斯蒂安森", country: "NOR", mark: "31:05.85" },

  // —— 亚运会（1998 起） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "温弗雷德·亚维", country: "BRN", mark: "32:39.18" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "维奥拉·杰普丘姆巴", country: "BRN", mark: "31:43.73" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "达里娅·马斯洛娃", country: "KGZ", mark: "32:07.23" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "阿利亚·赛义德·穆罕默德", country: "UAE", mark: "31:51.86" },
  { series: "asiangames", year: 2010, city: "广州", champion: "普里贾·斯里达兰", country: "IND", mark: "31:50.47" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "福士加代子", country: "JPN", mark: "31:29.38" },
  { series: "asiangames", year: 2002, city: "釜山", champion: "孙英杰", country: "CHN", mark: "30:28.26", note: "赛会纪录" },
  { series: "asiangames", year: 1998, city: "曼谷", champion: "川上优子", country: "JPN", mark: "32:01.25" },
];
