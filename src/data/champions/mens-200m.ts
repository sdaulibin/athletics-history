import type { ChampionEntry } from "@/lib/types";

/**
 * 男子 200 米 · 历届大赛冠军
 * 空缺说明（宁缺毋滥，未能核实的届次暂缺）：
 *  - 奥运会：1964 年及以前为手计时口径，未能核实到可靠来源，暂缺；
 *    1968 起电计时时代全收；
 *  - 世锦赛：1983–2025 全部 20 届已核；
 *  - 亚运会：1994 年及以前各届未能双源核实，暂缺；
 *    1998 起每届均有奖牌总表与战报双源核对。
 */
export const mens200mChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "莱齐莱·特博戈", country: "BOT", mark: "19.46", wind: "+0.4", note: "博茨瓦纳史上首枚奥运金牌，也是非洲首枚200米奥运金牌；贝德纳雷克19.58银、莱尔斯19.61铜" },
  { series: "olympics", year: 2020, city: "东京", champion: "安德烈·德格拉塞", country: "CAN", mark: "19.62", wind: "-0.5", note: "五度站上奥运领奖台后的第一金；赛事于2021年举行" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "乌塞恩·博尔特", country: "JAM", mark: "19.78", wind: "-0.5", note: "奥运200米三连冠——史上第一人；百米亦三连冠" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "乌塞恩·博尔特", country: "JAM", mark: "19.32", wind: "+0.4", note: "追平自己保持四年的旧世界纪录；布雷克19.44银" },
  { series: "olympics", year: 2008, city: "北京", champion: "乌塞恩·博尔特", country: "JAM", mark: "19.30", wind: "-0.9", wr: true, or: true, note: "破世界纪录与奥运纪录；逆风0.9之下的鸟巢之夜" },
  { series: "olympics", year: 2004, city: "雅典", champion: "肖恩·克劳福德", country: "USA", mark: "19.79", wind: "+1.2" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "康斯坦丁诺斯·肯特里斯", country: "GRE", mark: "20.09", note: "东道主爆冷；此后因逃避药检风波黯然收场" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "迈克尔·约翰逊", country: "USA", mark: "19.32", wind: "+0.4", wr: true, or: true, note: "破世界纪录；同届400米双金，双纪录" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "迈克尔·马什", country: "USA", mark: "20.01", wind: "-1.0", note: "半决赛19.73接近门内阿的19.72" },
  { series: "olympics", year: 1988, city: "汉城", champion: "乔·德洛奇", country: "USA", mark: "19.75", wind: "+1.7", note: "0.02秒险胜刘易斯" },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "卡尔·刘易斯", country: "USA", mark: "19.80", wind: "-0.9", note: "当届四金的第一块" },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "皮特罗·门内阿", country: "ITA", mark: "20.19", wind: "+0.9", or: true, note: "破奥运纪录；世界纪录保持者身份登顶" },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "唐·夸里", country: "JAM", mark: "20.23", note: "牙买加短跑的旗帜；亦有统计资料作20.22" },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "瓦列里·博尔佐夫", country: "URS", mark: "20.00", wind: "0.0", or: true, note: "电计时时代首项奥运纪录；兼百米金牌" },
  { series: "olympics", year: 1968, city: "墨西哥城", champion: "汤米·史密斯", country: "USA", mark: "19.83", wind: "+0.9", wr: true, note: "电计时时代首项世界纪录；高原；领奖台举拳成为世纪图像" },

  // —— 世界锦标赛（1983–2025 全 20 届） ——
  { series: "worlds", year: 2025, city: "东京", champion: "诺亚·莱尔斯", country: "USA", mark: "19.52", wind: "0.0", note: "三连冠（2022/2023/2025）；与2023年夺冠成绩同为19.52；贝德纳雷克19.58银、莱维尔19.64铜" },
  { series: "worlds", year: 2023, city: "布达佩斯", champion: "诺亚·莱尔斯", country: "USA", mark: "19.52", wind: "-0.2", note: "卫冕；贝德纳雷克19.58银、奈顿19.75铜" },
  { series: "worlds", year: 2022, city: "尤金", champion: "诺亚·莱尔斯", country: "USA", mark: "19.31", wind: "+0.4", note: "美国纪录；贝德纳雷克19.77、奈顿19.80，美国包揽领奖台" },
  { series: "worlds", year: 2019, city: "多哈", champion: "诺亚·莱尔斯", country: "USA", mark: "19.83", wind: "+0.3" },
  { series: "worlds", year: 2017, city: "伦敦", champion: "拉米尔·古利耶夫", country: "TUR", mark: "20.09", wind: "-0.1", note: "为土耳其拿下首枚世锦赛短跑金牌" },
  { series: "worlds", year: 2015, city: "北京", champion: "乌塞恩·博尔特", country: "JAM", mark: "19.55", wind: "-0.1", note: "卫冕之路的第四冠（2009/2013/2015）" },
  { series: "worlds", year: 2013, city: "莫斯科", champion: "乌塞恩·博尔特", country: "JAM", mark: "19.66", wind: "0.0" },
  { series: "worlds", year: 2011, city: "大邱", champion: "乌塞恩·博尔特", country: "JAM", mark: "19.40", wind: "+0.8", note: "百米抢跑被罚下后的回应" },
  { series: "worlds", year: 2009, city: "柏林", champion: "乌塞恩·博尔特", country: "JAM", mark: "19.19", wind: "+0.9", wr: true, note: "现世界纪录" },
  { series: "worlds", year: 2007, city: "大阪", champion: "泰森·盖伊", country: "USA", mark: "19.76", wind: "-0.8", note: "当届100/200双金" },
  { series: "worlds", year: 2005, city: "赫尔辛基", champion: "贾斯汀·加特林", country: "USA", mark: "20.04", wind: "-0.5" },
  { series: "worlds", year: 2003, city: "巴黎", champion: "约翰·卡佩尔", country: "USA", mark: "20.30", note: "前美式橄榄球外接手；佩顿银、末续慎吾铜——亚洲在世锦赛200米的第二枚奖牌" },
  { series: "worlds", year: 2001, city: "埃德蒙顿", champion: "康斯坦丁诺斯·肯特里斯", country: "GRE", mark: "20.04", wind: "+0.1" },
  { series: "worlds", year: 1999, city: "塞维利亚", champion: "莫里斯·格林", country: "USA", mark: "19.90", wind: "+1.2", note: "当届100/200双金" },
  { series: "worlds", year: 1997, city: "雅典", champion: "阿托·博尔顿", country: "TRI", mark: "20.03", note: "决赛风超规；弗雷德里克斯银、达席尔瓦铜" },
  { series: "worlds", year: 1995, city: "哥德堡", champion: "迈克尔·约翰逊", country: "USA", mark: "19.79", wind: "+0.5" },
  { series: "worlds", year: 1993, city: "斯图加特", champion: "弗兰基·弗雷德里克斯", country: "NAM", mark: "19.85", wind: "+0.3", note: "纳米比亚的世界冠军" },
  { series: "worlds", year: 1991, city: "东京", champion: "迈克尔·约翰逊", country: "USA", mark: "20.01", wind: "-3.4", note: "顶风3.4米/秒夺冠" },
  { series: "worlds", year: 1987, city: "罗马", champion: "卡尔文·史密斯", country: "USA", mark: "20.16", wind: "-0.4" },
  { series: "worlds", year: 1983, city: "赫尔辛基", champion: "卡尔文·史密斯", country: "USA", mark: "20.14", wind: "+1.1", note: "首届世锦赛；卡尔文·史密斯次年以9.93改写百米世界纪录" },

  // —— 亚运会（1994 及以前暂缺） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "汶颂", country: "THA", mark: "19.88", note: "9月27日决赛，−0.3顶风之下追平谢震业的亚洲纪录，大幅改写奥古诺德20.14的赛会纪录；与百米9.90双冠" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "上山弘辉", country: "JPN", mark: "20.60", note: "赛事于2023年举行；0.03秒险胜沙特阿卜卡尔；杨俊瀚铜" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "小池祐贵", country: "JPN", mark: "20.23", note: "与杨俊瀚同为20.23，千分位裁决——亚运200米史上最接近的终点" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "费米·奥古诺德", country: "QAT", mark: "20.14", note: "破赛会纪录，保持12年至2026年；卫冕；当届兼百米金牌" },
  { series: "asiangames", year: 2010, city: "广州", champion: "费米·奥古诺德", country: "QAT", mark: "20.43", note: "当届兼夺400米金牌（45.12）——广州双冠；藤光谦司20.74银，梁嘉鸿第四" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "末续慎吾", country: "JPN", mark: "20.60", note: "卫冕；杨耀祖20.71银" },
  { series: "asiangames", year: 2002, city: "釜山", champion: "末续慎吾", country: "JPN", mark: "20.38", note: "次年在巴黎世锦赛摘铜，创日本男选手200米的历史高度" },
  { series: "asiangames", year: 1998, city: "曼谷", champion: "伊东浩司", country: "JPN", mark: "20.25", note: "当届百米10.05夺金，200米兼项双冠；中国韩朝明20.70银" },
];
