import type { ChampionEntry } from "@/lib/types";

/**
 * 男子 110 米栏 · 历届大赛冠军
 * 空缺说明（宁缺毋滥，未能核实的届次暂缺）：
 *  - 奥运会：1968 起电计时时代全收（1968–2024），冠军与成绩对照维基单项页；
 *    1932–1964 手计时时代未收；
 *  - 世锦赛：1983–2025 全部 20 届已核；
 *  - 亚运会：1998–2026 全八届已核（1998 曼谷起；2010 广州刘翔13.09为赛会纪录，
 *    2026年名古屋陈圆将13.15夺冠）；1994 及以前各届未能双源核实，暂缺。
 */
export const mens110mHurdlesChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "格兰特·霍洛韦", country: "USA", mark: "12.99", note: "首个奥运金牌；罗伯茨13.00银、布罗德贝尔13.09铜" },
  { series: "olympics", year: 2020, city: "东京", champion: "汉斯勒·帕奇门特", country: "JAM", mark: "13.04", note: "赛事于2021年举行；逆转霍洛韦（12.96）夺冠，牙买加自2016年后再夺该项目奥运金牌" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "奥马尔·麦克劳德", country: "JAM", mark: "13.05", note: "牙买加该项目首枚奥运金牌；奥尔特加13.06银、巴斯科13.24铜" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "阿里斯·梅里特", country: "USA", mark: "12.92", or: true, note: "同季布鲁塞尔12.80改写世界纪录；此后因肾病长期缺阵，复出后仍坚持出战东京奥运" },
  { series: "olympics", year: 2008, city: "北京", champion: "达龙·罗伯斯", country: "CUB", mark: "12.93" },
  { series: "olympics", year: 2004, city: "雅典", champion: "刘翔", country: "CHN", mark: "12.91", or: true, note: "平世界纪录、破奥运纪录；中国男子田径首枚奥运金牌，亚洲选手首次登上该项目世界纪录簿" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "阿涅尔·加西亚", country: "CUB", mark: "13.00" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "艾伦·约翰逊", country: "USA", mark: "12.95", or: true, note: "奥运纪录；两周前美国选拔赛12.92" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "马克·麦科伊", country: "CAN", mark: "13.12", note: "加拿大该项目唯一一枚奥运金牌" },
  { series: "olympics", year: 1988, city: "汉城", champion: "罗杰·金厄姆", country: "USA", mark: "12.98", note: "奥运纪录；1984、1988两届奥运金牌，此前一年苏黎世12.92改写世界纪录" },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "罗杰·金厄姆", country: "USA", mark: "13.20", note: "东方集团抵制之年；队友福斯特13.23银" },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "托马斯·蒙克尔特", country: "GDR", mark: "13.39", note: "1970年起东德在该项目上的第一枚奥运金牌" },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "居伊·德吕", country: "FRA", mark: "13.30", note: "法国首枚男子110米栏奥运金牌；卡萨尼亚斯13.33银" },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "罗德·米尔本", country: "USA", mark: "13.24", wr: true, or: true, note: "外电计时时代首项110米栏世界纪录；德吕13.34银" },
  { series: "olympics", year: 1968, city: "墨西哥城", champion: "威利·达文波特", country: "USA", mark: "13.33", note: "电计时口径；此前1968年美国选拔赛米尔本的手计时13.2未被承认" },
  // —— 世界锦标赛（1983–2025 全 20 届） ——
  { series: "worlds", year: 2025, city: "东京", champion: "科德尔·廷奇", country: "USA", mark: "12.99", note: "2025年绍兴柯桥12.87为世界最好成绩；本内特13.08银、梅森13.12铜" },
  { series: "worlds", year: 2023, city: "布达佩斯", champion: "格兰特·霍洛韦", country: "USA", mark: "12.96", note: "三连冠；帕奇门特13.07银" },
  { series: "worlds", year: 2022, city: "尤金", champion: "格兰特·霍洛韦", country: "USA", mark: "13.03", note: "卫冕；美国的坎宁安13.08银" },
  { series: "worlds", year: 2019, city: "多哈", champion: "格兰特·霍洛韦", country: "USA", mark: "13.10", note: "首枚世界大赛金牌；舒边科夫13.15银" },
  { series: "worlds", year: 2017, city: "伦敦", champion: "奥马尔·麦克劳德", country: "JAM", mark: "13.04" },
  { series: "worlds", year: 2015, city: "北京", champion: "谢尔盖·舒边科夫", country: "RUS", mark: "12.98", note: "俄罗斯纪录；帕奇门特13.03银、梅里特13.04铜" },
  { series: "worlds", year: 2013, city: "莫斯科", champion: "大卫·奥利弗", country: "USA", mark: "13.00" },
  { series: "worlds", year: 2011, city: "大邱", champion: "杰森·理查森", country: "USA", mark: "13.16", note: "冠军罗伯斯因两次干扰刘翔（含最后一个栏）被取消资格；刘翔13.27递补银牌，理查森由银升金，英国的特纳由第四升铜" },
  { series: "worlds", year: 2009, city: "柏林", champion: "瑞安·布拉思韦特", country: "BAR", mark: "13.14", note: "巴巴多斯首枚世锦赛金牌；特拉梅尔13.15银、佩恩13.15铜" },
  { series: "worlds", year: 2007, city: "大阪", champion: "刘翔", country: "CHN", mark: "12.95", note: "中国首枚男子110米栏世界冠军；大满贯（奥运+世锦赛+世界纪录）；特拉梅尔12.99银" },
  { series: "worlds", year: 2005, city: "赫尔辛基", champion: "拉吉·杜库雷", country: "FRA", mark: "13.07", note: "刘翔13.08银、约翰逊13.10铜" },
  { series: "worlds", year: 2003, city: "巴黎", champion: "艾伦·约翰逊", country: "USA", mark: "13.12", note: "第四枚世锦赛金牌" },
  { series: "worlds", year: 2001, city: "埃德蒙顿", champion: "艾伦·约翰逊", country: "USA", mark: "13.04" },
  { series: "worlds", year: 1999, city: "塞维利亚", champion: "科林·杰克逊", country: "GBR", mark: "13.04" },
  { series: "worlds", year: 1997, city: "雅典", champion: "艾伦·约翰逊", country: "USA", mark: "12.93", note: "杰克逊13.05银" },
  { series: "worlds", year: 1995, city: "哥德堡", champion: "艾伦·约翰逊", country: "USA", mark: "13.00" },
  { series: "worlds", year: 1993, city: "斯图加特", champion: "科林·杰克逊", country: "GBR", mark: "12.91", wr: true, note: "世锦赛决赛改写世界纪录" },
  { series: "worlds", year: 1991, city: "东京", champion: "格雷格·福斯特", country: "USA", mark: "13.06", note: "三连冠（1983/1987/1991）" },
  { series: "worlds", year: 1987, city: "罗马", champion: "格雷格·福斯特", country: "USA", mark: "13.21" },
  { series: "worlds", year: 1983, city: "赫尔辛基", champion: "格雷格·福斯特", country: "USA", mark: "13.42" },
  // —— 亚运会（1998–2026 全八届） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "陈圆将", country: "CHN", mark: "13.15", note: "日本村竹拉希德13.29银、菲律宾卡邦13.48铜（赛季最好）；村竹2025年以12.92改写日本纪录" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "雅库布·阿尔-尤哈", country: "KUW", mark: "13.41", note: "赛事于2023年举行；与日本的高山峻野同为13.41，千分位险胜；中国的徐卓一13.50铜——1998年以来中国首次丢掉该项目亚运金牌" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "谢文骏", country: "CHN", mark: "13.34", note: "中国台北的陈奎儒13.39银、日本的高山峻野13.48铜" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "谢文骏", country: "CHN", mark: "13.36", note: "刘翔之后中国接棒者；韩国的金秉俊13.43银" },
  { series: "asiangames", year: 2010, city: "广州", champion: "刘翔", country: "CHN", mark: "13.09", note: "赛会纪录，保持至今；三连冠，中国包揽前二（史冬鹏13.38银）；+1.1风速" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "刘翔", country: "CHN", mark: "13.15", note: "卫冕；史冬鹏13.28银；−0.2风速" },
  { series: "asiangames", year: 2002, city: "釜山", champion: "刘翔", country: "CHN", mark: "13.27", note: "赛会纪录；+0.3风速；日本谷川聪13.83银" },
  { series: "asiangames", year: 1998, city: "曼谷", champion: "陈雁浩", country: "CHN", mark: "13.65", note: "−0.1风速；哈萨克斯坦斯克里亚连科13.86银、卡塔尔的阿尔-多萨里13.99铜" },
];
