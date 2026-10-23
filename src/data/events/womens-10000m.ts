import type { AthleticsEvent } from "@/lib/types";

/**
 * 女子 10000 米（室外）
 * 数据截至：2026年10月
 *
 * 收录口径（宁缺毋滥）：
 *  - 世界纪录演进只收室外纪录，起于1986年克里斯蒂安森的30:13.74；1993至2016年
 *    之间的纪录序列已在官方沿革中确认（29:31.78 悬置23年），其余中间条目从略；
 *  - 历史最好成绩榜以 30:20.00 为门槛：合规成绩全录（含并列）共 70 条；
 *  - 里程中途成绩（+）不入本表；A 标记为高原成绩。
 */
export const womens10000m: AthleticsEvent = {
  slug: "womens-10000m",
  group: "track",
  markKind: "time",
  gender: "women",
  venue: "outdoor",
  name: "女子 10000 米",
  summary:
    "28:54.14——2024年5月25日的尤金，比阿特丽斯·切贝特把女子10000米的世界纪录压进29分以内，成为历史上第一个做到这件事的人。女子10000米的历史由两段长时间统治构成：1993年王军霞在北京跑出29:31.78，这条纪录悬置23年；2016年里约，阿雅娜以29:17.45终结它；此后吉迪、切贝特在五年内再破两次。她们把这项运动从「29分半」带到「28分54秒」，每一次都像在重新定义女性的耐力边界。",
  dataAsOf: "2026年10月",
  progression: [
    { mark: "30:13.74", holder: "英格丽德·克里斯蒂安森", country: "NOR", date: "1986-07-05", place: "奥斯陆", note: "前世界纪录" },
    { mark: "29:31.78", holder: "王军霞", country: "CHN", date: "1993-09-08", place: "北京", note: "前世界纪录" },
    { mark: "29:17.45", holder: "阿尔马兹·阿雅娜", country: "ETH", date: "2016-08-12", place: "里约热内卢", note: "前世界纪录" },
    { mark: "29:01.03", holder: "莱特森贝特·吉迪", country: "ETH", date: "2021-06-08", place: "亨厄洛", note: "前世界纪录" },
    { mark: "28:54.14", holder: "比阿特丽斯·切贝特", country: "KEN", date: "2024-05-25", place: "尤金", note: "前世界纪录" },
  ],

  asianRecord: {
    mark: "29:31.78", holder: "王军霞", country: "CHN",
    date: "1993-09-08", place: "北京",
    note: "中国选手，1993年9月8日北京七运会跑出，为亚洲纪录暨世界纪录（当时）；这条纪录保持23年，至今仍是亚洲唯一跑进29分台以内的成绩。",
  },
  chineseRecord: {
    mark: "29:31.78", holder: "王军霞", country: "CHN",
    date: "1993-09-08", place: "北京",
    note: "与亚洲纪录同条。中国女子10000米的第二好成绩是钟焕娣1993年的30:13.37，同样来自七运会；2026年名古屋亚运，中国选手未进前八。",
  },
  topList: [
    { mark: "28:54.14", holder: "比阿特丽斯·切贝特", country: "KEN", date: "2024-05-25", place: "尤金" },
    { mark: "29:01.03", holder: "莱特森贝特·吉迪", country: "ETH", date: "2021-06-08", place: "亨厄洛" },
    { mark: "29:05.92", holder: "古达夫·特斯盖", country: "ETH", date: "2024-05-25", place: "尤金" },
    { mark: "29:06.82", holder: "西凡·哈桑", country: "NED", date: "2021-06-06", place: "亨厄洛" },
    { mark: "29:17.45", holder: "阿尔马兹·阿雅娜", country: "ETH", date: "2016-08-12", place: "里约热内卢" },
    { mark: "29:26.89", holder: "莉莉安·伦格鲁克", country: "KEN", date: "2024-05-25", place: "尤金" },
    { mark: "29:27.59", holder: "玛格丽特·基普肯博伊", country: "KEN", date: "2024-05-25", place: "尤金" },
    { mark: "29:29.73", holder: "古达夫·特斯盖", country: "ETH", date: "2023-06-23", place: "内尔哈（西班牙）" },
    { mark: "29:31.78", holder: "王军霞", country: "CHN", date: "1993-09-08", place: "北京" },
    { mark: "29:32.53", holder: "薇薇安·切鲁伊约特", country: "KEN", date: "2016-08-12", place: "里约热内卢" },
    { mark: "29:36.67", holder: "西凡·哈桑", country: "NED", date: "2020-10-10", place: "亨厄洛" },
    { mark: "29:37.80", holder: "西凡·哈桑", country: "NED", date: "2023-06-03", place: "亨厄洛" },
    { mark: "29:39.42", holder: "古达夫·特斯盖", country: "ETH", date: "2021-05-08", place: "马亚（葡萄牙）" },
    { mark: "29:42.56", holder: "蒂鲁内什·迪巴巴", country: "ETH", date: "2016-08-12", place: "里约热内卢" },
    { mark: "29:47.42", holder: "格蕾丝·纳沃乌纳", country: "KEN", date: "2023-06-03", place: "亨厄洛" },
    { mark: "29:47.71", holder: "福蒂恩·特斯法伊", country: "ETH", date: "2024-06-14", place: "内尔哈（西班牙）" },
    { mark: "29:48.34", holder: "齐格·格布雷塞拉马", country: "ETH", date: "2024-03-16", place: "圣胡安-卡皮斯特拉诺（美国）" },
    { mark: "29:49.33", holder: "齐格·格布雷塞拉马", country: "ETH", date: "2024-06-14", place: "内尔哈（西班牙）" },
    { mark: "29:50.52", holder: "埃杰加耶胡·塔耶", country: "ETH", date: "2024-06-14", place: "内尔哈（西班牙）" },
    { mark: "29:50.77", holder: "卡尔基丹·格扎赫涅", country: "BRN", date: "2021-05-08", place: "马亚（葡萄牙）" },
    { mark: "29:53.51", holder: "爱丽丝·纳沃乌纳", country: "KEN", date: "2016-08-12", place: "里约热内卢" },
    { mark: "29:53.80", holder: "梅塞莱赫·梅尔卡穆", country: "ETH", date: "2009-06-14", place: "乌得勒支" },
    { mark: "29:54.66", holder: "蒂鲁内什·迪巴巴", country: "ETH", date: "2008-08-15", place: "北京" },
    { mark: "29:55.32", holder: "西凡·哈桑", country: "NED", date: "2021-08-07", place: "东京" },
    { mark: "29:56.18", holder: "卡尔基丹·格扎赫涅", country: "BRN", date: "2021-08-07", place: "东京" },
    { mark: "29:57.45", holder: "埃杰加耶胡·塔耶", country: "ETH", date: "2023-06-23", place: "内尔哈（西班牙）" },
    { mark: "29:59.03", holder: "米赞·阿莱姆", country: "ETH", date: "2023-05-10", place: "伦敦" },
    { mark: "29:59.15", holder: "莱姆莱姆·海卢", country: "ETH", date: "2023-06-23", place: "内尔哈（西班牙）" },
    { mark: "29:59.20", holder: "梅塞雷特·德法尔", country: "ETH", date: "2009-07-11", place: "伯明翰" },
    { mark: "30:00.86", holder: "艾莉什·麦科尔根", country: "GBR", date: "2023-03-04", place: "圣胡安-卡皮斯特拉诺（美国）" },
    { mark: "30:01.09", holder: "葆拉·拉德克利夫", country: "GBR", date: "2002-08-06", place: "慕尼黑" },
    { mark: "30:01.35", holder: "米赞·阿莱姆", country: "ETH", date: "2023-06-23", place: "内尔哈（西班牙）" },
    { mark: "30:01.72", holder: "莱特森贝特·吉迪", country: "ETH", date: "2021-08-07", place: "东京" },
    { mark: "30:03.82", holder: "阿莉西亚·蒙森", country: "USA", date: "2023-03-04", place: "圣胡安-卡皮斯特拉诺（美国）" },
    { mark: "30:04.18", holder: "贝尔哈内·阿德雷", country: "ETH", date: "2003-08-23", place: "巴黎" },
    { mark: "30:04.45", holder: "齐格·格布雷塞拉马", country: "ETH", date: "2023-06-03", place: "亨厄洛" },
    { mark: "30:04.97", holder: "珍妮丝·切普恩盖蒂奇", country: "KEN", date: "2024-05-25", place: "尤金" },
    { mark: "30:06.01", holder: "齐格·格布雷塞拉马", country: "ETH", date: "2021-06-08", place: "亨厄洛" },
    { mark: "30:07.00", holder: "阿尔马兹·阿雅娜", country: "ETH", date: "2016-06-29", place: "亨厄洛" },
    { mark: "30:07.15", holder: "沃尔克内什·基丹", country: "ETH", date: "2003-08-23", place: "巴黎" },
    { mark: "30:07.20", holder: "孙英杰", country: "CHN", date: "2003-08-23", place: "巴黎" },
    { mark: "30:07.42", holder: "凯瑟琳·雷林", country: "KEN", date: "2024-05-25", place: "尤金" },
    { mark: "30:07.78", holder: "贝齐·赛纳", country: "KEN", date: "2016-08-12", place: "里约热内卢" },
    { mark: "30:08.06", holder: "梅塞雷特·德法尔", country: "ETH", date: "2013-06-27", place: "索伦蒂纳（瑞典）" },
    { mark: "30:09.05", holder: "艾纳迪斯·梅布拉图", country: "ETH", date: "2024-06-14", place: "内尔哈（西班牙）" },
    { mark: "30:09.94", holder: "莱特森贝特·吉迪", country: "ETH", date: "2022-07-16", place: "尤金" },
    { mark: "30:10.02", holder: "海伦·奥比里", country: "KEN", date: "2022-07-16", place: "尤金" },
    { mark: "30:10.07", holder: "玛格丽特·基普肯博伊", country: "KEN", date: "2022-07-16", place: "尤金" },
    { mark: "30:10.56", holder: "西凡·哈桑", country: "NED", date: "2022-07-16", place: "尤金" },
    { mark: "30:11.53", holder: "弗洛伦斯·基普拉加特", country: "KEN", date: "2009-06-14", place: "乌得勒支" },
    { mark: "30:11.87", holder: "阿亚卢·伍德", country: "ETH", date: "2009-06-14", place: "乌得勒支" },
    { mark: "30:12.15", holder: "拉赫尔·丹尼尔", country: "ERI", date: "2022-07-16", place: "尤金" },
    { mark: "30:12.45", holder: "埃杰加耶胡·塔耶", country: "ETH", date: "2022-07-16", place: "尤金" },
    { mark: "30:12.53", holder: "洛娜·基普拉加特", country: "NED", date: "2003-08-23", place: "巴黎" },
    { mark: "30:13.17", holder: "莫莉·哈德尔", country: "USA", date: "2016-08-12", place: "里约热内卢" },
    { mark: "30:13.37", holder: "钟焕娣", country: "CHN", date: "1993-09-08", place: "北京" },
    { mark: "30:13.74", holder: "英格丽德·克里斯蒂安森", country: "NOR", date: "1986-07-05", place: "奥斯陆" },
    { mark: "30:14.66", holder: "埃莉斯·克兰尼", country: "USA", date: "2022-03-06", place: "圣胡安-卡皮斯特拉诺（美国）" },
    { mark: "30:15.67", holder: "蒂鲁内什·迪巴巴", country: "ETH", date: "2005-06-28", place: "索伦蒂纳（瑞典）" },
    { mark: "30:16.32", holder: "阿尔马兹·阿雅娜", country: "ETH", date: "2017-08-05", place: "伦敦" },
    { mark: "30:17.15", holder: "葆拉·拉德克利夫", country: "GBR", date: "2004-06-27", place: "盖茨黑德（英国）" },
    { mark: "30:17.49", holder: "德拉尔图·图卢", country: "ETH", date: "2000-09-30", place: "悉尼" },
    { mark: "30:17.62", holder: "西凡·哈桑", country: "NED", date: "2019-09-28", place: "多哈" },
    { mark: "30:17.64", holder: "卡罗琳·基普库鲁伊", country: "KAZ", date: "2022-07-16", place: "尤金" },
    { mark: "30:17.77", holder: "博塞纳·穆拉特", country: "ETH", date: "2022-07-16", place: "尤金" },
    { mark: "30:18.05", holder: "卡丽莎·施韦策", country: "USA", date: "2022-07-16", place: "尤金" },
    { mark: "30:18.39", holder: "埃杰加耶胡·迪巴巴", country: "ETH", date: "2005-06-28", place: "索伦蒂纳（瑞典）" },
    { mark: "30:19.02", holder: "艾莉什·麦科尔根", country: "GBR", date: "2022-06-06", place: "亨厄洛" },
    { mark: "30:19.29", holder: "采海·格梅丘", country: "ETH", date: "2021-06-08", place: "亨厄洛" },
    { mark: "30:19.39", holder: "沃尔克内什·基丹", country: "ETH", date: "2005-05-29", place: "帕洛阿尔托（美国）" },
  ],
  topListTitle: "前 70 名",
  topListNote:
    "门槛 30:20.00，合规成绩全录（含并列）。哈桑6席、格布雷塞拉马4席；榜单前十名里九条产生于2016年之后。中国选手无一人入榜，全国纪录为王军霞1993年北京的29:31.78（距门槛48秒）。",
  history: [
    {
      heading: "1988：第一枚奥运金牌",
      paragraphs: [
        "女子10000米在1988年首尔首次成为奥运项目，苏联的奥尔加·邦达连科以31:05.21夺冠；1992年巴塞罗那，埃塞俄比亚的德拉尔图·图卢31:06.02夺金，成为非洲女子长跑的第一位奥运冠军。",
        "1990年代，挪威的英格丽德·克里斯蒂安森在1986年奥斯陆跑出30:13.74，把这个项目带进30分台；英国的莉兹·麦科尔根与葡萄牙的费尔南达·里贝罗在1990年代的大赛中轮流登顶。",
      ],
    },
    {
      heading: "王军霞的29:31.78",
      paragraphs: [
        "1993年9月8日北京七运会，王军霞跑出29:31.78——女子10000米第一次进入29分台，也是亚洲选手在这个项目上唯一的世界纪录。同一届她还打破了3000米世界纪录。这条纪录悬置了23年。",
        "2004年雅典，中国的邢慧娜以30:24.36夺得奥运金牌；此后中国女子长跑进入长期的低谷，全国纪录至今无人接近。",
      ],
    },
    {
      heading: "阿雅娜、吉迪与切贝特",
      paragraphs: [
        "2016年8月12日里约，阿尔马兹·阿雅娜以29:17.45夺冠并改写世界纪录——23年的等待在一场奥运决赛里结束。2017年伦敦世锦赛她又以30:16.32夺冠。",
        "2021年6月亨厄洛，吉迪29:01.03；2024年5月尤金，切贝特28:54.14。五年三破，女子10000米进入了「28分台时代」；2024年巴黎奥运，切贝特30:43.25夺金，2025年东京世锦赛她以30:37.61完成双冠。",
      ],
    },
  ],

  sources: [
    { label: "World Athletics · 官方纪录与总榜", url: "https://worldathletics.org/records/all-time-toplists/middle-long/10000-metres/outdoor/women/senior" },
    { label: "Alltime-Athletics · 女子10000米历史总榜", url: "https://alltime-athletics.com/w_10kok.htm" },
    { label: "Olympedia · Athletics — 10,000 metres, Women（历届奥运逐届成绩）", url: "https://www.olympedia.org/event_names/102" },
  ],
};
