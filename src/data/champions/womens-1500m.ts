import type { ChampionEntry } from "@/lib/types";

/**
 * 女子 1500 米 · 历届大赛冠军
 * 空缺说明（宁缺毋滥）：
 *  - 奥运会：1972（设项年）起全收，手计时口径条目注明；
 *  - 世锦赛：1983–2025 全部 20 届已核；
 *  - 亚运会：1998 起每届均有奖牌总表核对。
 */
export const womens1500mChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "费斯·基皮耶贡", country: "KEN", mark: "3:51.29", or: true, note: "奥运纪录；三连冠——决赛前五名全部跑进3:54" },
  { series: "olympics", year: 2020, city: "东京", champion: "费斯·基皮耶贡", country: "KEN", mark: "3:53.11", note: "赛事于2021年举行；卫冕之战" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "费斯·基皮耶贡", country: "KEN", mark: "4:08.92", note: "首届参赛即夺冠——慢决赛中的后程决胜" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "玛丽亚姆·优素福·贾马尔", country: "BRN", mark: "4:10.74", note: "递补冠军：原冠亚军均因兴奋剂被取消——史上最曲折的领奖台之一" },
  { series: "olympics", year: 2008, city: "北京", champion: "南希·杰贝特·兰加特", country: "KEN", mark: "4:00.23", note: "基皮耶贡之前，肯尼亚在该项目唯一的奥运女皇" },
  { series: "olympics", year: 2004, city: "雅典", champion: "凯莉·霍尔姆斯", country: "GBR", mark: "3:57.90", note: "同届800/1500双金——英国「双金之夜」" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "努里娅·梅拉-贝尼达", country: "ALG", mark: "4:05.10", note: "布勒梅卡之后的阿尔及利亚第二位奥运中跑冠军" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "斯韦特兰娜·马斯特尔科娃", country: "RUS", mark: "4:00.83", note: "同届800/1500双金——苏联解体后俄罗斯中跑的短暂回光" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "哈西芭·布勒梅卡", country: "ALG", mark: "3:55.30", note: "阿尔及利亚暨非洲及阿拉伯世界首枚女子奥运径赛金牌——看台上的国旗与人浪" },
  { series: "olympics", year: 1988, city: "汉城", champion: "保拉·伊万", country: "ROU", mark: "3:53.96", or: true, note: "奥运纪录，悬置38年至今——决赛4:00内完赛者六人，罗马尼亚人的独舞" },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "加布里埃拉·多里奥", country: "ITA", mark: "4:03.19", note: "决赛后程制胜——罗马尼亚的普伊卡4:03.76摘银" },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "塔季扬娜·卡赞金娜", country: "URS", mark: "3:56.6", wr: true, note: "世界纪录夺冠并卫冕——奥运决赛史上罕见的WR之夜" },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "塔季扬娜·卡赞金娜", country: "URS", mark: "4:05.48", note: "首冠；此后四夺奥运中跑金牌的起点" },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "柳德米拉·布拉金娜", country: "URS", mark: "4:01.4", wr: true, note: "电计时4:01.38，官方记4:01.4；设项首届——单届三破世界纪录的第三步" },

  // —— 世界锦标赛（1983–2025 全 20 届） ——
  { series: "worlds", year: 2025, city: "东京", champion: "费斯·基皮耶贡", country: "KEN", mark: "3:52.15", note: "四连冠（2017/2022/2023/2025）——世锦赛该项目历史第一人" },
  { series: "worlds", year: 2023, city: "布达佩斯", champion: "费斯·基皮耶贡", country: "KEN", mark: "3:54.87", note: "决赛冲刺换道被罚后改判保金——悬念留到最后一刻" },
  { series: "worlds", year: 2022, city: "尤金", champion: "费斯·基皮耶贡", country: "KEN", mark: "4:07.71" },
  { series: "worlds", year: 2019, city: "多哈", champion: "西凡·哈桑", country: "NED", mark: "3:51.95", note: "锦标赛纪录，保持至今；同届10000米亦夺金——1500/10000双冠的空前跨度" },
  { series: "worlds", year: 2017, city: "伦敦", champion: "费斯·基皮耶贡", country: "KEN", mark: "4:02.59", note: "首届世锦赛夺冠——此后再未让金牌旁落" },
  { series: "worlds", year: 2015, city: "北京", champion: "根泽贝·迪巴巴", country: "ETH", mark: "4:08.09", note: "赛前43天她刚把世界纪录改写为3:50.07——慢决赛的智慧" },
  { series: "worlds", year: 2013, city: "莫斯科", champion: "阿贝芭·阿雷加维", country: "SWE", mark: "4:02.67", note: "埃塞俄比亚出生、为瑞典出战" },
  { series: "worlds", year: 2011, city: "大邱", champion: "珍妮弗·辛普森", country: "USA", mark: "4:05.40", note: "美国在该项目的首枚世锦赛奖牌即是金牌" },
  { series: "worlds", year: 2009, city: "柏林", champion: "玛丽亚姆·优素福·贾马尔", country: "BRN", mark: "4:03.74", note: "卫冕之战" },
  { series: "worlds", year: 2007, city: "大阪", champion: "玛丽亚姆·优素福·贾马尔", country: "BRN", mark: "3:58.75", note: "巴林暨海湾国家的首枚世锦赛女子径赛金牌" },
  { series: "worlds", year: 2005, city: "赫尔辛基", champion: "塔季扬娜·托马绍娃", country: "RUS", mark: "4:00.35", note: "卫冕之战" },
  { series: "worlds", year: 2003, city: "巴黎", champion: "塔季扬娜·托马绍娃", country: "RUS", mark: "3:58.52" },
  { series: "worlds", year: 2001, city: "埃德蒙顿", champion: "加布里埃拉·萨博", country: "ROU", mark: "4:00.57", note: "1500/5000双料女王的全满贯拼图" },
  { series: "worlds", year: 1999, city: "塞维利亚", champion: "斯韦特兰娜·马斯特尔科娃", country: "RUS", mark: "3:59.53", note: "三届大赛（奥运+两届世锦赛）全胜——全满贯收官" },
  { series: "worlds", year: 1997, city: "雅典", champion: "卡拉·萨克拉门托", country: "POR", mark: "4:04.24", note: "葡萄牙中跑黄金年代的代表作" },
  { series: "worlds", year: 1995, city: "哥德堡", champion: "哈西芭·布勒梅卡", country: "ALG", mark: "4:02.42", note: "卫冕之战" },
  { series: "worlds", year: 1993, city: "斯图加特", champion: "刘冬", country: "CHN", mark: "4:00.50", note: "马家军在世界大赛上的中距离代表作——中国首枚世锦赛女子1500米金牌" },
  { series: "worlds", year: 1991, city: "东京", champion: "塔季扬娜·萨莫连科", country: "URS", mark: "4:00.27", note: "卫冕之战" },
  { series: "worlds", year: 1987, city: "罗马", champion: "塔季扬娜·萨莫连科", country: "URS", mark: "4:00.90" },
  { series: "worlds", year: 1983, city: "赫尔辛基", champion: "玛丽·德克尔", country: "USA", mark: "3:57.12", note: "首届世锦赛；同届3000米亦夺金——本土双冠" },

  // —— 亚运会（1998 起） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "内莉·杰普科斯盖", country: "BRN", mark: "4:04.50", note: "赛会纪录，打破苏妮塔·拉尼保持24年的4:06.03；中国的李春辉4:05.50摘银" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "温弗雷德·亚维", country: "BRN", mark: "4:11.65", note: "赛事于2023年举行；3000米障碍的奥运兼世锦赛冠军客串1500米亦夺冠；印度的哈米兰·贝恩斯4:12.74银" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "卡尔基丹·格扎赫涅", country: "BRN", mark: "4:07.88" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "玛丽亚姆·优素福·贾马尔", country: "BRN", mark: "4:09.90", note: "亚运三连庄——前无古人；印度的奥帕尔·贾伊莎4:13.46铜" },
  { series: "asiangames", year: 2010, city: "广州", champion: "玛丽亚姆·优素福·贾马尔", country: "BRN", mark: "4:08.22", note: "两连冠；越南的张氏恒4:09.58银" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "玛丽亚姆·优素福·贾马尔", country: "BRN", mark: "4:08.63", note: "首冠；同届800米亦夺冠——双金" },
  { series: "asiangames", year: 2002, city: "釜山", champion: "苏妮塔·拉尼", country: "IND", mark: "4:06.03", note: "赛会纪录，悬置24年；同届5000米亦夺冠——赛后被检出兴奋剂阳性又被还以清白，奖牌失而复得" },
  { series: "asiangames", year: 1998, city: "曼谷", champion: "乔蒂尔莫伊·西克达尔", country: "IND", mark: "4:12.82", note: "同届800/1500双金；中国的王清芬4:13.19银" },
];
