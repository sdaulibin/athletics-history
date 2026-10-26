import type { ChampionEntry } from "@/lib/types";

/**
 * 男子 4×100 米接力 · 历届大赛冠军
 * 空缺说明（宁缺毋滥，未能核实的届次暂缺）：
 *  - 奥运会：1968 起收录历届冠军；1972/1976/1980 三届的决赛四棒名单与
 *    精确成绩未能核实，条目内注明；2008 年原冠军牙买加被取消，
 *    金牌递补特立尼达和多巴哥；
 *  - 世锦赛：1983–2025 全部 20 届已核（含决赛四棒）；
 *  - 亚运会：1998–2026 全八届已核。
 */
export const mens4x100mRelayChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "加拿大队（布朗/布莱克/罗德尼/德格拉塞）", country: "CAN", mark: "37.50", note: "南非37.57银、英国37.61铜；美国预赛37.47最快却在决赛交接失误未完赛" },
  { series: "olympics", year: 2020, city: "东京", champion: "意大利队（帕塔/雅各布斯/德萨卢/托尔图）", country: "ITA", mark: "37.50", note: "赛事于2021年举行；意大利纪录；英国因兴奋剂被取消，中国递补铜牌（37.79）" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "牙买加队（卡特/阿什米德/布雷克/博尔特）", country: "JAM", mark: "37.27", note: "日本37.60银（当时亚洲纪录）、加拿大37.64铜；博尔特最后一棒奥运接力" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "牙买加队（卡特/弗雷特/布雷克/博尔特）", country: "JAM", mark: "36.84", wr: true, or: true, note: "世界纪录与奥运纪录" },
  { series: "olympics", year: 2008, city: "北京", champion: "特立尼达和多巴哥队（递补）", country: "TTO", note: "原冠军牙买加（37.10，世界纪录）因内斯塔·卡特复检阳性于2017年被取消；日本递补银牌" },
  { series: "olympics", year: 2004, city: "雅典", champion: "英国队（加德纳/坎贝尔/德文尼什/刘易斯-弗朗西斯）", country: "GBR", mark: "38.07", note: "0.01秒险胜美国；英国纪录" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "美国队（德拉蒙德/B·威廉姆斯/B·刘易斯/格林）", country: "USA", mark: "37.61", note: "美国队第四次夺该项目奥运金牌" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "加拿大队（埃斯米/吉尔伯特/苏林/贝利）", country: "CAN", mark: "37.69", note: "世界纪录保持者美国队交接失误；加拿大的黄金一代" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "美国队（马什/伯勒尔/米切尔/刘易斯）", country: "USA", mark: "37.40", wr: true, note: "世界纪录；尼日利亚银牌" },
  { series: "olympics", year: 1988, city: "汉城", champion: "苏联队", country: "URS", mark: "38.19", note: "加拿大队在决赛中最先撞线，因本·约翰逊的兴奋剂事件被取消资格，苏联递补；苏联四棒名单待核" },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "美国队（格拉迪/布朗/C·史密斯/刘易斯）", country: "USA", mark: "37.83", wr: true, note: "世界纪录；刘易斯四金的第四枚" },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "苏联队", country: "URS", note: "精确成绩未能核实，暂缺；名单待核" },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "美国队", country: "USA", note: "精确成绩未能核实，暂缺；名单待核" },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "美国队", country: "USA", note: "精确成绩未能核实，暂缺；名单待核" },
  { series: "olympics", year: 1968, city: "墨西哥城", champion: "美国队（格林/彭德/R·史密斯/海因斯）", country: "USA", mark: "38.24", note: "电计时口径；当届百米前二海因斯与格林领衔" },

  // —— 世界锦标赛（1983–2025 全 20 届） ——
  { series: "worlds", year: 2025, city: "东京", champion: "美国队（科尔曼/贝德纳雷克/林赛/莱尔斯）", country: "USA", mark: "37.29", note: "世界最好成绩；加拿大37.55银、南非37.59铜" },
  { series: "worlds", year: 2023, city: "布达佩斯", champion: "美国队（科尔曼/克尔利/卡恩斯/莱尔斯）", country: "USA", mark: "37.38", note: "意大利37.62银、日本37.66铜" },
  { series: "worlds", year: 2022, city: "尤金", champion: "加拿大队（布朗/布莱克/罗德尼/德格拉塞）", country: "CAN", mark: "37.48", note: "加拿大纪录；美国37.55银、英国37.83铜" },
  { series: "worlds", year: 2019, city: "多哈", champion: "美国队（科尔曼/加特林/罗杰斯/莱尔斯）", country: "USA", mark: "37.10", note: "历史第三快；英国37.36银、日本37.43铜（亚洲纪录）" },
  { series: "worlds", year: 2017, city: "伦敦", champion: "英国队（乌贾/杰米利/塔尔博特/米切尔-布莱克）", country: "GBR", mark: "37.47", note: "英国纪录；美国37.52银、日本38.04铜——连续第二届摘铜" },
  { series: "worlds", year: 2015, city: "北京", champion: "牙买加队（卡特/鲍威尔/阿什米德/博尔特）", country: "JAM", mark: "37.36", note: "中国38.01第四——东道主最接近奖牌的一次；博尔特最后一棒" },
  { series: "worlds", year: 2013, city: "莫斯科", champion: "牙买加队（卡特/贝利-科尔/阿什米德/博尔特）", country: "JAM", mark: "37.36" },
  { series: "worlds", year: 2011, city: "大邱", champion: "牙买加队（卡特/弗雷特/布雷克/博尔特）", country: "JAM", mark: "37.04", wr: true, note: "世界纪录；法国38.20银、圣基茨和尼维斯38.49铜" },
  { series: "worlds", year: 2009, city: "柏林", champion: "牙买加队（穆林斯/弗雷特/博尔特/鲍威尔）", country: "JAM", mark: "37.31", note: "锦标赛纪录；特立尼达和多巴哥37.62银、英国37.64铜" },
  { series: "worlds", year: 2007, city: "大阪", champion: "美国队（帕顿/斯皮尔蒙/盖伊/迪克森）", country: "USA", mark: "37.78", note: "牙买加37.89银；博尔特当时跑第三棒" },
  { series: "worlds", year: 2005, city: "赫尔辛基", champion: "法国队（杜库雷/波格农/德莱平/多维）", country: "FRA", mark: "38.08", note: "特立尼达和多巴哥38.10银、英国38.27铜" },
  { series: "worlds", year: 2003, city: "巴黎", champion: "美国队（卡佩尔/B·威廉姆斯/帕顿/J·约翰逊）", country: "USA", mark: "38.06", note: "巴西38.26银、荷兰38.37铜" },
  { series: "worlds", year: 2001, city: "埃德蒙顿", champion: "南非队（纳格尔/杜普莱西斯/牛顿/奎因）", country: "RSA", mark: "38.47", note: "南非首枚世锦赛接力金牌；特立尼达和多巴哥38.58银" },
  { series: "worlds", year: 1999, city: "塞维利亚", champion: "美国队（德拉蒙德/蒙哥马利/L·刘易斯/格林）", country: "USA", mark: "37.59", note: "英国37.73银、巴西38.05铜" },
  { series: "worlds", year: 1997, city: "雅典", champion: "加拿大队（埃斯米/吉尔伯特/苏林/贝利）", country: "CAN", mark: "37.86", note: "卫冕奥运冠军身份；英国37.90银、尼日利亚38.07铜" },
  { series: "worlds", year: 1995, city: "哥德堡", champion: "加拿大队（贝利/埃斯米/吉尔伯特/苏林）", country: "CAN", mark: "38.31", note: "加拿大首枚世锦赛接力金牌" },
  { series: "worlds", year: 1993, city: "斯图加特", champion: "美国队（德拉蒙德/卡森/米切尔/伯勒尔）", country: "USA", mark: "37.48", note: "英国37.77银、加拿大37.69铜；半决赛美国队37.40平世界纪录" },
  { series: "worlds", year: 1991, city: "东京", champion: "美国队（卡森/伯勒尔/米切尔/刘易斯）", country: "USA", mark: "37.50", wr: true, note: "世界纪录；法国37.87银、英国37.90铜" },
  { series: "worlds", year: 1987, city: "罗马", champion: "美国队（麦克雷/麦克尼尔/格兰斯/刘易斯）", country: "USA", mark: "37.90", note: "苏联38.02银" },
  { series: "worlds", year: 1983, city: "赫尔辛基", champion: "美国队（金/高尔特/C·史密斯/刘易斯）", country: "USA", mark: "37.86", wr: true, note: "首届世锦赛即世界纪录；意大利38.37银、苏联38.41铜" },

  // —— 亚运会（1998–2026 全八届） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "中国队（Chen Jinfeng/Zeng Keli/Wang Shengjie/谢震业）", country: "CHN", mark: "38.17", note: "中国台北38.32银、韩国铜；日本未登台——中国队夺回失去两届的金牌" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "中国队（陈冠锋/谢震业/严海滨/陈佳鹏）", country: "CHN", mark: "38.29", note: "赛事于2023年举行；日本38.44银、韩国38.74铜" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "日本队（山县亮太/多田修平/桐生祥秀/剑桥飞鸟）", country: "JPN", mark: "38.16", note: "印尼38.77银、中国38.89铜" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "中国队（陈时伟/谢震业/苏炳添/张培萌）", country: "CHN", mark: "37.99", note: "当时亚洲纪录；日本38.49银、中国香港38.51铜" },
  { series: "asiangames", year: 2010, city: "广州", champion: "中国队（劳义/陆斌/苏炳添/梁嘉鸿）", country: "CHN", mark: "38.78", note: "赛会纪录；中国台北39.05银、泰国39.09铜" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "泰国队", country: "THA", mark: "39.21", note: "日本39.21同成绩、千分位分胜负；中国39.62铜" },
  { series: "asiangames", year: 2002, city: "釜山", champion: "泰国队", country: "THA", mark: "38.82", note: "赛会纪录；日本38.90银、中国39.19铜" },
  { series: "asiangames", year: 1998, city: "曼谷", champion: "日本队", country: "JPN", mark: "38.91", note: "赛会纪录；泰国39.17银、阿曼40.26铜" },
];
