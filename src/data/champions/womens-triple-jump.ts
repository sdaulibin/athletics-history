import type { ChampionEntry } from "@/lib/types";

/**
 * 女子三级跳远 · 历届大赛冠军
 * 奥运会、世界锦标赛、亚运会三大系列；逐届成绩来自数据核对面（见项目页来源）。
 */
export const womensTripleJumpChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "西娅·拉丰", country: "DMA", mark: "15.02" },
  { series: "olympics", year: 2020, city: "东京", champion: "尤利马尔·罗哈斯", country: "VEN", mark: "15.67" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "卡特琳·伊巴古恩", country: "COL", mark: "15.17" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "奥莉加·里帕科娃", country: "KAZ", mark: "14.98" },
  { series: "olympics", year: 2008, city: "北京", champion: "弗朗索瓦兹·姆班戈", country: "CMR", mark: "15.39" },
  { series: "olympics", year: 2004, city: "雅典", champion: "弗朗索瓦兹·姆班戈", country: "CMR", mark: "15.30" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "特雷扎·马里诺娃", country: "BUL", mark: "15.20" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "伊涅萨·克拉维茨", country: "UKR", mark: "15.33", or: true },

  // —— 世界锦标赛 ——
  { series: "worlds", year: 2025, city: "东京", champion: "莱亚尼斯·佩雷斯", country: "CUB", mark: "14.94" },
  { series: "worlds", year: 2023, city: "布达佩斯", champion: "尤利马尔·罗哈斯", country: "VEN", mark: "15.08" },
  { series: "worlds", year: 2022, city: "尤金", champion: "尤利马尔·罗哈斯", country: "VEN", mark: "15.47" },
  { series: "worlds", year: 2019, city: "多哈", champion: "尤利马尔·罗哈斯", country: "VEN", mark: "15.37" },
  { series: "worlds", year: 2017, city: "伦敦", champion: "尤利马尔·罗哈斯", country: "VEN", mark: "14.91" },
  { series: "worlds", year: 2015, city: "北京", champion: "卡特琳·伊巴古恩", country: "COL", mark: "14.90" },
  { series: "worlds", year: 2013, city: "莫斯科", champion: "卡特琳·伊巴古恩", country: "COL", mark: "14.85" },
  { series: "worlds", year: 2011, city: "大邱", champion: "奥莉加·萨拉杜哈", country: "UKR", mark: "14.94" },
  { series: "worlds", year: 2009, city: "柏林", champion: "亚尔赫利斯·萨维涅", country: "CUB", mark: "14.95" },
  { series: "worlds", year: 2007, city: "大阪", champion: "亚尔赫利斯·萨维涅", country: "CUB", mark: "15.28" },
  { series: "worlds", year: 2005, city: "赫尔辛基", champion: "特蕾西亚·史密斯", country: "JAM", mark: "15.11" },
  { series: "worlds", year: 2003, city: "巴黎", champion: "塔季扬娜·列别杰娃", country: "RUS", mark: "15.18" },
  { series: "worlds", year: 2001, city: "埃德蒙顿", champion: "塔季扬娜·列别杰娃", country: "RUS", mark: "15.25" },
  { series: "worlds", year: 1999, city: "塞维利亚", champion: "帕拉斯凯维·齐亚米塔", country: "GRE", mark: "14.88" },
  { series: "worlds", year: 1997, city: "雅典", champion: "萨尔卡·卡斯帕尔科娃", country: "CZE", mark: "15.20" },
  { series: "worlds", year: 1995, city: "哥德堡", champion: "伊涅萨·克拉维茨", country: "UKR", mark: "15.50" },
  { series: "worlds", year: 1993, city: "斯图加特", champion: "安娜·比留科娃", country: "RUS", mark: "15.09" },

  // —— 亚运会（1998 起） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "沙里法·达夫罗诺娃", country: "UZB", mark: "14.35" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "沙里法·达夫罗诺娃", country: "UZB", mark: "14.09" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "奥莉加·里帕科娃", country: "KAZ", mark: "14.26" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "奥莉加·里帕科娃", country: "KAZ", mark: "14.32" },
  { series: "asiangames", year: 2010, city: "广州", champion: "奥莉加·里帕科娃", country: "KAZ", mark: "14.78", note: "赛会纪录" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "谢荔梅", country: "CHN", mark: "14.37", note: "赛会纪录" },
  { series: "asiangames", year: 2002, city: "釜山", champion: "黄秋艳", country: "CHN", mark: "14.28", note: "赛会纪录" },
  { series: "asiangames", year: 1998, city: "曼谷", champion: "任瑞萍", country: "CHN", mark: "14.27", note: "赛会纪录" },
];
