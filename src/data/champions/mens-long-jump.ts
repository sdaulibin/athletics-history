import type { ChampionEntry } from "@/lib/types";

/**
 * 男子跳远 · 历届大赛冠军
 * 空缺说明（宁缺毋滥）：
 *  - 奥运会：1896 起全收，逐届成绩取自 Olympedia 赛事页（含金牌/纪录标注）；
 *  - 世锦赛：1983–2025 全部 20 届已核，成绩与 alltime-athletics 总榜交叉核对；
 *    夺冠成绩均见于本站数据源，无空缺条目；
 *  - 亚运会：1998 起每届均有奖牌总表核对，冠军/国家/成绩自总表原文解析（1994 及以前从缺）。
 */
export const mensLongJumpChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "米尔蒂亚季斯·滕托格卢", country: "GRE", mark: "8.48", note: "奥运两连冠（2020/2024）；8.48米为其赛季最好" },
  { series: "olympics", year: 2020, city: "东京", champion: "米尔蒂亚季斯·滕托格卢", country: "GRE", mark: "8.41", note: "赛事于2021年举行；希腊首枚男子跳远奥运金牌" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "杰夫·亨德森", country: "USA", mark: "8.38", note: "最后一跳反超南非的曼永加（8.37米）" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "格雷格·卢瑟福", country: "GBR", mark: "8.31", note: "英国首枚男子跳远奥运金牌" },
  { series: "olympics", year: 2008, city: "北京", champion: "欧文·萨拉迪诺", country: "PAN", mark: "8.34", note: "巴拿马首枚奥运田径金牌" },
  { series: "olympics", year: 2004, city: "雅典", champion: "德怀特·菲利普斯", country: "USA", mark: "8.59", note: "美国自1996年后的首枚该项目金牌" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "伊万·佩德罗索", country: "CUB", mark: "8.55", note: "四届世锦赛冠军的唯一一枚奥运金牌" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "卡尔·刘易斯", country: "USA", mark: "8.50", note: "第四枚奥运跳远金牌（1984/1988/1992/1996），前无古人" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "卡尔·刘易斯", country: "USA", mark: "8.67", note: "与鲍威尔（8.64米）同场决战，8.67米为逆风-0.7米/秒" },
  { series: "olympics", year: 1988, city: "汉城", champion: "卡尔·刘易斯", country: "USA", mark: "8.72", note: "顺风-0.2米/秒；彼时最远的奥运夺冠成绩" },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "卡尔·刘易斯", country: "USA", mark: "8.54", note: "与东布罗夫斯基1980年的夺冠成绩同高" },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "卢茨·东布罗夫斯基", country: "GDR", mark: "8.54", note: "民主德国选手；苏联缺席的一届" },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "阿尼·罗宾逊", country: "USA", mark: "8.35", note: "与波士顿1965年的旧世界纪录同高" },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "兰迪·威廉姆斯", country: "USA", mark: "8.24", note: "雨战；美国延续该项目自1896年以来的垄断" },
  { series: "olympics", year: 1968, city: "墨西哥城", champion: "鲍勃·比蒙", country: "USA", mark: "8.90", wr: true, note: "「世纪之跳」；高原（海拔约2240米），顺风+2.0米/秒，超出彼时世界纪录55厘米，悬置23年" },
  { series: "olympics", year: 1964, city: "东京", champion: "林恩·戴维斯", country: "GBR", mark: "8.07", note: "英国选手；终结美国自1948年以来的三连冠" },
  { series: "olympics", year: 1960, city: "罗马", champion: "拉尔夫·波士顿", country: "USA", mark: "8.12", or: true, note: "奥运纪录；同年稍前已在沃尔纳特改写世界纪录（8.21米）" },
  { series: "olympics", year: 1956, city: "墨尔本", champion: "格雷格·贝尔", country: "USA", mark: "7.83", or: true, note: "奥运纪录" },
  { series: "olympics", year: 1952, city: "赫尔辛基", champion: "杰罗姆·比弗尔", country: "USA", mark: "7.57", note: "美国1-2：古铁雷斯7.53米银" },
  { series: "olympics", year: 1948, city: "伦敦", champion: "威利·斯蒂尔", country: "USA", mark: "7.82", or: true, note: "奥运纪录；雨中的伦敦" },
  { series: "olympics", year: 1936, city: "柏林", champion: "杰西·欧文斯", country: "USA", mark: "8.06", or: true, note: "奥运纪录，悬置24年；欧文斯该届四金之一" },
  { series: "olympics", year: 1932, city: "洛杉矶", champion: "埃德·戈登", country: "USA", mark: "7.43", note: "奥运夺冠成绩自1928年的7.73米回落" },
  { series: "olympics", year: 1928, city: "阿姆斯特丹", champion: "埃德·哈姆", country: "USA", mark: "7.73", note: "彼时的奥运最好成绩，直到1936年被改写" },
  { series: "olympics", year: 1924, city: "巴黎", champion: "德哈特·哈伯德", country: "USA", mark: "7.44", note: "首位夺得奥运跳远金牌的黑人选手" },
  { series: "olympics", year: 1920, city: "安特卫普", champion: "威廉·彼得松", country: "SWE", mark: "7.15", note: "瑞典选手；美国自1896年以来的连冠在此中断" },
  { series: "olympics", year: 1912, city: "斯德哥尔摩", champion: "阿尔伯特·格特森", country: "USA", mark: "7.18", or: true, note: "奥运纪录；与1900年的夺冠成绩同高" },
  { series: "olympics", year: 1908, city: "伦敦", champion: "弗兰克·艾恩斯", country: "USA", mark: "7.48", or: true, note: "奥运纪录" },
  { series: "olympics", year: 1904, city: "圣路易斯", champion: "迈耶·普林斯坦", country: "USA", mark: "7.34", or: true, note: "奥运纪录；美国包揽前四" },
  { series: "olympics", year: 1900, city: "巴黎", champion: "阿尔文·克伦茨莱因", country: "USA", mark: "7.18", or: true, note: "奥运纪录；克伦茨莱因该届四金之一" },
  { series: "olympics", year: 1896, city: "雅典", champion: "埃勒里·克拉克", country: "USA", mark: "6.35", or: true, note: "首届现代奥运会的跳远冠军；奥运纪录" },

  // —— 世界锦标赛（1983–2025 全 20 届） ——
  { series: "worlds", year: 2025, city: "东京", champion: "马蒂亚·富拉尼", country: "ITA", mark: "8.39", note: "意大利首位男子跳远世界冠军；20岁" },
  { series: "worlds", year: 2023, city: "布达佩斯", champion: "米尔蒂亚季斯·滕托格卢", country: "GRE", mark: "8.52", note: "希腊首枚该项目世锦赛金牌；同年他还在室内世锦赛夺冠" },
  { series: "worlds", year: 2022, city: "尤金", champion: "王嘉男", country: "CHN", mark: "8.36", note: "中国首位男子跳远世界冠军；最后一跳反超" },
  { series: "worlds", year: 2019, city: "多哈", champion: "塔杰·盖尔", country: "JAM", mark: "8.69", note: "牙买加首枚该项目世锦赛金牌；生涯最远一跳" },
  { series: "worlds", year: 2017, city: "伦敦", champion: "卢沃·曼永加", country: "RSA", mark: "8.48", note: "南非首位男子跳远世界冠军" },
  { series: "worlds", year: 2015, city: "北京", champion: "格雷格·卢瑟福", country: "GBR", mark: "8.41", note: "英国选手；2012年奥运冠军之后的世锦赛登顶" },
  { series: "worlds", year: 2013, city: "莫斯科", champion: "亚历山大·缅科夫", country: "RUS", mark: "8.56", note: "俄罗斯选手；生涯最远一跳" },
  { series: "worlds", year: 2011, city: "大邱", champion: "德怀特·菲利普斯", country: "USA", mark: "8.45", note: "第三枚世锦赛金牌（2003/2005/2009之外的一冠，共四冠）" },
  { series: "worlds", year: 2009, city: "柏林", champion: "德怀特·菲利普斯", country: "USA", mark: "8.54", note: "第三冠；同年6月尤金跳出8.74米" },
  { series: "worlds", year: 2007, city: "大阪", champion: "欧文·萨拉迪诺", country: "PAN", mark: "8.57", note: "巴拿马首枚田径世锦赛金牌；次年北京奥运再夺冠" },
  { series: "worlds", year: 2005, city: "赫尔辛基", champion: "德怀特·菲利普斯", country: "USA", mark: "8.60", note: "第二冠；决赛唯一跳过8.60米的人" },
  { series: "worlds", year: 2003, city: "巴黎", champion: "德怀特·菲利普斯", country: "USA", mark: "8.32", note: "首次世界大赛登顶" },
  { series: "worlds", year: 2001, city: "埃德蒙顿", champion: "伊万·佩德罗索", country: "CUB", mark: "8.40", note: "四连冠完成（1995/1997/1999/2001）——该项目世锦赛唯一的四连冠" },
  { series: "worlds", year: 1999, city: "塞维利亚", champion: "伊万·佩德罗索", country: "CUB", mark: "8.56", note: "第三冠" },
  { series: "worlds", year: 1997, city: "雅典", champion: "伊万·佩德罗索", country: "CUB", mark: "8.42", note: "第二冠" },
  { series: "worlds", year: 1995, city: "哥德堡", champion: "伊万·佩德罗索", country: "CUB", mark: "8.70", note: "首次加冕；同年7月他在萨拉曼卡跳出8.71米" },
  { series: "worlds", year: 1993, city: "斯图加特", champion: "迈克·鲍威尔", country: "USA", mark: "8.59", note: "世界纪录保持者的世锦赛卫冕（1991/1993）" },
  { series: "worlds", year: 1991, city: "东京", champion: "迈克·鲍威尔", country: "USA", mark: "8.95", wr: true, note: "世界纪录夺冠；决赛第五跳改写比蒙8.90米，刘易斯8.87米居银" },
  { series: "worlds", year: 1987, city: "罗马", champion: "卡尔·刘易斯", country: "USA", mark: "8.67", note: "第二冠；顺风+0.4米/秒" },
  { series: "worlds", year: 1983, city: "赫尔辛基", champion: "卡尔·刘易斯", country: "USA", mark: "8.55", note: "首届世锦赛；刘易斯该届三金之一" },

  // —— 亚运会（1998 起） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "石雨豪", country: "CHN", mark: "8.17", note: "赛季最好；印度的斯里尚卡尔8.07米银、乌兹别克斯坦的安瓦罗夫8.06米铜" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "王嘉男", country: "CHN", mark: "8.22", note: "赛事于2023年举行；卫冕成功，印度斯里尚卡尔8.19米银、石雨豪8.10米铜" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "王嘉男", country: "CHN", mark: "8.24", note: "赛会纪录；张耀广8.15米银、印尼苏帕图拉赫曼8.09米铜" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "李金哲", country: "CHN", mark: "8.01", note: "韩国金德贤7.90米银、高兴龙7.86米铜" },
  { series: "asiangames", year: 2010, city: "广州", champion: "金德贤", country: "KOR", mark: "8.11", note: "苏雄峰8.05米银、沙特萨比7.96米铜" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "侯赛因·萨比", country: "KSA", mark: "8.02", note: "科威特哈达德7.88米银、沙特法伊兹7.85米铜" },
  { series: "asiangames", year: 2002, city: "釜山", champion: "侯赛因·萨比", country: "KSA", mark: "8.14", note: "赛会纪录；李大龙7.99米银、卡塔尔阿卜杜拉7.80米铜" },
  { series: "asiangames", year: 1998, city: "曼谷", champion: "森长正树", country: "JPN", mark: "8.10", note: "刘洪宁8.05米银、卡塔尔努比7.99米铜" },
];
