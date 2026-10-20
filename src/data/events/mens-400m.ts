import type { AthleticsEvent } from "@/lib/types";

/**
 * 男子 400 米（室外）世界纪录演进
 * 数据截至：2026年10月
 *
 * 收录口径（宁缺毋滥）：
 *  - 电计时时代（1968 起）被承认的室外世界纪录共 4 项，全部收录；
 *    手计时时代（1912–1968）的沿革未能核实到可靠来源，暂缺；
 *  - 高原成绩（墨西哥城 43.86A）按世界田联惯例计为纪录，条目内注明；
 *  - 历史最好成绩榜以 43.86 为门槛：合规成绩全录（含并列）共 72 条，
 *    另补 2026 年 9 月首届终极锦标赛基贝纳特希皮的 43.39（总榜尚未收录），共 73 条；
 *  - 400 米为单项一圈，无风速限制问题。
 */
export const mens400m: AthleticsEvent = {
  slug: "mens-400m",
  group: "track",
  markKind: "time",
  gender: "men",
  venue: "outdoor",
  name: "男子 400 米",
  summary:
    "43.03——2016年8月14日的里约，范尼凯克从第八道出发，把迈克尔·约翰逊保持十七年的43.18拦腰砍掉0.15秒，也把「第八道」三个字从魔咒变成了传奇。一圈之内无风可借，唯有配速与意志：从埃文斯的高原之夜到博茨瓦纳人的2026年狂飙，这条跑道上最不缺的就是悬置的年头。",
  dataAsOf: "2026年10月",
  progression: [
    { mark: "43.86A", holder: "李·埃文斯", country: "USA", date: "1968-10-18", meet: "奥运会", place: "墨西哥城", note: "电计时时代首项400米世界纪录；高原（约2240米）；悬置十九年九个月又三十天，其间长期被视为「不可触碰」" },
    { mark: "43.29", holder: "布奇·雷诺兹", country: "USA", date: "1988-08-17", place: "苏黎世", note: "Weltklasse大奖赛之夜，一项悬置近二十年的纪录被改写；四十天后他在首尔奥运以43.93收获银牌" },
    { mark: "43.18", holder: "迈克尔·约翰逊", country: "USA", date: "1999-08-26", meet: "世锦赛", place: "塞维利亚", note: "在雷诺兹的纪录悬置十一年零九天之后；此后再无人能从美国人手里接走它——直到里约" },
    { mark: "43.03", holder: "韦德·范尼凯克", country: "RSA", date: "2016-08-14", meet: "奥运会", place: "里约热内卢", note: "现世界纪录；第八道出发，前程即冲刺，把约翰逊的43.18改写0.15秒；悬置十年" },
  ],

  asianRecord: {
    mark: "43.93", holder: "优素福·马斯拉希", country: "KSA",
    date: "2015-08-23", meet: "世锦赛（预赛）", place: "北京",
    note: "亚洲唯一一个43秒台成绩，出自北京世锦赛预赛；决赛名列第八（45.15）。亚运会赛会纪录为其2014年仁川的44.46",
  },
  chineseRecord: {
    mark: "45.06", holder: "刘凯", country: "CHN",
    date: "2025-08-03", place: "衢州",
    note: "半决赛中跑出，把郭钟泽的45.14（2017年9月3日，天津全运会）悬置八年的旧纪录改写0.08秒；同年他还随队在东京世锦赛以3:00.77改写4×400米接力全国纪录",
  },

  topList: [
    { mark: "43.03", holder: "韦德·范尼凯克", country: "RSA", date: "2016-08-14", meet: "奥运会", place: "里约热内卢", note: "现世界纪录；第八道出发" },
    { mark: "43.18", holder: "迈克尔·约翰逊", country: "USA", date: "1999-08-26", meet: "世锦赛", place: "塞维利亚", note: "世界纪录；保持至今" },
    { mark: "43.29", holder: "布奇·雷诺兹", country: "USA", date: "1988-08-17", place: "苏黎世", note: "Weltklasse大奖赛之夜改写世界纪录，悬置十一年" },
    { mark: "43.38", holder: "塞缪尔·奥加齐", country: "NGR", date: "2026-06-12", meet: "钻石联赛", place: "尤金", note: "历史第四快；尼日利亚纪录" },
    { mark: "43.39", holder: "迈克尔·约翰逊", country: "USA", date: "1995-08-09", meet: "世锦赛", place: "哥德堡", note: "夺冠成绩" },
    { mark: "43.39", holder: "布桑·科伦·基贝纳特希皮", country: "BOT", date: "2026-09-13", meet: "世界田径终极锦标赛", place: "布达佩斯", note: "博茨瓦纳国家纪录；首届终极锦标赛" },
    { mark: "43.40", holder: "布桑·科伦·基贝纳特希皮", country: "BOT", date: "2026-09-04", meet: "钻石联赛", place: "布鲁塞尔" },
    { mark: "43.40", holder: "昆西·霍尔", country: "USA", date: "2024-08-07", meet: "奥运会", place: "巴黎", note: "夺冠成绩；最后20米从第四位反超" },
    { mark: "43.44", holder: "马修·哈德森-史密斯", country: "GBR", date: "2024-08-07", meet: "奥运会", place: "巴黎", note: "同场亚军；英国纪录" },
    { mark: "43.44", holder: "布桑·科伦·基贝纳特希皮", country: "BOT", date: "2026-07-10", meet: "钻石联赛", place: "摩纳哥" },
    { mark: "43.44", holder: "迈克尔·约翰逊", country: "USA", date: "1996-06-19", meet: "美国奥运选拔赛", place: "亚特兰大", note: "选拔赛；39天后奥运决赛43.49夺金" },
    { mark: "43.45", holder: "迈克尔·诺曼", country: "USA", date: "2019-04-20", place: "托伦斯（美国）" },
    { mark: "43.45", holder: "杰里米·瓦里纳", country: "USA", date: "2007-08-31", meet: "世锦赛", place: "大阪" },
    { mark: "43.48", holder: "史蒂文·加德纳", country: "BAH", date: "2019-10-04", meet: "世锦赛", place: "多哈", note: "夺冠成绩" },
    { mark: "43.48", holder: "韦德·范尼凯克", country: "RSA", date: "2015-08-26", meet: "世锦赛", place: "北京", note: "夺冠成绩" },
    { mark: "43.49", holder: "迈克尔·约翰逊", country: "USA", date: "1996-07-29", meet: "奥运会", place: "亚特兰大" },
    { mark: "43.50", holder: "昆西·瓦茨", country: "USA", date: "1992-08-05", meet: "奥运会", place: "巴塞罗那", note: "夺冠成绩" },
    { mark: "43.50", holder: "杰里米·瓦里纳", country: "USA", date: "2007-08-07", meet: "超级大奖赛", place: "斯德哥尔摩" },
    { mark: "43.53", holder: "布桑·科伦·基贝纳特希皮", country: "BOT", date: "2025-09-18", meet: "世锦赛", place: "东京", note: "夺冠成绩；博茨瓦纳首枚男子世锦赛400米金牌" },
    { mark: "43.54", holder: "布桑·科伦·基贝纳特希皮", country: "BOT", date: "2026-06-28", meet: "钻石联赛", place: "巴黎" },
    { mark: "43.56", holder: "迈克尔·诺曼", country: "USA", date: "2022-06-25", meet: "美国锦标赛", place: "尤金" },
    { mark: "43.59", holder: "布桑·科伦·基贝纳特希皮", country: "BOT", date: "2026-08-23", place: "霍茹夫（波兰）" },
    { mark: "43.60", holder: "迈克尔·诺曼", country: "USA", date: "2022-05-28", meet: "钻石联赛", place: "尤金" },
    { mark: "43.61", holder: "迈克尔·诺曼", country: "USA", date: "2018-06-08", meet: "钻石联赛", place: "尤金" },
    { mark: "43.61", holder: "布桑·科伦·基贝纳特希皮", country: "BOT", date: "2025-09-16", meet: "世锦赛（半决赛）", place: "东京", flags: ["sf"] },
    { mark: "43.62", holder: "韦德·范尼凯克", country: "RSA", date: "2017-07-06", meet: "钻石联赛", place: "洛桑" },
    { mark: "43.62", holder: "杰里米·瓦里纳", country: "USA", date: "2006-07-14", meet: "黄金联赛", place: "罗马" },
    { mark: "43.64", holder: "弗雷德·克利", country: "USA", date: "2019-07-27", meet: "美国锦标赛", place: "得梅因" },
    { mark: "43.65", holder: "迈克尔·约翰逊", country: "USA", date: "1993-08-17", meet: "世锦赛", place: "斯图加特", note: "夺冠成绩" },
    { mark: "43.65", holder: "拉肖恩·梅里特", country: "USA", date: "2015-08-26", meet: "世锦赛", place: "北京" },
    { mark: "43.66", holder: "迈克尔·约翰逊", country: "USA", date: "1996-07-03", place: "洛桑" },
    { mark: "43.66", holder: "迈克尔·约翰逊", country: "USA", date: "1995-06-16", meet: "美国锦标赛", place: "萨克拉门托" },
    { mark: "43.68", holder: "杰里姆·理查兹", country: "TTO", date: "2026-09-04", meet: "钻石联赛", place: "布鲁塞尔" },
    { mark: "43.68", holder: "迈克尔·约翰逊", country: "USA", date: "1998-08-12", meet: "黄金联赛", place: "苏黎世" },
    { mark: "43.68", holder: "迈克尔·约翰逊", country: "USA", date: "2000-07-16", meet: "美国锦标赛", place: "萨克拉门托" },
    { mark: "43.70", holder: "钱皮恩·艾利森", country: "USA", date: "2022-06-25", meet: "美国锦标赛", place: "尤金" },
    { mark: "43.70", holder: "弗雷德·克利", country: "USA", date: "2017-05-26", place: "奥斯汀（美国）" },
    { mark: "43.71", holder: "昆西·瓦茨", country: "USA", date: "1992-08-03", meet: "奥运会（半决赛）", place: "巴塞罗那", flags: ["sf"] },
    { mark: "43.72", holder: "艾萨克·马克瓦拉", country: "BOT", date: "2015-07-05", place: "拉绍德封（瑞士）" },
    { mark: "43.72", holder: "杰里姆·理查兹", country: "TTO", date: "2025-09-18", meet: "世锦赛", place: "东京" },
    { mark: "43.73", holder: "韦德·范尼凯克", country: "RSA", date: "2017-07-21", meet: "钻石联赛", place: "摩纳哥" },
    { mark: "43.74", holder: "基拉尼·詹姆斯", country: "GRN", date: "2014-07-03", meet: "钻石联赛", place: "洛桑" },
    { mark: "43.74", holder: "穆扎拉·萨蒙孔加", country: "ZAM", date: "2024-08-07", meet: "奥运会", place: "巴黎" },
    { mark: "43.74", holder: "拉肖恩·梅里特", country: "USA", date: "2013-08-13", meet: "世锦赛", place: "莫斯科" },
    { mark: "43.74", holder: "史蒂文·加德纳", country: "BAH", date: "2023-07-18", place: "塞克什白堡（匈牙利）" },
    { mark: "43.74", holder: "迈克尔·约翰逊", country: "USA", date: "1993-06-19", meet: "美国锦标赛", place: "尤金" },
    { mark: "43.74", holder: "马修·哈德森-史密斯", country: "GBR", date: "2024-07-20", meet: "钻石联赛", place: "伦敦" },
    { mark: "43.75", holder: "迈克尔·约翰逊", country: "USA", date: "1997-04-19", place: "韦科（美国）" },
    { mark: "43.75", holder: "拉肖恩·梅里特", country: "USA", date: "2008-08-21", meet: "奥运会", place: "北京", note: "夺冠成绩" },
    { mark: "43.76", holder: "基拉尼·詹姆斯", country: "GRN", date: "2016-08-14", meet: "奥运会", place: "里约热内卢" },
    { mark: "43.76", holder: "迈克尔·约翰逊", country: "USA", date: "1998-07-21", place: "尤宁代尔（美国）" },
    { mark: "43.76A", holder: "扎基廷·内内", country: "RSA", date: "2025-05-31", place: "内罗毕", note: "高原成绩" },
    { mark: "43.78", holder: "杰科里·帕特森", country: "USA", date: "2026-09-04", meet: "钻石联赛", place: "布鲁塞尔" },
    { mark: "43.78", holder: "基拉尼·詹姆斯", country: "GRN", date: "2024-08-06", meet: "奥运会（半决赛）", place: "巴黎", flags: ["sf"] },
    { mark: "43.78", holder: "杰里姆·理查兹", country: "TTO", date: "2024-08-07", meet: "奥运会", place: "巴黎" },
    { mark: "43.78", holder: "基拉尼·詹姆斯", country: "GRN", date: "2015-08-26", meet: "世锦赛", place: "北京" },
    { mark: "43.79", holder: "迈克尔·诺曼", country: "USA", date: "2019-07-27", meet: "美国锦标赛", place: "得梅因" },
    { mark: "43.80", holder: "昆西·霍尔", country: "USA", date: "2024-07-12", meet: "钻石联赛", place: "摩纳哥" },
    { mark: "43.81", holder: "穆扎拉·萨蒙孔加", country: "ZAM", date: "2024-08-06", meet: "奥运会（半决赛）", place: "巴黎", flags: ["sf"] },
    { mark: "43.81", holder: "丹尼·埃弗雷特", country: "USA", date: "1992-06-26", place: "新奥尔良" },
    { mark: "43.82", holder: "塞缪尔·奥加齐", country: "NGR", date: "2026-05-29", place: "列克星敦（美国）", flags: ["h"] },
    { mark: "43.82", holder: "杰里米·瓦里纳", country: "USA", date: "2008-08-29", meet: "黄金联赛", place: "苏黎世" },
    { mark: "43.83", holder: "昆西·瓦茨", country: "USA", date: "1992-08-19", place: "苏黎世" },
    { mark: "43.83", holder: "拉伊·本杰明", country: "USA", date: "2026-08-23", place: "霍茹夫（波兰）" },
    { mark: "43.84", holder: "艾萨克·马克瓦拉", country: "BOT", date: "2017-07-21", meet: "钻石联赛", place: "摩纳哥" },
    { mark: "43.84", holder: "迈克尔·约翰逊", country: "USA", date: "2000-09-25", meet: "奥运会", place: "悉尼" },
    { mark: "43.85", holder: "史蒂文·加德纳", country: "BAH", date: "2021-08-05", meet: "奥运会", place: "东京" },
    { mark: "43.85", holder: "伦道夫·罗斯", country: "USA", date: "2021-06-11", meet: "钻石联赛", place: "尤金" },
    { mark: "43.85", holder: "拉肖恩·梅里特", country: "USA", date: "2016-08-14", meet: "奥运会", place: "里约热内卢" },
    { mark: "43.85", holder: "杰科里·帕特森", country: "USA", date: "2025-08-28", meet: "钻石联赛", place: "苏黎世" },
    { mark: "43.86", holder: "杰里米·瓦里纳", country: "USA", date: "2008-07-18", meet: "超级大奖赛", place: "巴黎" },
    { mark: "43.86A", holder: "李·埃文斯", country: "USA", date: "1968-10-18", meet: "奥运会", place: "墨西哥城", note: "世界纪录（高原约2240米）；保持近二十年" },
    { mark: "43.86", holder: "迈克尔·约翰逊", country: "USA", date: "1995-07-21", place: "奥斯陆" },
  ],
  topListTitle: "43.86以内",
  topListNote:
    "门槛取43.86——恰好把1968年墨西哥城高原之夜埃文斯的世界纪录圈在界内，合规成绩全录（含并列）共72条；另补2026年9月首届终极锦标赛基贝纳特希皮的43.39（历史总榜尚未收录），共73条。约翰逊一人占十四席、基贝纳特希皮七席、瓦里纳与诺曼各五席；仅2026年一个赛季就贡献十条，是电计时以来最陡的一次年度膨胀。亚洲纪录马斯拉希的43.93（2015年北京，预赛中跑出）距门槛0.07秒；中国纪录刘凯的45.06（2025年，衢州半决赛）距门槛1.20秒——旧纪录郭钟泽的45.14悬置八年后，于2025年被刷新0.08秒。",

  history: [
    {
      heading: "高原上的 43.86 与雷诺兹的苏黎世之夜",
      paragraphs: [
        "1968年10月18日，墨西哥城，海拔约2240米。李·埃文斯以43.86改写奥运会与世界纪录——电计时时代400米的第一座高峰。他与汤米·史密斯、约翰·卡洛斯同属圣何塞州大的「速度之城」，领奖台上以黑色贝雷帽致意。这项高原成绩悬置了十九年九个月又三十天，其间所有人加起来也未能把它推低0.01秒。",
        "1988年8月17日，苏黎世Weltklasse之夜，布奇·雷诺兹43.29——一夜之间把「不可触碰」变成历史。四十天后的首尔，他以43.93收获奥运银牌，不敌19岁的史蒂夫·刘易斯；此后禁赛风波缠身，天才的巅峰只剩那一晚的形状。",
      ],
    },
    {
      heading: "约翰逊：43.18 与四枚世锦赛金牌",
      paragraphs: [
        "迈克尔·约翰逊的400米是一部缓慢收紧的史诗：1993年斯图加特43.65、1995年哥德堡43.39、1997年雅典44.12——世锦赛三连冠；其间1996年亚特兰大，先在选拔赛43.44，再于奥运决赛43.49夺金，同届兼200米19.32双金双纪录。1999年塞维利亚，31岁的他在世锦赛决赛跑出43.18，把雷诺兹的名字从纪录簿上换了下来。",
        "43.18悬置了十六年十一个月。此后瓦里纳（2004奥运、2005/2007世锦赛）、梅里特（2008/2013）轮流登基，但没有人真正接近过它——43.40的门槛在约翰逊之后只被零星触及，直到2015年前后。",
      ],
    },
    {
      heading: "第八道的 43.03",
      paragraphs: [
        "2016年8月14日，里约，第八道。韦德·范尼凯克前程即冲刺，43.03——把43.18改写0.15秒，这是400米史上最凶狠的一次改写，也让「第八道」从魔咒变成传奇。此前一年他已在世锦赛夺金（43.48），此后2017年伦敦43.98完成卫冕；伤病随后而来，但纪录不动。",
        "2024年巴黎，昆西·霍尔在最后20米从第四位连超三人，43.40夺冠，哈德森-史密斯同场43.44；2025年东京世锦赛，博茨瓦纳的基贝纳特希皮43.53登顶。43.03之后十年，43.4秒台从「神迹」变成了「战场」。",
      ],
    },
    {
      heading: "2026：基贝纳特希皮与博茨瓦纳的狂飙",
      paragraphs: [
        "如果说2026年世界田径有一个关键词，那大概是博茨瓦纳：名古屋亚运会上特博戈与汶颂各领风骚，而布桑·科伦·基贝纳特希皮把400米变成了个人秀——摩纳哥43.44、布鲁塞尔43.40、布达佩斯首届终极锦标赛43.39（国家纪录、夺冠），一个赛季六度跑进43.6。尼日利亚的奥加齐在尤金跑出43.38（历史第四快），本杰明44.15、理查兹44.23在终极锦标赛分列二三——男子400米的下一个时代正在排队进场。",
        "亚洲的刻度上，马斯拉希的43.93（2015年北京，预赛中跑出）仍是唯一的43秒台：亚运会的44.46赛会纪录（2014仁川）由他保持，2018年哈伦44.89夺冠（2021年24岁早逝），2022年马斯拉希二度登顶。2026年名古屋，泰国的阿特金森44.90、日本的中岛佑贵45.22包揽金银。中国的刻度在2025年8月3日被改写：刘凯在衢州的半决赛中跑出45.06，把郭钟泽的45.14（2017全运会）送进历史——悬置八年后，中国男子400米终于向前挪了0.08秒；同年他还随队在东京世锦赛以3:00.77改写4×400米接力全国纪录。",
      ],
    },
  ],
  sources: [
    {
      label: "Wikipedia：Men's 400 metres world record progression",
      url: "https://en.wikipedia.org/wiki/World_record_progression_400_metres_men",
    },
    {
      label: "World Athletics 官方纪录",
      url: "https://worldathletics.org/records/by-category/world-records",
    },
    {
      label: "Alltime-Athletics：男子400米历史成绩总榜（Peter Larsson 维护）",
      url: "http://www.alltime-athletics.com/m_400ok.htm",
    },
    {
      label: "GBR Athletics：亚运会 1951–2002 田径奖牌总表",
      url: "https://www.gbrathletics.com/ic/asg.htm",
    },
  ],
};
