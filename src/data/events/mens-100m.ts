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
 *  - 2025 东京世锦赛与 2026 亚运会的赛果未能核实，见冠军榜头注。
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

  top10: [
    { mark: "9.58", holder: "Usain Bolt", country: "JAM", date: "2009-08-16", meet: "2009年柏林世锦赛", wind: "+0.9", wr: true, note: "现世界纪录" },
    { mark: "9.63", holder: "Usain Bolt", country: "JAM", date: "2012-08-05", meet: "2012年伦敦奥运会", wind: "+1.5", note: "奥运会纪录" },
    { mark: "9.69", holder: "Usain Bolt", country: "JAM", date: "2008-08-16", meet: "2008年北京奥运会", wind: "0.0" },
    { mark: "9.69", holder: "Tyson Gay", country: "USA", date: "2009-09-20", meet: "上海国际田径黄金大奖赛", wind: "+2.0", note: "顺风合规上限；史上最快非奥运/世锦赛成绩" },
    { mark: "9.69", holder: "Yohan Blake", country: "JAM", date: "2012-08-23", meet: "洛桑国际田径赛", note: "布雷克生涯巅峰" },
    { mark: "9.71", holder: "Tyson Gay", country: "USA", date: "2009-08-16", meet: "2009年柏林世锦赛", wind: "+0.9", note: "史上最快亚军——博尔特身侧的9.71" },
    { mark: "9.72", holder: "Usain Bolt", country: "JAM", date: "2008-05-31", meet: "纽约田径大奖赛", wind: "+1.7" },
    { mark: "9.72", holder: "Asafa Powell", country: "JAM", date: "2008-09-02", meet: "洛桑国际田径赛" },
    { mark: "9.76", holder: "Christian Coleman", country: "USA", date: "2019-09-28", meet: "2019年多哈世锦赛", note: "非博尔特体系的最快成绩" },
    { mark: "9.77", holder: "Asafa Powell", country: "JAM", date: "2005-06-14", meet: "雅典国际田径赛", wind: "+1.6" },
  ],
  top10Note:
    "历史前十被博尔特（三席）、鲍威尔（两席）与盖伊（两席）瓜分，门槛9.77；亚洲与中国的最高刻度是苏炳添的9.83（2021东京奥运半决赛），与第十位相差0.06秒。部分成绩的风速未能核实，已缺省处理。",

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
        "此后十七年，9.58纹丝不动。盖伊的9.69、布雷克的9.69、盖伊的9.71……最接近的一次仍然差0.11秒。博尔特还留下三届奥运三连冠（2008/2012/2016）与伦敦的奥运会纪录9.63——「闪电」退役之后，男子百米再无人跑进9.69。",
      ],
    },
    {
      heading: "亚洲刻度：苏炳添的9.83",
      paragraphs: [
        "亚洲男子百米的长坡道：2010年广州亚运，劳义10.24为中国拿下亚运百米首冠；2014年仁川，卡塔尔的费米·奥古诺德以9.93改写亚洲纪录；2018年雅加达，苏炳添9.92夺金；2022年杭州（2023年举行），谢震业9.97加冕。",
        "2021年8月1日的东京，32岁的苏炳添在半决赛跑出9.83（+0.9）——亚洲纪录、中国纪录一夜改写，他成为首位站上奥运男子百米决赛跑道的中国人，决赛以9.98获得第六。对亚洲短跑而言，9.83就是博尔特之外的另一个宇宙坐标。",
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
      label: "Olympedia：田径奖牌数据库",
      url: "https://www.olympedia.org/results/80132",
    },
  ],
};
