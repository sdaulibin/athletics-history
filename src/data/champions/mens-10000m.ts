import type { ChampionEntry } from "@/lib/types";

/**
 * 男子 10000 米 · 历届大赛冠军
 * 奥运会、世界锦标赛、亚运会三大系列；逐届成绩来自数据核对面（见项目页来源）。
 */
export const mens10000mChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "约书亚·切普特盖", country: "UGA", mark: "26:43.14", or: true },
  { series: "olympics", year: 2020, city: "东京", champion: "塞莱蒙·巴雷加", country: "ETH", mark: "27:43.22" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "莫·法拉", country: "GBR", mark: "27:05.17" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "莫·法拉", country: "GBR", mark: "27:30.42" },
  { series: "olympics", year: 2008, city: "北京", champion: "肯尼萨·贝克勒", country: "ETH", mark: "27:01.17", or: true },
  { series: "olympics", year: 2004, city: "雅典", champion: "肯尼萨·贝克勒", country: "ETH", mark: "27:05.10", or: true },
  { series: "olympics", year: 2000, city: "悉尼", champion: "海尔·格布雷西拉西耶", country: "ETH", mark: "27:18.20" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "海尔·格布雷西拉西耶", country: "ETH", mark: "27:07.34", or: true },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "哈立德·斯卡", country: "MAR", mark: "27:46.70" },
  { series: "olympics", year: 1988, city: "汉城", champion: "卜拉欣·布塔耶卜", country: "MAR", mark: "27:21.46", or: true },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "阿尔贝托·科瓦", country: "ITA", mark: "27:47.54" },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "米鲁茨·伊夫特", country: "ETH", mark: "27:42.7" },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "拉塞·维伦", country: "FIN", mark: "27:40.38" },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "拉塞·维伦", country: "FIN", mark: "27:38.35", wr: true },
  { series: "olympics", year: 1968, city: "墨西哥城", champion: "纳夫塔利·特穆", country: "KEN", mark: "29:27.40" },
  { series: "olympics", year: 1964, city: "东京", champion: "比利·米尔斯", country: "USA", mark: "28:24.4", or: true },
  { series: "olympics", year: 1960, city: "罗马", champion: "彼得·博洛特尼科夫", country: "URS", mark: "28:32.18", or: true },
  { series: "olympics", year: 1956, city: "墨尔本", champion: "弗拉基米尔·库茨", country: "URS", mark: "28:45.59", or: true },
  { series: "olympics", year: 1952, city: "赫尔辛基", champion: "埃米尔·扎托佩克", country: "TCH", mark: "29:17.0", or: true },
  { series: "olympics", year: 1948, city: "伦敦", champion: "埃米尔·扎托佩克", country: "TCH", mark: "29:59.8", or: true },
  { series: "olympics", year: 1936, city: "柏林", champion: "伊尔马里·萨尔米宁", country: "FIN", mark: "30:15.4" },
  { series: "olympics", year: 1932, city: "洛杉矶", champion: "亚努什·库索钦斯基", country: "POL", mark: "30:11.4", or: true },
  { series: "olympics", year: 1928, city: "阿姆斯特丹", champion: "帕沃·努尔米", country: "FIN", mark: "30:18.8", or: true },
  { series: "olympics", year: 1924, city: "巴黎", champion: "维莱·里托拉", country: "FIN", mark: "30:23.2", wr: true },
  { series: "olympics", year: 1920, city: "安特卫普", champion: "帕沃·努尔米", country: "FIN", mark: "31:45.8" },
  { series: "olympics", year: 1912, city: "斯德哥尔摩", champion: "汉内斯·科莱赫迈宁", country: "FIN", mark: "31:20.8", wr: true },

  // —— 世界锦标赛 ——
  { series: "worlds", year: 2025, city: "东京", champion: "吉米·格雷西耶", country: "FRA", note: "夺冠成绩未见于本站数据源" },
  { series: "worlds", year: 2023, city: "布达佩斯", champion: "约书亚·切普特盖", country: "UGA", mark: "27:51.42" },
  { series: "worlds", year: 2022, city: "尤金", champion: "约书亚·切普特盖", country: "UGA", mark: "27:27.43" },
  { series: "worlds", year: 2019, city: "多哈", champion: "约书亚·切普特盖", country: "UGA", mark: "26:48.36" },
  { series: "worlds", year: 2017, city: "伦敦", champion: "莫·法拉", country: "GBR", mark: "26:49.51" },
  { series: "worlds", year: 2015, city: "北京", champion: "莫·法拉", country: "GBR", mark: "27:01.13" },
  { series: "worlds", year: 2013, city: "莫斯科", champion: "莫·法拉", country: "GBR", mark: "27:21.71" },
  { series: "worlds", year: 2011, city: "大邱", champion: "易卜拉欣·杰兰", country: "ETH", mark: "27:13.81" },
  { series: "worlds", year: 2009, city: "柏林", champion: "肯尼萨·贝克勒", country: "ETH", mark: "26:46.31" },
  { series: "worlds", year: 2007, city: "大阪", champion: "肯尼萨·贝克勒", country: "ETH", mark: "27:05.90" },
  { series: "worlds", year: 2005, city: "赫尔辛基", champion: "肯尼萨·贝克勒", country: "ETH", mark: "27:08.33" },
  { series: "worlds", year: 2003, city: "巴黎", champion: "肯尼萨·贝克勒", country: "ETH", mark: "26:49.57" },
  { series: "worlds", year: 2001, city: "埃德蒙顿", champion: "查尔斯·卡马蒂", country: "KEN", mark: "27:53.25" },
  { series: "worlds", year: 1999, city: "塞维利亚", champion: "海尔·格布雷西拉西耶", country: "ETH", mark: "27:57.27" },
  { series: "worlds", year: 1997, city: "雅典", champion: "海尔·格布雷西拉西耶", country: "ETH", mark: "27:24.58" },
  { series: "worlds", year: 1995, city: "哥德堡", champion: "海尔·格布雷西拉西耶", country: "ETH", mark: "27:12.95" },
  { series: "worlds", year: 1993, city: "斯图加特", champion: "海尔·格布雷西拉西耶", country: "ETH", mark: "27:46.02" },
  { series: "worlds", year: 1991, city: "东京", champion: "摩西·塔努伊", country: "KEN", mark: "27:38.74" },
  { series: "worlds", year: 1987, city: "罗马", champion: "保罗·基普科赫", country: "KEN", mark: "27:38.63" },
  { series: "worlds", year: 1983, city: "赫尔辛基", champion: "阿尔贝托·科瓦", country: "ITA", mark: "28:01.04" },

  // —— 亚运会（1998 起） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "比尔哈努·巴莱乌", country: "BRN", mark: "28:27.51" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "比尔哈努·巴莱乌", country: "BRN", mark: "28:13.62" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "亚伯拉罕·切罗本", country: "BRN", mark: "29:00.29" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "埃尔-哈桑·阿巴西", country: "BRN", mark: "28:11.20" },
  { series: "asiangames", year: 2010, city: "广州", champion: "比利苏马·舒吉", country: "BRN", mark: "27:32.72", note: "赛会纪录" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "哈桑·马赫布卜", country: "BRN", mark: "27:58.88", note: "赛会纪录" },
  { series: "asiangames", year: 2002, city: "釜山", champion: "穆赫利德·奥泰比", country: "KSA", mark: "28:41.89" },
  { series: "asiangames", year: 1998, city: "曼谷", champion: "高尾宪司", country: "JPN", mark: "28:45.66" },
];
