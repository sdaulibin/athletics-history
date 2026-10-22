import type { ChampionEntry } from "@/lib/types";

/**
 * 女子撑杆跳高 · 历届大赛冠军
 * 空缺说明（宁缺毋滥）：
 *  - 奥运会：2000（设项年）起全收，逐届成绩取自 Olympedia 赛事页；
 *  - 世锦赛：1999（设项年）–2025 全部 14 届已核；2023年布达佩斯两人并列冠军，按「并列」记录；
 *  - 亚运会：1998 起每届均有奖牌总表核对。
 */
export const womensPoleVaultChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "妮娜·肯尼迪", country: "AUS", mark: "4.90", note: "澳大利亚首枚该项目奥运金牌；穆恩4.85米银、纽曼4.85米铜" },
  { series: "olympics", year: 2020, city: "东京", champion: "凯蒂·纳若特", country: "USA", mark: "4.90", note: "赛事于2021年举行；西多罗娃4.85米银（以俄罗斯奥委会名义）、布拉德肖4.85米铜" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "埃卡特里妮·斯特凡尼季", country: "GRE", mark: "4.85", note: "希腊首枚女子撑杆跳奥运金牌；莫里斯4.85米银、麦卡特尼4.80米铜" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "珍·苏尔", country: "USA", mark: "4.75", note: "席尔瓦4.75米银、伊辛巴耶娃4.70米铜" },
  { series: "olympics", year: 2008, city: "北京", champion: "叶莲娜·伊辛巴耶娃", country: "RUS", mark: "5.05", wr: true, note: "奥运两连冠，斯图琴斯基4.80米银" },
  { series: "olympics", year: 2004, city: "雅典", champion: "叶莲娜·伊辛巴耶娃", country: "RUS", mark: "4.91", or: true, wr: true, note: "费奥法诺娃4.75米银" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "斯泰西·德拉吉拉", country: "USA", mark: "4.60", or: true, note: "设项首届，格里戈里耶娃4.55米银、弗洛萨多蒂尔4.50米铜" },

  // —— 世界锦标赛（1999–2025 全 14 届） ——
  { series: "worlds", year: 2025, city: "东京", champion: "凯蒂·穆恩", country: "USA", mark: "4.90", note: "第三枚世锦赛金牌（2022/2023/2025）；莫里斯4.85米银、苏特伊4.80米铜" },
  { series: "worlds", year: 2023, city: "布达佩斯", champion: "妮娜·肯尼迪", country: "AUS", mark: "4.90", note: "与凯蒂·穆恩并列冠军（4.90米，两人均无更多成功试跳）——世锦赛罕见的共享金牌" },
  { series: "worlds", year: 2022, city: "尤金", champion: "凯蒂·穆恩", country: "USA", mark: "4.85", note: "莫里斯4.85米银、肯尼迪4.80米铜" },
  { series: "worlds", year: 2019, city: "多哈", champion: "安热莉卡·西多罗娃", country: "RUS", mark: "4.95", note: "以中立身份出战；莫里斯4.90米银" },
  { series: "worlds", year: 2017, city: "伦敦", champion: "埃卡特里妮·斯特凡尼季", country: "GRE", mark: "4.91", note: "希腊首枚该项目世锦赛金牌" },
  { series: "worlds", year: 2015, city: "北京", champion: "亚里丝莱·席尔瓦", country: "CUB", mark: "4.90", note: "古巴首枚该项目世锦赛金牌" },
  { series: "worlds", year: 2013, city: "莫斯科", champion: "叶莲娜·伊辛巴耶娃", country: "RUS", mark: "4.89", note: "主场第三冠（2005/2007/2013），赛后宣布退役" },
  { series: "worlds", year: 2011, city: "大邱", champion: "法比亚娜·穆雷尔", country: "BRA", mark: "4.85", note: "巴西首枚女子撑杆跳世锦赛金牌" },
  { series: "worlds", year: 2009, city: "柏林", champion: "安娜·罗戈夫斯卡", country: "POL", mark: "4.75", note: "伊辛巴耶娃在资格赛三次试跳失败、未能进入决赛；波兰人本土之外的这枚金牌成为那届世锦赛最大的冷门" },
  { series: "worlds", year: 2007, city: "大阪", champion: "叶莲娜·伊辛巴耶娃", country: "RUS", mark: "4.80", note: "第二冠；捷克人巴久罗娃4.75米银" },
  { series: "worlds", year: 2005, city: "赫尔辛基", champion: "叶莲娜·伊辛巴耶娃", country: "RUS", mark: "5.01", wr: true, note: "世锦赛首次出现5米以上的夺冠成绩" },
  { series: "worlds", year: 2003, city: "巴黎", champion: "斯韦特兰娜·费奥法诺娃", country: "RUS", mark: "4.75", note: "伊辛巴耶娃4.65米铜、德国的贝克尔4.70米银——两人此后展开长达数年的纪录拉锯" },
  { series: "worlds", year: 2001, city: "埃德蒙顿", champion: "斯泰西·德拉吉拉", country: "USA", mark: "4.75", note: "卫冕之战" },
  { series: "worlds", year: 1999, city: "塞维利亚", champion: "斯泰西·德拉吉拉", country: "USA", mark: "4.60", note: "设项首届；女子撑杆跳的首枚世锦赛金牌" },

  // —— 亚运会（1998 起） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "诸田实咲", country: "JPN", mark: "4.55", note: "个人最好成绩；中国的牛春格4.50米银、印度的埃兰戈万4.15米铜" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "李玲", country: "CHN", mark: "4.63", note: "赛事于2023年举行；赛会纪录，日本的诸田实咲4.48米银、牛春格4.30米铜" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "李玲", country: "CHN", mark: "4.60", note: "赛会纪录；泰国的春春迪4.30米银" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "李玲", country: "CHN", mark: "4.35", note: "赛会纪录（并列）；我孙子智美4.25米银、韩国林恩智4.15米铜" },
  { series: "asiangames", year: 2010, city: "广州", champion: "李彩霞", country: "CHN", mark: "4.30", note: "中国的李玲同为4.30米、按试跳次数居银；我孙子智美4.15米铜" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "高淑英", country: "CHN", mark: "4.30", note: "与马来西亚的萨姆苏同为4.30米，按试跳次数分金" },
  { series: "asiangames", year: 2002, city: "釜山", champion: "高淑英", country: "CHN", mark: "4.35", note: "赛会纪录；日本的小野真澄4.10米银、中国的秦霞4.00米铜" },
  { series: "asiangames", year: 1998, city: "曼谷", champion: "蔡维艳", country: "CHN", mark: "4.00", note: "设项首届；赛会纪录，小野真澄与孙彩云同为4.00米并列第二" },
];
