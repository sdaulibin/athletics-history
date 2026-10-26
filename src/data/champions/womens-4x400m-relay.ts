import type { ChampionEntry } from "@/lib/types";

/**
 * 女子 4×400 米接力 · 历届大赛冠军
 * 空缺说明（宁缺毋滥，未能核实的届次暂缺）：
 *  - 奥运会：1972 起收录历届冠军；1980 年的精确成绩未能核实，条目内注明；
 *  - 世锦赛：1983–2025 全部 20 届已核（含决赛四棒）；
 *  - 亚运会：1998–2026 全八届已核。
 */
export const womens4x400mRelayChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "美国队", country: "USA", mark: "3:15.27", note: "距世界纪录0.10秒；荷兰3:19.50银、英国3:19.72铜；四棒名单待核" },
  { series: "olympics", year: 2020, city: "东京", champion: "美国队", country: "USA", mark: "3:16.85", note: "赛事于2021年举行；波兰3:20.53银、牙买加3:21.24铜；四棒名单待核" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "美国队", country: "USA", mark: "3:19.06", note: "牙买加3:20.34银；四棒名单待核" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "美国队", country: "USA", mark: "3:16.87", note: "牙买加3:20.95银；四棒名单待核" },
  { series: "olympics", year: 2008, city: "北京", champion: "美国队", country: "USA", mark: "3:18.54", note: "俄罗斯3:18.82银、牙买加3:20.40铜；四棒名单待核" },
  { series: "olympics", year: 2004, city: "雅典", champion: "美国队", country: "USA", mark: "3:19.01", note: "俄罗斯3:20.16银；四棒名单待核" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "美国队", country: "USA", note: "牙买加银牌、俄罗斯铜牌；精确成绩未能核实，暂缺" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "美国队", country: "USA", mark: "3:20.91", note: "尼日利亚3:21.04银、德国3:21.14铜；四棒名单待核" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "独联体队", country: "EUN", mark: "3:20.20", note: "美国3:20.92银、独联体统一队——苏联解体后的最后一届；名单待核" },
  { series: "olympics", year: 1988, city: "汉城", champion: "苏联队（列多夫斯卡娅/纳扎罗娃/皮尼吉娜/布雷吉娜）", country: "URS", mark: "3:15.17", wr: true, note: "世界纪录；美国3:15.51同场亦破旧纪录" },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "美国队", country: "USA", mark: "3:18.29", note: "加拿大3:21.21银；四棒名单待核" },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "苏联队", country: "URS", note: "东德银牌；精确成绩未能核实，暂缺" },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "东德队", country: "GDR", mark: "3:19.23", wr: true, note: "女子4×400首次进入奥运会即成世界纪录；美国银牌；名单待核" },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "东德队", country: "GDR", mark: "3:22.95", wr: true, note: "世界纪录；美国与西德分获二三；名单待核" },

  // —— 世界锦标赛（1983–2025 全 20 届） ——
  { series: "worlds", year: 2025, city: "东京", champion: "美国队（惠特克/厄比-杰克逊/巴特勒/麦克劳克林-莱夫隆）", country: "USA", mark: "3:16.61", note: "锦标赛纪录；牙买加3:18.34银、英国3:18.87铜" },
  { series: "worlds", year: 2023, city: "布达佩斯", champion: "荷兰队（萨尔贝格/克拉弗/佩特斯/博尔）", country: "NED", mark: "3:20.72", note: "荷兰首枚世锦赛接力金牌；英国3:20.88银" },
  { series: "worlds", year: 2022, city: "尤金", champion: "美国队（迪格斯/斯坦纳/威尔逊/麦克劳克林）", country: "USA", mark: "3:17.79", note: "牙买加3:20.74银" },
  { series: "worlds", year: 2019, city: "多哈", champion: "美国队（弗朗西斯/麦克劳克林/穆罕默德/乔纳塔斯）", country: "USA", mark: "3:18.92", note: "波兰3:18.99银" },
  { series: "worlds", year: 2017, city: "伦敦", champion: "美国队（海斯/菲利克斯/温布利/弗朗西斯）", country: "USA", mark: "3:19.02", note: "英国3:25.07银；菲利克斯的第16枚世锦赛奖牌" },
  { series: "worlds", year: 2015, city: "北京", champion: "牙买加队（戴/杰克逊/麦克弗森/W·米尔斯）", country: "JAM", mark: "3:19.13", note: "美国3:19.44银" },
  { series: "worlds", year: 2013, city: "莫斯科", champion: "俄罗斯队", country: "RUS", mark: "3:20.19", note: "美国3:20.41银；名单待核" },
  { series: "worlds", year: 2011, city: "大邱", champion: "美国队（理查兹-罗斯/菲利克斯/比尔德/麦科里）", country: "USA", mark: "3:18.09", note: "牙买加3:18.71银" },
  { series: "worlds", year: 2009, city: "柏林", champion: "美国队（邓恩/菲利克斯/德穆斯/理查兹）", country: "USA", mark: "3:17.83", note: "牙买加3:21.15银" },
  { series: "worlds", year: 2007, city: "大阪", champion: "美国队（特罗特/菲利克斯/瓦恩伯格/理查兹）", country: "USA", mark: "3:18.55", note: "牙买加3:19.73银" },
  { series: "worlds", year: 2005, city: "赫尔辛基", champion: "俄罗斯队（佩琼金娜/克拉斯诺莫维茨/安秋赫/波斯特洛娃）", country: "RUS", mark: "3:20.95", note: "牙买加3:23.29银、英国3:24.40铜" },
  { series: "worlds", year: 2003, city: "巴黎", champion: "美国队（华盛顿/迈尔斯-克拉克/巴伯/理查兹）", country: "USA", mark: "3:22.63", note: "俄罗斯3:23.26银" },
  { series: "worlds", year: 2001, city: "埃德蒙顿", champion: "牙买加队（理查兹/斯科特-波马莱斯/帕里斯/芬顿）", country: "JAM", mark: "3:20.65", note: "德国3:21.97银、俄罗斯3:23.33铜" },
  { series: "worlds", year: 1999, city: "塞维利亚", champion: "俄罗斯队", country: "RUS", mark: "3:21.98", note: "美国3:22.09银；名单待核" },
  { series: "worlds", year: 1997, city: "雅典", champion: "德国队（费勒/罗兰德/鲁克尔/布罗伊尔）", country: "GER", mark: "3:20.92", note: "美国3:21.03银" },
  { series: "worlds", year: 1995, city: "哥德堡", champion: "美国队（格雷厄姆/史蒂文斯/琼斯/迈尔斯）", country: "USA", mark: "3:22.39", note: "俄罗斯3:23.98银、澳大利亚3:24.63铜" },
  { series: "worlds", year: 1993, city: "斯图加特", champion: "美国队（托伦斯/马龙/凯泽/迈尔斯）", country: "USA", mark: "3:16.71", note: "锦标赛纪录；俄罗斯3:18.38银" },
  { series: "worlds", year: 1991, city: "东京", champion: "苏联队（列多夫斯卡娅/日加洛娃/纳扎罗娃/布雷日娜）", country: "URS", mark: "3:18.43", note: "美国3:19.25银" },
  { series: "worlds", year: 1987, city: "罗马", champion: "东德队（诺伊鲍尔/埃梅尔曼/穆勒/布施）", country: "GDR", mark: "3:18.63", note: "锦标赛纪录；苏联3:19.55银" },
  { series: "worlds", year: 1983, city: "赫尔辛基", champion: "东德队（瓦尔特/布施/科赫/吕布扎姆）", country: "GDR", mark: "3:19.73", note: "首届世锦赛；捷克斯洛伐克3:20.32银" },

  // —— 亚运会（1998–2026 全八届） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "印度队（帕哈尔/普瓦马/乔杜里/拉姆拉杰）", country: "IND", mark: "3:29.69", note: "巴林3:30.21银、中国3:31.02铜（Jiang Yutong、孔莹蓥、Zhou Li、Zuo Siyu）" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "巴林队（赛义德/阿德科娅/穆萨/马哈马特）", country: "BRN", mark: "3:27.65", note: "赛事于2023年举行；赛会纪录；印度3:27.85银、斯里兰卡铜牌" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "印度队（达斯/普瓦马/盖亚克瓦德/维斯玛亚）", country: "IND", mark: "3:28.72", note: "巴林3:30.61银、越南3:33.23铜" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "印度队（帕瓦尔/卢卡/曼迪普/普瓦马）", country: "IND", mark: "3:28.68", note: "赛会纪录；日本3:30.80银、中国3:32.02铜" },
  { series: "asiangames", year: 2010, city: "广州", champion: "印度队（曼吉特/西尼/阿昆吉/曼迪普）", country: "IND", mark: "3:29.02", note: "赛会纪录；哈萨克斯坦3:30.03银、中国3:30.89铜" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "印度队", country: "IND", mark: "3:32.95", note: "哈萨克斯坦3:33.86银、中国3:33.92铜；四棒名单待核" },
  { series: "asiangames", year: 2002, city: "釜山", champion: "印度队（菲利普/曼吉特/比斯瓦斯/比纳莫尔）", country: "IND", mark: "3:30.84", note: "哈萨克斯坦3:31.72银、中国3:32.43铜" },
  { series: "asiangames", year: 1998, city: "曼谷", champion: "中国队（Zhang Hengyun/Zhang Henghua/李玉莲/陈玉香）", country: "CHN", mark: "3:32.03", note: "印度3:32.20银、哈萨克斯坦3:37.16铜" },
];
