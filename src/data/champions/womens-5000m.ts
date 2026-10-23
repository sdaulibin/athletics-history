import type { ChampionEntry } from "@/lib/types";

/**
 * 女子 5000 米 · 历届大赛冠军
 * 奥运会、世界锦标赛、亚运会三大系列；逐届成绩来自数据核对面（见项目页来源）。
 */
export const womens5000mChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "比阿特丽斯·切贝特", country: "KEN", mark: "14:28.56" },
  { series: "olympics", year: 2020, city: "东京", champion: "西凡·哈桑", country: "NED", mark: "14:36.79" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "薇薇安·切鲁伊约特", country: "KEN", mark: "14:26.17" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "梅塞雷特·德法尔", country: "ETH", mark: "15:04.25" },
  { series: "olympics", year: 2008, city: "北京", champion: "蒂鲁内什·迪巴巴", country: "ETH", mark: "15:41.40" },
  { series: "olympics", year: 2004, city: "雅典", champion: "梅塞雷特·德法尔", country: "ETH", mark: "14:45.65" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "加布里埃拉·萨博", country: "ROU", mark: "14:40.79", or: true },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "王军霞", country: "CHN", mark: "14:59.88", or: true },

  // —— 世界锦标赛 ——
  { series: "worlds", year: 2025, city: "东京", champion: "比阿特丽斯·切贝特", country: "KEN", mark: "14:54.36" },
  { series: "worlds", year: 2023, city: "布达佩斯", champion: "费斯·基皮耶贡", country: "KEN", mark: "14:53.88" },
  { series: "worlds", year: 2022, city: "尤金", champion: "古达夫·特斯盖", country: "ETH", mark: "14:46.29" },
  { series: "worlds", year: 2019, city: "多哈", champion: "海伦·奥比里", country: "KEN", mark: "14:26.72" },
  { series: "worlds", year: 2017, city: "伦敦", champion: "海伦·奥比里", country: "KEN", mark: "14:34.86" },
  { series: "worlds", year: 2015, city: "北京", champion: "阿尔马兹·阿雅娜", country: "ETH", mark: "14:26.83" },
  { series: "worlds", year: 2013, city: "莫斯科", champion: "梅塞雷特·德法尔", country: "ETH", mark: "14:50.19" },
  { series: "worlds", year: 2011, city: "大邱", champion: "薇薇安·切鲁伊约特", country: "KEN", mark: "14:55.36" },
  { series: "worlds", year: 2009, city: "柏林", champion: "薇薇安·切鲁伊约特", country: "KEN", mark: "14:57.97" },
  { series: "worlds", year: 2007, city: "大阪", champion: "梅塞雷特·德法尔", country: "ETH", mark: "14:57.91" },
  { series: "worlds", year: 2005, city: "赫尔辛基", champion: "蒂鲁内什·迪巴巴", country: "ETH", mark: "14:38.59" },
  { series: "worlds", year: 2003, city: "巴黎", champion: "蒂鲁内什·迪巴巴", country: "ETH", mark: "14:51.72" },
  { series: "worlds", year: 2001, city: "埃德蒙顿", champion: "奥莉加·叶戈罗娃", country: "RUS", mark: "15:03.39" },
  { series: "worlds", year: 1999, city: "塞维利亚", champion: "加布里埃拉·萨博", country: "ROU", mark: "14:41.82" },
  { series: "worlds", year: 1997, city: "雅典", champion: "加布里埃拉·萨博", country: "ROU", mark: "14:57.68" },
  { series: "worlds", year: 1995, city: "哥德堡", champion: "索尼娅·奥沙利文", country: "IRL", mark: "14:46.47" },

  // —— 亚运会（1998 起） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "温弗雷德·亚维", country: "BRN", mark: "15:10.18" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "帕鲁尔·乔杜里", country: "IND", mark: "15:14.75" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "卡尔基丹·格扎赫涅", country: "BRN", mark: "15:08.08" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "玛丽亚姆·优素福·贾马尔", country: "BRN", mark: "14:59.69" },
  { series: "asiangames", year: 2010, city: "广州", champion: "米米·贝莱特", country: "BRN", mark: "15:15.59" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "薛飞", country: "CHN", mark: "15:40.12" },
  { series: "asiangames", year: 2002, city: "釜山", champion: "孙英杰", country: "CHN", mark: "14:40.41", note: "赛会纪录" },
  { series: "asiangames", year: 1998, city: "曼谷", champion: "苏普里亚蒂·苏托诺", country: "INA", mark: "15:54.45", note: "赛会纪录" },
];
