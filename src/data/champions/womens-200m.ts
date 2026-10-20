import type { ChampionEntry } from "@/lib/types";

/**
 * 女子 200 米 · 历届大赛冠军
 * 空缺说明（宁缺毋滥，未能核实的届次暂缺）：
 *  - 奥运会：1964 年及以前为手计时口径，未能核实到可靠来源，暂缺；
 *    1968 起电计时时代全收；2000 年原冠军琼斯因兴奋剂被取消，
 *    金牌依国际奥委会决定递补给戴维斯-汤普森；
 *  - 世锦赛：1983–2025 全部 20 届已核；
 *  - 亚运会：1994 年及以前各届未能双源核实，暂缺；
 *    1998 起每届均有奖牌总表与战报双源核对。
 */
export const womens200mChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "Gabrielle Thomas", country: "USA", mark: "21.83", wind: "-0.6", note: "哈佛毕业的流行病学博士候选人；两天前百米摘银" },
  { series: "olympics", year: 2020, city: "东京", champion: "Elaine Thompson-Herah", country: "JAM", mark: "21.53", wind: "+0.8", note: "历史第二快（仅次于21.34）；100/200双卫冕——史上第一人；赛事于2021年举行" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "Elaine Thompson", country: "JAM", mark: "21.78", wind: "-0.1", note: "当届100/200双金；斯基珀斯21.88银" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "Allyson Felix", country: "USA", mark: "21.88", wind: "-0.2", note: "2004、2008两届银牌之后终于夺金" },
  { series: "olympics", year: 2008, city: "北京", champion: "Veronica Campbell-Brown", country: "JAM", mark: "21.74", wind: "+0.6", note: "卫冕；费利克斯21.93银" },
  { series: "olympics", year: 2004, city: "雅典", champion: "Veronica Campbell", country: "JAM", mark: "22.05", wind: "+0.8" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "Pauline Davis-Thompson", country: "BAH", mark: "22.27", note: "琼斯21.84夺冠后因兴奋剂被取消（2007年剥夺2000年成绩），银牌递补为金；贾亚辛格22.28递补银牌" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "Marie-José Pérec", country: "FRA", mark: "22.12", wind: "+0.3", note: "当届200/400双金，继1984布里斯科-胡克斯之后第一人" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "Gwen Torrence", country: "USA", mark: "21.81", wind: "-0.6", note: "半决赛21.72更快" },
  { series: "olympics", year: 1988, city: "汉城", champion: "Florence Griffith-Joyner", country: "USA", mark: "21.34", wind: "+1.3", wr: true, or: true, note: "现世界纪录兼奥运纪录；同日半决赛21.56亦破世界纪录" },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "Valerie Brisco-Hooks", country: "USA", mark: "21.81", wind: "-0.1", or: true, note: "当届200/400双金" },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "Bärbel Wöckel", country: "GDR", mark: "22.03", wind: "+1.5", or: true, note: "卫冕；东德王朝的中枢" },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "Bärbel Eckert", country: "GDR", mark: "22.37", wind: "0.0", or: true, note: "婚前的巴尔贝尔·埃克特，四年后以沃克尔之名卫冕" },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "Renate Stecher", country: "GDR", mark: "22.40", wind: "+1.1", or: true, note: "电计时口径下的世界纪录；当届100/200双金" },
  { series: "olympics", year: 1968, city: "墨西哥城", champion: "Irena Szewińska", country: "POL", mark: "22.58", wind: "+2.0", or: true, note: "电计时22.58为当时最快（手计时22.5）；高原；顺风恰在合规上限；1964东京之后在此卫冕，1976年转项400米再夺金" },

  // —— 世界锦标赛（1983–2025 全 20 届） ——
  { series: "worlds", year: 2025, city: "东京", champion: "Melissa Jefferson-Wooden", country: "USA", mark: "21.68", wind: "-0.1", note: "亨特22.14银、杰克逊22.18铜" },
  { series: "worlds", year: 2023, city: "布达佩斯", champion: "Shericka Jackson", country: "JAM", mark: "21.41", wind: "+0.1", note: "卫冕；历史第二快" },
  { series: "worlds", year: 2022, city: "尤金", champion: "Shericka Jackson", country: "JAM", mark: "21.45", wind: "+0.6", note: "历史第三快；决赛前三（杰克逊/弗雷泽-普赖斯/阿舍-史密斯）跑出当届最快的领奖台" },
  { series: "worlds", year: 2019, city: "多哈", champion: "Dina Asher-Smith", country: "GBR", mark: "21.88", wind: "+0.9", note: "英国纪录；此前已夺百米银牌" },
  { series: "worlds", year: 2017, city: "伦敦", champion: "Dafne Schippers", country: "NED", mark: "22.05", wind: "+0.8", note: "卫冕" },
  { series: "worlds", year: 2015, city: "北京", champion: "Dafne Schippers", country: "NED", mark: "21.63", wind: "+0.2", note: "欧洲纪录，距科赫的21.71只差0.08秒" },
  { series: "worlds", year: 2013, city: "莫斯科", champion: "Shelly-Ann Fraser-Pryce", country: "JAM", mark: "22.17", wind: "-0.3" },
  { series: "worlds", year: 2011, city: "大邱", champion: "Veronica Campbell-Brown", country: "JAM", mark: "22.22", wind: "-1.0", note: "世锦赛两连冠" },
  { series: "worlds", year: 2009, city: "柏林", champion: "Allyson Felix", country: "USA", mark: "22.02", wind: "-0.1", note: "三连冠（2005/2007/2009）" },
  { series: "worlds", year: 2007, city: "大阪", champion: "Allyson Felix", country: "USA", mark: "21.81", wind: "+1.7" },
  { series: "worlds", year: 2005, city: "赫尔辛基", champion: "Allyson Felix", country: "USA", mark: "22.16", wind: "+0.2", note: "19岁，史上最年轻的世锦赛200米冠军" },
  { series: "worlds", year: 2003, city: "巴黎", champion: "Anastasiya Kapachinskaya", country: "RUS", mark: "22.38", wind: "-0.3", note: "次年因药检阳性被禁赛，此冠依规保留" },
  { series: "worlds", year: 2001, city: "埃德蒙顿", champion: "Debbie Ferguson", country: "BAH", mark: "22.52", wind: "-0.8", note: "巴哈马的黄金一代；怀特22.56银" },
  { series: "worlds", year: 1999, city: "塞维利亚", champion: "Inger Miller", country: "USA", mark: "21.77", wind: "+0.6" },
  { series: "worlds", year: 1997, city: "雅典", champion: "Zhanna Pintusevich-Block", country: "UKR", mark: "22.32", note: "贾亚辛格22.39银——亚洲在世锦赛200米的最高名次；奥特伊22.40铜" },
  { series: "worlds", year: 1995, city: "哥德堡", champion: "Merlene Ottey", country: "JAM", mark: "22.12", wind: "-2.2", note: "顶风卫冕；35岁" },
  { series: "worlds", year: 1993, city: "斯图加特", champion: "Merlene Ottey", country: "JAM", mark: "21.98", wind: "0.0", note: "33岁终夺个人世界冠军" },
  { series: "worlds", year: 1991, city: "东京", champion: "Katrin Krabbe", country: "GER", mark: "22.09", wind: "-2.4", note: "顶风2.4夺冠，兼百米金牌；1992年后因兴奋剂被禁赛，此前成绩依规保留" },
  { series: "worlds", year: 1987, city: "罗马", champion: "Silke Möller", country: "GDR", mark: "21.74", wind: "+1.2", note: "当届100/200双金" },
  { series: "worlds", year: 1983, city: "赫尔辛基", champion: "Marita Koch", country: "GDR", mark: "22.13", wind: "+1.5", note: "首届世锦赛；世界纪录保持者如约登顶" },

  // —— 亚运会（1994 及以前暂缺） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "Shanti Pereira", country: "SGP", mark: "22.78", note: "9月27日决赛；卫冕；陈妤颉22.93银——两天前她刚以11.06打破百米赛会纪录，印度巴德拉23.20铜" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "Shanti Pereira", country: "SGP", mark: "23.03", note: "赛事于2023年举行；新加坡史上首枚亚运短跑金牌；李玉婷23.28银" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "Edidiong Odiong", country: "BRN", mark: "22.96", note: "当届100/200双金；杜蒂·昌德23.20银、韦永丽23.27铜" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "Olga Safronova", country: "KAZ", mark: "23.02", note: "韦永丽23.27银、福岛千里23.45铜" },
  { series: "asiangames", year: 2010, city: "广州", champion: "Chisato Fukushima", country: "JPN", mark: "23.62", note: "日本女飞人的亚运首金；武氏香23.74银" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "Ruqaya Al-Ghasra", country: "BRN", mark: "23.19", note: "包着头巾出赛的巴林女将，为海湾国家写下新页；胡比耶娃23.30银" },
  { series: "asiangames", year: 2002, city: "釜山", champion: "Saraswati Saha", country: "IND", mark: "23.28", note: "印度田径的高光；倪晓莉23.34银" },
  { series: "asiangames", year: 1998, city: "曼谷", champion: "Damayanthi Dharsha", country: "SRI", mark: "22.48", note: "赛会纪录，悬置至今二十八年未破；李雪梅22.53银、严剑葵23.15铜" },
];
