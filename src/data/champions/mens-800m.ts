import type { ChampionEntry } from "@/lib/types";

/**
 * 男子 800 米 · 历届大赛冠军
 * 空缺说明（宁缺毋滥，未能核实的届次暂缺）：
 *  - 奥运会：1968 起电计时时代全收（1968 年决赛成绩以世界纪录演进页核对）；
 *  - 世锦赛：1983–2025 全部 20 届已核；
 *  - 亚运会：1994 年及以前各届未能双源核实，暂缺；
 *    1998 起每届均有奖牌总表与战报双源核对。
 */
export const mens800mChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "伊曼纽尔·瓦尼翁伊", country: "KEN", mark: "1:41.19", note: "阿罗普1:41.20银、塞杰蒂1:41.50铜——奥运史上最快的前三名" },
  { series: "olympics", year: 2020, city: "东京", champion: "伊曼纽尔·科里尔", country: "KEN", mark: "1:45.06", note: "赛事于2021年举行；凌乱节奏中的后程制胜" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "大卫·鲁迪沙", country: "KEN", mark: "1:42.15", note: "带伤卫冕——1968年后首位蝉联奥运800米的选手" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "大卫·鲁迪沙", country: "KEN", mark: "1:40.91", wr: true, or: true, note: "世界纪录；独自领跑，身后阿莫斯1:41.73银（18岁，博茨瓦纳纪录）" },
  { series: "olympics", year: 2008, city: "北京", champion: "威尔弗雷德·邦盖", country: "KEN", mark: "1:44.65", note: "雅典半决赛出局的四年之后，圆梦之夜" },
  { series: "olympics", year: 2004, city: "雅典", champion: "尤里·博尔扎科夫斯基", country: "RUS", mark: "1:44.45", note: "最后直道绝杀；穆劳齐1:44.61银、基普凯特1:44.65铜——后者的告别之战" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "尼尔斯·舒曼", country: "GER", mark: "1:45.08", note: "最后20米反超基普凯特（1:45.14）——冷门中的冷门" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "韦比约恩·罗达尔", country: "NOR", mark: "1:42.58", or: true, note: "奥运纪录；挪威中跑最伟大的一夜" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "威廉·塔努伊", country: "KEN", mark: "1:43.66", note: "肯尼亚1-2包揽" },
  { series: "olympics", year: 1988, city: "汉城", champion: "保罗·埃伦", country: "KEN", mark: "1:43.45", note: "最后直道从第四位连超数人；克鲁斯卫冕梦碎" },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "若阿金·克鲁斯", country: "BRA", mark: "1:43.00", or: true, note: "奥运纪录；塞巴斯蒂安·科1:43.64银——卫冕梦碎" },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "史蒂夫·奥维特", country: "GBR", mark: "1:45.40", note: "与科的莫斯科之战——科仅获银牌，数日后在1500米复仇" },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "阿尔贝托·胡安托雷纳", country: "CUB", mark: "1:43.50", wr: true, or: true, note: "世界纪录；「超人」同届再夺400米，奥运史上无人重演的双冠" },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "戴夫·沃特尔", country: "USA", mark: "1:45.86", note: "最后三步俯冲绝杀，0.03秒之差" },
  { series: "olympics", year: 1968, city: "墨西哥城", champion: "拉尔夫·杜贝尔", country: "AUS", mark: "1:44.40", note: "手计时1:44.3平世界纪录；电计时1:44.40为奥运纪录" },

  // —— 世界锦标赛（1983–2025 全 20 届） ——
  { series: "worlds", year: 2025, city: "东京", champion: "伊曼纽尔·瓦尼翁伊", country: "KEN", mark: "1:41.86", note: "打破基普凯特1999年1:43.30的锦标赛纪录；阿罗普摘银" },
  { series: "worlds", year: 2023, city: "布达佩斯", champion: "马可·阿罗普", country: "CAN", mark: "1:44.24", note: "加拿大首枚男子800米世锦赛金牌；瓦尼翁伊1:44.39银" },
  { series: "worlds", year: 2022, city: "尤金", champion: "伊曼纽尔·科里尔", country: "KEN", mark: "1:43.71", note: "奥运冠军登顶世锦赛" },
  { series: "worlds", year: 2019, city: "多哈", champion: "多纳万·布雷泽尔", country: "USA", mark: "1:42.34", note: "美国及北美纪录、锦标赛纪录——北美中跑的破冰之作" },
  { series: "worlds", year: 2017, city: "伦敦", champion: "皮埃尔-昂布罗瓦兹·博斯", country: "FRA", mark: "1:44.67", note: "湿冷之夜的外道冲刺" },
  { series: "worlds", year: 2015, city: "北京", champion: "大卫·鲁迪沙", country: "KEN", mark: "1:45.84", note: "2014年伤病后的回归之金；克绍特摘银" },
  { series: "worlds", year: 2013, city: "莫斯科", champion: "穆罕默德·阿曼", country: "ETH", mark: "1:43.31", note: "埃塞俄比亚首枚男子800米世界大赛金牌；奥运冠军鲁迪沙因伤缺席" },
  { series: "worlds", year: 2011, city: "大邱", champion: "大卫·鲁迪沙", country: "KEN", mark: "1:43.91", note: "世界纪录保持者的世锦赛首金" },
  { series: "worlds", year: 2009, city: "柏林", champion: "姆布拉埃尼·穆劳齐", country: "RSA", mark: "1:45.29", note: "从预赛到决赛步步为营" },
  { series: "worlds", year: 2007, city: "大阪", champion: "阿尔弗雷德·基尔瓦·耶戈", country: "KEN", mark: "1:47.09", note: "世锦赛历史最慢决赛——0.01秒险胜加拿大的里德（1:47.10）" },
  { series: "worlds", year: 2005, city: "赫尔辛基", champion: "拉希德·拉米齐", country: "BRN", mark: "1:44.24", note: "巴林史上首枚世锦赛金牌；同届1500米亦夺冠——世锦赛史上首个双冠" },
  { series: "worlds", year: 2003, city: "巴黎", champion: "贾比尔·赛义德-格尔尼", country: "ALG", mark: "1:44.81", note: "阿尔及利亚首枚男子800米世锦赛金牌" },
  { series: "worlds", year: 2001, city: "埃德蒙顿", champion: "安德烈·布赫尔", country: "SUI", mark: "1:43.70", note: "瑞士的世锦赛之夜" },
  { series: "worlds", year: 1999, city: "塞维利亚", champion: "威尔逊·基普凯特", country: "DEN", mark: "1:43.30", note: "三连冠；1:43.30作为锦标赛纪录保持了26年" },
  { series: "worlds", year: 1997, city: "雅典", champion: "威尔逊·基普凯特", country: "DEN", mark: "1:43.38", note: "世界纪录赛季中的登顶" },
  { series: "worlds", year: 1995, city: "哥德堡", champion: "威尔逊·基普凯特", country: "DEN", mark: "1:45.08", note: "丹麦首夺该项目世锦赛金牌" },
  { series: "worlds", year: 1993, city: "斯图加特", champion: "保罗·鲁托", country: "KEN", mark: "1:44.71", note: "孔切拉1:44.89铜——1987年冠军的告别领奖台" },
  { series: "worlds", year: 1991, city: "东京", champion: "比利·孔切拉", country: "KEN", mark: "1:43.99", note: "卫冕——间隔四年的第二金" },
  { series: "worlds", year: 1987, city: "罗马", champion: "比利·孔切拉", country: "KEN", mark: "1:43.06", note: "决赛力压巴西的巴博萨与美国的埃弗雷特" },
  { series: "worlds", year: 1983, city: "赫尔辛基", champion: "维利·维尔贝克", country: "FRG", mark: "1:43.65", note: "首届世锦赛；巴西新锐克鲁斯摘铜" },

  // —— 亚运会（1998 起双源收录） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "落合晃", country: "JPN", mark: "1:44.48", note: "亚运会赛会纪录兼日本全国纪录；2006年生，驹泽大学在读。中国的奚枭横1:45.46列第4，改写全国纪录" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "伊萨·卡兹瓦尼", country: "KSA", mark: "1:48.05", note: "印度的阿夫萨尔1:48.43银" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "曼吉特·辛格", country: "IND", mark: "1:46.15", note: "印度1-2包揽（金森·约翰逊1:46.35银）" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "阿德南·塔斯", country: "IRQ", mark: "1:47.48", note: "2010年季军得主登顶；中国的滕海宁1:47.81银" },
  { series: "asiangames", year: 2010, city: "广州", champion: "萨贾德·莫拉迪", country: "IRI", mark: "1:45.45", note: "伊拉克的塔斯1:45.88银、卡塔尔的巴拉1:46.19铜" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "优素福·萨阿德·卡迈勒", country: "BRN", mark: "1:45.74", note: "日后的亚洲纪录保持者（1:42.79）；老孔切拉之子的亚运首金" },
  { series: "asiangames", year: 2002, city: "釜山", champion: "拉希德·穆罕默德", country: "BRN", mark: "1:47.12", note: "中国的李慧泉1:47.77摘银" },
  { series: "asiangames", year: 1998, city: "曼谷", champion: "李镇一", country: "KOR", mark: "1:46.56", note: "韩国1-2包揽（金顺亨1:46.61银）" },
];
