import type { ChampionEntry } from "@/lib/types";

/**
 * 女子 100 米 · 历届大赛冠军
 * 收录说明：
 *  - 奥运会：1968 起电计时时代全 15 届收录（1968–2024）；
 *    手计时时代（1928–1964）暂缺；
 *  - 世锦赛：1983–2025 全 20 届收录；
 *  - 亚运会：2010 及以前各届未能核实，暂缺；2014 起收录。
 */
export const womens100mChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "Julien Alfred", country: "LCA", mark: "10.72", note: "圣卢西亚（人口约十八万）史上首枚奥运金牌" },
  { series: "olympics", year: 2020, city: "东京", champion: "Elaine Thompson-Herah", country: "JAM", mark: "10.61", or: true, note: "奥运会纪录；牙买加包揽前三；赛事于2021年举行" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "Elaine Thompson", country: "JAM", mark: "10.71" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "Shelly-Ann Fraser-Pryce", country: "JAM", mark: "10.75" },
  { series: "olympics", year: 2008, city: "北京", champion: "Shelly-Ann Fraser", country: "JAM", mark: "10.78", note: "牙买加包揽前三；弗雷泽的首枚奥运金牌" },
  { series: "olympics", year: 2004, city: "雅典", champion: "Yuliya Nesterenko", country: "BLR", mark: "10.93", note: "白俄罗斯至今唯一的奥运女子百米金牌" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "Marion Jones", country: "USA", mark: "10.75", note: "2007年因兴奋剂被剥夺，金牌递补给希腊的萨努" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "Gail Devers", country: "USA", mark: "10.94", note: "与奥蒂同为10.94，压线千分位险胜；奥运百米两连冠" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "Gail Devers", country: "USA", mark: "10.82", note: "战胜伤病（甲状腺机能亢进）复出后的首枚奥运百米金牌" },
  { series: "olympics", year: 1988, city: "汉城", champion: "Florence Griffith-Joyner", country: "USA", mark: "10.54", note: "决赛顺风+3.0超规，不计为奥运纪录；当届百米、200米、接力三金" },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "Evelyn Ashford", country: "USA", mark: "10.97", note: "东方集团抵制之年；17天后她在苏黎世以10.76打破世界纪录" },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "Lyudmila Kondratyeva", country: "URS", mark: "11.06", note: "0.01秒险胜戈尔；随后拉伤错过200米" },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "Annegret Richter", country: "FRG", mark: "11.08", note: "同日半决赛的11.01为时世界纪录" },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "Renate Stecher", country: "GDR", mark: "11.07", wr: true, note: "破世界纪录；兼获200米金牌" },
  { series: "olympics", year: 1968, city: "墨西哥城", champion: "Wyomia Tyus", country: "USA", mark: "11.08", wr: true, note: "电计时时代首项世界纪录；奥运百米卫冕第一人" },

  // —— 世界锦标赛（1983–2025 全 20 届） ——
  { series: "worlds", year: 2025, city: "东京", champion: "Melissa Jefferson-Wooden", country: "USA", mark: "10.61", note: "破赛会纪录；克莱顿银牌、巴黎奥运冠军阿尔弗雷德铜牌" },
  { series: "worlds", year: 2023, city: "布达佩斯", champion: "Sha'Carri Richardson", country: "USA", mark: "10.65", note: "锦标赛纪录；最后二十米逆转夺冠" },
  { series: "worlds", year: 2022, city: "尤金", champion: "Shelly-Ann Fraser-Pryce", country: "JAM", mark: "10.67", note: "第五个世锦赛百米冠军，前无古人" },
  { series: "worlds", year: 2019, city: "多哈", champion: "Shelly-Ann Fraser-Pryce", country: "JAM", mark: "10.71", note: "产后复出的第四冠" },
  { series: "worlds", year: 2017, city: "伦敦", champion: "Tori Bowie", country: "USA", mark: "10.85", note: "0.01秒险胜科特迪瓦的塔卢" },
  { series: "worlds", year: 2015, city: "北京", champion: "Shelly-Ann Fraser-Pryce", country: "JAM", mark: "10.76", note: "卫冕" },
  { series: "worlds", year: 2013, city: "莫斯科", champion: "Shelly-Ann Fraser-Pryce", country: "JAM", mark: "10.71", note: "当届包揽100米、200米双金" },
  { series: "worlds", year: 2011, city: "大邱", champion: "Carmelita Jeter", country: "USA", mark: "10.90" },
  { series: "worlds", year: 2009, city: "柏林", champion: "Shelly-Ann Fraser", country: "JAM", mark: "10.73" },
  { series: "worlds", year: 2007, city: "大阪", champion: "Veronica Campbell", country: "JAM", mark: "11.01" },
  { series: "worlds", year: 2005, city: "赫尔辛基", champion: "Lauryn Williams", country: "USA", mark: "10.93" },
  { series: "worlds", year: 2003, city: "巴黎", champion: "Torri Edwards", country: "USA", mark: "10.93", note: "原冠军怀特因兴奋剂被取消成绩后递补" },
  { series: "worlds", year: 2001, city: "埃德蒙顿", champion: "Zhanna Block", country: "UKR", mark: "10.82", note: "令琼斯首尝世界大赛百米决赛败绩" },
  { series: "worlds", year: 1999, city: "塞维利亚", champion: "Marion Jones", country: "USA", mark: "10.70" },
  { series: "worlds", year: 1997, city: "雅典", champion: "Marion Jones", country: "USA", mark: "10.83" },
  { series: "worlds", year: 1995, city: "哥德堡", champion: "Gwen Torrence", country: "USA", mark: "10.85" },
  { series: "worlds", year: 1993, city: "斯图加特", champion: "Gail Devers", country: "USA", mark: "10.82" },
  { series: "worlds", year: 1991, city: "东京", champion: "Katrin Krabbe", country: "GER", mark: "10.99", note: "兼获200米金牌；1992年因兴奋剂遭禁赛，1991年成绩保留" },
  { series: "worlds", year: 1987, city: "罗马", champion: "Florence Griffith-Joyner", country: "USA", mark: "10.90", note: "首枚世界大赛金牌；次年即10.49" },
  { series: "worlds", year: 1983, city: "赫尔辛基", champion: "Marlies Göhr", country: "GDR", mark: "10.97", note: "首届世锦赛；时世界纪录保持者" },

  // —— 亚运会（2010 及以前暂缺） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "Chen Yujie", country: "CHN", mark: "11.06", note: "17岁首战亚运；打破尘封24年的赛会纪录（贾亚辛格2002年11.15）；亚洲纪录10.79未破" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "Ge Manqi", country: "CHN", mark: "11.23", note: "赛事于2023年举行；中国选手第六次登顶亚运女子百米" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "Edidiong Odiong", country: "BRN", mark: "11.30", note: "韦永丽11.33摘铜；当届兼获200米金牌" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "Wei Yongli", country: "CHN", mark: "11.48", note: "绝杀日本名将福岛千里" },
];
