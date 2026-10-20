import type { ChampionEntry } from "@/lib/types";

/**
 * 男子 400 米 · 历届大赛冠军
 * 空缺说明（宁缺毋滥，未能核实的届次暂缺）：
 *  - 奥运会：1964 年及以前为手计时口径，未能核实到可靠来源，暂缺；
 *    1968 起电计时时代全收；
 *  - 世锦赛：1983–2025 全部 20 届已核；
 *  - 亚运会：1994 年及以前各届未能双源核实，暂缺；
 *    1998 起每届均有奖牌总表与战报双源核对。
 */
export const mens400mChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "昆西·霍尔", country: "USA", mark: "43.40", note: "最后20米从第四位连超三人；哈德森-史密斯43.44银、萨蒙孔加43.74铜" },
  { series: "olympics", year: 2020, city: "东京", champion: "史蒂文·加德纳", country: "BAH", mark: "43.85", note: "赛事于2021年举行；巴哈马蝉联该项目奥运冠军（2016年为詹姆斯）" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "韦德·范尼凯克", country: "RSA", mark: "43.03", wr: true, or: true, note: "第八道出发改写世界纪录；詹姆斯43.76银、梅里特43.85铜" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "基拉尼·詹姆斯", country: "GRN", mark: "43.94", note: "格林纳达史上首枚奥运金牌；卢古林·桑托斯44.90银" },
  { series: "olympics", year: 2008, city: "北京", champion: "拉肖恩·梅里特", country: "USA", mark: "43.75", note: "1-2包揽：瓦里纳44.74银" },
  { series: "olympics", year: 2004, city: "雅典", champion: "杰里米·瓦里纳", country: "USA", mark: "44.00", note: "20岁夺金；哈里斯44.16银" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "迈克尔·约翰逊", country: "USA", mark: "43.84", note: "卫冕；至此400米两金四枚世锦赛金牌在手" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "迈克尔·约翰逊", country: "USA", mark: "43.49", or: true, note: "同届兼200米19.32双金双纪录；罗杰·布莱克44.41银" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "昆西·瓦茨", country: "USA", mark: "43.50", or: true, note: "半决赛43.71、决赛43.50连破奥运纪录" },
  { series: "olympics", year: 1988, city: "汉城", champion: "史蒂夫·刘易斯", country: "USA", mark: "43.87", note: "19岁；一个月前刚改写世界纪录的雷诺兹43.93摘银" },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "阿隆佐·巴伯斯", country: "USA", mark: "44.27" },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "维克托·马尔金", country: "URS", mark: "44.60", note: "决赛后程连超三人" },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "阿尔贝托·胡安托雷纳", country: "CUB", mark: "44.26", note: "「超人」同届800/400双金，至今奥运无人重演" },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "文斯·马修斯", country: "USA", mark: "44.66", note: "与科利特包揽金银；领奖台风波后两人被逐出奥运村" },
  { series: "olympics", year: 1968, city: "墨西哥城", champion: "李·埃文斯", country: "USA", mark: "43.86", wr: true, note: "电计时时代首项世界纪录；高原（约2240米），悬置近二十年" },

  // —— 世界锦标赛（1983–2025 全 20 届） ——
  { series: "worlds", year: 2025, city: "东京", champion: "布桑·科伦·基贝纳特希皮", country: "BOT", mark: "43.53", note: "博茨瓦纳首枚男子世锦赛400米金牌；次年2026赛季43.39" },
  { series: "worlds", year: 2023, city: "布达佩斯", champion: "安东尼奥·沃森", country: "JAM", mark: "44.22", note: "半决赛44.13；决赛顶住雨后低温" },
  { series: "worlds", year: 2022, city: "尤金", champion: "迈克尔·诺曼", country: "USA", mark: "44.29", note: "家门口夺冠；同季美国选拔赛43.56" },
  { series: "worlds", year: 2019, city: "多哈", champion: "史蒂文·加德纳", country: "BAH", mark: "43.48", note: "决赛凌晨的弯道绝杀；次年东京奥运再夺金，成就大赛两连" },
  { series: "worlds", year: 2017, city: "伦敦", champion: "韦德·范尼凯克", country: "RSA", mark: "43.98", note: "卫冕；世界纪录保持者身份" },
  { series: "worlds", year: 2015, city: "北京", champion: "韦德·范尼凯克", country: "RSA", mark: "43.48", note: "梅里特43.65银、詹姆斯43.78铜；亚洲纪录马斯拉希预赛43.93、决赛第八" },
  { series: "worlds", year: 2013, city: "莫斯科", champion: "拉肖恩·梅里特", country: "USA", mark: "43.74", note: "复出赛季的回归之金" },
  { series: "worlds", year: 2011, city: "大邱", champion: "基拉尼·詹姆斯", country: "GRN", mark: "44.60", note: "18岁；次年伦敦奥运再进一步" },
  { series: "worlds", year: 2009, city: "柏林", champion: "拉肖恩·梅里特", country: "USA", mark: "44.06", note: "瓦里纳44.60银" },
  { series: "worlds", year: 2007, city: "大阪", champion: "杰里米·瓦里纳", country: "USA", mark: "43.45", note: "卫冕；时为历史第五快" },
  { series: "worlds", year: 2005, city: "赫尔辛基", champion: "杰里米·瓦里纳", country: "USA", mark: "43.93" },
  { series: "worlds", year: 2003, city: "巴黎", champion: "泰里·华盛顿", country: "USA", mark: "44.77", note: "原冠军杰罗姆·杨（44.50）赛后因兴奋剂被取消资格，递补；拉基尔44.79银" },
  { series: "worlds", year: 2001, city: "埃德蒙顿", champion: "阿瓦德·蒙丘尔", country: "BAH", mark: "44.64", note: "巴哈马的首枚世锦赛男子400米金牌" },
  { series: "worlds", year: 1999, city: "塞维利亚", champion: "迈克尔·约翰逊", country: "USA", mark: "43.18", wr: true, note: "现世界纪录悬置前的改写；个人第四枚世锦赛400米金牌" },
  { series: "worlds", year: 1997, city: "雅典", champion: "迈克尔·约翰逊", country: "USA", mark: "44.12", note: "三连冠；卡莫加44.37银、华盛顿44.39铜" },
  { series: "worlds", year: 1995, city: "哥德堡", champion: "迈克尔·约翰逊", country: "USA", mark: "43.39" },
  { series: "worlds", year: 1993, city: "斯图加特", champion: "迈克尔·约翰逊", country: "USA", mark: "43.65" },
  { series: "worlds", year: 1991, city: "东京", champion: "安东尼奥·佩蒂格鲁", country: "USA", mark: "44.57" },
  { series: "worlds", year: 1987, city: "罗马", champion: "托马斯·舍恩勒贝", country: "GDR", mark: "44.33", note: "至今的欧洲纪录；东德在世锦赛上的高光之一" },
  { series: "worlds", year: 1983, city: "赫尔辛基", champion: "伯特·卡梅伦", country: "JAM", mark: "45.05", note: "首届世锦赛；带伤出战仍夺冠" },

  // —— 亚运会（1994 及以前暂缺） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "约书亚·阿特金森", country: "THA", mark: "44.90", note: "泰国新锐PB夺冠；日本中岛佑贵45.22银——自1998年西亚登顶以来，该项目亚运前二名首次没有西亚选手" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "优素福·马斯拉希", country: "KSA", mark: "45.55", note: "赛事于2023年举行；第二金（2014/2022）；佐藤健太郎45.57银、阿巴斯45.65铜" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "阿卜杜拉·哈伦", country: "QAT", mark: "44.89", note: "卡塔尔天才；2021年6月因车祸去世，年仅24岁" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "优素福·马斯拉希", country: "KSA", mark: "44.46", note: "赛会纪录，保持至今；次年北京世锦赛预赛43.93改写亚洲纪录" },
  { series: "asiangames", year: 2010, city: "广州", champion: "费米·奥古诺德", country: "QAT", mark: "45.12", note: "同届兼200米20.43双金；日本金丸45.32银、沙特马斯拉希45.71铜" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "哈姆丹·比希", country: "KSA", mark: "45.64", note: "四年前的银牌换成了金色；辛普森45.68银、沙马里46.35铜" },
  { series: "asiangames", year: 2002, city: "釜山", champion: "法齐·沙马里", country: "KUW", mark: "44.93", note: "0.02秒险胜阿尔-比希；科威特史上首枚亚运400米金牌" },
  { series: "asiangames", year: 1998, city: "曼谷", champion: "苏加特·蒂拉卡拉特纳", country: "SRI", mark: "44.99", note: "斯里兰卡名将；穆夫塔45.32银、印度帕拉姆吉特·辛格45.93铜" },
];
