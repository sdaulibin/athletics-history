import type { AthleticsEvent } from "@/lib/types";

/**
 * 男子 200 米（室外）世界纪录演进
 * 数据截至：2026年10月
 *
 * 收录口径（宁缺毋滥）：
 *  - 电计时时代（1968 起）的被承认纪录全部收录；手计时时代（1951–1968）
 *    的沿革未能核实到可靠来源，暂缺；
 *  - 高原成绩（墨西哥城 19.83A / 19.72A）按世界田联惯例计为纪录，条目内注明；
 *  - 历史最好成绩榜扩至前五十：19.66 以内合规成绩全录（55 条，含并列），
 *    另补 2026 年 9 月终极锦标赛冠军贝德纳雷克的 19.52（总榜尚未收录），共 56 条；
 *  - 亚运会：1994 年及以前各届未能双源核实，暂缺（1998 起每届均有战报与
 *    奖牌总表双源核对）。
 */
export const mens200m: AthleticsEvent = {
  slug: "mens-200m",
  group: "track",
  markKind: "time",
  gender: "men",
  venue: "outdoor",
  name: "男子 200 米",
  summary:
    "19.19——2009年8月20日的柏林夜，博尔特把人类的极限又砍掉0.11秒，十七年无人逼近到0.2秒之内。弯道与直道的接力里，美国人后来重新排队；而亚洲的刻度，2019年由谢震业写下19.88，2026年在名古屋被泰国少年汶颂追平。",
  dataAsOf: "2026年10月",
  progression: [
    { mark: "19.83", holder: "汤米·史密斯", country: "USA", date: "1968-10-16", meet: "奥运会", place: "墨西哥城", wind: "+0.9", note: "电计时时代首项世界纪录；高原（约2240米）；领奖台上的举拳成为世纪图像" },
    { mark: "19.72", holder: "皮特罗·门内阿", country: "ITA", date: "1979-09-12", place: "墨西哥城", wind: "+1.8", note: "高原（约2240米）；保持17年，是博尔特之前最「长寿」的200米世界纪录" },
    { mark: "19.66", holder: "迈克尔·约翰逊", country: "USA", date: "1996-06-23", meet: "美国奥运选拔赛", place: "亚特兰大", wind: "+1.7", note: "39天后在同一座城市再破" },
    { mark: "19.32", holder: "迈克尔·约翰逊", country: "USA", date: "1996-08-01", meet: "奥运会", place: "亚特兰大", wind: "+0.4", note: "同届兼夺400米，双金双纪录；保持12年" },
    { mark: "19.30", holder: "乌塞恩·博尔特", country: "JAM", date: "2008-08-20", meet: "奥运会", place: "北京", wind: "-0.9", note: "鸟巢之夜，逆风之下改写12年的19.32" },
    { mark: "19.19", holder: "乌塞恩·博尔特", country: "JAM", date: "2009-08-20", meet: "世锦赛", place: "柏林", wind: "+0.9", note: "现世界纪录，悬置十七年" },
  ],

  asianRecord: {
    mark: "19.88", holder: "谢震业", country: "CHN",
    date: "2019-07-21", meet: "钻石联赛", place: "伦敦", wind: "+0.9",
    note: "2026年9月27日，名古屋亚运会决赛，泰国的汶颂以19.88（−0.3）追平，两人并列保持亚洲纪录",
  },
  chineseRecord: {
    mark: "19.88", holder: "谢震业", country: "CHN",
    date: "2019-07-21", meet: "钻石联赛", place: "伦敦", wind: "+0.9",
    note: "亚洲第一位跑进19.90的人；此后七年，中国男子200米的下一步仍在等待",
  },

  topList: [
    { mark: "19.19", holder: "乌塞恩·博尔特", country: "JAM", date: "2009-08-20", meet: "世锦赛", place: "柏林", wind: "-0.3", note: "现世界纪录" },
    { mark: "19.26", holder: "约翰·布雷克", country: "JAM", date: "2011-09-16", meet: "钻石联赛", place: "布鲁塞尔", wind: "+0.7", note: "历史第二快" },
    { mark: "19.30", holder: "乌塞恩·博尔特", country: "JAM", date: "2008-08-20", meet: "奥运会", place: "北京", wind: "-0.9", note: "逆风0.9之下；此前纪录19.32保持12年" },
    { mark: "19.31", holder: "诺亚·莱尔斯", country: "USA", date: "2022-07-21", meet: "世锦赛", place: "尤金", wind: "+0.4", note: "美国纪录" },
    { mark: "19.32", holder: "迈克尔·约翰逊", country: "USA", date: "1996-08-01", meet: "奥运会", place: "亚特兰大", wind: "+0.4" },
    { mark: "19.32", holder: "乌塞恩·博尔特", country: "JAM", date: "2012-08-09", meet: "奥运会", place: "伦敦", wind: "+0.4", note: "追平约翰逊的旧世界纪录" },
    { mark: "19.40", holder: "乌塞恩·博尔特", country: "JAM", date: "2011-09-03", meet: "世锦赛", place: "大邱", wind: "+0.8", note: "百米抢跑被罚下后的回应" },
    { mark: "19.44", holder: "约翰·布雷克", country: "JAM", date: "2012-08-09", meet: "奥运会", place: "伦敦", wind: "+0.4" },
    { mark: "19.46", holder: "莱齐莱·特博戈", country: "BOT", date: "2024-08-08", meet: "奥运会", place: "巴黎", wind: "+0.4", note: "博茨瓦纳史上首枚奥运金牌" },
    { mark: "19.46", holder: "诺亚·莱尔斯", country: "USA", date: "2022-08-10", meet: "钻石联赛", place: "摩纳哥", wind: "+0.8" },
    { mark: "19.47", holder: "诺亚·莱尔斯", country: "USA", date: "2023-07-23", meet: "钻石联赛", place: "伦敦", wind: "+1.6" },
    { mark: "19.49", holder: "埃里永·奈顿", country: "USA", date: "2022-04-30", place: "巴吞鲁日（美国）", wind: "+1.4", note: "18岁" },
    { mark: "19.50", holder: "诺亚·莱尔斯", country: "USA", date: "2019-07-05", meet: "钻石联赛", place: "洛桑", wind: "-0.1" },
    { mark: "19.50", holder: "莱齐莱·特博戈", country: "BOT", date: "2023-07-23", meet: "钻石联赛", place: "伦敦", wind: "+1.6", note: "博茨瓦纳纪录" },
    { mark: "19.51", holder: "诺亚·莱尔斯", country: "USA", date: "2025-09-18", meet: "世锦赛（半决赛）", place: "东京", wind: "+1.0", flags: ["sf"] },
    { mark: "19.52", holder: "肯尼思·贝德纳雷克", country: "USA", date: "2026-09-13", meet: "世界田径终极锦标赛", place: "布达佩斯", wind: "-0.1", note: "夺冠成绩；首届终极锦标赛" },
    { mark: "19.52", holder: "诺亚·莱尔斯", country: "USA", date: "2021-08-21", meet: "钻石联赛", place: "尤金", wind: "+1.5" },
    { mark: "19.52", holder: "诺亚·莱尔斯", country: "USA", date: "2022-09-08", meet: "钻石联赛", place: "苏黎世", wind: "-0.6" },
    { mark: "19.52", holder: "诺亚·莱尔斯", country: "USA", date: "2023-08-25", meet: "世锦赛", place: "布达佩斯", wind: "-0.2", note: "夺冠成绩" },
    { mark: "19.52", holder: "诺亚·莱尔斯", country: "USA", date: "2025-09-19", meet: "世锦赛", place: "东京", wind: "0.0", note: "夺冠成绩；与2023年同为19.52" },
    { mark: "19.53", holder: "沃尔特·迪克斯", country: "USA", date: "2011-09-16", meet: "钻石联赛", place: "布鲁塞尔", wind: "+0.7", note: "同场负于布雷克" },
    { mark: "19.53", holder: "诺亚·莱尔斯", country: "USA", date: "2024-06-29", meet: "美国奥运选拔赛", place: "尤金", wind: "+0.5" },
    { mark: "19.54", holder: "约翰·布雷克", country: "JAM", date: "2012-09-07", meet: "钻石联赛", place: "布鲁塞尔", wind: "0.0" },
    { mark: "19.55", holder: "莱齐莱·特博戈", country: "BOT", date: "2024-09-05", meet: "钻石联赛", place: "苏黎世", wind: "+0.4" },
    { mark: "19.55", holder: "乌塞恩·博尔特", country: "JAM", date: "2015-08-27", meet: "世锦赛", place: "北京", wind: "-0.1" },
    { mark: "19.56", holder: "乌塞恩·博尔特", country: "JAM", date: "2010-05-01", meet: "牙买加国际邀请赛", place: "金斯顿", wind: "-0.8" },
    { mark: "19.56", holder: "诺亚·莱尔斯", country: "USA", date: "2022-08-26", meet: "钻石联赛", place: "洛桑", wind: "+1.3" },
    { mark: "19.57", holder: "乌塞恩·博尔特", country: "JAM", date: "2009-09-04", meet: "钻石联赛", place: "布鲁塞尔", wind: "0.0" },
    { mark: "19.57", holder: "肯尼思·贝德纳雷克", country: "USA", date: "2024-09-05", meet: "钻石联赛", place: "苏黎世", wind: "+0.4", note: "同场负于特博戈" },
    { mark: "19.57", holder: "贾斯汀·加特林", country: "USA", date: "2015-06-28", meet: "美国锦标赛", place: "尤金", wind: "+0.4" },
    { mark: "19.58", holder: "肯尼思·贝德纳雷克", country: "USA", date: "2025-09-19", meet: "世锦赛", place: "东京", wind: "0.0" },
    { mark: "19.58", holder: "乌塞恩·博尔特", country: "JAM", date: "2012-08-23", meet: "钻石联赛", place: "洛桑", wind: "+1.4" },
    { mark: "19.58", holder: "泰森·盖伊", country: "USA", date: "2009-05-30", meet: "锐步大奖赛", place: "纽约", wind: "+1.3", note: "时为美国纪录" },
    { mark: "19.59", holder: "乌塞恩·博尔特", country: "JAM", date: "2009-07-07", meet: "超级大奖赛", place: "洛桑", wind: "-0.9" },
    { mark: "19.59", holder: "肯尼思·贝德纳雷克", country: "USA", date: "2024-06-29", meet: "美国奥运选拔赛", place: "尤金", wind: "+0.5" },
    { mark: "19.61", holder: "诺亚·莱尔斯", country: "USA", date: "2022-06-12", place: "纽约", wind: "+1.3" },
    { mark: "19.62", holder: "安德烈·德格拉塞", country: "CAN", date: "2021-08-04", meet: "奥运会", place: "东京", wind: "-0.5" },
    { mark: "19.62", holder: "肯尼思·贝德纳雷克", country: "USA", date: "2026-09-05", meet: "钻石联赛", place: "布鲁塞尔", wind: "+0.8" },
    { mark: "19.62", holder: "肯尼思·贝德纳雷克", country: "USA", date: "2024-08-08", meet: "奥运会", place: "巴黎", wind: "+0.4" },
    { mark: "19.62", holder: "诺亚·莱尔斯", country: "USA", date: "2022-07-19", meet: "世锦赛（半决赛）", place: "尤金", wind: "+1.1", flags: ["sf"] },
    { mark: "19.62", holder: "泰森·盖伊", country: "USA", date: "2007-06-24", meet: "美国锦标赛", place: "印第安纳波利斯", wind: "-0.3" },
    { mark: "19.62", holder: "肯尼思·贝德纳雷克", country: "USA", date: "2026-08-27", meet: "钻石联赛", place: "苏黎世", wind: "-0.4" },
    { mark: "19.63", holder: "乌塞恩·博尔特", country: "JAM", date: "2008-09-02", meet: "超级大奖赛", place: "洛桑", wind: "-0.9" },
    { mark: "19.63", holder: "雷尼尔·梅纳", country: "CUB", date: "2022-07-03", place: "拉绍德封（瑞士）", wind: "+1.2", note: "高原（约1000米）；古巴纪录" },
    { mark: "19.63", holder: "诺亚·莱尔斯", country: "USA", date: "2025-08-03", place: "尤金", wind: "+0.2" },
    { mark: "19.63", holder: "泽维尔·卡特", country: "USA", date: "2006-07-11", meet: "超级大奖赛", place: "洛桑", wind: "+0.4" },
    { mark: "19.63", holder: "杰登·里德", country: "CAY", date: "2026-06-12", place: "尤金", wind: "+1.5", note: "开曼群岛（人口约七万）" },
    { mark: "19.64", holder: "布赖恩·莱维尔", country: "JAM", date: "2025-09-19", meet: "世锦赛", place: "东京", wind: "0.0" },
    { mark: "19.64", holder: "莱齐莱·特博戈", country: "BOT", date: "2024-08-22", meet: "钻石联赛", place: "洛桑", wind: "+0.9" },
    { mark: "19.65", holder: "莱齐莱·特博戈", country: "BOT", date: "2025-09-19", meet: "世锦赛", place: "东京", wind: "0.0" },
    { mark: "19.65", holder: "诺亚·莱尔斯", country: "USA", date: "2018-07-20", meet: "钻石联赛", place: "摩纳哥", wind: "+0.9" },
    { mark: "19.65", holder: "诺亚·莱尔斯", country: "USA", date: "2019-08-24", meet: "钻石联赛", place: "巴黎", wind: "+0.2" },
    { mark: "19.65", holder: "华莱士·斯皮尔蒙", country: "USA", date: "2006-09-28", place: "大邱（韩国）", wind: "0.0" },
    { mark: "19.66", holder: "乌塞恩·博尔特", country: "JAM", date: "2013-08-17", meet: "世锦赛", place: "莫斯科", wind: "0.0" },
    { mark: "19.66", holder: "迈克尔·约翰逊", country: "USA", date: "1996-06-23", meet: "美国奥运选拔赛", place: "亚特兰大", wind: "+1.7", note: "时为世界纪录" },
    { mark: "19.66", holder: "乌塞恩·博尔特", country: "JAM", date: "2012-08-30", meet: "钻石联赛", place: "苏黎世", wind: "0.0" },
  ],
  topListTitle: "前五十",
  topListNote:
    "第50位的成绩为19.66——恰好把约翰逊1996年奥运选拔赛的世界纪录圈在界内，历史并列三人（约翰逊、博尔特两席），全部收录共56条。莱尔斯一人占十六席、博尔特十一席、贝德纳雷克七席；19.52一格五条（莱尔斯四条、贝德纳雷克一条，2021–2026），是博尔特时代之后的新枢纽。19.67是澳大利亚苏丹裔少年古特的2026年成绩，被门槛挡在0.01秒之外；亚洲与中国的纪录谢震业的19.88（2019）距门槛0.22秒，2026年被泰国的汶颂追平。",

  history: [
    {
      heading: "墨西哥城的 19.83 与门内阿的十七年",
      paragraphs: [
        "1968年10月16日，墨西哥城奥运决赛，汤米·史密斯跑出19.83——电计时时代的第一项200米世界纪录，高原（约2240米）与+0.9的顺风共同成全了它。领奖台上，他与卡洛斯举起戴着黑手套的拳头，让这0.01秒的飞跃从此与整个世纪的照片绑定在一起。",
        "这项纪录在高原上等来了另一位高原访客：1979年9月12日，意大利人皮特罗·门内阿在墨西哥城大学城运动会跑出19.72。此后的十七年里，从蒙特勒到东京，无人能把它再往下压一格——直到1996年亚特兰大。6月23日的美国奥运选拔赛，迈克尔·约翰逊19.66；8月1日的奥运决赛，19.32。39天之内两破世界纪录，加上同届的400米金牌，一个赛季把「200/400双料」推到了历史顶点。",
      ],
    },
    {
      heading: "博尔特：19.30 与 19.19",
      paragraphs: [
        "2008年8月20日的鸟巢，博尔特在−0.9的逆风里跑出19.30，把尘封12年的19.32送进历史；一年后的柏林之夜，19.19——0.11秒的跨度至今是200米史上最狠的一次改写。大邱的19.40、莫斯科的19.66，加上2012年伦敦的19.32（追平自己的旧纪录），他在这个项目上的余量曾大到令人失语。",
        "19.19悬置了十七年。布雷克的19.26（2011布鲁塞尔）仍差0.07秒；莱尔斯十六次跑进19.66，最好19.31（2022尤金），也只能在榜上第三格仰望。历史第二快与现世界纪录之间那道0.07秒的缝，是这个时代最安静的一道天堑。",
      ],
    },
    {
      heading: "后博尔特时代：特博戈与贝德纳雷克",
      paragraphs: [
        "2024年8月8日的巴黎，博茨瓦纳的莱齐莱·特博戈以19.46夺金——人口二百六十多万的南部非洲国家拿到史上第一枚奥运金牌，也是非洲的第一枚200米奥运金牌。2025年东京世锦赛，莱尔斯以19.52完成三连冠（2022/2023/2025），决赛风停表于0.0；2026年9月布达佩斯的首届世界田径终极锦标赛，贝德纳雷克19.52（−0.1）登顶，并在这个赛季四度跑进19.63。",
        "更远处还有新名字：南非的达姆比勒2026年跑出19.74，开曼群岛的里德19.63，澳大利亚的苏丹裔少年古特19.67——19.66的门槛外，正排起一条越来越年轻的队。",
      ],
    },
    {
      heading: "亚洲刻度：谢震业 19.88 与汶颂的追平",
      paragraphs: [
        "2019年7月21日，伦敦钻石联赛，谢震业跑出19.88——亚洲第一位、也是至今唯一跑进19.90的男选手。七年后，2026年9月27日名古屋亚运会决赛，20岁的泰国人汶颂在−0.3的风里跑出同样的19.88：千分位之外，两人并列亚洲纪录。汶颂当届还以9.90打破亚运百米赛会纪录，两金加身。",
        "亚运会的赛道上，这个项目长期在日本与西亚之间往返：伊东浩司1998年曼谷20.25（当届百米亦金），末续慎吾2002釜山20.38、2006多哈20.60完成卫冕，其间2003年巴黎世锦赛他为中国之外的亚洲拿下铜牌；奥古诺德2010广州20.43、2014仁川20.14两连冠，20.14的赛会纪录保持到2026年；2018雅加达小池祐贵与杨俊瀚同为20.23，千分位裁决；2023杭州上山弘辉20.60。然后是2026年的19.88——一夜之间，亚洲的刻度被拉近了0.26秒。",
      ],
    },
  ],
  sources: [
    {
      label: "Wikipedia：World record progression 200 metres men",
      url: "https://en.wikipedia.org/wiki/World_record_progression_200_metres_men",
    },
    {
      label: "World Athletics 官方纪录",
      url: "https://worldathletics.org/records/by-category/world-records",
    },
    {
      label: "Alltime-Athletics：男子200米历史成绩总榜（Peter Larsson 维护）",
      url: "http://www.alltime-athletics.com/m_200ok.htm",
    },
    {
      label: "GBR Athletics：亚运会 1951–2002 田径奖牌总表",
      url: "https://www.gbrathletics.com/ic/asg.htm",
    },
  ],
};
