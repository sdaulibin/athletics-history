import type { ChampionEntry } from "@/lib/types";

/**
 * 男子 4×400 米接力 · 历届大赛冠军
 * 空缺说明（宁缺毋滥，未能核实的届次暂缺）：
 *  - 奥运会：1968 起收录历届冠军；1972/1976/1980 三届的精确成绩未能核实，
 *    条目内注明；2000 年原冠军美国因佩蒂格鲁兴奋剂问题被取消，
 *    金牌递补尼日利亚；
 *  - 世锦赛：1983–2025 全部 20 届已核（含决赛四棒）；
 *  - 亚运会：1998–2026 全八届已核。
 */
export const mens4x400mRelayChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "美国队（诺伍德/贝利/戴德蒙/本杰明）", country: "USA", mark: "2:54.43", note: "距世界纪录0.14秒；博茨瓦纳2:54.53银、英国2:55.83铜" },
  { series: "olympics", year: 2020, city: "东京", champion: "美国队", country: "USA", mark: "2:55.70", note: "赛事于2021年举行；荷兰2:57.18银、博茨瓦纳2:57.27铜；四棒名单待核" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "美国队", country: "USA", mark: "2:57.30", note: "牙买加2:58.16银、巴哈马2:58.49铜；四棒名单待核" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "巴哈马队（布朗/平德/马蒂厄/米勒）", country: "BAH", mark: "2:56.72", note: "巴哈马首枚男子奥运接力金牌；美国2:57.05银" },
  { series: "olympics", year: 2008, city: "北京", champion: "美国队", country: "USA", mark: "2:55.39", note: "巴哈马2:58.03银；四棒名单待核" },
  { series: "olympics", year: 2004, city: "雅典", champion: "美国队", country: "USA", mark: "2:55.91", note: "澳大利亚银牌、尼日利亚铜牌；四棒名单待核" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "尼日利亚队（递补）", country: "NGR", note: "原冠军美国队因安东尼奥·佩蒂格鲁承认用药于2008年被国际奥委会取消；尼日利亚递补金牌" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "美国队", country: "USA", mark: "2:55.99", note: "英国2:56.60银；四棒名单待核" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "美国队（瓦尔蒙/瓦茨/约翰逊/刘易斯）", country: "USA", mark: "2:55.74", wr: true, note: "世界纪录；瓦茨43.0、约翰逊43.5两棒；古巴2:59.51银、英国2:59.73铜" },
  { series: "olympics", year: 1988, city: "汉城", champion: "美国队（埃弗雷特/刘易斯/罗宾泽恩/雷诺兹）", country: "USA", mark: "2:56.16", note: "平1968年世界纪录；牙买加银牌" },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "美国队", country: "USA", mark: "2:57.91", note: "英国2:58.84银；四棒名单待核" },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "苏联队", country: "URS", note: "东德2:59.7银；精确成绩与名单未能核实，暂缺" },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "美国队", country: "USA", note: "精确成绩未能核实，暂缺；名单待核" },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "美国队", country: "USA", note: "精确成绩未能核实，暂缺；名单待核" },
  { series: "olympics", year: 1968, city: "墨西哥城", champion: "美国队（埃文斯/詹姆斯/弗里曼/马修斯）", country: "USA", mark: "2:56.16", wr: true, note: "电计时时代首项该口径世界纪录；高原（约2240米）" },

  // —— 世界锦标赛（1983–2025 全 20 届） ——
  { series: "worlds", year: 2025, city: "东京", champion: "博茨瓦纳队（埃皮/特博戈/恩多里/基贝纳特希皮）", country: "BOT", mark: "2:57.76", note: "博茨瓦纳首枚世锦赛该项目金牌；美国2:57.82银、南非2:58.81铜" },
  { series: "worlds", year: 2023, city: "布达佩斯", champion: "美国队（霍尔/诺伍德/罗宾逊/本杰明）", country: "USA", mark: "2:57.31", note: "法国2:58.45银、英国2:58.71铜" },
  { series: "worlds", year: 2022, city: "尤金", champion: "美国队（戈德温/诺曼/戴德蒙/艾利森）", country: "USA", mark: "2:56.17", note: "牙买加2:57.59银、比利时2:58.72铜" },
  { series: "worlds", year: 2019, city: "多哈", champion: "美国队（克尔利/彻里/伦敦/本杰明）", country: "USA", mark: "2:56.69", note: "牙买加2:56.89银、比利时2:58.78铜" },
  { series: "worlds", year: 2017, city: "伦敦", champion: "特立尼达和多巴哥队（所罗门/理查兹/塞德尼奥/戈登）", country: "TTO", mark: "2:58.12", note: "该国首枚世锦赛接力金牌；美国2:59.23银" },
  { series: "worlds", year: 2015, city: "北京", champion: "美国队（弗堡/麦奎/内勒姆/梅里特）", country: "USA", mark: "2:57.82", note: "特立尼达和多巴哥2:58.20银、英国2:58.51铜" },
  { series: "worlds", year: 2013, city: "莫斯科", champion: "美国队（弗堡/麦奎/霍尔/梅里特）", country: "USA", mark: "2:58.71", note: "牙买加2:59.13银" },
  { series: "worlds", year: 2011, city: "大邱", champion: "美国队（尼克松/杰克逊/泰勒/梅里特）", country: "USA", mark: "2:59.31", note: "南非2:59.87银、牙买加3:00.10铜" },
  { series: "worlds", year: 2009, city: "柏林", champion: "美国队（泰勒/瓦里纳/克莱门特/梅里特）", country: "USA", mark: "2:57.86", note: "英国3:00.53银、澳大利亚3:00.90铜" },
  { series: "worlds", year: 2007, city: "大阪", champion: "美国队（梅里特/泰勒/威廉姆森/瓦里纳）", country: "USA", mark: "2:55.56", note: "巴哈马2:59.18银" },
  { series: "worlds", year: 2005, city: "赫尔辛基", champion: "美国队（罗克/布鲁/威廉姆森/瓦里纳）", country: "USA", mark: "2:56.91", note: "巴哈马2:57.32银、牙买加2:58.07铜" },
  { series: "worlds", year: 2003, city: "巴黎", champion: "法国队（迪容/凯塔/迪亚加纳/拉基尔）", country: "FRA", mark: "2:58.96", note: "主场之金、法国纪录；牙买加2:59.60银" },
  { series: "worlds", year: 2001, city: "埃德蒙顿", champion: "巴哈马队（蒙库尔/布朗/麦金托什/芒宁斯）", country: "BAH", mark: "2:58.19", note: "巴哈马首枚世锦赛金牌；牙买加2:58.39银" },
  { series: "worlds", year: 1999, city: "塞维利亚", champion: "波兰队（丘巴克/马乔维亚克/博奇安/哈切克）", country: "POL", mark: "2:58.91", note: "波兰奇迹；牙买加2:59.34银、南非2:59.88铜" },
  { series: "worlds", year: 1997, city: "雅典", champion: "英国队（托马斯/布莱克/鲍尔奇/理查德森）", country: "GBR", mark: "2:56.65", note: "英国纪录；美国2:56.93银" },
  { series: "worlds", year: 1995, city: "哥德堡", champion: "美国队（拉姆齐/米尔斯/雷诺兹/约翰逊）", country: "USA", mark: "2:57.32", note: "牙买加2:59.88银、尼日利亚3:00.18铜" },
  { series: "worlds", year: 1993, city: "斯图加特", champion: "美国队（瓦尔蒙/瓦茨/雷诺兹/约翰逊）", country: "USA", mark: "2:54.29", wr: true, note: "世界纪录；肯尼亚2:59.82银、德国2:59.99铜" },
  { series: "worlds", year: 1991, city: "东京", champion: "英国队（布莱克/雷德蒙德/里吉斯/阿卡布西）", country: "GBR", mark: "2:57.53", note: "英国纪录；美国2:57.57银" },
  { series: "worlds", year: 1987, city: "罗马", champion: "美国队（埃弗雷特/黑利/麦凯/雷诺兹）", country: "USA", mark: "2:57.29", note: "锦标赛纪录；英国2:58.79银" },
  { series: "worlds", year: 1983, city: "赫尔辛基", champion: "苏联队（洛瓦乔夫/特罗什奇洛/切尔涅茨基/马尔金）", country: "URS", mark: "3:00.79", note: "首届世锦赛；西德3:01.83银、英国3:02.73铜" },

  // —— 亚运会（1998–2026 全八届） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "日本队（佐藤风雅/Shinya Hayashi/Kenki Imaizumi/中岛佑贵）", country: "JPN", mark: "3:00.75", note: "卡塔尔3:00.93银、印度铜牌；日本第三次夺冠（1998/2014/2026）" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "印度队（阿纳斯/雅各布/阿杰马尔/拉梅什）", country: "IND", mark: "3:01.58", note: "赛事于2023年举行；卡塔尔3:02.05银、斯里兰卡3:02.58铜" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "卡塔尔队（萨姆巴/阿巴斯/埃尔努尔/哈伦）", country: "QAT", mark: "3:00.56", note: "当时亚洲纪录；印度3:01.85银、日本3:01.80铜" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "日本队（Kanemaru/Fujimitsu/Iizuka/Kato）", country: "JPN", mark: "3:01.88", note: "韩国3:04.03银、沙特3:04.36铜；四棒中文名待核" },
  { series: "asiangames", year: 2010, city: "广州", champion: "沙特队（萨比亚尼/萨利希/比希/马斯拉希）", country: "KSA", mark: "3:02.30", note: "日本3:02.43银、中国3:03.66铜——后者为当时全国纪录" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "沙特队", country: "KSA", mark: "3:05.31", note: "印度3:06.65银、斯里兰卡铜牌" },
  { series: "asiangames", year: 2002, city: "釜山", champion: "沙特队（阿尔-比希/阿尔-索迈利/萨利希/哈姆丹）", country: "KSA", mark: "3:02.47", note: "印度3:04.22银、斯里兰卡铜牌" },
  { series: "asiangames", year: 1998, city: "曼谷", champion: "日本队（轻部慎治?/长坂佳则?/韩正义?/馆佳晓?）", country: "JPN", mark: "3:01.70", note: "赛会纪录；印度3:02.62银、韩国3:05.72铜" },
];
