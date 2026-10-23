import type { ChampionEntry } from "@/lib/types";

/**
 * 女子标枪 · 历届大赛冠军
 * 奥运会、世界锦标赛、亚运会三大系列；逐届成绩来自数据核对面（见项目页来源）。
 */
export const womensJavelinChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "北口榛花", country: "JPN", mark: "65.80" },
  { series: "olympics", year: 2020, city: "东京", champion: "刘诗颖", country: "CHN", mark: "66.34" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "萨拉·科拉克", country: "CRO", mark: "66.18" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "巴尔博拉·什波塔科娃", country: "CZE", mark: "69.55" },
  { series: "olympics", year: 2008, city: "北京", champion: "巴尔博拉·什波塔科娃", country: "CZE", mark: "71.42" },
  { series: "olympics", year: 2004, city: "雅典", champion: "奥斯莱迪斯·梅嫩德斯", country: "CUB", mark: "71.53", or: true },
  { series: "olympics", year: 2000, city: "悉尼", champion: "特琳·哈特斯塔德", country: "NOR", mark: "68.91", or: true },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "赫利·兰塔宁", country: "FIN", mark: "67.94" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "西尔克·伦克", country: "GER", mark: "68.34" },
  { series: "olympics", year: 1988, city: "汉城", champion: "佩特拉·费尔克", country: "GDR", mark: "74.68", or: true },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "特莎·桑德森", country: "GBR", mark: "69.56", or: true },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "玛丽亚·科隆", country: "CUB", mark: "68.40", or: true },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "鲁特·富克斯", country: "GDR", mark: "65.94", or: true },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "鲁特·富克斯", country: "GDR", mark: "63.88", or: true },
  { series: "olympics", year: 1968, city: "墨西哥城", champion: "安杰拉·内梅特", country: "HUN", mark: "60.36" },
  { series: "olympics", year: 1964, city: "东京", champion: "米哈埃拉·佩内什", country: "ROU", mark: "60.54" },
  { series: "olympics", year: 1960, city: "罗马", champion: "埃尔维拉·奥佐利娜", country: "URS", mark: "55.98", or: true },
  { series: "olympics", year: 1956, city: "墨尔本", champion: "伊内塞·尧恩泽梅", country: "URS", mark: "53.86", or: true },
  { series: "olympics", year: 1952, city: "赫尔辛基", champion: "达娜·扎托普科娃", country: "TCH", mark: "50.47", or: true },
  { series: "olympics", year: 1948, city: "伦敦", champion: "赫尔玛·鲍玛", country: "AUT", mark: "45.57", or: true },
  { series: "olympics", year: 1936, city: "柏林", champion: "蒂莉·弗莱舍尔", country: "GER", mark: "45.18", or: true },
  { series: "olympics", year: 1932, city: "洛杉矶", champion: "贝布·迪德里克森", country: "USA", mark: "43.69", or: true },

  // —— 世界锦标赛 ——
  { series: "worlds", year: 2025, city: "东京", champion: "尤莱西·安古洛", country: "ECU", mark: "65.12" },
  { series: "worlds", year: 2023, city: "布达佩斯", champion: "北口榛花", country: "JPN", mark: "66.73" },
  { series: "worlds", year: 2022, city: "尤金", champion: "凯尔西-李·巴伯", country: "AUS", mark: "66.91" },
  { series: "worlds", year: 2019, city: "多哈", champion: "凯尔西-李·巴伯", country: "AUS", mark: "66.56" },
  { series: "worlds", year: 2017, city: "伦敦", champion: "巴尔博拉·什波塔科娃", country: "CZE", mark: "66.76" },
  { series: "worlds", year: 2015, city: "北京", champion: "卡塔琳娜·莫利托", country: "GER", mark: "67.69" },
  { series: "worlds", year: 2013, city: "莫斯科", champion: "克里斯蒂娜·奥贝格弗尔", country: "GER", mark: "69.05" },
  { series: "worlds", year: 2011, city: "大邱", champion: "玛丽亚·阿巴库莫娃", country: "RUS", mark: "71.99" },
  { series: "worlds", year: 2009, city: "柏林", champion: "施特菲·内里乌斯", country: "GER", mark: "67.30" },
  { series: "worlds", year: 2007, city: "大阪", champion: "巴尔博拉·什波塔科娃", country: "CZE", mark: "67.07" },
  { series: "worlds", year: 2005, city: "赫尔辛基", champion: "奥斯莱迪斯·梅嫩德斯", country: "CUB", mark: "71.70" },
  { series: "worlds", year: 2003, city: "巴黎", champion: "米蕾拉·马尼亚尼", country: "GRE", mark: "66.52" },
  { series: "worlds", year: 2001, city: "埃德蒙顿", champion: "奥斯莱迪斯·梅嫩德斯", country: "CUB", mark: "69.53" },
  { series: "worlds", year: 1999, city: "塞维利亚", champion: "米蕾拉·马尼亚尼", country: "GRE", mark: "67.09" },
  { series: "worlds", year: 1997, city: "雅典", champion: "特琳·哈特斯塔德", country: "NOR", mark: "68.78" },
  { series: "worlds", year: 1995, city: "哥德堡", champion: "娜塔莉娅·希科连科", country: "BLR", mark: "67.56" },
  { series: "worlds", year: 1993, city: "斯图加特", champion: "特琳·哈特斯塔德", country: "NOR", mark: "69.18" },
  { series: "worlds", year: 1991, city: "东京", champion: "徐德妹", country: "CHN", mark: "68.78" },
  { series: "worlds", year: 1987, city: "罗马", champion: "法蒂玛·惠特布雷德", country: "GBR", mark: "76.64" },
  { series: "worlds", year: 1983, city: "赫尔辛基", champion: "蒂娜·利拉克", country: "FIN", mark: "70.82" },

  // —— 亚运会（1998 起） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "严子怡", country: "CHN", mark: "70.46", note: "赛会纪录" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "安努·拉尼", country: "IND", mark: "62.92" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "刘诗颖", country: "CHN", mark: "66.09", note: "赛会纪录" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "张莉", country: "CHN", mark: "65.47", note: "赛会纪录" },
  { series: "asiangames", year: 2010, city: "广州", champion: "海老原有希", country: "JPN", mark: "61.56", note: "赛会纪录" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "布班·帕芒", country: "THA", mark: "61.31", note: "赛会纪录" },
  { series: "asiangames", year: 2002, city: "釜山", champion: "李英善", country: "KOR", mark: "58.87", note: "赛会纪录" },
  { series: "asiangames", year: 1998, city: "曼谷", champion: "李英善", country: "KOR", mark: "62.09" },
];
