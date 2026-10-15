import type { ChampionEntry } from "@/lib/types";

/**
 * 男子 100 米 · 历届大赛冠军
 * 空缺说明（宁缺毋滥，未能核实的届次暂缺）：
 *  - 奥运会：1980 及以前各届未能核实，暂缺（1968 起电计时时代待补）；
 *  - 世锦赛：2025 东京届未能核实，暂缺；1983 届成绩单源待复核；
 *  - 室内世锦赛（60 米为室内主项，100 米非室内项目，不收录）；
 *  - 亚运会：2002 釜山及更早各届未能核实，暂缺；2026 名古屋届未能核实，暂缺。
 */
export const mens100mChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "Noah Lyles", country: "USA", mark: "9.79", note: "9.784对9.789，千分位险胜汤普森——奥运百米史上最小差距之一" },
  { series: "olympics", year: 2020, city: "东京", champion: "Lamont Marcell Jacobs", country: "ITA", mark: "9.80", note: "后博尔特时代的第一位百米奥运冠军；赛事于2021年举行" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "Usain Bolt", country: "JAM", mark: "9.81", note: "奥运百米三连冠" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "Usain Bolt", country: "JAM", mark: "9.63", or: true, note: "奥运会纪录" },
  { series: "olympics", year: 2008, city: "北京", champion: "Usain Bolt", country: "JAM", mark: "9.69", wr: true, note: "破世界纪录；最后二十米拍胸冲线" },
  { series: "olympics", year: 2004, city: "雅典", champion: "Justin Gatlin", country: "USA", mark: "9.85" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "Maurice Greene", country: "USA", mark: "9.87" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "Donovan Bailey", country: "CAN", mark: "9.84", wr: true, note: "破世界纪录" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "Linford Christie", country: "GBR", mark: "9.96", note: "32岁夺冠，至今最年长的奥运百米冠军" },
  { series: "olympics", year: 1988, city: "汉城", champion: "Carl Lewis", country: "USA", mark: "9.92", wr: true, note: "约翰逊9.79被取消后递补；兼破世界纪录" },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "Carl Lewis", country: "USA", mark: "9.99" },

  // —— 世界锦标赛（2025 东京届未能核实，暂缺） ——
  { series: "worlds", year: 2023, city: "布达佩斯", champion: "Noah Lyles", country: "USA", mark: "9.83" },
  { series: "worlds", year: 2022, city: "尤金", champion: "Fred Kerley", country: "USA", mark: "9.86" },
  { series: "worlds", year: 2019, city: "多哈", champion: "Christian Coleman", country: "USA", mark: "9.76", note: "史上最快世锦赛夺冠成绩" },
  { series: "worlds", year: 2017, city: "伦敦", champion: "Justin Gatlin", country: "USA", mark: "9.92", note: "35岁；博尔特告别战获铜" },
  { series: "worlds", year: 2015, city: "北京", champion: "Usain Bolt", country: "JAM", mark: "9.79", note: "0.01秒险胜加特林，「鸟巢」之夜" },
  { series: "worlds", year: 2013, city: "莫斯科", champion: "Usain Bolt", country: "JAM", mark: "9.77", note: "雨中卫冕" },
  { series: "worlds", year: 2011, city: "大邱", champion: "Yohan Blake", country: "JAM", mark: "9.92", note: "博尔特抢跑被罚下，布雷克登顶" },
  { series: "worlds", year: 2009, city: "柏林", champion: "Usain Bolt", country: "JAM", mark: "9.58", wr: true, note: "现世界纪录" },
  { series: "worlds", year: 2007, city: "大阪", champion: "Tyson Gay", country: "USA", mark: "9.85" },
  { series: "worlds", year: 2005, city: "赫尔辛基", champion: "Justin Gatlin", country: "USA", mark: "9.88" },
  { series: "worlds", year: 2003, city: "巴黎", champion: "Kim Collins", country: "SKN", mark: "10.07", note: "圣基茨和尼维斯（人口五万）的世界冠军" },
  { series: "worlds", year: 2001, city: "埃德蒙顿", champion: "Maurice Greene", country: "USA", mark: "9.82", note: "卫冕成功" },
  { series: "worlds", year: 1999, city: "塞维利亚", champion: "Maurice Greene", country: "USA", mark: "9.80" },
  { series: "worlds", year: 1997, city: "雅典", champion: "Maurice Greene", country: "USA", mark: "9.86" },
  { series: "worlds", year: 1995, city: "哥德堡", champion: "Donovan Bailey", country: "CAN", mark: "9.97" },
  { series: "worlds", year: 1993, city: "斯图加特", champion: "Linford Christie", country: "GBR", mark: "9.87" },
  { series: "worlds", year: 1991, city: "东京", champion: "Leroy Burrell", country: "USA", mark: "9.88", note: "世纪之战：六人破10秒，刘易斯9.92第二" },
  { series: "worlds", year: 1987, city: "罗马", champion: "Carl Lewis", country: "USA", mark: "9.93", note: "约翰逊9.83被取消后递补" },
  { series: "worlds", year: 1983, city: "赫尔辛基", champion: "Carl Lewis", country: "USA", mark: "10.07", note: "首届世锦赛；夺冠成绩单源待复核" },

  // —— 亚运会（2002 及以前、2026 届未能核实，暂缺） ——
  { series: "asiangames", year: 2022, city: "杭州", champion: "Xie Zhenye", country: "CHN", mark: "9.97", note: "赛事于2023年举行" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "Su Bingtian", country: "CHN", mark: "9.92", note: "破赛会纪录" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "Femi Ogunode", country: "QAT", mark: "9.93", note: "破亚洲纪录" },
  { series: "asiangames", year: 2010, city: "广州", champion: "Lao Yi", country: "CHN", mark: "10.24", note: "中国田径男子百米的亚运首冠" },
];
