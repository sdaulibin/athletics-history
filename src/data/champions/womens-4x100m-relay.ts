import type { ChampionEntry } from "@/lib/types";

/**
 * 女子 4×100 米接力 · 历届大赛冠军
 * 空缺说明（宁缺毋滥，未能核实的届次暂缺）：
 *  - 奥运会：1972 起收录历届冠军；2008 年原冠军俄罗斯因切尔莫尚斯卡娅
 *    复检阳性被取消，金牌递补比利时（经 Olympedia 核实）；
 *    1972/1976/1992 三届的精确成绩未能核实，条目内注明；
 *  - 世锦赛：1983–2025 全部 20 届已核（含决赛四棒）；
 *  - 亚运会：1998–2026 全八届已核。
 */
export const womens4x100mRelayChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "美国队（杰斐逊/特里/托马斯/理查德森）", country: "USA", mark: "41.78", note: "英国41.85银、德国41.97铜" },
  { series: "olympics", year: 2020, city: "东京", champion: "牙买加队（威廉姆斯/汤普森-赫拉/弗雷泽-普赖斯/杰克逊）", country: "JAM", mark: "41.02", note: "赛事于2021年举行；美国41.45银、英国41.88铜" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "美国队（巴托莱塔/菲利克斯/加德纳/鲍伊）", country: "USA", mark: "41.01", note: "历史第二快；牙买加41.36银" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "美国队（麦迪逊/菲利克斯/奈特/杰特）", country: "USA", mark: "40.82", wr: true, or: true, note: "世界纪录与奥运纪录" },
  { series: "olympics", year: 2008, city: "北京", champion: "比利时队（递补）", country: "BEL", mark: "42.54", note: "原冠军俄罗斯因切尔莫尚斯卡娅复检阳性被取消；比利时递补金牌并刷新国家纪录；尼日利亚43.04银、巴西43.14铜" },
  { series: "olympics", year: 2004, city: "雅典", champion: "牙买加队", country: "JAM", mark: "41.73", note: "0.03秒险胜俄罗斯；四棒名单待核" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "巴哈马队（法因斯/斯图鲁普/戴维斯-汤普森/弗格森）", country: "BAH", note: "巴哈马首枚奥运女子接力金牌；精确成绩未能核实，暂缺" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "美国队（德弗斯/盖恩斯/米勒/托伦斯）", country: "USA", mark: "41.50", note: "巴哈马银牌" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "独联体队", country: "EUN", note: "后苏联时代的最后一届；精确成绩与名单未能核实，暂缺" },
  { series: "olympics", year: 1988, city: "汉城", champion: "美国队（布朗/埃科尔斯/阿什福德/格里菲斯-乔伊纳）", country: "USA", mark: "41.98", note: "奥运纪录保持至2012年；格里菲斯-乔伊纳压轴" },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "美国队", country: "USA", mark: "41.65", note: "东欧抵制之年的最好成绩；加拿大银牌；四棒名单待核" },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "东德队（奥尔斯瓦尔德/穆勒/韦克尔/格尔）", country: "GDR", mark: "41.60", wr: true, note: "世界纪录" },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "东德队", country: "GDR", note: "精确成绩未能核实，暂缺；名单待核" },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "联邦德国队", country: "FRG", note: "精确成绩未能核实，暂缺；名单待核" },

  // —— 世界锦标赛（1983–2025 全 20 届） ——
  { series: "worlds", year: 2025, city: "东京", champion: "美国队（杰斐逊-伍登/特里/怀特/理查德森）", country: "USA", mark: "41.75", note: "牙买加41.79银、英国42.00铜" },
  { series: "worlds", year: 2023, city: "布达佩斯", champion: "美国队（戴维斯/特里/托马斯/理查德森）", country: "USA", mark: "41.03", note: "锦标赛纪录；牙买加银牌" },
  { series: "worlds", year: 2022, city: "尤金", champion: "美国队（杰斐逊/斯坦纳/普兰迪尼/特里）", country: "USA", mark: "41.14", note: "牙买加41.18银、德国42.03铜" },
  { series: "worlds", year: 2019, city: "多哈", champion: "牙买加队（怀特/弗雷泽-普赖斯/史密斯/杰克逊）", country: "JAM", mark: "41.44", note: "英国41.85银；美国队预赛交接失误未进决赛" },
  { series: "worlds", year: 2017, city: "伦敦", champion: "美国队（布朗/菲利克斯/阿基诺松/鲍伊）", country: "USA", mark: "41.82", note: "英国42.12银；菲利克斯的第11枚世锦赛金牌" },
  { series: "worlds", year: 2015, city: "北京", champion: "牙买加队（坎贝尔-布朗/莫里森/汤普森/弗雷泽-普赖斯）", country: "JAM", mark: "41.07", note: "锦标赛纪录；美国41.68银、特立尼达和多巴哥42.03铜" },
  { series: "worlds", year: 2013, city: "莫斯科", champion: "牙买加队（拉塞尔/斯图尔特/卡尔弗特/弗雷泽-普赖斯）", country: "JAM", mark: "41.29" },
  { series: "worlds", year: 2011, city: "大邱", champion: "美国队（奈特/菲利克斯/迈尔斯/杰特）", country: "USA", mark: "41.56", note: "牙买加41.70银" },
  { series: "worlds", year: 2009, city: "柏林", champion: "牙买加队（弗雷泽/贝利/斯图尔特/辛普森）", country: "JAM", mark: "42.06", note: "巴哈马42.29银、德国42.90铜" },
  { series: "worlds", year: 2007, city: "大阪", champion: "美国队（威廉姆斯/菲利克斯/巴伯/爱德华兹）", country: "USA", mark: "41.98" },
  { series: "worlds", year: 2005, city: "赫尔辛基", champion: "美国队（戴格尔/李/巴伯/W·威廉姆斯）", country: "USA", mark: "41.78" },
  { series: "worlds", year: 2003, city: "巴黎", champion: "法国队（吉拉尔/于尔蒂斯/费利克斯/阿龙）", country: "FRA", mark: "41.78", note: "东道主的主场之金；美国41.83银、俄罗斯41.91铜" },
  { series: "worlds", year: 2001, city: "埃德蒙顿", champion: "德国队（帕施克/R·罗克迈尔/B·罗克迈尔/瓦格纳）", country: "GER", mark: "42.32" },
  { series: "worlds", year: 1999, city: "塞维利亚", champion: "巴哈马队（法因斯/斯图鲁普/戴维斯-汤普森/弗格森）", country: "BAH", mark: "41.92", note: "巴哈马首枚世锦赛金牌；法国42.06银、牙买加42.15铜" },
  { series: "worlds", year: 1997, city: "雅典", champion: "美国队（盖恩斯/琼斯/米勒/德弗斯）", country: "USA", mark: "41.47", note: "锦标赛纪录；牙买加41.94银" },
  { series: "worlds", year: 1995, city: "哥德堡", champion: "美国队（蒙迪-米尔纳/吉德里/盖恩斯/托伦斯）", country: "USA", mark: "42.12" },
  { series: "worlds", year: 1993, city: "斯图加特", champion: "俄罗斯队（波戈斯洛夫斯卡娅/马尔丘金娜/沃罗诺娃/普里瓦洛娃）", country: "RUS", mark: "41.49", note: "与美国同成绩，千分位险胜——世锦赛接力史上最著名的千分之一" },
  { series: "worlds", year: 1991, city: "东京", champion: "牙买加队（杜汉尼/卡思伯特/麦克唐纳/奥蒂）", country: "JAM", mark: "41.94", note: "牙买加纪录；苏联42.20银、德国42.33铜" },
  { series: "worlds", year: 1987, city: "罗马", champion: "美国队（布朗/D·威廉姆斯/格里菲斯/马歇尔）", country: "USA", mark: "41.58", note: "锦标赛纪录；东德41.95银" },
  { series: "worlds", year: 1983, city: "赫尔辛基", champion: "东德队（格拉迪施/科赫/奥尔斯瓦尔德/格尔）", country: "GDR", mark: "41.76", note: "首届世锦赛；世界纪录保持者阵容" },

  // —— 亚运会（1998–2026 全八届） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "中国队（梁小静/Liu Guoyi/Liu Xiajun/陈妤颉）", country: "CHN", mark: "42.96", note: "泰国43.51银、日本43.52铜；陈妤颉压轴——17岁的最后一棒" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "中国队（梁小静/韦永丽/袁琦琦/葛曼棋）", country: "CHN", mark: "43.39", note: "赛事于2023年举行；泰国44.32银、马来西亚44.75铜" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "巴林队（贾西姆/奥迪昂/哈立德/纳赛尔）", country: "BRN", mark: "42.73", note: "赛会纪录；中国42.84银、哈萨克斯坦43.44铜" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "中国队（陶宇佳/孔令微/林慧君/韦永丽）", country: "CHN", mark: "42.83", note: "赛会纪录；哈萨克斯坦43.90银、日本44.05铜" },
  { series: "asiangames", year: 2010, city: "广州", champion: "泰国队", country: "THA", mark: "44.09", note: "中国44.22银、日本44.41铜" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "中国队（王静/陈珏/韩玲/秦旺平）", country: "CHN", mark: "44.33", note: "日本44.87银、中国台北45.86铜" },
  { series: "asiangames", year: 2002, city: "釜山", champion: "中国队（曾秀君/严剑葵/黄梅/秦旺平）", country: "CHN", mark: "43.84", note: "泰国44.25银、乌兹别克斯坦44.32铜" },
  { series: "asiangames", year: 1998, city: "曼谷", champion: "中国队（梁懿/严剑葵/李雪梅/李亚丽）", country: "CHN", mark: "43.36", note: "赛会纪录；乌兹别克斯坦44.38银、泰国44.36铜" },
];
