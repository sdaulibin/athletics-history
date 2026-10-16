import type { AthleticsEvent } from "@/lib/types";

/**
 * 女子 100 米（室外）世界纪录演进
 * 数据截至：2026年10月
 *
 * 收录口径（宁缺毋滥）：
 *  - 电计时时代（1968 起）的被承认纪录全部收录；
 *    手计时时代（1934–1968）的沿革未能核实到可靠来源，暂缺；
 *  - 10.49 悬置三十八年，为田径史上最长寿的世界纪录之一
 *    （当日风速仪疑故障，争议见演进表与历史节）；
 *  - 历史最好成绩榜扩至前五十：10.72 以内合规成绩全录（56 条，含并列）；
 *  - 冠军榜：奥运 1968 起、世锦赛 1983 起全收；亚运会 2010 届及
 *    更早未能核实暂缺，2014 起已核。
 */
export const womens100m: AthleticsEvent = {
  slug: "womens-100m",
  group: "track",
  markKind: "time",
  gender: "women",
  venue: "outdoor",
  name: "女子 100 米",
  summary:
    "10.49——1988年7月16日的印第安纳波利斯，格里菲斯-乔伊纳把这串数字留在世界纪录牌上，三十八年无人逼近到0.05秒之内。牙买加的三位女飞人后来统治了排行榜，而亚洲的刻度，至今停在1997年李雪梅的10.79。",
  dataAsOf: "2026年10月",
  progression: [
    { mark: "11.08", holder: "Wyomia Tyus", country: "USA", date: "1968-10-15", meet: "奥运会", place: "墨西哥城", wind: "+1.2", note: "电计时时代首项女子世界纪录；高原（约2240米）；奥运百米卫冕第一人" },
    { mark: "11.07", holder: "Renate Stecher", country: "GDR", date: "1972-09-02", meet: "奥运会", place: "慕尼黑", wind: "-0.2", note: "民主德国短跑王朝的开端" },
    { mark: "11.04", holder: "Ingeborg Helten", country: "FRG", date: "1976-06-13", place: "菲尔特", wind: "+0.6", flags: ["h"], note: "预赛跑出；纪录仅存42天" },
    { mark: "11.01", holder: "Annegret Richter", country: "FRG", date: "1976-07-25", meet: "奥运会半决赛", place: "蒙特利尔", wind: "+0.6", flags: ["sf"], note: "次日决赛以11.08夺冠——纪录定格在半决赛的11.01" },
    { mark: "10.88", holder: "Marlies Göhr", country: "GDR", date: "1977-07-01", place: "德累斯顿", wind: "+2.0", note: "电计时时代首次突破11秒大关；顺风恰在合规上限" },
    { mark: "10.81", holder: "Marlies Göhr", country: "GDR", date: "1983-06-08", place: "柏林", wind: "+1.7", note: "戈尔的第二项世界纪录；同年夺首届世锦赛冠军" },
    { mark: "10.76", holder: "Evelyn Ashford", country: "USA", date: "1984-08-22", place: "苏黎世", wind: "+1.7", note: "洛杉矶奥运（东方集团抵制）夺冠17天后；保持至1988" },
    { mark: "10.49", holder: "Florence Griffith-Joyner", country: "USA", date: "1988-07-16", meet: "美国奥运选拔赛（1/4决赛）", place: "印第安纳波利斯", wind: "0.0", flags: ["h"], note: "现世界纪录，悬置三十八年；当日风速仪疑故障，成绩仍被世界田联承认" },
  ],

  asianRecord: {
    mark: "10.79", holder: "Li Xuemei", country: "CHN",
    date: "1997-10-18", meet: "第八届全运会", place: "上海", wind: "0.0",
    note: "悬置二十九年的亚洲纪录；同时为中国纪录",
  },
  chineseRecord: {
    mark: "10.79", holder: "Li Xuemei", country: "CHN",
    date: "1997-10-18", meet: "第八届全运会", place: "上海", wind: "0.0",
    note: "此后中国女飞人的高光——韦永丽2014亚运11.48、葛曼棋2023亚运11.23、陈妤颉2026亚运11.06——距10.79仍有一段长坡",
  },

  topList: [
    { mark: "10.49", holder: "Florence Griffith-Joyner", country: "USA", date: "1988-07-16", meet: "美国奥运选拔赛（1/4决赛）", wind: "0.0", flags: ["h"], wr: true, note: "现世界纪录——风速仪疑故障，成绩仍被承认" },
    { mark: "10.54", holder: "Elaine Thompson-Herah", country: "JAM", date: "2021-08-21", meet: "尤金钻石联赛", wind: "+0.9", note: "历史第二快" },
    { mark: "10.60", holder: "Shelly-Ann Fraser-Pryce", country: "JAM", date: "2021-08-26", meet: "洛桑钻石联赛", wind: "+1.7" },
    { mark: "10.61", holder: "Florence Griffith-Joyner", country: "USA", date: "1988-07-17", meet: "美国奥运选拔赛", wind: "+1.2", note: "10.49的次日，决赛再破10.76" },
    { mark: "10.61", holder: "Elaine Thompson-Herah", country: "JAM", date: "2021-07-31", meet: "东京奥运会", wind: "-0.6", note: "奥运会纪录" },
    { mark: "10.61", holder: "Melissa Jefferson-Wooden", country: "USA", date: "2025-09-14", meet: "2025年东京世锦赛", wind: "+0.3", note: "赛会纪录" },
    { mark: "10.62", holder: "Florence Griffith-Joyner", country: "USA", date: "1988-09-24", meet: "汉城奥运会（1/4决赛）", wind: "+1.0", flags: ["h"] },
    { mark: "10.62", holder: "Shelly-Ann Fraser-Pryce", country: "JAM", date: "2022-08-10", meet: "摩纳哥钻石联赛", wind: "+0.4" },
    { mark: "10.62", holder: "Melissa Jefferson-Wooden", country: "USA", date: "2026-09-12", meet: "布达佩斯", wind: "-0.2", note: "2026年世界最好成绩" },
    { mark: "10.63", holder: "Shelly-Ann Fraser-Pryce", country: "JAM", date: "2021-06-05", meet: "金斯顿", wind: "+1.3" },
    { mark: "10.63", holder: "Adaejah Hodge", country: "IVB", date: "2026-06-11", meet: "尤金（预赛）", wind: "+1.9", flags: ["h"], note: "英属维尔京群岛（人口约三万）" },
    { mark: "10.64", holder: "Carmelita Jeter", country: "USA", date: "2009-09-20", meet: "上海国际田径黄金大奖赛", wind: "+1.2", note: "与盖伊的9.69同届赛事" },
    { mark: "10.64", holder: "Elaine Thompson-Herah", country: "JAM", date: "2021-08-26", meet: "洛桑钻石联赛", wind: "+1.7", note: "同场负于弗雷泽-普赖斯" },
    { mark: "10.65", holder: "Marion Jones", country: "USA", date: "1998-09-12", meet: "约翰内斯堡世界杯赛", wind: "+1.1", note: "高原约1750米；琼斯2000年9月后的成绩因兴奋剂被取消，此前成绩依规保留" },
    { mark: "10.65", holder: "Elaine Thompson-Herah", country: "JAM", date: "2021-09-09", meet: "苏黎世钻石联赛", wind: "+0.6" },
    { mark: "10.65", holder: "Shelly-Ann Fraser-Pryce", country: "JAM", date: "2022-09-08", meet: "苏黎世钻石联赛", wind: "-0.8" },
    { mark: "10.65", holder: "Shericka Jackson", country: "JAM", date: "2023-07-07", meet: "牙买加锦标赛", wind: "+1.0" },
    { mark: "10.65", holder: "Sha'Carri Richardson", country: "USA", date: "2023-08-21", meet: "2023年布达佩斯世锦赛", wind: "-0.2", note: "锦标赛纪录" },
    { mark: "10.65", holder: "Melissa Jefferson-Wooden", country: "USA", date: "2025-08-01", meet: "美国锦标赛（尤金）", wind: "+0.4" },
    { mark: "10.66", holder: "Shelly-Ann Fraser-Pryce", country: "JAM", date: "2022-08-06", meet: "霍茹夫（波兰）", wind: "+0.5" },
    { mark: "10.66", holder: "Melissa Jefferson-Wooden", country: "USA", date: "2025-08-16", meet: "霍茹夫（波兰）", wind: "+0.1" },
    { mark: "10.67", holder: "Carmelita Jeter", country: "USA", date: "2009-09-13", meet: "世界田径总决赛（塞萨洛尼基）", wind: "-0.1" },
    { mark: "10.67", holder: "Shelly-Ann Fraser-Pryce", country: "JAM", date: "2022-05-07", meet: "内罗毕基普基诺经典赛", wind: "-0.4", note: "高原" },
    { mark: "10.67", holder: "Shelly-Ann Fraser-Pryce", country: "JAM", date: "2022-06-18", meet: "巴黎钻石联赛", wind: "+0.5" },
    { mark: "10.67", holder: "Shelly-Ann Fraser-Pryce", country: "JAM", date: "2022-07-17", meet: "2022年尤金世锦赛", wind: "+0.8", note: "第五冠" },
    { mark: "10.67", holder: "Shelly-Ann Fraser-Pryce", country: "JAM", date: "2022-08-08", meet: "塞克什白堡（匈牙利）", wind: "+1.3" },
    { mark: "10.70", holder: "Florence Griffith-Joyner", country: "USA", date: "1988-07-17", meet: "美国奥运选拔赛（半决赛）", wind: "+1.6", flags: ["sf"], note: "同日决赛10.61" },
    { mark: "10.70", holder: "Marion Jones", country: "USA", date: "1999-08-22", meet: "1999年塞维利亚世锦赛", wind: "-0.1" },
    { mark: "10.70", holder: "Carmelita Jeter", country: "USA", date: "2011-06-04", meet: "尤金田径大奖赛", wind: "+2.0", note: "顺风合规上限" },
    { mark: "10.70", holder: "Shelly-Ann Fraser-Pryce", country: "JAM", date: "2012-06-29", meet: "牙买加奥运选拔赛", wind: "+0.6", note: "与布雷克的9.75同届" },
    { mark: "10.70", holder: "Elaine Thompson-Herah", country: "JAM", date: "2016-07-01", meet: "牙买加奥运选拔赛", wind: "+0.3" },
    { mark: "10.70", holder: "Shelly-Ann Fraser-Pryce", country: "JAM", date: "2022-06-23", meet: "牙买加锦标赛（预赛）", wind: "+1.1", flags: ["h"] },
    { mark: "10.70", holder: "Shericka Jackson", country: "JAM", date: "2023-09-16", meet: "尤金钻石联赛", wind: "+0.8" },
    { mark: "10.70", holder: "Julien Alfred", country: "LCA", date: "2026-08-27", meet: "苏黎世钻石联赛", wind: "-0.7" },
    { mark: "10.70", holder: "Melissa Jefferson-Wooden", country: "USA", date: "2026-08-27", meet: "苏黎世钻石联赛", wind: "-0.7", note: "同场负于阿尔弗雷德" },
    { mark: "10.71", holder: "Marion Jones", country: "USA", date: "1998-05-12", meet: "成都（中国）", wind: "+0.1" },
    { mark: "10.71", holder: "Marion Jones", country: "USA", date: "1998-06-19", meet: "美国锦标赛（半决赛）", wind: "+2.0", flags: ["sf"], note: "顺风合规上限" },
    { mark: "10.71", holder: "Shelly-Ann Fraser-Pryce", country: "JAM", date: "2013-08-12", meet: "2013年莫斯科世锦赛", wind: "-0.3" },
    { mark: "10.71", holder: "Elaine Thompson-Herah", country: "JAM", date: "2016-08-13", meet: "2016年里约奥运会", wind: "+0.5" },
    { mark: "10.71", holder: "Elaine Thompson-Herah", country: "JAM", date: "2017-06-23", meet: "牙买加锦标赛", wind: "+0.8" },
    { mark: "10.71", holder: "Shelly-Ann Fraser-Pryce", country: "JAM", date: "2019-09-29", meet: "2019年多哈世锦赛", wind: "+0.1" },
    { mark: "10.71", holder: "Shelly-Ann Fraser-Pryce", country: "JAM", date: "2021-06-25", meet: "牙买加奥运选拔赛", wind: "+1.0" },
    { mark: "10.71", holder: "Elaine Thompson-Herah", country: "JAM", date: "2021-07-06", meet: "塞克什白堡（匈牙利）", wind: "+0.6" },
    { mark: "10.71", holder: "Shericka Jackson", country: "JAM", date: "2022-08-10", meet: "摩纳哥钻石联赛", wind: "+0.4", note: "同场负于弗雷泽-普赖斯" },
    { mark: "10.71", holder: "Sha'Carri Richardson", country: "USA", date: "2023-07-06", meet: "美国锦标赛（预赛）", wind: "+0.1", flags: ["h"] },
    { mark: "10.71", holder: "Sha'Carri Richardson", country: "USA", date: "2024-06-22", meet: "美国奥运选拔赛", wind: "+0.8" },
    { mark: "10.72", holder: "Marion Jones", country: "USA", date: "1998-06-20", meet: "美国锦标赛", wind: "+2.0", note: "顺风合规上限" },
    { mark: "10.72", holder: "Marion Jones", country: "USA", date: "1998-08-08", meet: "摩纳哥国际田径赛", wind: "0.0" },
    { mark: "10.72", holder: "Marion Jones", country: "USA", date: "1998-08-25", meet: "洛桑国际田径赛", wind: "0.0" },
    { mark: "10.72", holder: "Shelly-Ann Fraser-Pryce", country: "JAM", date: "2013-09-06", meet: "布鲁塞尔钻石联赛", wind: "-0.3" },
    { mark: "10.72", holder: "Elaine Thompson-Herah", country: "JAM", date: "2016-09-09", meet: "布鲁塞尔钻石联赛", wind: "+0.6" },
    { mark: "10.72", holder: "Sha'Carri Richardson", country: "USA", date: "2021-04-10", meet: "米拉马尔（美国）", wind: "+1.6" },
    { mark: "10.72", holder: "Elaine Thompson-Herah", country: "JAM", date: "2021-08-28", meet: "巴黎钻石联赛", wind: "+1.3" },
    { mark: "10.72", holder: "Marie-Josée Ta Lou-Smith", country: "CIV", date: "2022-08-10", meet: "摩纳哥钻石联赛", wind: "+0.4", note: "同场负于弗雷泽-普赖斯与杰克逊" },
    { mark: "10.72", holder: "Shericka Jackson", country: "JAM", date: "2023-08-21", meet: "2023年布达佩斯世锦赛", wind: "-0.2", note: "亚军；冠军理查德森10.65" },
    { mark: "10.72", holder: "Julien Alfred", country: "LCA", date: "2024-08-03", meet: "2024年巴黎奥运会", wind: "-0.1", note: "夺冠成绩，圣卢西亚首金" },
  ],
  topListTitle: "前五十",
  topListNote: "第50位的成绩为10.72——历史上有10次并列，全部收录，共56条。弗雷泽-普赖斯一人占十五席、汤普森-赫拉十席，牙买加女飞人在这份榜单上过半；10.68与10.69至今无人跑出，是榜上空洞的两格。马里昂·琼斯的七席全部出自1998–1999年，她2000年9月之后的成绩因兴奋剂被取消，此前成绩依规保留。中国赛场跑出的最快女子百米是杰特的10.64（2009上海）；亚洲与中国的纪录仍是李雪梅的10.79（1997），距门槛差0.07秒。",

  history: [
    {
      heading: "从手计时到电计时：东德与联邦德国的接力",
      paragraphs: [
        "1968年墨西哥城，怀奥米亚·蒂尤斯以11.08卫冕奥运百米——这既是女子百米电计时时代的起点，也是她「连续两届奥运百米夺金」的历史第一人。四年后慕尼黑，民主德国的蕾娜特·施特歇尔以11.07改写纪录，东德女飞人的王朝自此拉开。",
        "1976年成了德国内战：6月，联邦德国的英格博格·赫尔滕在菲尔特预赛跑出11.04——这项纪录只活了42天；7月蒙特利尔奥运会，同属联邦德国的安内格蕾特·里希特在半决赛跑出11.01，次日决赛夺冠。1977年德累斯顿，玛丽利斯·戈尔在+2.0合规顺风的上限把纪录直接砍到10.88——电计时时代第一次突破11秒；1983年柏林，她再把10.81留在牌上。苏联抵制风波后的1984年，美国的伊夫林·阿什福德在洛杉矶夺冠17天后的苏黎世，跑出10.76。",
      ],
    },
    {
      heading: "10.49 与风速仪之谜",
      paragraphs: [
        "1988年7月16日，印第安纳波利斯，美国奥运选拔赛1/4决赛：弗洛伦斯·格里菲斯-乔伊纳（FloJo）跑出10.49，风速读数0.0。疑点在于——同日其余各组的风速读数几乎全是强顺风，独独这一枪静风。次日半决赛10.70、决赛10.61，48小时内三度把阿什福德的10.76甩在身后。纪录被承认至今，争议也被讨论至今。",
        "汉城奥运会她以10.54卫冕百米（决赛顺风+3.0超规，故不计为奥运纪录），再以21.34刷新200米世界纪录，同届三金。1998年，她38岁猝然离世，10.49从此悬置——三十八年过去，最接近的一次是2021年伊莱恩·汤普森-赫拉的10.54，仍差0.05秒。",
      ],
    },
    {
      heading: "牙买加女飞人时代",
      paragraphs: [
        "2008年北京，谢莉-安·弗雷泽以10.78夺金，牙买加包揽领奖台——女子百米进入牙买加时代。弗雷泽-普赖斯先后五夺世锦赛百米冠军（2009/2013/2015/2019/2022），34岁那年（2021）还在洛桑跑出10.60；她的队友汤普森-赫拉则在2021年完成史诗级赛季：东京奥运10.61（奥运纪录）、五天后尤金10.54。",
        "2024年巴黎，圣卢西亚的朱莉恩·阿尔弗雷德以10.72爆冷夺金——人口十八万的加勒比岛国拿到史上第一枚奥运金牌。2025年东京世锦赛，美国的梅丽莎·杰斐逊-伍登以10.61破赛会纪录；2026年她再把10.62写进历史第三档。历史最好成绩榜前五十六位（10.72以内全录），弗雷泽-普赖斯一人占十五席、汤普森-赫拉十席——牙买加的统治，以数字计。",
      ],
    },
    {
      heading: "亚洲刻度：李雪梅的 10.79",
      paragraphs: [
        "1997年10月18日，上海，第八届全运会：20岁的李雪梅跑出10.79——亚洲纪录自此定格，二十九年无人撼动。此后亚洲女子百米的高光时刻是亚运赛场：2014仁川韦永丽11.48、2018雅加达巴林的奥迪翁11.30、2023杭州葛曼棋11.23，一寸一寸地逼近，却始终停在11秒开外。",
        "2026年9月25日名古屋亚运，17岁的陈妤颉以11.06夺冠，打破尘封24年的赛会纪录（斯里兰卡名将贾亚辛格2002年的11.15）——距离李雪梅的10.79，还差0.27秒。亚洲女子百米的下一站，是先把11秒大关正式跨过。",
      ],
    },
  ],
  sources: [
    {
      label: "Wikipedia：World record progression 100 metres women",
      url: "https://en.wikipedia.org/wiki/World_record_progression_100_metres_women",
    },
    {
      label: "World Athletics 官方纪录",
      url: "https://worldathletics.org/records/by-category/world-records",
    },
    {
      label: "Alltime-Athletics：女子100米历史成绩总榜（Peter Larsson 维护）",
      url: "http://www.alltime-athletics.com/w_100ok.htm",
    },
  ],
};
