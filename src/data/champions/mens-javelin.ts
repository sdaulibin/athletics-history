import type { ChampionEntry } from "@/lib/types";

/**
 * 男子标枪 · 历届大赛冠军
 * 奥运会、世界锦标赛、亚运会三大系列；逐届成绩来自数据核对面（见项目页来源）。
 */
export const mensJavelinChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "阿尔沙德·纳迪姆", country: "PAK", mark: "92.97" },
  { series: "olympics", year: 2020, city: "东京", champion: "尼拉杰·乔普拉", country: "IND", mark: "87.58" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "托马斯·勒勒", country: "GER", mark: "90.30" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "凯肖恩·沃尔科特", country: "TTO", mark: "84.58" },
  { series: "olympics", year: 2008, city: "北京", champion: "安德烈亚斯·托希尔德森", country: "NOR", mark: "90.57", or: true },
  { series: "olympics", year: 2004, city: "雅典", champion: "安德烈亚斯·托希尔德森", country: "NOR", mark: "86.50", or: true },
  { series: "olympics", year: 2000, city: "悉尼", champion: "扬·热莱兹尼", country: "CZE", mark: "90.17", or: true },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "扬·热莱兹尼", country: "CZE", mark: "88.16" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "扬·热莱兹尼", country: "TCH", mark: "89.66", or: true },
  { series: "olympics", year: 1988, city: "汉城", champion: "塔皮奥·科尔尤斯", country: "FIN", mark: "84.28" },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "阿尔托·海尔克宁", country: "FIN", mark: "86.76" },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "戴尼斯·库拉", country: "URS", mark: "91.20" },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "米克洛什·内梅特", country: "HUN", mark: "94.58", wr: true },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "克劳斯·沃尔弗曼", country: "FRG", mark: "90.48", or: true },
  { series: "olympics", year: 1968, city: "墨西哥城", champion: "亚尼斯·卢西斯", country: "URS", mark: "90.10", or: true },
  { series: "olympics", year: 1964, city: "东京", champion: "保利·内瓦拉", country: "FIN", mark: "82.66" },
  { series: "olympics", year: 1960, city: "罗马", champion: "维克托·齐布连科", country: "URS", mark: "84.64" },
  { series: "olympics", year: 1956, city: "墨尔本", champion: "埃吉尔·丹尼尔森", country: "NOR", mark: "85.71", or: true, wr: true },
  { series: "olympics", year: 1952, city: "赫尔辛基", champion: "赛·扬", country: "USA", mark: "73.78", or: true },
  { series: "olympics", year: 1948, city: "伦敦", champion: "塔皮奥·劳塔瓦拉", country: "FIN", mark: "69.77" },
  { series: "olympics", year: 1936, city: "柏林", champion: "格哈德·施特克", country: "GER", mark: "71.84" },
  { series: "olympics", year: 1932, city: "洛杉矶", champion: "马蒂·耶尔维宁", country: "FIN", mark: "72.71", or: true },
  { series: "olympics", year: 1928, city: "阿姆斯特丹", champion: "埃里克·伦德奎斯特", country: "SWE", mark: "66.60", or: true },
  { series: "olympics", year: 1924, city: "巴黎", champion: "约尼·米雷", country: "FIN", mark: "62.96" },
  { series: "olympics", year: 1920, city: "安特卫普", champion: "约尼·米雷", country: "FIN", mark: "65.78", or: true },
  { series: "olympics", year: 1912, city: "斯德哥尔摩", champion: "埃里克·莱明", country: "SWE", mark: "60.64", or: true },
  { series: "olympics", year: 1908, city: "伦敦", champion: "埃里克·莱明", country: "SWE", mark: "54.83", or: true },

  // —— 世界锦标赛 ——
  { series: "worlds", year: 2025, city: "东京", champion: "凯肖恩·沃尔科特", country: "TRI", mark: "88.16" },
  { series: "worlds", year: 2023, city: "布达佩斯", champion: "尼拉杰·乔普拉", country: "IND", mark: "88.17" },
  { series: "worlds", year: 2022, city: "尤金", champion: "安德森·彼得斯", country: "GRN", mark: "90.54" },
  { series: "worlds", year: 2019, city: "多哈", champion: "安德森·彼得斯", country: "", mark: "86.89" },
  { series: "worlds", year: 2017, city: "伦敦", champion: "约翰内斯·费特尔", country: "GER", mark: "89.89" },
  { series: "worlds", year: 2015, city: "北京", champion: "朱利叶斯·耶戈", country: "KEN", mark: "92.72" },
  { series: "worlds", year: 2013, city: "莫斯科", champion: "维捷斯拉夫·韦塞利", country: "CZE", mark: "87.17" },
  { series: "worlds", year: 2011, city: "大邱", champion: "马蒂亚斯·德佐尔多", country: "GER", mark: "86.27" },
  { series: "worlds", year: 2009, city: "柏林", champion: "安德烈亚斯·托希尔德森", country: "NOR", mark: "89.59" },
  { series: "worlds", year: 2007, city: "大阪", champion: "泰罗·皮特卡梅基", country: "FIN", mark: "90.33" },
  { series: "worlds", year: 2005, city: "赫尔辛基", champion: "安德鲁斯·韦尔尼克", country: "EST", mark: "87.17" },
  { series: "worlds", year: 2003, city: "巴黎", champion: "谢尔盖·马卡罗夫", country: "RUS", mark: "85.44" },
  { series: "worlds", year: 2001, city: "埃德蒙顿", champion: "扬·热莱兹尼", country: "CZE", mark: "92.80" },
  { series: "worlds", year: 1999, city: "塞维利亚", champion: "阿基·帕尔维亚宁", country: "FIN", mark: "89.52" },
  { series: "worlds", year: 1997, city: "雅典", champion: "马里乌斯·科贝特", country: "RSA", mark: "80.40" },
  { series: "worlds", year: 1995, city: "哥德堡", champion: "扬·热莱兹尼", country: "TCH", mark: "89.58" },
  { series: "worlds", year: 1993, city: "斯图加特", champion: "扬·热莱兹尼", country: "TCH", mark: "85.98" },
  { series: "worlds", year: 1991, city: "东京", champion: "基莫·金努宁", country: "FIN", mark: "90.82" },
  { series: "worlds", year: 1987, city: "罗马", champion: "塞波·雷蒂", country: "FIN", mark: "83.54" },
  { series: "worlds", year: 1983, city: "赫尔辛基", champion: "德特勒夫·米歇尔", country: "GDR", mark: "89.48" },

  // —— 亚运会（1998 起） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "鲁梅什·帕蒂拉格", country: "SRI", mark: "88.55" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "尼拉杰·乔普拉", country: "IND", mark: "88.88" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "尼拉杰·乔普拉", country: "IND", mark: "88.06" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "赵庆刚", country: "CHN", mark: "89.15" },
  { series: "asiangames", year: 2010, city: "广州", champion: "村上幸史", country: "JPN", mark: "83.15" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "朴在明", country: "KOR", mark: "79.30" },
  { series: "asiangames", year: 2002, city: "釜山", champion: "李荣祥", country: "CHN", mark: "82.21" },
  { series: "asiangames", year: 1998, city: "曼谷", champion: "谢尔盖·沃伊诺夫", country: "UZB", mark: "79.70" },
];
