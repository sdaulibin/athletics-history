import type { AthleticsEvent } from "@/lib/types";

/**
 * 男子 100 米（室外）世界纪录演进
 * 数据截至：2026年10月
 *
 * 收录口径（宁缺毋滥）：
 *  - 电计时时代（1968 起）的被承认纪录全部收录；
 *    手计时时代（1912–1968）的沿革未能核实到可靠来源，暂缺；
 *  - 被取消的纪录（ratified: false）保留为史实条目：约翰逊 1987/1988、
 *    蒙哥马利 2002、加特林 2006；
 *  - 9.58 悬置十七年，为电计时时代最长寿的世界纪录之一；
 *  - 冠军榜已补 2025 东京世锦赛（塞维尔 9.77）与 2026 名古屋亚运
 *    （汶颂 9.90）；其余届次的空缺见冠军榜头注；
 *  - 历史最好成绩榜扩至前五十：9.80 以内合规成绩全录（56 条，含并列）。
 */
export const mens100m: AthleticsEvent = {
  slug: "mens-100m",
  group: "track",
  markKind: "time",
  gender: "men",
  venue: "outdoor",
  name: "男子 100 米",
  summary:
    "9.58——2009年8月16日的柏林之夜，博尔特把人类的极限划在这里。十七年过去，最接近的一次仍然差着0.11秒；而亚洲的刻度，是苏炳添东京半决赛跑出的9.83。",
  dataAsOf: "2026年10月",
  progression: [
    { mark: "9.95", holder: "Jim Hines", country: "USA", date: "1968-10-14", meet: "奥运会", place: "墨西哥城", note: "电计时时代首项世界纪录；手计时时代未能核实，暂不收录" },
    { mark: "9.93", holder: "Calvin Smith", country: "USA", date: "1983-07-03", place: "科罗拉多斯普林斯", note: "打破保持十五年的海因斯纪录" },
    { mark: "9.83", holder: "Ben Johnson", country: "CAN", date: "1987-09-30", meet: "世界锦标赛", place: "罗马", ratified: false, note: "1989年因兴奋剂被追回，纪录取消，刘易斯（9.93）递补为该届冠军" },
    { mark: "9.92", holder: "Carl Lewis", country: "USA", date: "1988-09-24", meet: "奥运会", place: "汉城", note: "约翰逊9.79被取消后的有效成绩；决赛中次于约翰逊冲线" },
    { mark: "9.79", holder: "Ben Johnson", country: "CAN", date: "1988-09-24", meet: "奥运会", place: "汉城", ratified: false, note: "赛当日即药检阳性，成绩与纪录被取消——百米史上最著名的9.79" },
    { mark: "9.90", holder: "Leroy Burrell", country: "USA", date: "1991-06-14", place: "纽约" },
    { mark: "9.86", holder: "Carl Lewis", country: "USA", date: "1991-08-25", meet: "世界锦标赛", place: "东京", note: "世纪之战：刘易斯与伯勒尔双双打破纪录，六人跑进10秒" },
    { mark: "9.85", holder: "Leroy Burrell", country: "USA", date: "1994-07-06", place: "洛桑" },
    { mark: "9.84", holder: "Donovan Bailey", country: "CAN", date: "1996-07-27", meet: "奥运会", place: "亚特兰大", note: "决赛夺冠，击败弗雷德里克斯的世纪对决" },
    { mark: "9.79", holder: "Maurice Greene", country: "USA", date: "1999-06-16", place: "雅典", note: "首破9.80大关" },
    { mark: "9.78", holder: "Tim Montgomery", country: "USA", date: "2002-09-14", meet: "国际田联大奖赛总决赛", place: "巴黎", ratified: false, note: "BALCO案发后被取消" },
    { mark: "9.77", holder: "Asafa Powell", country: "JAM", date: "2005-06-14", place: "雅典", wind: "+1.6", note: "牙买加时代的开端" },
    { mark: "9.77", holder: "Justin Gatlin", country: "USA", date: "2006-05-12", place: "多哈", ratified: false, note: "因兴奋剂禁赛，成绩被取消" },
    { mark: "9.74", holder: "Asafa Powell", country: "JAM", date: "2007-09-09", place: "列蒂", wind: "+0.9" },
    { mark: "9.72", holder: "Usain Bolt", country: "JAM", date: "2008-05-31", place: "纽约", wind: "+1.7", note: "21岁首破世界纪录" },
    { mark: "9.69", holder: "Usain Bolt", country: "JAM", date: "2008-08-16", meet: "奥运会", place: "北京", wind: "0.0", note: "决赛最后二十米张开双臂拍胸冲线" },
    { mark: "9.58", holder: "Usain Bolt", country: "JAM", date: "2009-08-16", meet: "世界锦标赛", place: "柏林", wind: "+0.9", note: "现世界纪录；悬置十七年，电计时时代最长寿的百米纪录" },
  ],

  asianRecord: {
    mark: "9.83", holder: "Su Bingtian", country: "CHN",
    date: "2021-08-01", meet: "奥运会半决赛", place: "东京", wind: "+0.9",
    note: "首位闯进奥运男子百米决赛的中国人（决赛9.98，第六名）；同时为中国纪录",
  },
  chineseRecord: {
    mark: "9.83", holder: "Su Bingtian", country: "CHN",
    date: "2021-08-01", meet: "奥运会半决赛", place: "东京", wind: "+0.9",
    note: "此前个人最好为9.91（2018，两次）；从劳义到苏炳添，中国百米的十年爬坡",
  },

  topList: [
{ mark: "9.58", holder: "Usain Bolt", country: "JAM", date: "2009-08-16", meet: "2009年柏林世锦赛", wind: "+0.9", wr: true, note: "现世界纪录" },
    { mark: "9.63", holder: "Usain Bolt", country: "JAM", date: "2012-08-05", meet: "2012年伦敦奥运会", wind: "+1.5", note: "奥运会纪录" },
    { mark: "9.69", holder: "Usain Bolt", country: "JAM", date: "2008-08-16", meet: "2008年北京奥运会", wind: "0.0" },
    { mark: "9.69", holder: "Tyson Gay", country: "USA", date: "2009-09-20", meet: "上海国际田径黄金大奖赛", wind: "+2.0", note: "顺风合规上限" },
    { mark: "9.69", holder: "Yohan Blake", country: "JAM", date: "2012-08-23", meet: "洛桑钻石联赛", wind: "-0.1" },
    { mark: "9.71", holder: "Tyson Gay", country: "USA", date: "2009-08-16", meet: "2009年柏林世锦赛", wind: "+0.9", note: "史上最快亚军" },
    { mark: "9.72", holder: "Usain Bolt", country: "JAM", date: "2008-05-31", meet: "纽约田径大奖赛", wind: "+1.7", note: "时为世界纪录" },
    { mark: "9.72", holder: "Asafa Powell", country: "JAM", date: "2008-09-02", meet: "洛桑国际田径赛", wind: "+0.2" },
    { mark: "9.74", holder: "Asafa Powell", country: "JAM", date: "2007-09-09", meet: "列蒂国际田径赛", wind: "+1.7", flags: ["sf"], note: "半决赛；时为世界纪录" },
    { mark: "9.74", holder: "Justin Gatlin", country: "USA", date: "2015-05-15", meet: "多哈钻石联赛", wind: "+0.9" },
    { mark: "9.75", holder: "Yohan Blake", country: "JAM", date: "2012-06-29", meet: "牙买加奥运选拔赛", wind: "+1.1" },
    { mark: "9.75", holder: "Yohan Blake", country: "JAM", date: "2012-08-05", meet: "2012年伦敦奥运会", wind: "+1.5" },
    { mark: "9.75", holder: "Justin Gatlin", country: "USA", date: "2015-06-04", meet: "罗马钻石联赛", wind: "+0.9" },
    { mark: "9.75", holder: "Justin Gatlin", country: "USA", date: "2015-07-09", meet: "洛桑钻石联赛", wind: "+1.4" },
    { mark: "9.75", holder: "Kishane Thompson", country: "JAM", date: "2025-06-27", meet: "牙买加锦标赛", wind: "+0.8", note: "2025年世界最好成绩" },
    { mark: "9.76", holder: "Usain Bolt", country: "JAM", date: "2008-05-03", meet: "牙买加国际邀请赛", wind: "+1.8" },
    { mark: "9.76", holder: "Usain Bolt", country: "JAM", date: "2011-09-16", meet: "布鲁塞尔钻石联赛", wind: "+1.3" },
    { mark: "9.76", holder: "Usain Bolt", country: "JAM", date: "2012-05-31", meet: "罗马钻石联赛", wind: "-0.1" },
    { mark: "9.76", holder: "Yohan Blake", country: "JAM", date: "2012-08-30", meet: "苏黎世钻石联赛", wind: "+1.4" },
    { mark: "9.76", holder: "Christian Coleman", country: "USA", date: "2019-09-28", meet: "2019年多哈世锦赛", wind: "+0.6" },
    { mark: "9.76", holder: "Trayvon Bromell", country: "USA", date: "2021-09-18", meet: "内罗毕基普基诺经典赛", wind: "+1.2", note: "高原成绩" },
    { mark: "9.76", holder: "Fred Kerley", country: "USA", date: "2022-06-24", meet: "美国世锦赛选拔赛", wind: "+1.4", flags: ["sf"] },
    { mark: "9.77", holder: "Asafa Powell", country: "JAM", date: "2005-06-14", meet: "雅典国际田径赛", wind: "+1.6", note: "牙买加时代的开端" },
    { mark: "9.77", holder: "Asafa Powell", country: "JAM", date: "2006-06-11", meet: "盖茨黑德国际田径赛", wind: "+1.5" },
    { mark: "9.77", holder: "Asafa Powell", country: "JAM", date: "2006-08-18", meet: "苏黎世国际田径赛", wind: "+1.0" },
    { mark: "9.77", holder: "Tyson Gay", country: "USA", date: "2008-06-28", meet: "美国奥运选拔赛", wind: "+1.6", flags: ["h"], note: "1/4决赛" },
    { mark: "9.77", holder: "Usain Bolt", country: "JAM", date: "2008-09-05", meet: "布鲁塞尔国际田径赛", wind: "-1.3" },
    { mark: "9.77", holder: "Asafa Powell", country: "JAM", date: "2008-09-07", meet: "列蒂国际田径赛", wind: "+0.9", flags: ["h"] },
    { mark: "9.77", holder: "Tyson Gay", country: "USA", date: "2009-07-10", meet: "罗马国际田径赛", wind: "+0.4" },
    { mark: "9.77", holder: "Usain Bolt", country: "JAM", date: "2013-08-11", meet: "2013年莫斯科世锦赛", wind: "-0.3" },
    { mark: "9.77", holder: "Justin Gatlin", country: "USA", date: "2014-09-05", meet: "布鲁塞尔钻石联赛", wind: "+0.6" },
    { mark: "9.77", holder: "Justin Gatlin", country: "USA", date: "2015-08-23", meet: "2015年北京世锦赛", wind: "+0.9", flags: ["sf"], note: "该届最快成绩出自半决赛" },
    { mark: "9.77", holder: "Trayvon Bromell", country: "USA", date: "2021-06-05", meet: "米拉马尔（美国）", wind: "+1.5" },
    { mark: "9.77", holder: "Ferdinand Omanyala", country: "KEN", date: "2021-09-18", meet: "内罗毕基普基诺经典赛", wind: "+1.2", note: "非洲纪录；同场负于布罗梅尔；高原" },
    { mark: "9.77", holder: "Fred Kerley", country: "USA", date: "2022-06-24", meet: "美国世锦赛选拔赛", wind: "+1.8" },
    { mark: "9.77", holder: "Kishane Thompson", country: "JAM", date: "2024-06-28", meet: "牙买加锦标赛", wind: "+0.9" },
    { mark: "9.77", holder: "Oblique Seville", country: "JAM", date: "2025-09-14", meet: "2025年东京世锦赛", wind: "+0.3", note: "个人最佳，夺冠" },
    { mark: "9.78", holder: "Asafa Powell", country: "JAM", date: "2007-09-09", meet: "列蒂国际田径赛", wind: "0.0", note: "同日半决赛9.74后的决赛" },
    { mark: "9.78", holder: "Tyson Gay", country: "USA", date: "2010-08-13", meet: "伦敦钻石联赛", wind: "-0.4" },
    { mark: "9.78", holder: "Nesta Carter", country: "JAM", date: "2010-08-29", meet: "列蒂国际田径赛", wind: "+0.9" },
    { mark: "9.78", holder: "Asafa Powell", country: "JAM", date: "2011-06-30", meet: "洛桑钻石联赛", wind: "+1.0" },
    { mark: "9.78", holder: "Justin Gatlin", country: "USA", date: "2015-07-17", meet: "摩纳哥钻石联赛", wind: "-0.3" },
    { mark: "9.79", holder: "Maurice Greene", country: "USA", date: "1999-06-16", meet: "雅典国际田径赛", wind: "+0.1", note: "首破9.80大关" },
    { mark: "9.79", holder: "Usain Bolt", country: "JAM", date: "2009-07-17", meet: "巴黎黄金联赛", wind: "-0.2" },
    { mark: "9.79", holder: "Tyson Gay", country: "USA", date: "2010-08-27", meet: "布鲁塞尔钻石联赛", wind: "+0.1" },
    { mark: "9.79", holder: "Tyson Gay", country: "USA", date: "2011-06-04", meet: "克莱蒙特（美国）", wind: "+1.1", flags: ["h"] },
    { mark: "9.79", holder: "Usain Bolt", country: "JAM", date: "2012-06-07", meet: "奥斯陆钻石联赛", wind: "+0.6" },
    { mark: "9.79", holder: "Justin Gatlin", country: "USA", date: "2012-08-05", meet: "2012年伦敦奥运会", wind: "+1.5", note: "季军" },
    { mark: "9.79", holder: "Usain Bolt", country: "JAM", date: "2015-08-23", meet: "2015年北京世锦赛", wind: "-0.5" },
    { mark: "9.79", holder: "Christian Coleman", country: "USA", date: "2018-08-31", meet: "布鲁塞尔钻石联赛", wind: "-0.3" },
    { mark: "9.79", holder: "Fred Kerley", country: "USA", date: "2022-07-15", meet: "2022年尤金世锦赛", wind: "+0.1", flags: ["h"] },
    { mark: "9.79", holder: "Ferdinand Omanyala", country: "KEN", date: "2024-06-15", meet: "内罗毕基普基诺经典赛", wind: "+1.5", note: "高原成绩" },
    { mark: "9.79", holder: "Noah Lyles", country: "USA", date: "2024-08-04", meet: "2024年巴黎奥运会", wind: "+1.0", note: "9.784，千分位险胜汤普森" },
    { mark: "9.79", holder: "Kishane Thompson", country: "JAM", date: "2024-08-04", meet: "2024年巴黎奥运会", wind: "+1.0", note: "9.789" },
    { mark: "9.79", holder: "Kenneth Bednarek", country: "USA", date: "2025-08-01", meet: "美国锦标赛（尤金）", wind: "+1.8", note: "200米名将的个人最佳" },
    { mark: "9.79", holder: "Noah Lyles", country: "USA", date: "2026-07-24", meet: "美国锦标赛（纽约）", wind: "+0.8", note: "2026年世界最好成绩" },
  ],
  topListTitle: "前五十",
  topListNote: "第50位的成绩为9.79——历史上有14次并列，全部收录，共56条，恰为史上跑进9.80的全部合规成绩。博尔特独占12席并包揽前三；2024巴黎奥运莱尔斯与汤普森的9.784对9.789，双双以9.79并列在列。第21、34、52位为内罗毕高原（约1800米）成绩，依规合规。亚洲与中国的最高刻度仍是苏炳添的9.83（2021东京奥运半决赛），约合并列第96位，距第50位差0.04秒。",

  history: [
    {
      heading: "从手计时到电计时",
      paragraphs: [
        "1968年墨西哥城奥运会，吉姆·海因斯在电计时系统下跑出9.95——「十秒大关」在电子秒表的口径里第一次被正式承认。此前半个多世纪的手计时沿革（10.6、10.3、10.2、10.0的时代）因换算口径复杂，本站暂未收录。",
        "1983年7月3日，卡尔文·史密斯在科罗拉多斯普林斯跑出9.93，把海因斯的纪录提高了0.02秒——那是短跑史上最漫长的一次等待：十五年。此后纪录开始加速易手：伯勒尔与刘易斯在1991年东京世锦赛上演「世纪之战」，六人同场破10秒，刘易斯9.86封王。",
      ],
    },
    {
      heading: "约翰逊与9.79之殇",
      paragraphs: [
        "1987年罗马世锦赛，本·约翰逊以9.83碾压刘易斯；一年后的汉城奥运决赛，他把「人类极限」推到9.79——然后在当夜的药检中轰然倒塌。两项成绩先后被取消，刘易斯以9.92递补为汉城奥运冠军与世界纪录保持者。百米史从此多了一条铁律：纪录可以被追回，但历史的伤口留在原地。",
        "丑闻之后，贝利（9.84，1996亚特兰大）、格林（9.79，1999雅典）相继把纪录推向9.79之内；蒙哥马利2002年的9.78与加特林2006年的9.77又先后因兴奋剂被抹去——这张演进表上，「被取消」的标记与被承认的纪录同样多。",
      ],
    },
    {
      heading: "博尔特：9.58 的天花板",
      paragraphs: [
        "2008年5月31日的纽约，21岁的尤塞恩·博尔特以9.72首次改写世界纪录；三个月后的北京，他在无风条件下跑出9.69，最后二十米张开双臂拍胸冲线——全世界第一次意识到，短跑的尺度被换了一把尺。2009年8月16日的柏林之夜，9.58（+0.9），一步到位。",
        "此后十七年，9.58纹丝不动。盖伊的9.69、布雷克的9.69、盖伊的9.71……最接近的一次仍然差0.11秒。博尔特还留下三届奥运三连冠（2008/2012/2016）与伦敦的奥运会纪录9.63——「闪电」退役之后，男子百米再无人跑进9.69。2025年9月的东京世锦赛，24岁的牙买加人奥布利克·塞维尔以9.77夺冠（汤普森9.82银、莱尔斯9.89铜，决赛五人破10秒），这是后博尔特时代最快的世界大赛百米冠军成绩——距9.58，仍差0.19秒。",
      ],
    },
    {
      heading: "亚洲刻度：从伊东浩司到汶颂",
      paragraphs: [
        "亚洲男子百米的长坡道：1998年曼谷，日本的伊东浩司半决赛跑出10.00改写亚洲纪录，决赛10.05夺金并当届豪取三金；此后两届亚运金牌接连归属沙特——2002年釜山萨法尔10.24、2006年多哈哈比布10.32。2010年广州亚运，劳义10.24为中国拿下亚运百米首冠；2014年仁川，卡塔尔的费米·奥古诺德以9.93改写亚洲纪录；2018年雅加达，苏炳添9.92夺金；2022年杭州（2023年举行），谢震业9.97加冕。",
        "2021年8月1日的东京，32岁的苏炳添在半决赛跑出9.83（+0.9）——亚洲纪录、中国纪录一夜改写，他成为首位站上奥运男子百米决赛跑道的中国人，决赛以9.98获得第六。对亚洲短跑而言，9.83就是博尔特之外的另一个宇宙坐标。",
        "2026年9月25日的名古屋，20岁的泰国人汶颂半决赛9.91、决赛9.90，把苏炳添保持的亚运会赛会纪录改写——亚洲纪录9.83仍未被撼动。亚洲百米的下一站，是把9.83也换个主人。",
      ],
    },
  ],
  sources: [
    {
      label: "Wikipedia：World record progression 100 metres men",
      url: "https://en.wikipedia.org/wiki/World_record_progression_100_metres_men",
    },
    {
      label: "World Athletics 官方纪录",
      url: "https://worldathletics.org/records/by-category/world-records",
    },
    {
      label: "Alltime-Athletics：男子100米历史成绩总榜（Peter Larsson 维护）",
      url: "http://www.alltime-athletics.com/m_100ok.htm",
    },
  ],
};
