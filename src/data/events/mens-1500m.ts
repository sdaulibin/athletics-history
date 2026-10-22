import type { AthleticsEvent } from "@/lib/types";

/**
 * 男子 1500 米（室外）
 * 数据截至：2026年10月
 *
 * 收录口径（宁缺毋滥）：
 *  - 世界纪录演进收1958年埃利奥特起（手计时口径条目注明），至埃尔·奎罗伊3:26.00；
 *  - 历史最好成绩榜以 3:29.14 为门槛：合规成绩全录（含并列）共 81 条，
 *    英里中途成绩（+）与高原成绩（A）单独标注，英里中途成绩不入榜；
 *  - 奥运/世锦赛决赛成绩以维基单项决赛页与 alltime-athletics 总榜双源核对。
 */
export const mens1500m: AthleticsEvent = {
  slug: "mens-1500m",
  group: "track",
  markKind: "time",
  gender: "men",
  venue: "outdoor",
  name: "男子 1500 米",
  summary:
    "3:26.00——1998年7月14日的罗马之夜，埃尔·奎罗伊在三圈半里把人类极限一次砍掉1.37秒，这条世界纪录已悬置28年，是男子径赛现存最古老的个人世界纪录。1500米是最纯粹的战术距离：起跑线上的算计、集团中的卡位、最后一圈的决断，都在氧债逼近的边缘进行。从克拉姆首次撞开3:30大门，到莫塞利与埃尔·奎罗伊的接力改写，再到英格布里格森与克尔在新世代的缠斗——三圈半的故事，始终关于耐力与速度如何在同一副身体里共存。",
  dataAsOf: "2026年10月",
  progression: [
    { mark: "3:36.0", holder: "赫布·埃利奥特", country: "AUS", date: "1958-08-28", place: "哥德堡", note: "手计时口径；澳大利亚人的首个世界纪录" },
    { mark: "3:35.6", holder: "赫布·埃利奥特", country: "AUS", date: "1960-09-06", meet: "奥运会", place: "罗马", note: "手计时口径；罗马奥运决赛领先第二名1.8秒——生涯 Mile/1500 不败的巅峰" },
    { mark: "3:33.1", holder: "吉姆·赖恩", country: "USA", date: "1967-07-08", place: "洛杉矶", note: "手计时口径；20岁的大学生改写，悬置七年" },
    { mark: "3:32.16", holder: "菲尔伯特·贝伊", country: "TAN", date: "1974-02-02", meet: "英联邦运动会", place: "克赖斯特彻奇（新西兰）", note: "电计时；决赛从枪响领到终点——坦桑尼亚史上唯一的世界纪录" },
    { mark: "3:32.03", holder: "塞巴斯蒂安·科", country: "GBR", date: "1979-08-15", place: "苏黎世", note: "手计时3:32.1与电计时3:32.03并记" },
    { mark: "3:32.09", holder: "史蒂夫·奥维特", country: "GBR", date: "1980-07-15", place: "奥斯陆", note: "英国内部拉锯的第一枪" },
    { mark: "3:31.36", holder: "史蒂夫·奥维特", country: "GBR", date: "1980-08-27", place: "科布伦茨", note: "莫斯科奥运800米夺金之后六周内的第二破" },
    { mark: "3:31.24", holder: "悉尼·马雷", country: "USA", date: "1983-08-28", place: "科隆", note: "南非出生的美国人" },
    { mark: "3:30.77", holder: "史蒂夫·奥维特", country: "GBR", date: "1983-09-04", place: "列蒂（意大利）", note: "七天后夺回——1983年秋天的纪录拉锯战" },
    { mark: "3:29.67", holder: "史蒂夫·克拉姆", country: "GBR", date: "1985-07-16", place: "尼斯", note: "人类首次跑进3:30" },
    { mark: "3:29.46", holder: "赛义德·奥伊塔", country: "MAR", date: "1985-08-23", place: "柏林", note: "38天后即改写——从5000米到1500的全能天才" },
    { mark: "3:28.86", holder: "努尔丁·莫塞利", country: "ALG", date: "1992-09-06", place: "列蒂（意大利）", note: "中断七年后的改写" },
    { mark: "3:27.37", holder: "努尔丁·莫塞利", country: "ALG", date: "1995-07-12", place: "尼斯", note: "十年后同一座城市再破——尼斯成为世界纪录之城" },
    { mark: "3:26.00", holder: "希查姆·埃尔·奎罗伊", country: "MAR", date: "1998-07-14", meet: "黄金联赛", place: "罗马", note: "现世界纪录；悬置28年——男子径赛现存最古老的个人世界纪录" },
  ],

  asianRecord: {
    mark: "3:29.14", holder: "拉希德·拉米齐", country: "BRN",
    date: "2006-07-14", meet: "黄金联赛", place: "罗马",
    note: "生于摩洛哥、后入籍巴林。此前一年他在赫尔辛基包揽世锦赛800/1500双冠——世锦赛史上第一人；同场第四名的丹尼尔·基普奇尔奇尔·科门3:29.02亦快于旧亚洲纪录",
  },
  chineseRecord: {
    mark: "3:36.49", holder: "窦兆波", country: "CHN",
    date: "2003-10-24", meet: "全国城市运动会", place: "长沙",
    note: "五城会决赛。悬置23年未破：第二名宋明友3:36.54（1997年八运会，上海）同样来自全运会赛场；现役最快为刘德柱3:37.61（2026年5月30日，东京，第4名）",
  },

  topList: [
    { mark: "3:26.00", holder: "希查姆·埃尔·奎罗伊", country: "MAR", date: "1998-07-14", meet: "黄金联赛", place: "罗马", note: "现世界纪录；罗马黄金联赛之夜，悬置28年" },
    { mark: "3:26.12", holder: "希查姆·埃尔·奎罗伊", country: "MAR", date: "2001-08-24", meet: "黄金联赛", place: "布鲁塞尔", note: "仅次于自己世界纪录的历史第二快" },
    { mark: "3:26.34", holder: "伯纳德·拉加特", country: "KEN", date: "2001-08-24", meet: "黄金联赛", place: "布鲁塞尔", note: "肯尼亚纪录，保持至今" },
    { mark: "3:26.45", holder: "希查姆·埃尔·奎罗伊", country: "MAR", date: "1998-08-12", meet: "黄金联赛", place: "苏黎世" },
    { mark: "3:26.69", holder: "阿斯贝尔·基普罗普", country: "KEN", date: "2015-07-17", meet: "钻石联赛", place: "摩纳哥" },
    { mark: "3:26.73", holder: "雅各布·英格布里格森", country: "NOR", date: "2024-07-12", meet: "钻石联赛", place: "摩纳哥", note: "挪威纪录" },
    { mark: "3:26.89", holder: "希查姆·埃尔·奎罗伊", country: "MAR", date: "2002-08-16", meet: "黄金联赛", place: "苏黎世" },
    { mark: "3:26.96", holder: "希查姆·埃尔·奎罗伊", country: "MAR", date: "2002-09-08", place: "列蒂（意大利）" },
    { mark: "3:27.14", holder: "雅各布·英格布里格森", country: "NOR", date: "2023-07-16", meet: "钻石联赛", place: "霍茹夫（波兰）" },
    { mark: "3:27.21", holder: "希查姆·埃尔·奎罗伊", country: "MAR", date: "2000-08-11", meet: "黄金联赛", place: "苏黎世" },
    { mark: "3:27.34", holder: "希查姆·埃尔·奎罗伊", country: "MAR", date: "2002-07-19", meet: "黄金联赛", place: "摩纳哥" },
    { mark: "3:27.37", holder: "努尔丁·莫塞利", country: "ALG", date: "1995-07-12", place: "尼斯", note: "前世界纪录" },
    { mark: "3:27.40", holder: "伯纳德·拉加特", country: "KEN", date: "2004-08-06", meet: "黄金联赛", place: "苏黎世" },
    { mark: "3:27.49", holder: "阿泽丁·哈布兹", country: "FRA", date: "2025-06-20", meet: "钻石联赛", place: "巴黎", note: "法国纪录" },
    { mark: "3:27.52", holder: "努尔丁·莫塞利", country: "ALG", date: "1995-07-25", place: "摩纳哥" },
    { mark: "3:27.64", holder: "希查姆·埃尔·奎罗伊", country: "MAR", date: "2004-08-06", meet: "黄金联赛", place: "苏黎世" },
    { mark: "3:27.64", holder: "西拉斯·基普拉加特", country: "KEN", date: "2014-07-18", meet: "钻石联赛", place: "摩纳哥" },
    { mark: "3:27.65", holder: "科尔·霍克", country: "USA", date: "2024-08-06", meet: "奥运会", place: "巴黎", note: "奥运纪录" },
    { mark: "3:27.65", holder: "希查姆·埃尔·奎罗伊", country: "MAR", date: "1999-08-24", meet: "世锦赛", place: "塞维利亚", note: "锦标赛纪录，保持至今" },
    { mark: "3:27.72", holder: "阿斯贝尔·基普罗普", country: "KEN", date: "2013-07-19", meet: "钻石联赛", place: "摩纳哥" },
    { mark: "3:27.72", holder: "法努埃尔·科奇", country: "KEN", date: "2025-06-20", meet: "钻石联赛", place: "巴黎" },
    { mark: "3:27.79", holder: "乔什·克尔", country: "GBR", date: "2024-08-06", meet: "奥运会", place: "巴黎", note: "英国纪录；同场亚军" },
    { mark: "3:27.80", holder: "亚雷德·努古塞", country: "USA", date: "2024-08-06", meet: "奥运会", place: "巴黎" },
    { mark: "3:27.83", holder: "雅各布·英格布里格森", country: "NOR", date: "2024-08-22", meet: "钻石联赛", place: "洛桑" },
    { mark: "3:27.91", holder: "伯纳德·拉加特", country: "KEN", date: "2002-07-19", meet: "黄金联赛", place: "摩纳哥" },
    { mark: "3:27.95", holder: "雅各布·英格布里格森", country: "NOR", date: "2023-06-15", meet: "钻石联赛", place: "奥斯陆" },
    { mark: "3:28.12", holder: "诺亚·恩盖尼", country: "KEN", date: "2000-08-11", meet: "黄金联赛", place: "苏黎世" },
    { mark: "3:28.24", holder: "雅各布·英格布里格森", country: "NOR", date: "2024-08-06", meet: "奥运会", place: "巴黎" },
    { mark: "3:28.28", holder: "蒂莫西·切鲁伊约特", country: "KEN", date: "2021-07-09", meet: "钻石联赛", place: "摩纳哥" },
    { mark: "3:28.32", holder: "雅各布·英格布里格森", country: "NOR", date: "2021-08-07", meet: "奥运会", place: "东京", note: "前奥运纪录；挪威纪录（彼时）" },
    { mark: "3:28.36", holder: "乔治·米尔斯", country: "GBR", date: "2025-06-20", meet: "钻石联赛", place: "巴黎" },
    { mark: "3:28.37", holder: "希查姆·埃尔·奎罗伊", country: "MAR", date: "1998-08-08", meet: "黄金联赛", place: "摩纳哥" },
    { mark: "3:28.37", holder: "努尔丁·莫塞利", country: "ALG", date: "1995-09-09", place: "摩纳哥" },
    { mark: "3:28.38", holder: "希查姆·埃尔·奎罗伊", country: "MAR", date: "2001-07-06", meet: "超级大奖赛", place: "巴黎" },
    { mark: "3:28.40", holder: "希查姆·埃尔·奎罗伊", country: "MAR", date: "2003-09-05", meet: "黄金联赛", place: "布鲁塞尔" },
    { mark: "3:28.41", holder: "蒂莫西·切鲁伊约特", country: "KEN", date: "2018-07-20", meet: "钻石联赛", place: "摩纳哥" },
    { mark: "3:28.45", holder: "蒂莫西·切鲁伊约特", country: "KEN", date: "2020-08-14", meet: "钻石联赛", place: "摩纳哥" },
    { mark: "3:28.45", holder: "阿斯贝尔·基普罗普", country: "KEN", date: "2014-07-18", meet: "钻石联赛", place: "摩纳哥" },
    { mark: "3:28.51", holder: "伯纳德·拉加特", country: "KEN", date: "2000-08-11", meet: "黄金联赛", place: "苏黎世" },
    { mark: "3:28.57", holder: "希查姆·埃尔·奎罗伊", country: "MAR", date: "1999-08-11", meet: "黄金联赛", place: "苏黎世" },
    { mark: "3:28.68", holder: "雅各布·英格布里格森", country: "NOR", date: "2020-08-14", meet: "钻石联赛", place: "摩纳哥" },
    { mark: "3:28.71", holder: "蒂莫西·切鲁伊约特", country: "KEN", date: "2024-07-12", meet: "钻石联赛", place: "摩纳哥" },
    { mark: "3:28.72", holder: "雅各布·英格布里格森", country: "NOR", date: "2023-06-10", meet: "钻石联赛", place: "洛桑" },
    { mark: "3:28.73", holder: "诺亚·恩盖尼", country: "KEN", date: "1999-08-24", meet: "世锦赛", place: "塞维利亚" },
    { mark: "3:28.75", holder: "陶菲克·马克卢菲", country: "ALG", date: "2015-07-17", meet: "钻石联赛", place: "摩纳哥" },
    { mark: "3:28.76", holder: "穆罕默德·卡蒂尔", country: "ESP", date: "2021-07-09", meet: "钻石联赛", place: "摩纳哥", note: "西班牙纪录" },
    { mark: "3:28.77", holder: "蒂莫西·切鲁伊约特", country: "KEN", date: "2019-07-05", meet: "钻石联赛", place: "洛桑" },
    { mark: "3:28.79", holder: "阿卜杜拉蒂·伊吉德", country: "MAR", date: "2015-07-17", meet: "钻石联赛", place: "摩纳哥", note: "摩洛哥第二快，仅次于埃尔·奎罗伊" },
    { mark: "3:28.80", holder: "布莱恩·科门", country: "KEN", date: "2024-07-12", meet: "钻石联赛", place: "摩纳哥" },
    { mark: "3:28.80", holder: "以利亚·马南戈伊", country: "KEN", date: "2017-07-21", meet: "钻石联赛", place: "摩纳哥", note: "2017年世锦赛冠军" },
    { mark: "3:28.81", holder: "罗纳德·奎莫伊", country: "KEN", date: "2014-07-18", meet: "钻石联赛", place: "摩纳哥" },
    { mark: "3:28.81", holder: "莫·法拉", country: "GBR", date: "2013-07-19", meet: "钻石联赛", place: "摩纳哥", note: "以万米闻名的法拉，1500米同样跻身历史最快之列" },
    { mark: "3:28.82", holder: "法努埃尔·科奇", country: "KEN", date: "2025-07-19", meet: "钻石联赛", place: "伦敦" },
    { mark: "3:28.84", holder: "诺亚·恩盖尼", country: "KEN", date: "1999-07-21", meet: "超级大奖赛", place: "巴黎" },
    { mark: "3:28.86", holder: "努尔丁·莫塞利", country: "ALG", date: "1992-09-06", place: "列蒂（意大利）", note: "前世界纪录" },
    { mark: "3:28.88", holder: "阿斯贝尔·基普罗普", country: "KEN", date: "2012-07-20", meet: "钻石联赛", place: "摩纳哥" },
    { mark: "3:28.89", holder: "穆罕默德·卡蒂尔", country: "ESP", date: "2023-06-15", meet: "钻石联赛", place: "奥斯陆" },
    { mark: "3:28.91", holder: "希查姆·埃尔·奎罗伊", country: "MAR", date: "1997-08-13", place: "苏黎世" },
    { mark: "3:28.92", holder: "希查姆·埃尔·奎罗伊", country: "MAR", date: "1997-08-22", place: "布鲁塞尔" },
    { mark: "3:28.93", holder: "诺亚·恩盖尼", country: "KEN", date: "1999-09-11", place: "慕尼黑" },
    { mark: "3:28.93", holder: "莫·法拉", country: "GBR", date: "2015-07-17", meet: "钻石联赛", place: "摩纳哥" },
    { mark: "3:28.95", holder: "费尔明·卡乔", country: "ESP", date: "1997-08-13", place: "苏黎世", note: "1992年奥运冠军的生涯最佳" },
    { mark: "3:28.98", holder: "梅赫迪·巴拉", country: "FRA", date: "2003-09-05", meet: "黄金联赛", place: "布鲁塞尔", note: "前法国纪录" },
    { mark: "3:29.01", holder: "蒂莫西·切鲁伊约特", country: "KEN", date: "2021-08-07", meet: "奥运会", place: "东京", note: "同场亚军" },
    { mark: "3:29.02", holder: "雅各布·英格布里格森", country: "NOR", date: "2022-09-08", meet: "钻石联赛", place: "苏黎世" },
    { mark: "3:29.02", holder: "丹尼尔·基普奇尔奇尔·科门", country: "KEN", date: "2006-07-14", meet: "黄金联赛", place: "罗马" },
    { mark: "3:29.02", holder: "亚雷德·努古塞", country: "USA", date: "2023-06-15", meet: "钻石联赛", place: "奥斯陆" },
    { mark: "3:29.03", holder: "费斯图斯·拉加特", country: "KEN", date: "2025-06-20", meet: "钻石联赛", place: "巴黎" },
    { mark: "3:29.05", holder: "乔什·克尔", country: "GBR", date: "2021-08-07", meet: "奥运会", place: "东京", note: "同场季军——英格布里格森夺冠之夜" },
    { mark: "3:29.05", holder: "希查姆·埃尔·奎罗伊", country: "MAR", date: "1996-08-23", place: "布鲁塞尔" },
    { mark: "3:29.05", holder: "法努埃尔·科奇", country: "KEN", date: "2025-06-24", place: "俄斯特拉发" },
    { mark: "3:29.05", holder: "雅各布·英格布里格森", country: "NOR", date: "2022-08-26", meet: "钻石联赛", place: "洛桑" },
    { mark: "3:29.06", holder: "希查姆·埃尔·奎罗伊", country: "MAR", date: "2001-08-17", meet: "黄金联赛", place: "苏黎世" },
    { mark: "3:29.08", holder: "希查姆·埃尔·奎罗伊", country: "MAR", date: "2001-09-02", place: "列蒂（意大利）" },
    { mark: "3:29.08", holder: "蒂莫西·切鲁伊约特", country: "KEN", date: "2023-06-15", meet: "钻石联赛", place: "奥斯陆" },
    { mark: "3:29.10", holder: "蒂莫西·切鲁伊约特", country: "KEN", date: "2017-07-21", meet: "钻石联赛", place: "摩纳哥" },
    { mark: "3:29.11", holder: "阿贝尔·基普桑", country: "KEN", date: "2023-07-16", meet: "钻石联赛", place: "霍茹夫（波兰）" },
    { mark: "3:29.12", holder: "希查姆·埃尔·奎罗伊", country: "MAR", date: "1998-07-09", meet: "黄金联赛", place: "奥斯陆", note: "五周后，他将在罗马改写世界纪录" },
    { mark: "3:29.13", holder: "亚雷德·努古塞", country: "USA", date: "2024-07-12", meet: "钻石联赛", place: "摩纳哥" },
    { mark: "3:29.13", holder: "希查姆·埃尔·奎罗伊", country: "MAR", date: "2003-08-15", meet: "黄金联赛", place: "苏黎世" },
    { mark: "3:29.14", holder: "拉希德·拉米齐", country: "BRN", date: "2006-07-14", meet: "黄金联赛", place: "罗马", note: "亚洲纪录；前一年世锦赛800/1500双冠" },
  ],
  topListTitle: "前 81 名",
  topListNote:
    "门槛 3:29.14，合规成绩全录（含并列）。埃尔·奎罗伊独占 20 席（前 10 名中 6 席）；英格布里格森 10 席、切鲁伊约特 8 席紧随；2024 年巴黎奥运决赛单场贡献 4 条（霍克、克尔、努古塞、英格布里格森）。英里中途成绩（+，本榜未收，男子共 594 条）与高原成绩（A，179 条）按原表标注口径。",

  history: [
    {
      heading: "四分钟的余晖：从埃利奥特到赖恩",
      paragraphs: [
        "1958年哥德堡，赫布·埃利奥特以3:36.0第一次把1500米压进如此深处，两年后又在罗马奥运决赛以3:35.6刷新——领先亚军近两秒，为他生涯 Mile 与 1500 米不败的统治画上句点。此后纪录转入美国大学生吉姆·赖恩之手：1967年洛杉矶的3:33.1悬置七年，直到1974年克赖斯特彻奇的英联邦运动会，坦桑尼亚人菲尔伯特·贝伊从枪响领到终点，以3:32.16惊动世界——那场比赛的亚军，正是后来跑出首个英里三分五十以内的约翰·沃克。",
      ],
    },
    {
      heading: "英国内战与黄金年代",
      paragraphs: [
        "1979至1985年，世界纪录在科与奥维特之间两度易手、又两度被反超，其间悉尼·马雷短暂插入。真正的分水岭是1985年：尼斯的史蒂夫·克拉姆成为第一个跑进3:30的人（3:29.67），38天后柏林的赛义德·奥伊塔就把它再砍到3:29.46——摩洛哥与阿尔及利亚的中距离王朝自此埋下伏笔。这一时期的对决定义了1500米的观看方式：两个人、四条弯道、一次不可回头的冲刺。",
      ],
    },
    {
      heading: "莫塞利与埃尔·奎罗伊：接力改写",
      paragraphs: [
        "1992年列蒂，努尔丁·莫塞利以3:28.86中断七年的沉默，1995年尼斯再进至3:27.37——十年之间他在两座城市之间往返，纪录却始终姓他。1998年7月14日的罗马黄金联赛，希查姆·埃尔·奎罗伊以3:26.00终结一切讨论：此后的28年里，最快的追击者只摸到3:26.12（2001年，他自己）。埃尔·奎罗伊独占历史总榜前八名中的五席，四夺世锦赛金牌，2004年雅典终于在奥运登顶并同届加冕5000米——那滴跪在跑道上的眼泪，是这项运动最著名的画面之一。",
      ],
    },
    {
      heading: "新世代：英格布里格森、克尔与终极锦标赛",
      paragraphs: [
        "2020年代的1500米属于挪威的英格布里格森（10 席入榜）与英国的克尔：东京奥运英格布里格森以3:28.32改写奥运纪录，巴黎之夜却被科尔·霍克以3:27.65掀翻——那场决赛前三名同破3:28，第四名亦有3:28.24，是史上最深的一战。2025年东京世锦赛，爱尔兰的艾萨克·纳德以3:34.10在缠斗中取胜；2026年9月布达佩斯首届终极锦标赛，克尔以3:29.35夺冠，21岁的澳大利亚人卡梅伦·迈尔斯3:29.68摘银。世界纪录仍未动——3:26.00像一条悬在所有人头顶的水平线。",
      ],
    },
  ],

  sources: [
    { label: "World Athletics · 官方纪录", url: "https://worldathletics.org/records/by-category/world-records" },
    { label: "Alltime-Athletics · 男子1500米历史总榜", url: "https://alltime-athletics.com/m_1500ok.htm" },
    { label: "Wikipedia · 1500 metres at the Olympics", url: "https://en.wikipedia.org/wiki/1500_metres_at_the_Olympics" },
    { label: "Wikipedia · 1500 metres at the World Athletics Championships", url: "https://en.wikipedia.org/wiki/1500_metres_at_the_World_Athletics_Championships" },
    { label: "Wikipedia · 1500 m world record progression", url: "https://en.wikipedia.org/wiki/1500_metres_world_record_progression" },
  ],
};
