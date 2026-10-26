import type { ChampionEntry } from "@/lib/types";

/**
 * 男子 400 米栏 · 历届大赛冠军
 * 空缺说明（宁缺毋滥，未能核实的届次暂缺）：
 *  - 奥运会：1968 起电计时时代收录历届冠军，成绩逐条核对；
 *  - 世锦赛：1983–2025 全 20 届收录；
 *  - 亚运会：1998–2026 全八届收录（2026 名古屋哈梅达47.82）。
 */
export const mens400mHurdlesChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "拉伊·本杰明", country: "USA", mark: "46.46", or: true, note: "奥运纪录；沃霍尔姆46.62银、多斯桑托斯47.26铜" },
  { series: "olympics", year: 2020, city: "东京", champion: "卡斯滕·沃霍尔姆", country: "NOR", mark: "45.94", wr: true, or: true, note: "赛事于2021年举行；世界纪录与奥运纪录；本杰明46.17同破旧世界纪录" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "凯隆·克莱门特", country: "USA", mark: "47.73", note: "肯尼亚穆切鲁47.78银" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "费利克斯·桑切斯", country: "DOM", mark: "47.63", or: true, note: "第二位两夺该项目奥运金牌的选手（2004/2012）" },
  { series: "olympics", year: 2008, city: "北京", champion: "安杰洛·泰勒", country: "USA", mark: "47.25", note: "2000悉尼、2008北京两届奥运金牌" },
  { series: "olympics", year: 2004, city: "雅典", champion: "费利克斯·桑切斯", country: "DOM", mark: "47.63" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "安杰洛·泰勒", country: "USA", mark: "47.50", note: "沙特阿尔-索迈利47.53银" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "德里克·阿德金斯", country: "USA", mark: "47.54" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "凯文·杨", country: "USA", mark: "46.78", wr: true, or: true, note: "世界纪录与奥运纪录；悬置二十九年" },
  { series: "olympics", year: 1988, city: "汉城", champion: "安德烈·菲利普斯", country: "USA", mark: "47.19", or: true, note: "奥运纪录；摩西47.56列第三" },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "埃德温·摩西", country: "USA", mark: "47.75", note: "第二枚奥运金牌；队友哈里斯47.97" },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "福尔克·贝克", country: "GDR", mark: "48.70", note: "美国抵制之年" },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "埃德温·摩西", country: "USA", mark: "47.64", wr: true, or: true, note: "世界纪录与奥运纪录；21岁" },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "约翰·阿基-布阿", country: "UGA", mark: "47.82", wr: true, or: true, note: "世界纪录与奥运纪录；乌干达首枚奥运金牌" },
  { series: "olympics", year: 1968, city: "墨西哥城", champion: "戴维·赫默里", country: "GBR", mark: "48.12", wr: true, or: true, note: "电计时时代首项世界纪录；高原（约2240米）" },

  // —— 世界锦标赛（1983–2025 全 20 届） ——
  { series: "worlds", year: 2025, city: "东京", champion: "拉伊·本杰明", country: "USA", mark: "46.52", note: "多斯桑托斯46.84银、萨姆巴47.06铜" },
  { series: "worlds", year: 2023, city: "布达佩斯", champion: "卡斯滕·沃霍尔姆", country: "NOR", mark: "46.89", note: "麦克马斯特47.34银、本杰明47.56铜" },
  { series: "worlds", year: 2022, city: "尤金", champion: "艾莉森·多斯桑托斯", country: "BRA", mark: "46.29", note: "锦标赛纪录、南美纪录；本杰明46.89银" },
  { series: "worlds", year: 2019, city: "多哈", champion: "卡斯滕·沃霍尔姆", country: "NOR", mark: "47.42", note: "本杰明47.66银、萨姆巴48.03铜" },
  { series: "worlds", year: 2017, city: "伦敦", champion: "卡斯滕·沃霍尔姆", country: "NOR", mark: "48.35", note: "21岁首夺世界冠军；土耳其科普洛48.49银" },
  { series: "worlds", year: 2015, city: "北京", champion: "尼古拉斯·贝特", country: "KEN", mark: "47.79", note: "肯尼亚首枚男子400米栏世锦赛金牌；库德里亚夫采夫48.05银" },
  { series: "worlds", year: 2013, city: "莫斯科", champion: "杰休·戈登", country: "TTO", mark: "47.69", note: "特立尼达和多巴哥纪录；廷斯利47.70银（0.01秒之差）" },
  { series: "worlds", year: 2011, city: "大邱", champion: "戴·格林", country: "GBR", mark: "48.26", note: "威尔士选手；库尔松48.44银" },
  { series: "worlds", year: 2009, city: "柏林", champion: "凯隆·克莱门特", country: "USA", mark: "47.91", note: "库尔松48.09银" },
  { series: "worlds", year: 2007, city: "大阪", champion: "凯隆·克莱门特", country: "USA", mark: "47.61", note: "桑切斯48.01银" },
  { series: "worlds", year: 2005, city: "赫尔辛基", champion: "贝肖恩·杰克逊", country: "USA", mark: "47.30", note: "首个世界冠军；卡特47.43银" },
  { series: "worlds", year: 2003, city: "巴黎", champion: "费利克斯·桑切斯", country: "DOM", mark: "47.25" },
  { series: "worlds", year: 2001, city: "埃德蒙顿", champion: "费利克斯·桑切斯", country: "DOM", mark: "47.49", note: "首夺世界冠军；意大利莫里47.54银" },
  { series: "worlds", year: 1999, city: "塞维利亚", champion: "法布里齐奥·莫里", country: "ITA", mark: "47.72", note: "意大利选手" },
  { series: "worlds", year: 1997, city: "雅典", champion: "斯特凡·迪亚加纳", country: "FRA", mark: "47.70" },
  { series: "worlds", year: 1995, city: "哥德堡", champion: "德里克·阿德金斯", country: "USA", mark: "47.98", note: "马特特48.03银" },
  { series: "worlds", year: 1993, city: "斯图加特", champion: "凯文·杨", country: "USA", mark: "47.18", note: "一年后（1992）他在巴塞罗那以46.78改写世界纪录" },
  { series: "worlds", year: 1991, city: "东京", champion: "塞缪尔·马特特", country: "ZAM", mark: "47.64" },
  { series: "worlds", year: 1987, city: "罗马", champion: "埃德温·摩西", country: "USA", mark: "47.46", note: "锦标赛纪录；哈里斯47.48银、施密德47.48铜" },
  { series: "worlds", year: 1983, city: "赫尔辛基", champion: "埃德温·摩西", country: "USA", mark: "47.50", note: "首届世锦赛" },

  // —— 亚运会（1998–2026 全八届） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "巴西姆·哈梅达", country: "QAT", mark: "47.82", note: "日本后藤泰淳47.93银、中国台北林子伟48.74铜" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "阿卜杜勒拉赫曼·萨姆巴", country: "QAT", mark: "48.04", note: "赛事于2023年举行；哈梅达48.52银、中国的谢智宇49.16铜；萨姆巴第二金" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "阿卜杜勒拉赫曼·萨姆巴", country: "QAT", mark: "47.66", note: "赛会纪录；印度杜伦48.96银、日本阿部皓之49.12铜" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "阿里·哈米斯", country: "BRN", mark: "49.71", note: "巴林选手；日本岸本鹰幸49.81银、中国的程文50.29铜" },
  { series: "asiangames", year: 2010, city: "广州", champion: "约瑟夫·亚伯拉罕", country: "IND", mark: "49.96", note: "印度选手；沙特沙拉希里50.29银" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "成迫健儿", country: "JPN", mark: "48.78", note: "中国的孟岩49.26银、日本的川北直宏50.19铜" },
  { series: "asiangames", year: 2002, city: "釜山", champion: "哈迪·苏阿安·阿尔-索迈利", country: "KSA", mark: "48.42", note: "赛会纪录；卡塔尔阿尔-努比48.98银；中国未登台" },
  { series: "asiangames", year: 1998, city: "曼谷", champion: "川村英明", country: "JPN", mark: "49.59", note: "日本包揽前二（斋藤佳彦49.94银）；中国台北陈天文50.46铜" },
];
