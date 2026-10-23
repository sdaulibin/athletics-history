import type { ChampionEntry } from "@/lib/types";

/**
 * 女子跳远 · 历届大赛冠军
 * 奥运会、世界锦标赛、亚运会三大系列；逐届成绩来自数据核对面（见项目页来源）。
 */
export const womensLongJumpChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "塔拉·戴维斯-伍德霍尔", country: "USA", mark: "7.10" },
  { series: "olympics", year: 2020, city: "东京", champion: "马拉伊卡·米哈姆博", country: "GER", mark: "7.00" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "蒂安娜·巴托莱塔", country: "USA", mark: "7.17" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "布里特妮·里斯", country: "USA", mark: "7.12" },
  { series: "olympics", year: 2008, city: "北京", champion: "毛伦·马吉", country: "BRA", mark: "7.04" },
  { series: "olympics", year: 2004, city: "雅典", champion: "塔季扬娜·列别杰娃", country: "RUS", mark: "7.07" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "海克·德雷克斯勒", country: "GER", mark: "6.99" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "奇奥马·阿琼瓦", country: "NGR", mark: "7.12" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "海克·德雷克斯勒", country: "GER", mark: "7.14" },
  { series: "olympics", year: 1988, city: "汉城", champion: "杰基·乔伊纳-克西", country: "USA", mark: "7.40", or: true },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "阿尼索阿拉·斯坦丘-库什米尔", country: "ROU", mark: "6.96" },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "塔季扬娜·科尔帕科娃", country: "URS", mark: "7.06", or: true },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "安格拉·福伊格特", country: "GDR", mark: "6.72" },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "海德·罗森达尔", country: "FRG", mark: "6.78", or: true },
  { series: "olympics", year: 1968, city: "墨西哥城", champion: "维奥里卡·维斯科波莱亚努", country: "ROU", mark: "6.82", wr: true },
  { series: "olympics", year: 1964, city: "东京", champion: "玛丽·兰德", country: "GBR", mark: "6.76", wr: true },
  { series: "olympics", year: 1960, city: "罗马", champion: "薇拉·克列普金娜", country: "URS", mark: "6.37", or: true },
  { series: "olympics", year: 1956, city: "墨尔本", champion: "埃尔日别塔·克热辛斯卡", country: "POL", mark: "6.35" },
  { series: "olympics", year: 1952, city: "赫尔辛基", champion: "伊薇特·威廉姆斯", country: "NZL", mark: "6.16", or: true },
  { series: "olympics", year: 1948, city: "伦敦", champion: "伊冯娜·沙博-屈尔泰", country: "FRA", mark: "5.64", or: true },

  // —— 世界锦标赛 ——
  { series: "worlds", year: 2025, city: "东京", champion: "塔拉·戴维斯-伍德霍尔", country: "USA", mark: "7.13" },
  { series: "worlds", year: 2023, city: "布达佩斯", champion: "伊万娜·什帕诺维奇", country: "SRB", mark: "7.14" },
  { series: "worlds", year: 2022, city: "尤金", champion: "马拉伊卡·米哈姆博", country: "GER", mark: "7.12" },
  { series: "worlds", year: 2019, city: "多哈", champion: "马拉伊卡·米哈姆博", country: "GER", mark: "7.30" },
  { series: "worlds", year: 2017, city: "伦敦", champion: "布里特妮·里斯", country: "USA", mark: "7.02" },
  { series: "worlds", year: 2015, city: "北京", champion: "蒂安娜·巴托莱塔", country: "USA", mark: "7.14" },
  { series: "worlds", year: 2013, city: "莫斯科", champion: "布里特妮·里斯", country: "USA", mark: "7.01" },
  { series: "worlds", year: 2011, city: "大邱", champion: "布里特妮·里斯", country: "USA", mark: "6.82" },
  { series: "worlds", year: 2009, city: "柏林", champion: "布里特妮·里斯", country: "USA", mark: "7.10" },
  { series: "worlds", year: 2007, city: "大阪", champion: "塔季扬娜·列别杰娃", country: "RUS", mark: "7.03" },
  { series: "worlds", year: 2005, city: "赫尔辛基", champion: "蒂安娜·巴托莱塔", country: "USA", mark: "6.89" },
  { series: "worlds", year: 2003, city: "巴黎", champion: "尤妮斯·巴伯", country: "FRA", mark: "6.99" },
  { series: "worlds", year: 2001, city: "埃德蒙顿", champion: "菲奥娜·梅", country: "ITA", mark: "7.02" },
  { series: "worlds", year: 1999, city: "塞维利亚", champion: "尼乌尔卡·蒙塔尔沃", country: "ESP", mark: "7.06" },
  { series: "worlds", year: 1997, city: "雅典", champion: "柳德米拉·加尔金娜", country: "RUS", mark: "7.05" },
  { series: "worlds", year: 1995, city: "哥德堡", champion: "菲奥娜·梅", country: "ITA", mark: "6.98" },
  { series: "worlds", year: 1993, city: "斯图加特", champion: "海克·德雷克斯勒", country: "GER", mark: "7.11" },
  { series: "worlds", year: 1991, city: "东京", champion: "杰基·乔伊纳-克西", country: "USA", mark: "7.32" },
  { series: "worlds", year: 1987, city: "罗马", champion: "杰基·乔伊纳-克西", country: "USA", mark: "7.36" },
  { series: "worlds", year: 1983, city: "赫尔辛基", champion: "海克·德雷克斯勒", country: "GDR", mark: "7.27" },

  // —— 亚运会（1998 起） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "黄莹莹", country: "CHN", mark: "6.55" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "熊诗麒", country: "CHN", mark: "6.73" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "裴氏秋草", country: "VIE", mark: "6.55" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "玛丽亚·纳塔利娅·隆达", country: "INA", mark: "6.55" },
  { series: "asiangames", year: 2010, city: "广州", champion: "郑顺玉", country: "KOR", mark: "6.53" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "池田久美子", country: "JPN", mark: "6.81" },
  { series: "asiangames", year: 2002, city: "釜山", champion: "安朱·博比·乔治", country: "IND", mark: "6.53" },
  { series: "asiangames", year: 1998, city: "曼谷", champion: "关英楠", country: "CHN", mark: "6.89" },
];
