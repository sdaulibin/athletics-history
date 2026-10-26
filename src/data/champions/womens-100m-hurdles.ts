import type { ChampionEntry } from "@/lib/types";

/**
 * 女子 100 米栏 · 历届大赛冠军
 * 空缺说明（宁缺毋滥，未能核实的届次暂缺）：
 *  - 奥运会：1972 起（100米栏成为奥运项目）收录历届冠军；
 *    mark 仅保留经复核的夺冠成绩（奥运纪录、或有据可查），
 *    未能核实者留空，由前端显示「—」；
 *  - 世锦赛：1983–2025 全 20 届收录，成绩逐条核对；
 *  - 亚运会：1998–2026 全八届收录；2026 名古屋福部真子12.74（−0.2）夺冠。
 */
export const womens100mHurdlesChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "马赛·拉塞尔", country: "USA", mark: "12.20", note: "桑巴-马耶拉12.34银、卡马乔-奎恩12.36铜" },
  { series: "olympics", year: 2020, city: "东京", champion: "贾丝敏·卡马乔-奎恩", country: "PUR", note: "赛事于2021年举行；波多黎各首枚奥运金牌；夺冠成绩未核实，暂缺" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "布里安娜·罗林斯", country: "USA", note: "美国包揽前三（罗林斯、阿里、卡斯特林）；夺冠成绩未核实，暂缺" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "萨莉·皮尔森", country: "AUS", or: true, note: "奥运纪录；道恩·哈珀12.37（顺风1.8）屈居亚军" },
  { series: "olympics", year: 2008, city: "北京", champion: "道恩·哈珀", country: "USA", note: "皮尔森获季军；夺冠成绩未核实，暂缺" },
  { series: "olympics", year: 2004, city: "雅典", champion: "琼安娜·海斯", country: "USA", mark: "12.37", or: true, note: "奥运纪录" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "奥尔加·希希吉娜", country: "KAZ", note: "哈萨克斯坦选手（亚洲纪录12.44保持者）；夺冠成绩未核实，暂缺" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "柳德米拉·恩奎斯特", country: "SWE", or: true, note: "奥运纪录；前苏联选手入籍瑞典后夺冠" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "武拉·帕图利杜", country: "GRE", note: "希腊首枚女子田径奥运金牌；夺冠成绩未核实，暂缺" },
  { series: "olympics", year: 1988, city: "汉城", champion: "约尔丹卡·东科娃", country: "BUL", mark: "12.38", or: true, note: "奥运纪录，保持至2004年；同年8月她刚以12.21改写世界纪录" },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "贝妮塔·菲茨杰拉德-布朗", country: "USA", note: "东方集团抵制之年；夺冠成绩未核实，暂缺" },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "维拉·科米索娃", country: "URS", note: "夺冠成绩未核实，暂缺" },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "约翰娜·沙勒", country: "GDR", note: "东德选手；夺冠成绩未核实，暂缺" },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "安妮莉·埃哈特", country: "GDR", mark: "12.59", wr: true, or: true, note: "女子100米栏成为奥运项目的第一届；夺冠成绩即世界纪录" },

  // —— 世界锦标赛（1983–2025 全 20 届） ——
  { series: "worlds", year: 2025, city: "东京", champion: "迪塔吉·卡姆邦吉", country: "SUI", mark: "12.24", note: "瑞士纪录；阿穆桑12.29银、斯塔克12.34铜" },
  { series: "worlds", year: 2023, city: "布达佩斯", champion: "丹妮尔·威廉姆斯", country: "JAM", mark: "12.43", note: "第二次世界冠军（2015/2023）；+0.2；卡马乔-奎恩12.44银" },
  { series: "worlds", year: 2022, city: "尤金", champion: "托比·阿穆桑", country: "NGR", mark: "12.06", note: "超风速（+2.5），不计为世界纪录；此前半决赛12.12已破世界纪录" },
  { series: "worlds", year: 2019, city: "多哈", champion: "尼亚·阿里", country: "USA", mark: "12.34", note: "哈里森12.46银、威廉姆斯12.47铜" },
  { series: "worlds", year: 2017, city: "伦敦", champion: "萨莉·皮尔森", country: "AUS", mark: "12.59", note: "哈珀-纳尔逊12.63银" },
  { series: "worlds", year: 2015, city: "北京", champion: "丹妮尔·威廉姆斯", country: "JAM", mark: "12.57", note: "首夺世界冠军；罗勒德12.59银" },
  { series: "worlds", year: 2013, city: "莫斯科", champion: "布里安娜·罗林斯", country: "USA", mark: "12.44", note: "皮尔森12.50银" },
  { series: "worlds", year: 2011, city: "大邱", champion: "萨莉·皮尔森", country: "AUS", mark: "12.28", note: "锦标赛纪录、大洋洲纪录；+1.1" },
  { series: "worlds", year: 2009, city: "柏林", champion: "布丽吉特·福斯特-海尔顿", country: "JAM", mark: "12.51", note: "洛佩斯-施利普12.54银" },
  { series: "worlds", year: 2007, city: "大阪", champion: "米歇尔·佩里", country: "USA", mark: "12.46", note: "费利西安12.49银" },
  { series: "worlds", year: 2005, city: "赫尔辛基", champion: "米歇尔·佩里", country: "USA", mark: "12.66", note: "卫冕" },
  { series: "worlds", year: 2003, city: "巴黎", champion: "佩尔迪塔·费利西安", country: "CAN", mark: "12.53", note: "加拿大纪录；福斯特12.57银" },
  { series: "worlds", year: 2001, city: "埃德蒙顿", champion: "安贾内特·柯克兰", country: "USA", mark: "12.42" },
  { series: "worlds", year: 1999, city: "塞维利亚", champion: "盖尔·德弗斯", country: "USA", mark: "12.37", note: "阿洛齐12.44改写非洲纪录" },
  { series: "worlds", year: 1997, city: "雅典", champion: "柳德米拉·恩奎斯特", country: "SWE", mark: "12.50", note: "季米特洛娃12.58银" },
  { series: "worlds", year: 1995, city: "哥德堡", champion: "盖尔·德弗斯", country: "USA", mark: "12.68", note: "希希吉娜12.80银" },
  { series: "worlds", year: 1993, city: "斯图加特", champion: "盖尔·德弗斯", country: "USA", mark: "12.46", note: "美国纪录；此后她1995、1999年再度登顶" },
  { series: "worlds", year: 1991, city: "东京", champion: "柳德米拉·纳罗日连科", country: "URS", mark: "12.59", note: "次年（1992）以12.26再破纪录；德弗斯12.63银" },
  { series: "worlds", year: 1987, city: "罗马", champion: "金卡·扎戈尔切娃", country: "BUL", mark: "12.34", note: "锦标赛纪录；一年后她本人在兹拉马创造世界纪录（12.25）" },
  { series: "worlds", year: 1983, city: "赫尔辛基", champion: "贝蒂娜·扬", country: "GDR", mark: "12.35", note: "首届世锦赛" },

  // —— 亚运会（1998–2026 全八届） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "福部真子", country: "JPN", mark: "12.74", note: "决赛−0.2，赛会纪录；日本包揽前二（中岛瞳12.78）；吴艳妮13.12铜；中国台北张博雅13.17第四" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "林雨薇", country: "CHN", mark: "12.74", note: "赛事于2023年举行；印度雅拉吉12.91银、日本田中有美13.04铜；0.0风速；吴艳妮抢跑取消资格" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "郑慧任", country: "KOR", mark: "13.20", note: "+0.2；印尼诺瓦13.33银、中国香港吕丽瑶13.42铜" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "吴水娇", country: "CHN", mark: "12.72", note: "中国选手；孙雅薇13.05银、木村绫子13.25铜" },
  { series: "asiangames", year: 2010, city: "广州", champion: "李延京", country: "KOR", mark: "13.23", note: "0.0风速；哈萨克斯坦伊沃宁斯卡娅13.24银、中国的孙雅薇13.27铜" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "刘静", country: "CHN", mark: "12.93", note: "冯云12.94银（中国包揽前二）；韩国李延京13.20铜" },
  { series: "asiangames", year: 2002, city: "釜山", champion: "冯云", country: "CHN", mark: "12.96", note: "+0.4；中国包揽前二（苏懿萍13.01银）；泰国罗伯茨13.07铜" },
  { series: "asiangames", year: 1998, city: "曼谷", champion: "奥尔加·希希吉娜", country: "KAZ", mark: "12.63", note: "−0.6，赛会纪录保持至今（2022年林雨薇12.74未超越）；中国刘静12.89银、斯里兰卡库拉万萨13.08铜" },
];
