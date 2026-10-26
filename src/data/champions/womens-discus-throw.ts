import type { ChampionEntry } from "@/lib/types";

/**
 * 女子铁饼 · 历届大赛冠军
 * 空缺说明（宁缺毋滥，未能核实的届次暂缺）：
 *  - 奥运会：1972 起收录历届冠军（1972 年经 Olympedia 核实）；
 *    1976 年夺冠成绩未能核实，暂缺；
 *  - 世锦赛：1983–2025 全部 20 届已核；
 *  - 亚运会：1998–2026 全八届已核；1994 及以前暂缺。
 */
export const womensDiscusThrowChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "瓦拉丽·奥尔曼", country: "USA", note: "卫冕；中国冯彬未登台" },
  { series: "olympics", year: 2020, city: "东京", champion: "瓦拉丽·奥尔曼", country: "USA", mark: "68.98", note: "赛事于2021年举行；首投制胜；德国的普登茨66.86银、古巴的佩雷斯65.72铜；佩尔科维奇第四（65.01）——三连冠梦碎" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "桑德拉·佩尔科维奇", country: "CRO", mark: "69.21", note: "卫冕；克罗地亚独立后最伟大的田径选手" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "桑德拉·佩尔科维奇", country: "CRO", mark: "69.11", note: "克罗地亚首枚女子田径奥运金牌" },
  { series: "olympics", year: 2008, city: "北京", champion: "斯蒂芬妮·布朗·特拉夫顿", country: "USA", mark: "64.74", note: "首投64.74后无人接近" },
  { series: "olympics", year: 2004, city: "雅典", champion: "娜塔莉娅·萨多娃", country: "RUS", mark: "67.02" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "叶莉娜·兹韦列娃", country: "BLR", mark: "68.40", note: "白俄罗斯老将；此前1995年已夺世锦赛金牌" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "伊尔克·维卢达", country: "GER", mark: "69.66", note: "前东德选手；1994年世锦赛冠军" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "玛丽察·马滕", country: "CUB", mark: "70.06" },
  { series: "olympics", year: 1988, city: "汉城", champion: "玛蒂娜·赫尔曼", country: "GDR", mark: "72.30", note: "同场甘斯基71.88银；世界纪录保持者赖因施未获参赛资格" },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "里亚·施塔尔曼斯", country: "NED", mark: "65.36", note: "东方集团抵制之年；东欧高手集体缺席" },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "埃费林·雅尔", country: "GDR", mark: "69.96", note: "卫冕；世界纪录保持者（71.50）如约登顶" },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "埃费林·雅尔", country: "GDR", note: "时姓施拉克；夺冠成绩未能核实，暂缺" },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "法伊娜·梅尔尼克", country: "URS", mark: "66.62", note: "奥运纪录；罗马尼亚的梅尼斯65.06银；梅尔尼克随后四年统治该项目的纪录取向" },

  // —— 世界锦标赛（1983–2025 全 20 届） ——
  { series: "worlds", year: 2025, city: "东京", champion: "瓦拉丽·奥尔曼", country: "USA", mark: "69.48", note: "第三枚世锦赛金牌（2022/2023/2025）；荷兰的范克林肯67.50银、古巴的莫拉莱斯67.25铜" },
  { series: "worlds", year: 2023, city: "布达佩斯", champion: "劳拉加·陶萨加", country: "USA", mark: "69.49", note: "美国包揽前二（奥尔曼69.23银）；冯彬68.20铜" },
  { series: "worlds", year: 2022, city: "尤金", champion: "冯彬", country: "CHN", mark: "69.12", note: "中国最意外的一枚世界冠军之一；佩尔科维奇68.45银、奥尔曼68.30铜" },
  { series: "worlds", year: 2019, city: "多哈", champion: "亚伊梅·佩雷斯", country: "CUB", mark: "69.17", note: "古巴包揽前二（卡瓦列罗68.44银）" },
  { series: "worlds", year: 2017, city: "伦敦", champion: "桑德拉·佩尔科维奇", country: "CRO", mark: "70.31", note: "第二枚世锦赛金牌；澳大利亚的史蒂文斯69.64银" },
  { series: "worlds", year: 2015, city: "北京", champion: "德尼亚·卡瓦列罗", country: "CUB", mark: "69.28" },
  { series: "worlds", year: 2013, city: "莫斯科", champion: "桑德拉·佩尔科维奇", country: "CRO", mark: "67.99" },
  { series: "worlds", year: 2011, city: "大邱", champion: "李艳凤", country: "CHN", mark: "66.52", note: "中国首位女子铁饼世界冠军；德国的米勒65.97银" },
  { series: "worlds", year: 2009, city: "柏林", champion: "达妮·塞缪尔斯", country: "AUS", mark: "65.44" },
  { series: "worlds", year: 2007, city: "大阪", champion: "弗兰卡·迪奇", country: "GER", mark: "66.61", note: "第二枚世锦赛金牌（1999/2007）" },
  { series: "worlds", year: 2005, city: "赫尔辛基", champion: "弗兰卡·迪奇", country: "GER", mark: "66.56" },
  { series: "worlds", year: 2003, city: "巴黎", champion: "伊琳娜·亚特琴科", country: "BLR", mark: "67.32" },
  { series: "worlds", year: 2001, city: "埃德蒙顿", champion: "叶莉娜·兹韦列娃", country: "BLR", mark: "67.10", note: "第二枚世锦赛金牌（1995/2001）" },
  { series: "worlds", year: 1999, city: "塞维利亚", champion: "弗兰卡·迪奇", country: "GER", mark: "68.14" },
  { series: "worlds", year: 1997, city: "雅典", champion: "比阿特丽斯·福米纳", country: "NZL", mark: "66.82", note: "新西兰首枚世锦赛女子田径金牌" },
  { series: "worlds", year: 1995, city: "哥德堡", champion: "叶莉娜·兹韦列娃", country: "BLR", mark: "68.64" },
  { series: "worlds", year: 1993, city: "斯图加特", champion: "奥尔加·切尔尼亚夫斯卡娅", country: "RUS", mark: "67.40", note: "中国的闵春凤65.26铜——亚洲首枚该项目世锦赛奖牌" },
  { series: "worlds", year: 1991, city: "东京", champion: "茨韦坦卡·赫里斯托娃", country: "BUL", mark: "71.02", note: "锦标赛纪录；维卢达69.12银" },
  { series: "worlds", year: 1987, city: "罗马", champion: "玛蒂娜·赫尔曼", country: "GDR", mark: "71.62", note: "锦标赛纪录；东德包揽前二（甘斯基70.12银）" },
  { series: "worlds", year: 1983, city: "赫尔辛基", champion: "玛蒂娜·奥皮茨", country: "GDR", mark: "68.94", note: "首届世锦赛；即后来的赫尔曼——1983年时以夫姓奥皮茨报名，1987年起恢复本名再夺奥运与世界冠军" },

  // —— 亚运会（1998–2026 全八届） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "冯彬", country: "CHN", mark: "63.83", note: "中国包揽前二（姜智超62.25银，赛季最好）；泰国的因赛恩61.43铜（SB）；冯彬第三枚亚运奖牌、第二金" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "冯彬", country: "CHN", mark: "67.93", note: "赛事于2023年举行；赛会纪录；姜智超61.04银、印度的普尼亚58.62铜" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "陈扬", country: "CHN", mark: "65.12", note: "冯彬64.25银——中国包揽前二；印度的普尼亚62.26铜" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "西玛·普尼亚", country: "IND", mark: "61.03", note: "中国的Lu Xiaoxin 59.35银、Tan Jian 59.03铜" },
  { series: "asiangames", year: 2010, city: "广州", champion: "李艳凤", country: "CHN", mark: "66.18", note: "赛会纪录；宋爱民64.04银——中国包揽前二；印度的普尼亚61.94铜" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "宋爱民", country: "CHN", mark: "63.52", note: "马雪君62.43银、印度的普尼亚61.53铜" },
  { series: "asiangames", year: 2002, city: "釜山", champion: "尼尔姆·贾斯万特·辛格", country: "IND", mark: "64.55", note: "赛会纪录；宋爱民61.80银、马淑丽59.89铜" },
  { series: "asiangames", year: 1998, city: "曼谷", champion: "栾志莉", country: "CHN", mark: "63.43", note: "刘凤英59.34银——中国包揽前二；印度的辛格55.09铜" },
];
