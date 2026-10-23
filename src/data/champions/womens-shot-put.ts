import type { ChampionEntry } from "@/lib/types";

/**
 * 女子铅球 · 历届大赛冠军
 * 奥运会、世界锦标赛、亚运会三大系列；逐届成绩来自数据核对面（见项目页来源）。
 */
export const womensShotPutChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "耶米西·奥贡莱耶", country: "GER", mark: "20.00" },
  { series: "olympics", year: 2020, city: "东京", champion: "巩立姣", country: "CHN", mark: "20.58" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "米歇尔·卡特", country: "USA", mark: "20.63" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "瓦莱丽·亚当斯", country: "NZL", mark: "20.70" },
  { series: "olympics", year: 2008, city: "北京", champion: "瓦莱丽·维利", country: "NZL", mark: "20.56" },
  { series: "olympics", year: 2004, city: "雅典", champion: "尤米莱迪·昆巴", country: "CUB", mark: "19.59" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "亚尼娜·卡罗尔奇克", country: "BLR", mark: "20.56" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "阿斯特丽德·孔伯努斯", country: "GER", mark: "20.56" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "斯韦特兰娜·克里维廖娃", country: "EUN", mark: "21.06" },
  { series: "olympics", year: 1988, city: "汉城", champion: "娜塔莉娅·利索夫斯卡娅", country: "URS", mark: "22.24" },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "克劳迪娅·洛施", country: "FRG", mark: "20.48" },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "伊洛娜·斯卢皮亚内克", country: "GDR", mark: "22.41", or: true },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "伊万卡·赫里斯托娃", country: "BUL", mark: "21.16", or: true },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "娜杰日达·奇若娃", country: "URS", mark: "21.03", wr: true },
  { series: "olympics", year: 1968, city: "墨西哥城", champion: "玛吉塔·古梅尔", country: "GDR", mark: "19.61", wr: true },
  { series: "olympics", year: 1964, city: "东京", champion: "塔玛拉·普雷斯", country: "URS", mark: "18.14", or: true },
  { series: "olympics", year: 1960, city: "罗马", champion: "塔玛拉·普雷斯", country: "URS", mark: "17.32", or: true },
  { series: "olympics", year: 1956, city: "墨尔本", champion: "塔玛拉·特什克维奇", country: "URS", mark: "16.59", or: true },
  { series: "olympics", year: 1952, city: "赫尔辛基", champion: "加林娜·济宾娜", country: "URS", mark: "15.28", wr: true },
  { series: "olympics", year: 1948, city: "伦敦", champion: "米舍利娜·奥斯特迈耶", country: "FRA", mark: "13.75", or: true },

  // —— 世界锦标赛 ——
  { series: "worlds", year: 2025, city: "东京", champion: "杰西卡·希尔德", country: "NED", mark: "20.29" },
  { series: "worlds", year: 2023, city: "布达佩斯", champion: "蔡斯·伊利", country: "USA", mark: "20.43" },
  { series: "worlds", year: 2022, city: "尤金", champion: "蔡斯·伊利", country: "USA", mark: "20.49" },
  { series: "worlds", year: 2019, city: "多哈", champion: "巩立姣", country: "CHN", mark: "19.55" },
  { series: "worlds", year: 2017, city: "伦敦", champion: "巩立姣", country: "CHN", mark: "19.94" },
  { series: "worlds", year: 2015, city: "北京", champion: "克里斯蒂娜·施瓦尼茨", country: "GER", mark: "20.37" },
  { series: "worlds", year: 2013, city: "莫斯科", champion: "瓦莱丽·亚当斯", country: "NZL", mark: "20.88" },
  { series: "worlds", year: 2011, city: "大邱", champion: "瓦莱丽·亚当斯", country: "NZL", mark: "21.24" },
  { series: "worlds", year: 2009, city: "柏林", champion: "瓦莱丽·亚当斯", country: "NZL", mark: "20.44" },
  { series: "worlds", year: 2007, city: "大阪", champion: "瓦莱丽·亚当斯", country: "NZL", mark: "20.54" },
  { series: "worlds", year: 2005, city: "赫尔辛基", champion: "奥莉加·里亚宾金娜", country: "RUS", mark: "19.64" },
  { series: "worlds", year: 2003, city: "巴黎", champion: "斯韦特兰娜·克里维廖娃", country: "RUS", mark: "20.63" },
  { series: "worlds", year: 2001, city: "埃德蒙顿", champion: "亚尼娜·普拉瓦林斯卡娅", country: "BLR", mark: "20.61" },
  { series: "worlds", year: 1999, city: "塞维利亚", champion: "阿斯特丽德·孔伯努斯", country: "GER", mark: "19.85" },
  { series: "worlds", year: 1997, city: "雅典", champion: "阿斯特丽德·孔伯努斯", country: "GER", mark: "20.71" },
  { series: "worlds", year: 1995, city: "哥德堡", champion: "阿斯特丽德·孔伯努斯", country: "GER", mark: "21.22" },
  { series: "worlds", year: 1993, city: "斯图加特", champion: "黄志红", country: "CHN", mark: "20.57" },
  { series: "worlds", year: 1991, city: "东京", champion: "黄志红", country: "CHN", mark: "20.83" },
  { series: "worlds", year: 1987, city: "罗马", champion: "娜塔莉娅·利索夫斯卡娅", country: "URS", mark: "21.24" },
  { series: "worlds", year: 1983, city: "赫尔辛基", champion: "海伦娜·菲宾格罗娃", country: "TCH", mark: "21.05" },

  // —— 亚运会（1998 起） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "宋佳媛", country: "CHN", mark: "19.40" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "巩立姣", country: "CHN", mark: "19.58" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "巩立姣", country: "CHN", mark: "19.66" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "巩立姣", country: "CHN", mark: "19.06" },
  { series: "asiangames", year: 2010, city: "广州", champion: "李玲", country: "CHN", mark: "19.94" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "李玲", country: "CHN", mark: "18.42" },
  { series: "asiangames", year: 2002, city: "釜山", champion: "李梅菊", country: "CHN", mark: "18.62" },
  { series: "asiangames", year: 1998, city: "曼谷", champion: "李梅素", country: "CHN", mark: "18.96" },
];
