import type { ChampionEntry } from "@/lib/types";

/**
 * 男子 1500 米 · 历届大赛冠军
 * 空缺说明（宁缺毋滥）：
 *  - 奥运会：1896 起全收（1896–1964 手计时口径，1968 起电计时）；
 *  - 世锦赛：1983–2025 全部 20 届已核（决赛成绩以 alltime-athletics 总榜反查核对）；
 *  - 亚运会：1998 起每届均有奖牌总表核对（1994 及以前从缺）。
 */
export const mens1500mChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "科尔·霍克", country: "USA", mark: "3:27.65", or: true, note: "奥运纪录；克尔3:27.79、努古塞3:27.80——史上最快的奥运前三" },
  { series: "olympics", year: 2020, city: "东京", champion: "雅各布·英格布里格森", country: "NOR", mark: "3:28.32", note: "赛事于2021年举行；21岁的挪威人在最后一圈解决战斗" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "马修·森特罗维茨", country: "USA", mark: "3:50.00", note: "1932年以来最慢的夺冠成绩，却是一场教科书级的节奏控制——美国时隔108年的该项目奥运金牌" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "陶菲克·马克卢菲", country: "ALG", mark: "3:34.08", note: "此前一天因预赛消极比赛被临时禁赛，申诉获准后登场夺冠——戏剧性拉满的一周" },
  { series: "olympics", year: 2008, city: "北京", champion: "阿斯贝尔·基普罗普", country: "KEN", mark: "3:33.11", note: "拉米齐率先冲线后因兴奋剂被取消，19岁的基普罗普递补登顶" },
  { series: "olympics", year: 2004, city: "雅典", champion: "希查姆·埃尔·奎罗伊", country: "MAR", mark: "3:34.18", note: "两届奥运失意之后的加冕；同届再夺5000米——奥运史上罕见的双冠跨度" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "诺亚·恩盖尼", country: "KEN", mark: "3:32.07", note: "最后直道掀翻世界纪录保持者埃尔·奎罗伊——世纪之交的最大冷门之一" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "努尔丁·莫塞利", country: "ALG", mark: "3:35.78", note: "三届世锦赛冠军终于补上最后一块拼图" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "费尔明·卡乔", country: "ESP", mark: "3:40.12", note: "主场作战；西班牙中距离的破冰之金" },
  { series: "olympics", year: 1988, city: "汉城", champion: "彼得·罗诺", country: "KEN", mark: "3:35.96", note: "默默无闻的肯尼亚学院派选手，决赛最后一圈冲垮名将群" },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "塞巴斯蒂安·科", country: "GBR", mark: "3:32.53", note: "800米卫冕失败（银牌）之后，在1500米上完成卫冕——奥运1500米历史上首位蝉联者" },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "塞巴斯蒂安·科", country: "GBR", mark: "3:38.4", note: "手计时口径；负于奥维特的800米之后一周，在「别人的项目」上雪耻" },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "约翰·沃克", country: "NZL", mark: "3:39.17", note: "首位跑进3:50英里的男人在雨中夺冠" },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "佩卡·瓦萨拉", country: "FIN", mark: "3:36.3", note: "手计时口径；最后直道绝杀卫冕冠军凯诺——努尔米故乡的传承之夜" },
  { series: "olympics", year: 1968, city: "墨西哥城", champion: "基普乔格·凯诺", country: "KEN", mark: "3:34.9", wr: true, note: "手计时口径，电计时3:34.91；高原之上领先第二名近20米——肯尼亚中跑王朝的开篇" },
  { series: "olympics", year: 1964, city: "东京", champion: "彼得·斯内尔", country: "NZL", mark: "3:38.1", note: "手计时口径；同届800/1500双金" },
  { series: "olympics", year: 1960, city: "罗马", champion: "赫布·埃利奥特", country: "AUS", mark: "3:35.6", wr: true, note: "手计时口径；世界纪录夺冠，领先亚军1.8秒" },
  { series: "olympics", year: 1956, city: "墨尔本", champion: "罗恩·德莱尼", country: "IRL", mark: "3:41.2", note: "手计时口径；爱尔兰的首枚奥运径赛金牌" },
  { series: "olympics", year: 1952, city: "赫尔辛基", champion: "若西·巴特尔", country: "LUX", mark: "3:45.2", wr: true, note: "手计时口径；卢森堡迄今唯一的奥运田径金牌" },
  { series: "olympics", year: 1948, city: "伦敦", champion: "亨利·埃里克松", country: "SWE", mark: "3:49.8", note: "手计时口径；瑞典包揽前三" },
  { series: "olympics", year: 1936, city: "柏林", champion: "杰克·洛夫洛克", country: "NZL", mark: "3:47.8", wr: true, note: "手计时口径；新西兰医生跑者的世界纪录之战" },
  { series: "olympics", year: 1932, city: "洛杉矶", champion: "路易吉·贝卡利", country: "ITA", mark: "3:51.2", note: "手计时口径" },
  { series: "olympics", year: 1928, city: "阿姆斯特丹", champion: "哈里·拉尔瓦", country: "FIN", mark: "3:53.2", note: "手计时口径" },
  { series: "olympics", year: 1924, city: "巴黎", champion: "帕沃·努尔米", country: "FIN", mark: "3:53.6", note: "手计时口径；努尔米巴黎奥运五金之一" },
  { series: "olympics", year: 1920, city: "安特卫普", champion: "阿尔伯特·希尔", country: "GBR", mark: "4:01.8", note: "手计时口径；同届800/1500双金" },
  { series: "olympics", year: 1912, city: "斯德哥尔摩", champion: "阿诺德·杰克逊", country: "GBR", mark: "3:56.8", note: "手计时口径；0.1秒之差险胜美国双雄" },
  { series: "olympics", year: 1908, city: "伦敦", champion: "梅尔·谢泼德", country: "USA", mark: "4:03.4", note: "手计时口径" },
  { series: "olympics", year: 1904, city: "圣路易斯", champion: "吉姆·莱特博迪", country: "USA", mark: "4:05.4", note: "手计时口径；同届再夺800米与2500米障碍" },
  { series: "olympics", year: 1900, city: "巴黎", champion: "查尔斯·贝内特", country: "GBR", mark: "4:06.2", note: "手计时口径" },
  { series: "olympics", year: 1896, city: "雅典", champion: "埃德温·弗拉克", country: "AUS", mark: "4:33.2", note: "手计时口径；首届现代奥运，澳大利亚人的第二金" },

  // —— 世界锦标赛（1983–2025 全 20 届） ——
  { series: "worlds", year: 2025, city: "东京", champion: "艾萨克·纳德", country: "IRL", mark: "3:34.10", note: "缠斗到最后的0.02秒：怀特曼3:34.12银、雷诺兹·切鲁伊约特3:34.25铜——爱尔兰的首枚男子径赛世界金牌" },
  { series: "worlds", year: 2023, city: "布达佩斯", champion: "乔什·克尔", country: "GBR", mark: "3:29.38", note: "最后100米甩开英格布里格森（第4）与切鲁伊约特" },
  { series: "worlds", year: 2022, city: "尤金", champion: "杰克·怀特曼", country: "GBR", mark: "3:29.23", note: "最后200米外道突袭，力克英格布里格森——父亲兼教练在看台上的呐喊成为名场面" },
  { series: "worlds", year: 2019, city: "多哈", champion: "蒂莫西·切鲁伊约特", country: "KEN", mark: "3:29.26", note: "彼时世界第一的加冕：此前连续两年钻石联赛年度总冠军，多哈之夜无悬念夺金" },
  { series: "worlds", year: 2017, city: "伦敦", champion: "以利亚·马南戈伊", country: "KEN", mark: "3:33.61", note: "肯尼亚1-2：切鲁伊约特3:33.78银" },
  { series: "worlds", year: 2015, city: "北京", champion: "阿斯贝尔·基普罗普", country: "KEN", mark: "3:34.40", note: "第三冠——与莫塞利、埃尔·奎罗伊并列世锦赛三连庄" },
  { series: "worlds", year: 2013, city: "莫斯科", champion: "阿斯贝尔·基普罗普", country: "KEN", mark: "3:36.28", note: "卫冕之战" },
  { series: "worlds", year: 2011, city: "大邱", champion: "阿斯贝尔·基普罗普", country: "KEN", mark: "3:35.69", note: "首届世锦赛夺冠，开启三连庄" },
  { series: "worlds", year: 2009, city: "柏林", champion: "优素福·萨阿德·卡迈勒", country: "BRN", mark: "3:35.93", note: "生于肯尼亚的巴林人——亚洲中跑归化浪潮的代表作" },
  { series: "worlds", year: 2007, city: "大阪", champion: "伯纳德·拉加特", country: "USA", mark: "3:34.77", note: "肯尼亚出生的美国人——美国自1908年后的首枚世界大赛1500米金牌" },
  { series: "worlds", year: 2005, city: "赫尔辛基", champion: "拉希德·拉米齐", country: "BRN", mark: "3:37.88", note: "同届800/1500双冠——世锦赛史上第一人；三年后北京奥运重演夺金，旋即因兴奋剂被剥夺" },
  { series: "worlds", year: 2003, city: "巴黎", champion: "希查姆·埃尔·奎罗伊", country: "MAR", mark: "3:31.77", note: "第四冠，空前绝后" },
  { series: "worlds", year: 2001, city: "埃德蒙顿", champion: "希查姆·埃尔·奎罗伊", country: "MAR", mark: "3:30.68", note: "三连冠达成" },
  { series: "worlds", year: 1999, city: "塞维利亚", champion: "希查姆·埃尔·奎罗伊", country: "MAR", mark: "3:27.65", note: "锦标赛纪录，保持至今" },
  { series: "worlds", year: 1997, city: "雅典", champion: "希查姆·埃尔·奎罗伊", country: "MAR", mark: "3:35.83", note: "王朝开篇" },
  { series: "worlds", year: 1995, city: "哥德堡", champion: "努尔丁·莫塞利", country: "ALG", mark: "3:33.73", note: "三连冠完成——20岁的埃尔·奎罗伊在其身后摘银" },
  { series: "worlds", year: 1993, city: "斯图加特", champion: "努尔丁·莫塞利", country: "ALG", mark: "3:34.24", note: "卫冕之战" },
  { series: "worlds", year: 1991, city: "东京", champion: "努尔丁·莫塞利", country: "ALG", mark: "3:32.84", note: "首届世锦赛夺冠，开启三连庄" },
  { series: "worlds", year: 1987, city: "罗马", champion: "阿卜迪·比莱", country: "SOM", mark: "3:36.80", note: "内战边缘的索马里最亮的一块金牌" },
  { series: "worlds", year: 1983, city: "赫尔辛基", champion: "史蒂夫·克拉姆", country: "GBR", mark: "3:41.59", note: "首届世锦赛；史上最慢的决赛——俯冲撞线险胜奥伊塔" },

  // —— 亚运会（1998 起） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "饭泽一途", country: "JPN", mark: "3:36.35", note: "赛会纪录；印度的古尔维尔·辛格3:36.72摘银" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "穆罕默德·加尔尼", country: "QAT", mark: "3:38.36", note: "赛事于2023年举行；印度人阿贾伊·库马尔·萨尔乔3:38.94银" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "金森·约翰逊", country: "IND", mark: "3:44.72", note: "印度56年来首枚亚运会1500米金牌" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "穆罕默德·加尔尼", country: "QAT", mark: "3:40.23" },
  { series: "asiangames", year: 2010, city: "广州", champion: "穆罕默德·沙文", country: "KSA", mark: "3:36.49", note: "赛会纪录；与窦兆波保持的中国纪录3:36.49同刻度——命运的巧合" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "达哈姆·纳吉姆·巴希尔", country: "QAT", mark: "3:38.06", note: "赛会纪录；巴林的拉米齐3:38.91铜" },
  { series: "asiangames", year: 2002, city: "釜山", champion: "拉希德·拉米齐", country: "BRN", mark: "3:47.33", note: "亚运首冠；三年后他将在赫尔辛基包揽世锦赛双金；中国的窦兆波3:48.51银" },
  { series: "asiangames", year: 1998, city: "曼谷", champion: "穆罕默德·苏莱曼", country: "QAT", mark: "3:40.03", note: "1992年奥运铜牌得主；韩国金顺亨3:40.56银" },
];
