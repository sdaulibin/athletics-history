import type { ChampionEntry } from "@/lib/types";

/**
 * 女子 400 米 · 历届大赛冠军
 * 空缺说明（宁缺毋滥，未能核实的届次暂缺）：
 *  - 奥运会：女子400米1964年才进入奥运会，首届起收录（1964/1968
 *    为手计时或手计时为主口径，条目内注明）；
 *  - 世锦赛：1983–2025 全部 20 届已核；
 *  - 亚运会：1994 年及以前各届未能双源核实，暂缺；
 *    1998 起每届均有奖牌总表与战报双源核对。
 */
export const womens400mChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "玛丽莱迪·保利诺", country: "DOM", mark: "48.17", note: "多米尼加首枚女子奥运金牌；纳赛尔48.53银、布科维茨卡48.98铜" },
  { series: "olympics", year: 2020, city: "东京", champion: "肖娜·米勒-乌博", country: "BAH", mark: "48.36", note: "赛事于2021年举行；卫冕——继佩雷克之后第二人；保利诺49.20银" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "肖娜·米勒-乌博", country: "BAH", mark: "49.44", note: "俯冲撞线0.07秒险胜菲利克斯——奥运史上最著名的终点之一" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "桑娅·理查兹-罗斯", country: "USA", mark: "49.55", note: "第三次世锦赛挫折之后，终于等到的奥运金牌" },
  { series: "olympics", year: 2008, city: "北京", champion: "克里斯汀·奥胡鲁古", country: "GBR", mark: "49.62", note: "禁赛一年归来的正名之金" },
  { series: "olympics", year: 2004, city: "雅典", champion: "托妮克·威廉姆斯-达林", country: "BAH", mark: "49.42", note: "巴哈马女飞人的巅峰一季；格瓦拉49.56银" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "凯茜·弗里曼", country: "AUS", mark: "49.11", note: "原住民旗与国旗同擎——悉尼之夜属于整个澳大利亚" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "玛丽-若泽·佩雷克", country: "FRA", mark: "48.25", or: true, note: "卫冕；同届兼200米金牌——奥运史上第一位200/400双料女皇" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "玛丽-若泽·佩雷克", country: "FRA", mark: "48.83" },
  { series: "olympics", year: 1988, city: "汉城", champion: "奥莉加·布里兹金娜", country: "URS", mark: "48.65", note: "一届奥运400米与4×400米双金；48.65为奥运决赛纪录级别的表演" },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "瓦莱丽·布里斯科-胡克斯", country: "USA", mark: "48.83", note: "同届200/400双金；一年前还是两位孩子的母亲在看台上" },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "玛丽塔·科赫", country: "GDR", mark: "48.88", note: "世界纪录保持者如约登顶；5年后她把纪录定格在47.60" },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "伊雷娜·谢文斯卡", country: "POL", mark: "49.29", wr: true, or: true, note: "改写世界纪录；从1964年东京的200米银牌到此刻，横跨三届奥运项目转换" },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "莫妮卡·泽尔特", country: "GDR", mark: "51.08", note: "21岁；51.08为奥运纪录；东西德包揽金银（维尔登51.21银）" },
  { series: "olympics", year: 1968, city: "墨西哥城", champion: "科莱特·贝松", country: "FRA", mark: "52.03", note: "电计时52.03（手计时52.0）；掀翻世界纪录保持者利莲·博德，法国的全民偶像" },
  { series: "olympics", year: 1964, city: "东京", champion: "贝蒂·卡特伯特", country: "AUS", mark: "52.0", note: "女子400米首次进入奥运会；1956年三金之后隔八年的第四金，手计时口径" },

  // —— 世界锦标赛（1983–2025 全 20 届） ——
  { series: "worlds", year: 2025, city: "东京", champion: "悉尼·麦克劳林-列弗隆", country: "USA", mark: "47.78", note: "400米栏名将改项平跑首季即登顶；历史第二快——保利诺47.98银、纳赛尔48.19铜" },
  { series: "worlds", year: 2023, city: "布达佩斯", champion: "玛丽莱迪·保利诺", country: "DOM", mark: "48.76" },
  { series: "worlds", year: 2022, city: "尤金", champion: "肖娜·米勒-乌博", country: "BAH", mark: "49.11", note: "49.11为当年世界最好成绩" },
  { series: "worlds", year: 2019, city: "多哈", champion: "萨尔瓦·伊德·纳赛尔", country: "BRN", mark: "48.14", note: "亚洲纪录、史上第五快；米勒-乌博48.37银、菲利克斯49.74铜" },
  { series: "worlds", year: 2017, city: "伦敦", champion: "菲莉丝·弗朗西斯", country: "USA", mark: "49.92", note: "决赛雨夜，全场最不起眼的一枪" },
  { series: "worlds", year: 2015, city: "北京", champion: "阿莉森·菲利克斯", country: "USA", mark: "49.26", note: "第四枚世锦赛个人项目金牌之外的新疆域" },
  { series: "worlds", year: 2013, city: "莫斯科", champion: "克里斯汀·奥胡鲁古", country: "GBR", mark: "49.41", note: "第二金；最后十米逆转理查兹-罗斯" },
  { series: "worlds", year: 2011, city: "大邱", champion: "阿曼特勒·蒙绍", country: "BOT", mark: "49.56", note: "博茨瓦纳首枚世锦赛金牌；0.03秒险胜菲利克斯" },
  { series: "worlds", year: 2009, city: "柏林", champion: "桑娅·理查兹-罗斯", country: "USA", mark: "49.00", note: "后程连超带出的封后之战；10年后纳赛尔在多哈把决赛成绩推入48秒" },
  { series: "worlds", year: 2007, city: "大阪", champion: "克里斯汀·奥胡鲁古", country: "GBR", mark: "49.61", note: "禁赛归来后的第一顶世界冠军" },
  { series: "worlds", year: 2005, city: "赫尔辛基", champion: "托妮克·威廉姆斯-达林", country: "BAH", mark: "49.55" },
  { series: "worlds", year: 2003, city: "巴黎", champion: "阿娜·格瓦拉", country: "MEX", mark: "48.89", note: "墨西哥国家英雄；当季黄金联赛全胜而来" },
  { series: "worlds", year: 2001, city: "埃德蒙顿", champion: "艾米·姆巴凯·蒂亚姆", country: "SEN", mark: "49.86", note: "塞内加尔史上首枚世界田径金牌" },
  { series: "worlds", year: 1999, city: "塞维利亚", champion: "凯茜·弗里曼", country: "AUS", mark: "49.67", note: "卫冕" },
  { series: "worlds", year: 1997, city: "雅典", champion: "凯茜·弗里曼", country: "AUS", mark: "49.77" },
  { series: "worlds", year: 1995, city: "哥德堡", champion: "玛丽-若泽·佩雷克", country: "FRA", mark: "49.28", note: "继1991年东京之后再夺世锦赛；次年亚特兰大完成奥运卫冕" },
  { series: "worlds", year: 1993, city: "斯图加特", champion: "杰尔·迈尔斯-克拉克", country: "USA", mark: "49.82" },
  { series: "worlds", year: 1991, city: "东京", champion: "玛丽-若泽·佩雷克", country: "FRA", mark: "49.13" },
  { series: "worlds", year: 1987, city: "罗马", champion: "奥莉加·布里兹金娜", country: "URS", mark: "49.38", note: "49.38至今仍是锦标赛级别的门槛；次年奥运再夺金" },
  { series: "worlds", year: 1983, city: "赫尔辛基", champion: "雅尔米拉·克拉托赫维洛娃", country: "TCH", mark: "47.99", wr: true, note: "首届世锦赛；同届兼夺800米金牌（1:53.28，至今仍是世界纪录）" },

  // —— 亚运会（1994 及以前暂缺） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "萨尔瓦·伊德·纳赛尔", country: "BRN", mark: "49.20", note: "大幅刷新自己保持的赛会纪录（50.09），第二金（2018/2026）；伊朗扎雷伊52.38银、印度普拉奇53.21铜" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "凯米·阿德科娅", country: "BRN", mark: "50.66", note: "赛事于2023年举行；第二金（2014/2022）；纳赛尔50.92银" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "萨尔瓦·伊德·纳赛尔", country: "BRN", mark: "50.09", note: "赛会纪录；印度希玛·达斯50.79银" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "凯米·阿德科娅", country: "BRN", mark: "51.59", note: "越南郭氏兰52.06银、印度普瓦马52.36铜" },
  { series: "asiangames", year: 2010, city: "广州", champion: "奥尔加·捷列什科娃", country: "KAZ", mark: "51.97", note: "卫冕（2006/2010）；日本千叶麻美52.68银" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "奥尔加·捷列什科娃", country: "KAZ", mark: "51.86", note: "印度曼吉特·考尔52.17银、日本千叶麻美53.04铜" },
  { series: "asiangames", year: 2002, city: "釜山", champion: "达马扬蒂·达沙", country: "SRI", mark: "51.13", note: "与1998年合为200/400四金——亚运史上无人企及；印度比纳莫尔52.04银" },
  { series: "asiangames", year: 1998, city: "曼谷", champion: "达马扬蒂·达沙", country: "SRI", mark: "51.57", note: "当届200米22.48双金；中国陈玉香52.50银、哈萨克斯坦博德里斯卡娅53.00铜" },
];
