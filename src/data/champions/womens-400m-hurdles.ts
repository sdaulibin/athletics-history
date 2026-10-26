import type { ChampionEntry } from "@/lib/types";

/**
 * 女子 400 米栏 · 历届大赛冠军
 * 空缺说明（宁缺毋滥，未能核实的届次暂缺）：
 *  - 奥运会：女子400米栏1984年进入奥运，1984–2024 全 11 届收录；
 *    2012年原冠军安秋赫因兴奋剂被取消，金牌递补给美国的德穆斯；
 *  - 世锦赛：1983–2025 全 20 届收录；
 *  - 亚运会：1998–2026 全八届收录（2026 名古屋玛丽亚姆·卡里姆54.31）。
 */
export const womens400mHurdlesChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "悉尼·麦克劳克林-莱夫隆", country: "USA", mark: "50.37", wr: true, or: true, note: "世界纪录与奥运纪录；科克雷尔51.87银、博尔52.15铜" },
  { series: "olympics", year: 2020, city: "东京", champion: "悉尼·麦克劳克林", country: "USA", mark: "51.46", wr: true, or: true, note: "赛事于2021年举行；世界纪录与奥运纪录；穆罕默德51.58同破旧纪录" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "达莉拉·穆罕默德", country: "USA", mark: "53.13", note: "丹麦佩特森53.55银" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "拉辛达·德穆斯", country: "USA", note: "原冠军安秋赫（52.70）后因兴奋剂被取消资格，德穆斯（52.77）递补金牌；德穆斯亦为2011年大邱世锦赛冠军" },
  { series: "olympics", year: 2008, city: "北京", champion: "梅兰·沃克", country: "JAM", mark: "52.64", or: true, note: "奥运纪录；牙买加首枚女子400米栏奥运金牌" },
  { series: "olympics", year: 2004, city: "雅典", champion: "法妮·哈尔基亚", country: "GRE", mark: "52.82", note: "希腊选手" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "伊琳娜·普里瓦洛娃", country: "RUS", mark: "53.02", note: "原为短跑选手（1992年奥运会4×100米金牌）" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "迪昂·赫明斯", country: "JAM", mark: "52.82", or: true, note: "奥运纪录；牙买加首位女子奥运金牌得主" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "萨莉·冈内尔", country: "GBR", mark: "53.23", note: "次年（1993）在斯图加特世锦赛以52.74改写世界纪录" },
  { series: "olympics", year: 1988, city: "汉城", champion: "黛比·弗林托夫-金", country: "AUS", mark: "53.17", or: true, note: "奥运纪录；终点前0.01秒险胜苏联的列多夫斯卡娅" },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "娜瓦尔·埃尔·穆塔瓦克尔", country: "MAR", mark: "54.61", note: "女子400米栏首次进入奥运会；首位穆斯林女性奥运冠军、摩洛哥首枚奥运金牌" },

  // —— 世界锦标赛（1983–2025 全 20 届） ——
  { series: "worlds", year: 2025, city: "东京", champion: "费姆克·博尔", country: "NED", mark: "51.54", note: "两届世界冠军（2023/2025）；琼斯52.08银、扎普莱塔洛娃53.00铜" },
  { series: "worlds", year: 2023, city: "布达佩斯", champion: "费姆克·博尔", country: "NED", mark: "51.70", note: "利特尔52.80银、克莱顿52.81铜" },
  { series: "worlds", year: 2022, city: "尤金", champion: "悉尼·麦克劳克林", country: "USA", mark: "50.68", wr: true, note: "世界纪录；博尔52.27银" },
  { series: "worlds", year: 2019, city: "多哈", champion: "达莉拉·穆罕默德", country: "USA", mark: "52.16", wr: true, note: "世界纪录；麦克劳克林52.23银" },
  { series: "worlds", year: 2017, city: "伦敦", champion: "科里·卡特", country: "USA", mark: "53.07", note: "穆罕默德53.50银" },
  { series: "worlds", year: 2015, city: "北京", champion: "祖扎娜·海诺娃", country: "CZE", mark: "53.50", note: "卫冕；利特尔53.94银" },
  { series: "worlds", year: 2013, city: "莫斯科", champion: "祖扎娜·海诺娃", country: "CZE", mark: "52.83", note: "捷克纪录；穆罕默德54.09银" },
  { series: "worlds", year: 2011, city: "大邱", champion: "拉辛达·德穆斯", country: "USA", mark: "52.47", note: "沃克52.73银" },
  { series: "worlds", year: 2009, city: "柏林", champion: "梅兰·沃克", country: "JAM", mark: "52.42", note: "锦标赛纪录；德穆斯52.96银" },
  { series: "worlds", year: 2007, city: "大阪", champion: "贾娜·劳林森", country: "AUS", mark: "53.31", note: "原姓皮特曼；佩琼金娜53.50银" },
  { series: "worlds", year: 2005, city: "赫尔辛基", champion: "尤利娅·佩琼金娜", country: "RUS", mark: "52.90", note: "世界最好成绩；德穆斯53.27银" },
  { series: "worlds", year: 2003, city: "巴黎", champion: "贾娜·皮特曼", country: "AUS", mark: "53.22", note: "澳大利亚选手首夺世界冠军" },
  { series: "worlds", year: 2001, city: "埃德蒙顿", champion: "妮扎·比杜安", country: "MAR", mark: "53.34", note: "佩琼金娜54.27银" },
  { series: "worlds", year: 1999, city: "塞维利亚", champion: "戴米·佩尔尼亚", country: "CUB", mark: "52.89", note: "比杜安52.90银（非洲纪录）" },
  { series: "worlds", year: 1997, city: "雅典", champion: "妮扎·比杜安", country: "MAR", mark: "52.97", note: "非洲纪录；赫明斯53.09银" },
  { series: "worlds", year: 1995, city: "哥德堡", champion: "金·巴滕", country: "USA", mark: "52.61", wr: true, note: "世界纪录；同场亚军巴福德-贝利52.62亦破旧纪录" },
  { series: "worlds", year: 1993, city: "斯图加特", champion: "萨莉·冈内尔", country: "GBR", mark: "52.74", wr: true, note: "世界纪录；法默-帕特里克52.79银（美国纪录）" },
  { series: "worlds", year: 1991, city: "东京", champion: "塔季扬娜·列多夫斯卡娅", country: "URS", mark: "53.11", note: "锦标赛纪录；冈内尔53.16银" },
  { series: "worlds", year: 1987, city: "罗马", champion: "萨宾·布施", country: "GDR", mark: "53.62", note: "锦标赛纪录；弗林托夫54.19银" },
  { series: "worlds", year: 1983, city: "赫尔辛基", champion: "叶卡捷琳娜·费先科", country: "URS", mark: "54.14", note: "首届世锦赛；苏联包揽前二（安布拉泽涅54.15银）" },

  // —— 亚运会（1998–2026 全八届） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "玛丽亚姆·卡里姆", country: "ARE", mark: "54.31", note: "赛会纪录与阿联酋全国纪录；哈萨克斯坦泽姆斯54.58银、印度拉姆拉杰54.75铜（全国纪录）；中国的孔莹蓥55.78第四" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "凯米·阿德科娅", country: "BRN", mark: "54.45", note: "赛事于2023年举行；赛会纪录；中国的莫家蝶55.01银、印度拉姆拉杰55.68铜" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "郭氏兰", country: "VIE", mark: "55.30", note: "巴林的贾马尔55.65银、印度拉加万56.92铜；阿德科娅当届为银牌" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "凯米·阿德科娅", country: "BRN", mark: "55.77", note: "日本的久保仓里美56.21银、中国的肖霞56.59铜" },
  { series: "asiangames", year: 2010, city: "广州", champion: "阿什维尼·阿昆吉", country: "IND", mark: "56.15", note: "中国的王星56.76银、日本的久保仓里美56.83铜" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "黄潇潇", country: "CHN", mark: "55.41", note: "中国的黄潇潇；日本的久保仓里美56.49银、马来西亚卡莉德56.85铜" },
  { series: "asiangames", year: 2002, city: "釜山", champion: "娜塔莉亚·托尔希娜", country: "KAZ", mark: "56.13", note: "中国的宋英兰56.43银、姚月华56.56铜" },
  { series: "asiangames", year: 1998, city: "曼谷", champion: "娜塔莉亚·托尔希娜", country: "KAZ", mark: "55.33", note: "中国台北许佩静55.71银、中国的李玉莲55.93铜" },
];
