import type { ChampionEntry } from "@/lib/types";

/**
 * 男子 100 米 · 历届大赛冠军
 * 空缺说明（宁缺毋滥，未能核实的届次暂缺）：
 *  - 奥运会：1920 年及以前各届未能核实，暂缺；1924–1964 为手计时口径；
 *  - 世锦赛：1983–2025 全部 20 届已核；1983 届成绩单源待复核；
 *  - 室内世锦赛（60 米为室内主项，100 米非室内项目，不收录）；
 *  - 亚运会：1994 年及以前各届未能核实，暂缺；2002/2006 届成绩单源待复核。
 */
export const mens100mChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "诺亚·莱尔斯", country: "USA", mark: "9.79", note: "9.784对9.789，千分位险胜汤普森——奥运百米史上最小差距之一" },
  { series: "olympics", year: 2020, city: "东京", champion: "拉蒙特·马塞尔·雅各布斯", country: "ITA", mark: "9.80", note: "后博尔特时代的第一位百米奥运冠军；赛事于2021年举行" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "乌塞恩·博尔特", country: "JAM", mark: "9.81", note: "奥运百米三连冠" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "乌塞恩·博尔特", country: "JAM", mark: "9.63", or: true, note: "奥运会纪录" },
  { series: "olympics", year: 2008, city: "北京", champion: "乌塞恩·博尔特", country: "JAM", mark: "9.69", wr: true, note: "破世界纪录；最后二十米拍胸冲线" },
  { series: "olympics", year: 2004, city: "雅典", champion: "贾斯汀·加特林", country: "USA", mark: "9.85" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "莫里斯·格林", country: "USA", mark: "9.87" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "多诺万·贝利", country: "CAN", mark: "9.84", wr: true, note: "破世界纪录" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "林福德·克里斯蒂", country: "GBR", mark: "9.96", note: "32岁夺冠，至今最年长的奥运百米冠军" },
  { series: "olympics", year: 1988, city: "汉城", champion: "卡尔·刘易斯", country: "USA", mark: "9.92", wr: true, note: "约翰逊9.79被取消后递补；兼破世界纪录" },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "卡尔·刘易斯", country: "USA", mark: "9.99" },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "阿兰·威尔斯", country: "GBR", mark: "10.25", note: "10.25对古巴人莱昂纳多10.25，千分位裁决" },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "哈斯利·克劳福德", country: "TRI", mark: "10.06", note: "特立尼达和多巴哥的首枚奥运百米金牌" },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "瓦列里·博尔佐夫", country: "URS", mark: "10.14", note: "苏联短跑的巅峰；兼获200米金牌" },
  { series: "olympics", year: 1968, city: "墨西哥城", champion: "吉姆·海因斯", country: "USA", mark: "9.95", wr: true, note: "电计时时代首项世界纪录" },
  { series: "olympics", year: 1964, city: "东京", champion: "鲍勃·海斯", country: "USA", mark: "10.06", note: "手计时10.0，电计时10.06；接力决赛曾跑出传说级的一棒" },
  { series: "olympics", year: 1960, city: "罗马", champion: "阿明·哈里", country: "GER", mark: "10.2", note: "手计时口径；当年首位跑进10.2的人" },
  { series: "olympics", year: 1956, city: "墨尔本", champion: "博比·莫罗", country: "USA", mark: "10.5", note: "手计时口径；当届包揽100米、200米与接力三金" },
  { series: "olympics", year: 1952, city: "赫尔辛基", champion: "林迪·雷米吉诺", country: "USA", mark: "10.4", note: "手计时口径；前四名同为10.4，终点摄影裁决" },
  { series: "olympics", year: 1948, city: "伦敦", champion: "哈里森·迪拉德", country: "USA", mark: "10.3", note: "手计时口径；四年后转项跨栏再夺奥运金牌" },
  { series: "olympics", year: 1936, city: "柏林", champion: "杰西·欧文斯", country: "USA", mark: "10.3", note: "手计时口径；当届四金，欧文斯之夜" },
  { series: "olympics", year: 1932, city: "洛杉矶", champion: "埃迪·托兰", country: "USA", mark: "10.3", note: "手计时口径；与梅特卡夫同为10.3，判托兰在先" },
  { series: "olympics", year: 1928, city: "阿姆斯特丹", champion: "珀西·威廉斯", country: "CAN", mark: "10.8", note: "手计时口径；20岁的加拿大人与教练两人自费远征夺冠" },
  { series: "olympics", year: 1924, city: "巴黎", champion: "哈罗德·亚伯拉罕斯", country: "GBR", mark: "10.6", note: "手计时口径；《烈火战车》原型" },

  // —— 世界锦标赛（1983–2025 全 20 届） ——
  { series: "worlds", year: 2025, city: "东京", champion: "奥布利克·塞维尔", country: "JAM", mark: "9.77", note: "汤普森9.82银、莱尔斯9.89铜；决赛五人破10秒，后博尔特时代最快的世界大赛百米冠军成绩" },
  { series: "worlds", year: 2023, city: "布达佩斯", champion: "诺亚·莱尔斯", country: "USA", mark: "9.83" },
  { series: "worlds", year: 2022, city: "尤金", champion: "弗雷德·克利", country: "USA", mark: "9.86" },
  { series: "worlds", year: 2019, city: "多哈", champion: "克里斯蒂安·科尔曼", country: "USA", mark: "9.76", note: "史上最快世锦赛夺冠成绩" },
  { series: "worlds", year: 2017, city: "伦敦", champion: "贾斯汀·加特林", country: "USA", mark: "9.92", note: "35岁；博尔特告别战获铜" },
  { series: "worlds", year: 2015, city: "北京", champion: "乌塞恩·博尔特", country: "JAM", mark: "9.79", note: "0.01秒险胜加特林，「鸟巢」之夜" },
  { series: "worlds", year: 2013, city: "莫斯科", champion: "乌塞恩·博尔特", country: "JAM", mark: "9.77", note: "雨中卫冕" },
  { series: "worlds", year: 2011, city: "大邱", champion: "约翰·布雷克", country: "JAM", mark: "9.92", note: "博尔特抢跑被罚下，布雷克登顶" },
  { series: "worlds", year: 2009, city: "柏林", champion: "乌塞恩·博尔特", country: "JAM", mark: "9.58", wr: true, note: "现世界纪录" },
  { series: "worlds", year: 2007, city: "大阪", champion: "泰森·盖伊", country: "USA", mark: "9.85" },
  { series: "worlds", year: 2005, city: "赫尔辛基", champion: "贾斯汀·加特林", country: "USA", mark: "9.88" },
  { series: "worlds", year: 2003, city: "巴黎", champion: "基姆·柯林斯", country: "SKN", mark: "10.07", note: "圣基茨和尼维斯（人口五万）的世界冠军" },
  { series: "worlds", year: 2001, city: "埃德蒙顿", champion: "莫里斯·格林", country: "USA", mark: "9.82", note: "卫冕成功" },
  { series: "worlds", year: 1999, city: "塞维利亚", champion: "莫里斯·格林", country: "USA", mark: "9.80" },
  { series: "worlds", year: 1997, city: "雅典", champion: "莫里斯·格林", country: "USA", mark: "9.86" },
  { series: "worlds", year: 1995, city: "哥德堡", champion: "多诺万·贝利", country: "CAN", mark: "9.97" },
  { series: "worlds", year: 1993, city: "斯图加特", champion: "林福德·克里斯蒂", country: "GBR", mark: "9.87" },
  { series: "worlds", year: 1991, city: "东京", champion: "勒罗伊·伯勒尔", country: "USA", mark: "9.88", note: "世纪之战：六人破10秒，刘易斯9.92第二" },
  { series: "worlds", year: 1987, city: "罗马", champion: "卡尔·刘易斯", country: "USA", mark: "9.93", note: "约翰逊9.83被取消后递补" },
  { series: "worlds", year: 1983, city: "赫尔辛基", champion: "卡尔·刘易斯", country: "USA", mark: "10.07", note: "首届世锦赛；夺冠成绩单源待复核" },

  // —— 亚运会（1994 及以前暂缺） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "汶颂", country: "THA", mark: "9.90", note: "9月25日决赛；半决赛9.91、决赛9.90，打破苏炳添9.92的赛会纪录（亚洲纪录9.83未破）；曾克理10.23第六、谢震业10.30第七" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "谢震业", country: "CHN", mark: "9.97", note: "赛事于2023年举行" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "苏炳添", country: "CHN", mark: "9.92", note: "破赛会纪录" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "费米·奥古诺德", country: "QAT", mark: "9.93", note: "破亚洲纪录" },
  { series: "asiangames", year: 2010, city: "广州", champion: "劳义", country: "CHN", mark: "10.24", note: "中国田径男子百米的亚运首冠" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "叶海亚·哈比卜", country: "KSA", mark: "10.32", wind: "+0.3", note: "成绩单源待复核" },
  { series: "asiangames", year: 2002, city: "釜山", champion: "贾迈勒·萨法尔", country: "KSA", mark: "10.24", wind: "+0.3", note: "亚军朝原宣治10.29、季军陈海健；成绩单源待复核" },
  { series: "asiangames", year: 1998, city: "曼谷", champion: "伊东浩司", country: "JPN", mark: "10.05", note: "半决赛跑出10.00改写亚洲纪录；决赛10.05夺金，当届兼获200米与4×100米接力金牌" },
];
