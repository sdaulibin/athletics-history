import type { ChampionEntry } from "@/lib/types";

/**
 * 男子撑杆跳高 · 历届大赛冠军
 * 空缺说明（宁缺毋滥）：
 *  - 奥运会：1896 起全收，逐届成绩取自 Olympedia 赛事页（含决赛高度、金牌/纪录标注）；
 *    1908 年两名美国选手并列金牌，本站按「并列冠军」记录；
 *  - 世锦赛：1983–2025 全部 20 届已核（决赛成绩与 alltime-athletics 总榜交叉核对）；
 *  - 亚运会：1998 起每届均有奖牌总表核对（1994 及以前从缺）。
 */
export const mensPoleVaultChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "阿尔曼德·杜普兰蒂斯", country: "SWE", mark: "6.25", or: true, note: "成功卫冕，肯德里克斯5.95米银、卡拉利斯5.90米铜" },
  { series: "olympics", year: 2020, city: "东京", champion: "阿尔曼德·杜普兰蒂斯", country: "SWE", mark: "6.02", note: "赛事于2021年举行；21岁的首次奥运登顶" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "蒂亚戈·布拉兹", country: "BRA", mark: "6.03", or: true, note: "主场爆冷；拉维莱涅5.98米银" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "雷诺·拉维莱涅", country: "FRA", mark: "5.97", note: "德国双雄包揽银铜：奥托5.91米、霍尔茨德佩5.91米" },
  { series: "olympics", year: 2008, city: "北京", champion: "史蒂夫·胡克", country: "AUS", mark: "5.96", note: "最后一次试跳定胜负；卢基扬年科5.85米银" },
  { series: "olympics", year: 2004, city: "雅典", champion: "蒂姆·麦克", country: "USA", mark: "5.95", or: true, note: "最后一次机会上越过，史蒂文森5.90米同国银" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "尼克·海松", country: "USA", mark: "5.90", note: "美国1-2：约翰逊5.90米银（按试跳次数差排名）" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "让·加尔菲奥内", country: "FRA", mark: "5.92", or: true, note: "特兰登科夫5.92米银、蒂翁奇克5.92米铜——三人同高，按失误次数分列" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "马克西姆·塔拉索夫", country: "EUN", mark: "5.80", note: "以独联体名义出战；布勃卡三次试跳失败、卫冕梦碎" },
  { series: "olympics", year: 1988, city: "汉城", champion: "谢尔盖·布勃卡", country: "URS", mark: "5.90", or: true, note: "苏联包揽前三（加陶林5.85、叶戈罗夫5.80）" },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "皮埃尔·基农", country: "FRA", mark: "5.75", note: "塔利5.65米银；维尼隆与贝尔5.60米并列铜——苏联缺席的一届" },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "瓦迪斯瓦夫·科扎凯维奇", country: "POL", mark: "5.78", wr: true, note: "世界纪录夺冠；希卢萨尔斯基与沃尔科夫5.65米并列银" },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "塔德乌什·希卢萨尔斯基", country: "POL", mark: "5.50", note: "与卡利奥迈基、罗伯茨三人同为5.50米，按失误次数分金" },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "沃尔夫冈·诺德维希", country: "GDR", mark: "5.50", or: true, note: "终结美国自1896年以来对该项目的垄断" },
  { series: "olympics", year: 1968, city: "墨西哥城", champion: "鲍勃·西格伦", country: "USA", mark: "5.40", or: true, note: "高原（约2240米），希普罗夫斯基与诺德维希5.40米并列银" },
  { series: "olympics", year: 1964, city: "东京", champion: "弗雷德·汉森", country: "USA", mark: "5.10", or: true, note: "德国人包揽银铜（赖因哈特5.05、莱纳茨5.00）" },
  { series: "olympics", year: 1960, city: "罗马", champion: "唐·布拉格", country: "USA", mark: "4.70", or: true, note: "玻璃纤维竿时代的第一位奥运冠军" },
  { series: "olympics", year: 1956, city: "墨尔本", champion: "鲍勃·理查兹", country: "USA", mark: "4.56", or: true, note: "卫冕成功，古托夫斯基4.53米银" },
  { series: "olympics", year: 1952, city: "赫尔辛基", champion: "鲍勃·理查兹", country: "USA", mark: "4.55", or: true, note: "此后1956年再卫冕，是该项目唯一的两届奥运冠军" },
  { series: "olympics", year: 1948, city: "伦敦", champion: "吉恩·史密斯", country: "USA", mark: "4.30", note: "雨中的伦敦；卡塔亚4.20米银" },
  { series: "olympics", year: 1936, city: "柏林", champion: "厄尔·梅多斯", country: "USA", mark: "4.35", or: true, note: "日本人西田修平、大江季雄并列银铜" },
  { series: "olympics", year: 1932, city: "洛杉矶", champion: "比尔·米勒", country: "USA", mark: "4.315", or: true, note: "西田修平4.30米银" },
  { series: "olympics", year: 1928, city: "阿姆斯特丹", champion: "萨宾·卡尔", country: "USA", mark: "4.20", or: true, note: "雨战；奥运纪录，美国包揽前三" },
  { series: "olympics", year: 1924, city: "巴黎", champion: "李·巴恩斯", country: "USA", mark: "3.95", note: "美国包揽前三：格雷厄姆3.95米银、布鲁克3.90米铜" },
  { series: "olympics", year: 1920, city: "安特卫普", champion: "弗兰克·福斯", country: "USA", mark: "4.09", wr: true, note: "人类首次越过4米线" },
  { series: "olympics", year: 1912, city: "斯德哥尔摩", champion: "哈里·巴布科克", country: "USA", mark: "3.95", or: true, note: "两名美国选手3.85米并列银" },
  { series: "olympics", year: 1908, city: "伦敦", champion: "阿尔弗雷德·吉尔伯特", country: "USA", mark: "3.71", or: true, note: "与同国的埃德·库克并列金牌（3.71米，奥运纪录）——奥运史上该项目唯一的双冠军" },
  { series: "olympics", year: 1904, city: "圣路易斯", champion: "查尔斯·德沃夏克", country: "USA", mark: "3.50", or: true, note: "美国包揽前五" },
  { series: "olympics", year: 1900, city: "巴黎", champion: "欧文·巴克斯特", country: "USA", mark: "3.30", or: true, note: "与1896年冠军同高（3.30米）" },
  { series: "olympics", year: 1896, city: "雅典", champion: "威廉·霍伊特", country: "USA", mark: "3.30", or: true, note: "首届现代奥运会的撑杆跳冠军；奥运纪录" },

  // —— 世界锦标赛（1983–2025 全 20 届） ——
  { series: "worlds", year: 2025, city: "东京", champion: "阿尔曼德·杜普兰蒂斯", country: "SWE", mark: "6.30", wr: true, note: "三连冠（2022/2023/2025）" },
  { series: "worlds", year: 2023, city: "布达佩斯", champion: "阿尔曼德·杜普兰蒂斯", country: "SWE", mark: "6.10", note: "卫冕之战；奥比纳6.00米银、利塞克与阿尔-希扎姆5.95米并列铜" },
  { series: "worlds", year: 2022, city: "尤金", champion: "阿尔曼德·杜普兰蒂斯", country: "SWE", mark: "6.21", wr: true, note: "首次加冕世锦赛" },
  { series: "worlds", year: 2019, city: "多哈", champion: "萨姆·肯德里克斯", country: "USA", mark: "5.97", note: "第二冠；杜普兰蒂斯同为5.97米、按失误次数居银" },
  { series: "worlds", year: 2017, city: "伦敦", champion: "萨姆·肯德里克斯", country: "USA", mark: "5.95", note: "波兰的利塞克5.89米铜——美国自2007年后的首冠" },
  { series: "worlds", year: 2015, city: "北京", champion: "肖恩西·巴伯", country: "CAN", mark: "5.90", note: "加拿大首枚该项目世锦赛金牌；德国人霍尔茨德佩5.90米银" },
  { series: "worlds", year: 2013, city: "莫斯科", champion: "拉斐尔·霍尔茨德佩", country: "GER", mark: "5.89", note: "冷门之金；法国人拉维莱涅5.89米银" },
  { series: "worlds", year: 2011, city: "大邱", champion: "帕维尔·沃伊切霍夫斯基", country: "POL", mark: "5.90", note: "波兰继1980年奥运冠军科扎凯维奇之后的又一次世界大赛登顶" },
  { series: "worlds", year: 2009, city: "柏林", champion: "史蒂夫·胡克", country: "AUS", mark: "5.90", note: "澳大利亚的世锦赛登顶；卢基扬年科5.85米银" },
  { series: "worlds", year: 2007, city: "大阪", champion: "布拉德·沃克", country: "USA", mark: "5.86", note: "美国选手的世锦赛登顶" },
  { series: "worlds", year: 2005, city: "赫尔辛基", champion: "伦斯·布洛姆", country: "NED", mark: "5.80", note: "荷兰首枚田径世锦赛金牌；世锦赛史上最低的夺冠高度" },
  { series: "worlds", year: 2003, city: "巴黎", champion: "朱塞佩·吉比利斯科", country: "ITA", mark: "5.90", note: "意大利首枚该项目世锦赛金牌" },
  { series: "worlds", year: 2001, city: "埃德蒙顿", champion: "德米特里·马尔科夫", country: "AUS", mark: "6.05", note: "澳大利亚纪录；生于俄罗斯的马尔科夫为澳大利亚夺金" },
  { series: "worlds", year: 1999, city: "塞维利亚", champion: "马克西姆·塔拉索夫", country: "RUS", mark: "6.02", note: "塔拉索夫6.02米登顶，为其生涯最高" },
  { series: "worlds", year: 1997, city: "雅典", champion: "谢尔盖·布勃卡", country: "UKR", mark: "6.01", note: "六连冠完成——同一项目无人接近" },
  { series: "worlds", year: 1995, city: "哥德堡", champion: "谢尔盖·布勃卡", country: "UKR", mark: "5.92", note: "第五冠" },
  { series: "worlds", year: 1993, city: "斯图加特", champion: "谢尔盖·布勃卡", country: "UKR", mark: "6.00", note: "第四冠——那年9月他还在伦敦跳出6.05米" },
  { series: "worlds", year: 1991, city: "东京", champion: "谢尔盖·布勃卡", country: "URS", mark: "5.95", note: "第三冠" },
  { series: "worlds", year: 1987, city: "罗马", champion: "谢尔盖·布勃卡", country: "URS", mark: "5.85", note: "第二冠" },
  { series: "worlds", year: 1983, city: "赫尔辛基", champion: "谢尔盖·布勃卡", country: "URS", mark: "5.70", note: "首届世锦赛；19岁的布勃卡第一次世界大赛登顶" },

  // —— 亚运会（1998 起） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "欧内斯特·奥比纳", country: "PHI", mark: "5.91", note: "赛会纪录；中国的姚捷与李晨阳同为5.70米，分列银铜" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "欧内斯特·奥比纳", country: "PHI", mark: "5.90", note: "赛事于2023年举行；赛会纪录，黄博凯与阿尔-希扎姆5.65米并列银铜" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "山本圣途", country: "JPN", mark: "5.70", note: "赛会纪录；中国姚捷与泰国阿姆萨姆昂5.50米并列银铜" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "薛长锐", country: "CHN", mark: "5.55", note: "泽野大地同为5.55米、按试跳次数居银；韩国陈敏燮5.45米铜" },
  { series: "asiangames", year: 2010, city: "广州", champion: "杨雁盛", country: "CHN", mark: "5.50", note: "乌兹别克斯坦的安德烈耶夫与韩国金裕锡5.30米并列银" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "泽野大地", country: "JPN", mark: "5.60", note: "安德烈耶夫5.55米银、杨雁盛5.50米铜" },
  { series: "asiangames", year: 2002, city: "釜山", champion: "格里戈里·叶戈罗夫", country: "KAZ", mark: "5.40", note: "与安田悟同为5.40米，按试跳次数分金；小林史明5.20米铜" },
  { series: "asiangames", year: 1998, city: "曼谷", champion: "伊戈尔·波塔波维奇", country: "KAZ", mark: "5.55", note: "亚洲纪录保持者（5.92米）的亚运登顶；韩国金哲均5.40米银" },
];
