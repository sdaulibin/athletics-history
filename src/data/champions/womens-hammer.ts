import type { ChampionEntry } from "@/lib/types";

/**
 * 女子链球 · 历届大赛冠军
 * 奥运会、世界锦标赛、亚运会三大系列；逐届成绩来自数据核对面（见项目页来源）。
 */
export const womensHammerChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "卡姆琳·罗杰斯", country: "CAN", mark: "76.97" },
  { series: "olympics", year: 2020, city: "东京", champion: "安妮塔·沃达尔奇克", country: "POL", mark: "78.48" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "安妮塔·沃达尔奇克", country: "POL", mark: "82.29" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "安妮塔·沃达尔奇克", country: "POL", mark: "77.60" },
  { series: "olympics", year: 2008, city: "北京", champion: "伊普西·莫雷诺", country: "CUB", mark: "75.20" },
  { series: "olympics", year: 2004, city: "雅典", champion: "奥莉加·库岑科娃", country: "RUS", mark: "75.02", or: true },
  { series: "olympics", year: 2000, city: "悉尼", champion: "卡米拉·斯科利莫夫斯卡", country: "POL", mark: "71.16", or: true },

  // —— 世界锦标赛 ——
  { series: "worlds", year: 2025, city: "东京", champion: "卡姆琳·罗杰斯", country: "CAN", mark: "80.51" },
  { series: "worlds", year: 2023, city: "布达佩斯", champion: "卡姆琳·罗杰斯", country: "CAN", mark: "77.22" },
  { series: "worlds", year: 2022, city: "尤金", champion: "布鲁克·安德森", country: "USA", mark: "78.96" },
  { series: "worlds", year: 2019, city: "多哈", champion: "迪安娜·普莱斯", country: "USA", mark: "77.54" },
  { series: "worlds", year: 2017, city: "伦敦", champion: "安妮塔·沃达尔奇克", country: "POL", mark: "77.90" },
  { series: "worlds", year: 2015, city: "北京", champion: "安妮塔·沃达尔奇克", country: "POL", mark: "80.85" },
  { series: "worlds", year: 2013, city: "莫斯科", champion: "塔季扬娜·雷森科", country: "RUS", mark: "78.80" },
  { series: "worlds", year: 2011, city: "大邱", champion: "塔季扬娜·雷森科", country: "RUS", mark: "77.13" },
  { series: "worlds", year: 2009, city: "柏林", champion: "安妮塔·沃达尔奇克", country: "POL", mark: "77.96" },
  { series: "worlds", year: 2007, city: "大阪", champion: "贝蒂·海德勒", country: "GER", mark: "74.76" },
  { series: "worlds", year: 2005, city: "赫尔辛基", champion: "奥莉加·库岑科娃", country: "RUS", mark: "75.10" },
  { series: "worlds", year: 2003, city: "巴黎", champion: "伊普西·莫雷诺", country: "CUB", mark: "73.33" },
  { series: "worlds", year: 2001, city: "埃德蒙顿", champion: "伊普西·莫雷诺", country: "CUB", mark: "70.65" },
  { series: "worlds", year: 1999, city: "塞维利亚", champion: "米哈埃拉·梅林特", country: "ROU", mark: "75.20" },

  // —— 亚运会（1998 起） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "张家乐", country: "CHN", mark: "78.27" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "王峥", country: "CHN", mark: "71.53" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "罗娜", country: "CHN", mark: "71.42" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "张文秀", country: "CHN", mark: "77.33", note: "赛会纪录" },
  { series: "asiangames", year: 2010, city: "广州", champion: "张文秀", country: "CHN", mark: "72.84" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "张文秀", country: "CHN", mark: "74.15" },
  { series: "asiangames", year: 2002, city: "釜山", champion: "顾原", country: "CHN", mark: "70.49", note: "赛会纪录" },
];
