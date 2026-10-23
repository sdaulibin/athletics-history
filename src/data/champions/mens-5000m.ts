import type { ChampionEntry } from "@/lib/types";

/**
 * 男子 5000 米 · 历届大赛冠军
 * 奥运会、世界锦标赛、亚运会三大系列；逐届成绩来自数据核对面（见项目页来源）。
 */
export const mens5000mChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "雅各布·英格布里格森", country: "NOR", mark: "13:13.66", or: true },
  { series: "olympics", year: 2020, city: "东京", champion: "约书亚·切普特盖", country: "UGA", mark: "12:58.15" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "莫·法拉", country: "GBR", mark: "13:03.30" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "莫·法拉", country: "GBR", mark: "13:41.66" },
  { series: "olympics", year: 2008, city: "北京", champion: "肯尼萨·贝克勒", country: "ETH", mark: "12:57.82" },
  { series: "olympics", year: 2004, city: "雅典", champion: "希查姆·埃尔·奎罗伊", country: "MAR", mark: "13:14.39" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "米利昂·沃尔德", country: "ETH", mark: "13:35.49" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "韦努斯特·尼永加博", country: "BDI", mark: "13:07.96" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "迪特尔·鲍曼", country: "GER", mark: "13:12.52" },
  { series: "olympics", year: 1988, city: "汉城", champion: "约翰·恩古吉", country: "KEN", mark: "13:11.70" },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "赛义德·奥伊塔", country: "MAR", mark: "13:05.59", or: true },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "米鲁茨·伊夫特", country: "ETH", mark: "13:21.0" },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "拉塞·维伦", country: "FIN", mark: "13:24.76" },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "拉塞·维伦", country: "FIN", mark: "13:26.42", or: true },
  { series: "olympics", year: 1968, city: "墨西哥城", champion: "穆罕默德·加穆迪", country: "TUN", mark: "14:05.0" },
  { series: "olympics", year: 1964, city: "东京", champion: "鲍勃·舒尔", country: "USA", mark: "13:48.8" },
  { series: "olympics", year: 1960, city: "罗马", champion: "默里·哈尔伯格", country: "NZL", mark: "13:43.4" },
  { series: "olympics", year: 1956, city: "墨尔本", champion: "弗拉基米尔·库茨", country: "URS", mark: "13:39.6", or: true },
  { series: "olympics", year: 1952, city: "赫尔辛基", champion: "埃米尔·扎托佩克", country: "TCH", mark: "14:06.6", or: true },
  { series: "olympics", year: 1948, city: "伦敦", champion: "加斯东·雷夫", country: "BEL", mark: "14:17.6", or: true },
  { series: "olympics", year: 1936, city: "柏林", champion: "贡纳尔·赫克特", country: "FIN", mark: "14:22.2", or: true },
  { series: "olympics", year: 1932, city: "洛杉矶", champion: "劳里·莱赫蒂宁", country: "FIN", mark: "14:30.0", or: true },
  { series: "olympics", year: 1928, city: "阿姆斯特丹", champion: "维莱·里托拉", country: "FIN", mark: "14:38.0" },
  { series: "olympics", year: 1924, city: "巴黎", champion: "帕沃·努尔米", country: "FIN", mark: "14:31.2", or: true },
  { series: "olympics", year: 1920, city: "安特卫普", champion: "约瑟夫·吉耶莫", country: "FRA", mark: "14:55.6" },
  { series: "olympics", year: 1912, city: "斯德哥尔摩", champion: "汉内斯·科莱赫迈宁", country: "FIN", mark: "14:36.6", wr: true },

  // —— 世界锦标赛 ——
  { series: "worlds", year: 2025, city: "东京", champion: "科尔·霍克", country: "USA", mark: "12:58.30" },
  { series: "worlds", year: 2023, city: "布达佩斯", champion: "雅各布·英格布里格森", country: "NOR", mark: "13:11.30" },
  { series: "worlds", year: 2022, city: "尤金", champion: "雅各布·英格布里格森", country: "NOR", mark: "13:09.24" },
  { series: "worlds", year: 2019, city: "多哈", champion: "穆克塔尔·埃德里斯", country: "ETH", mark: "12:58.85" },
  { series: "worlds", year: 2017, city: "伦敦", champion: "穆克塔尔·埃德里斯", country: "ETH", mark: "13:32.79" },
  { series: "worlds", year: 2015, city: "北京", champion: "莫·法拉", country: "GBR", mark: "13:50.38" },
  { series: "worlds", year: 2013, city: "莫斯科", champion: "莫·法拉", country: "GBR", mark: "13:26.98" },
  { series: "worlds", year: 2011, city: "大邱", champion: "莫·法拉", country: "GBR", mark: "13:23.36" },
  { series: "worlds", year: 2009, city: "柏林", champion: "肯尼萨·贝克勒", country: "ETH", mark: "13:17.09" },
  { series: "worlds", year: 2007, city: "大阪", champion: "伯纳德·拉加特", country: "USA", mark: "13:45.87" },
  { series: "worlds", year: 2005, city: "赫尔辛基", champion: "本杰明·利莫", country: "KEN", mark: "13:32.55" },
  { series: "worlds", year: 2003, city: "巴黎", champion: "埃利乌德·基普乔格", country: "KEN", mark: "12:52.79" },
  { series: "worlds", year: 2001, city: "埃德蒙顿", champion: "理查德·利莫", country: "KEN", mark: "13:00.77" },
  { series: "worlds", year: 1999, city: "塞维利亚", champion: "萨拉赫·希苏", country: "MAR", mark: "12:58.13" },
  { series: "worlds", year: 1997, city: "雅典", champion: "丹尼尔·科门", country: "KEN", mark: "13:07.38" },
  { series: "worlds", year: 1995, city: "哥德堡", champion: "伊斯梅尔·基鲁伊", country: "KEN", mark: "13:16.77" },
  { series: "worlds", year: 1993, city: "斯图加特", champion: "伊斯梅尔·基鲁伊", country: "KEN", mark: "13:02.75" },
  { series: "worlds", year: 1991, city: "东京", champion: "约贝斯·翁迪埃基", country: "KEN", mark: "13:14.45" },
  { series: "worlds", year: 1987, city: "罗马", champion: "赛义德·奥伊塔", country: "MAR", mark: "13:26.44" },
  { series: "worlds", year: 1983, city: "赫尔辛基", champion: "埃蒙·科格伦", country: "IRL", mark: "13:28.53" },

  // —— 亚运会（1998 起） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "比尔哈努·巴莱乌", country: "BRN", mark: "13:30.79" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "比尔哈努·巴莱乌", country: "BRN", mark: "13:17.40", note: "赛会纪录" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "比尔哈努·巴莱乌", country: "BRN", mark: "13:43.17" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "穆罕默德·加尔尼", country: "QAT", mark: "13:26.13", note: "赛会纪录" },
  { series: "asiangames", year: 2010, city: "广州", champion: "哈桑·马赫布卜", country: "BRN", mark: "13:47.86" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "詹姆斯·夸利亚", country: "QAT", mark: "13:38.90" },
  { series: "asiangames", year: 2002, city: "釜山", champion: "穆赫利德·奥泰比", country: "KSA", mark: "13:41.48" },
  { series: "asiangames", year: 1998, city: "曼谷", champion: "穆罕默德·苏莱曼", country: "QAT", mark: "13:55.79" },
];
