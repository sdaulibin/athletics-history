import type { ChampionEntry } from "@/lib/types";

/**
 * 女子跳高 · 历届大赛冠军
 * 奥运会、世界锦标赛、亚运会三大系列；逐届成绩来自数据核对面（见项目页来源）。
 */
export const womensHighJumpChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "雅罗斯拉娃·马胡奇克", country: "UKR", mark: "2.00" },
  { series: "olympics", year: 2020, city: "东京", champion: "玛丽亚·拉西茨基内", country: "ROC", mark: "2.04" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "鲁斯·贝蒂亚", country: "ESP", mark: "1.97" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "安娜·奇切罗娃", country: "RUS", mark: "2.05" },
  { series: "olympics", year: 2008, city: "北京", champion: "蒂娅·海勒鲍特", country: "BEL", mark: "2.05" },
  { series: "olympics", year: 2004, city: "雅典", champion: "叶莲娜·斯列萨连科", country: "RUS", mark: "2.06", or: true },
  { series: "olympics", year: 2000, city: "悉尼", champion: "叶莲娜·叶列西娜", country: "RUS", mark: "2.01" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "斯特夫卡·科斯塔迪诺娃", country: "BUL", mark: "2.05", or: true },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "海克·亨克尔", country: "GER", mark: "2.02" },
  { series: "olympics", year: 1988, city: "汉城", champion: "路易丝·里特", country: "USA", mark: "2.01", or: true },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "乌尔丽克·迈法特", country: "FRG", mark: "2.02", or: true },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "萨拉·西梅奥尼", country: "ITA", mark: "1.97", or: true },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "罗泽玛丽·阿克曼", country: "GDR", mark: "1.93", or: true },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "乌尔丽克·迈法特", country: "FRG", mark: "1.92" },
  { series: "olympics", year: 1968, city: "墨西哥城", champion: "米洛斯拉娃·雷兹科娃", country: "TCH", mark: "1.82" },
  { series: "olympics", year: 1964, city: "东京", champion: "约兰达·巴拉斯", country: "ROU", mark: "1.90", or: true },
  { series: "olympics", year: 1960, city: "罗马", champion: "约兰达·巴拉斯", country: "ROU", mark: "1.85", or: true },
  { series: "olympics", year: 1956, city: "墨尔本", champion: "米莉·麦克丹尼尔", country: "USA", mark: "1.76", wr: true },
  { series: "olympics", year: 1952, city: "赫尔辛基", champion: "埃斯特·布兰德", country: "RSA", mark: "1.67" },
  { series: "olympics", year: 1948, city: "伦敦", champion: "艾丽丝·科奇曼", country: "USA", mark: "1.68", or: true },
  { series: "olympics", year: 1936, city: "柏林", champion: "伊博利亚·恰克", country: "HUN", mark: "1.60" },
  { series: "olympics", year: 1932, city: "洛杉矶", champion: "珍·夏伊莉", country: "USA", mark: "1.65", wr: true },
  { series: "olympics", year: 1928, city: "阿姆斯特丹", champion: "埃塞尔·卡瑟伍德", country: "CAN", mark: "1.59", wr: true },

  // —— 世界锦标赛 ——
  { series: "worlds", year: 2025, city: "东京", champion: "尼古拉·奥利斯拉格斯", country: "AUS", mark: "2.00" },
  { series: "worlds", year: 2023, city: "布达佩斯", champion: "雅罗斯拉娃·马胡奇克", country: "UKR", mark: "2.01" },
  { series: "worlds", year: 2022, city: "尤金", champion: "埃莉诺·帕特森", country: "AUS", mark: "2.02" },
  { series: "worlds", year: 2019, city: "多哈", champion: "玛丽亚·拉西茨基内", country: "RUS", mark: "2.04" },
  { series: "worlds", year: 2017, city: "伦敦", champion: "玛丽亚·拉西茨基内", country: "RUS", mark: "2.03" },
  { series: "worlds", year: 2015, city: "北京", champion: "玛丽亚·拉西茨基内", country: "RUS", mark: "2.01" },
  { series: "worlds", year: 2013, city: "莫斯科", champion: "斯韦特兰娜·什科琳娜", country: "RUS", mark: "2.03" },
  { series: "worlds", year: 2011, city: "大邱", champion: "安娜·奇切罗娃", country: "RUS", mark: "2.03" },
  { series: "worlds", year: 2009, city: "柏林", champion: "布兰卡·弗拉希奇", country: "CRO", mark: "2.04" },
  { series: "worlds", year: 2007, city: "大阪", champion: "布兰卡·弗拉希奇", country: "CRO", mark: "2.03" },
  { series: "worlds", year: 2005, city: "赫尔辛基", champion: "卡伊萨·贝里奎斯特", country: "SWE", mark: "2.02" },
  { series: "worlds", year: 2003, city: "巴黎", champion: "赫斯特丽·克卢特", country: "RSA", mark: "2.06" },
  { series: "worlds", year: 2001, city: "埃德蒙顿", champion: "赫斯特丽·克卢特", country: "RSA", mark: "2.00" },
  { series: "worlds", year: 1999, city: "塞维利亚", champion: "因加·巴巴科娃", country: "UKR", mark: "1.99" },
  { series: "worlds", year: 1997, city: "雅典", champion: "汉娜·豪格兰", country: "NOR", mark: "1.96" },
  { series: "worlds", year: 1995, city: "哥德堡", champion: "斯特夫卡·科斯塔迪诺娃", country: "BUL", mark: "2.01" },
  { series: "worlds", year: 1993, city: "斯图加特", champion: "约阿姆内特·金特罗", country: "CUB", mark: "1.99" },
  { series: "worlds", year: 1991, city: "东京", champion: "海克·亨克尔", country: "GER", mark: "2.05" },
  { series: "worlds", year: 1987, city: "罗马", champion: "斯特夫卡·科斯塔迪诺娃", country: "BUL", mark: "2.09" },
  { series: "worlds", year: 1983, city: "赫尔辛基", champion: "塔玛拉·贝科娃", country: "URS", mark: "2.01" },

  // —— 亚运会（1998 起） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "巴诺洪·赛富拉耶娃", country: "UZB", mark: "1.90" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "萨菲娜·萨杜拉耶娃", country: "UZB", mark: "1.86" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "斯韦特兰娜·拉齐维尔", country: "UZB", mark: "1.96", note: "赛会纪录" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "斯韦特兰娜·拉齐维尔", country: "UZB", mark: "1.94" },
  { series: "asiangames", year: 2010, city: "广州", champion: "斯韦特兰娜·拉齐维尔", country: "UZB", mark: "1.95", note: "赛会纪录" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "玛丽娜·艾托娃", country: "KAZ", mark: "1.93" },
  { series: "asiangames", year: 2002, city: "釜山", champion: "塔季扬娜·叶菲缅科", country: "KGZ", mark: "1.90" },
  { series: "asiangames", year: 1998, city: "曼谷", champion: "太田阳子", country: "JPN", mark: "1.88" },
];
