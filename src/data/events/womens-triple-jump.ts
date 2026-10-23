import type { AthleticsEvent } from "@/lib/types";

/**
 * 女子三级跳远（室外）
 * 数据截至：2026年10月
 *
 * 收录口径（宁缺毋滥）：
 *  - 世界纪录演进只收室外纪录，起于1989年（奇斯佳科娃的14.52米）；
 *  - 历史最好成绩榜以 15.10 米为门槛：合规成绩全录（含并列）共 65 条；
 *  - 三级跳远受风速限制：顺风超过 +2.0 米/秒的成绩不入榜、不计纪录，故每条均注风速；
 *  - 成绩后标 A 者为高原，标 * 者为该场系列最好一跳超风速时的合法最好成绩。
 */
export const womensTripleJump: AthleticsEvent = {
  slug: "womens-triple-jump",
  group: "field",
  markKind: "distance",
  gender: "women",
  venue: "outdoor",
  name: "女子三级跳远",
  summary:
    "15.67——2021年8月1日的东京，尤利马尔·罗哈斯在奥运决赛最后一跳越过15.67米，把自己的世界纪录再推高一格。女子三级跳远是所有跳跃项目里最年轻的：1990年代才确立世界纪录体系，1996年才进入奥运会，而它在三十年里走完的距离，比男子用了六十年。罗哈斯是这个项目的第一位「绝对统治者」——四届世锦赛冠军（2017、2019、2022、2023）、东京奥运金牌，18席占据历史总榜。",
  dataAsOf: "2026年10月",
  progression: [
    { mark: "14.52", holder: "加林娜·奇斯佳科娃", country: "RUS", date: "1989-07-03", place: "斯德哥尔摩", note: "前世界纪录" },
    { mark: "14.54", holder: "李惠荣", country: "CHN", date: "1990-08-25", place: "札幌", note: "前世界纪录" },
    { mark: "14.95", holder: "伊涅萨·克拉维茨", country: "UKR", date: "1991-06-10", place: "莫斯科", note: "前世界纪录" },
    { mark: "14.97", holder: "约兰达·陈", country: "RUS", date: "1993-06-18", place: "莫斯科", note: "前世界纪录" },
    { mark: "15.09", holder: "安娜·比留科娃", country: "RUS", date: "1993-08-21", place: "斯图加特", note: "前世界纪录" },
    { mark: "15.50", holder: "伊涅萨·克拉维茨", country: "UKR", date: "1995-08-10", place: "哥德堡", note: "前世界纪录" },
    { mark: "15.67", holder: "尤利马尔·罗哈斯", country: "VEN", date: "2021-08-01", place: "东京", note: "前世界纪录" },
  ],

  asianRecord: {
    mark: "15.25", holder: "奥莉加·里帕科娃", country: "KAZ",
    date: "2010-09-04", place: "斯普利特（克罗地亚）",
    note: "哈萨克斯坦选手，2010年斯普利特跳出15.25米，为亚洲纪录；她也是2012年伦敦奥运金牌得主。亚洲女子三级跳远至今没有第二人越过15米。",
  },
  chineseRecord: {
    mark: "14.90", holder: "谢荔梅", country: "CHN",
    date: "2007-09-20", place: "Urumqi",
    note: "中国选手，2007年9月20日乌鲁木齐跳出14.90米，全国纪录保持至今；此前全国纪录为黄秋艳的14.72米（2001年）。2026年名古屋亚运，乌兹别克斯坦的达夫罗诺娃以14.35米夺冠。",
  },
  topList: [
    { mark: "15.67", holder: "尤利马尔·罗哈斯", country: "VEN", date: "2021-08-01", wind: "+0.7", place: "东京" },
    { mark: "15.52", holder: "尤利马尔·罗哈斯", country: "VEN", date: "2021-08-26", wind: "+0.6", place: "" },
    { mark: "15.50", holder: "伊涅萨·克拉维茨", country: "UKR", date: "1995-08-10", wind: "+0.9", place: "哥德堡" },
    { mark: "15.48", holder: "尤利马尔·罗哈斯", country: "VEN", date: "2021-09-09", wind: "+0.3", place: "苏黎世" },
    { mark: "15.47", holder: "尤利马尔·罗哈斯", country: "VEN", date: "2022-07-18", wind: "+1.9", place: "尤金" },
    { mark: "15.43", holder: "尤利马尔·罗哈斯", country: "VEN", date: "2021-05-22", wind: "+0.7", place: "安杜哈尔（西班牙）" },
    { mark: "15.41", holder: "尤利马尔·罗哈斯", country: "VEN", date: "2019-09-06", wind: "+1.5", place: "安杜哈尔（西班牙）" },
    { mark: "15.39", holder: "弗朗索瓦兹·姆班戈", country: "CMR", date: "2008-08-17", wind: "+0.5", place: "北京" },
    { mark: "15.37", holder: "尤利马尔·罗哈斯", country: "VEN", date: "2019-10-05", wind: "-0.6", place: "多哈" },
    { mark: "15.35", holder: "尤利马尔·罗哈斯", country: "VEN", date: "2023-09-16", wind: "+1.2", place: "尤金" },
    { mark: "15.34", holder: "塔季扬娜·列别杰娃", country: "RUS", date: "2004-07-04", wind: "-0.5", place: "伊拉克利翁（希腊）" },
    { mark: "15.33", holder: "塔季扬娜·列别杰娃", country: "RUS", date: "2004-07-06", wind: "+1.2", place: "洛桑" },
    { mark: "15.33", holder: "伊涅萨·克拉维茨", country: "UKR", date: "1996-07-31", wind: "-0.1", place: "亚特兰大" },
    { mark: "15.32", holder: "塔季扬娜·列别杰娃", country: "RUS", date: "2000-09-09", wind: "+0.5", place: "横滨" },
    { mark: "15.32", holder: "赫里索皮伊·德韦齐", country: "GRE", date: "2004-08-21", wind: "+0.9", place: "雅典" },
    { mark: "15.31", holder: "卡特琳·伊巴古恩", country: "COL", date: "2014-07-18", wind: "±0.0", place: "摩纳哥" },
    { mark: "15.31", holder: "尤利马尔·罗哈斯", country: "VEN", date: "2022-08-26", wind: "-0.2", place: "洛桑" },
    { mark: "15.30", holder: "弗朗索瓦兹·姆班戈", country: "CMR", date: "2004-08-23", wind: "+0.6", place: "雅典" },
    { mark: "15.29", holder: "亚米莱·阿尔达马", country: "CUB", date: "2003-07-11", wind: "+0.3", place: "罗马" },
    { mark: "15.28", holder: "亚米莱·阿尔达马", country: "SUD", date: "2004-08-02", wind: "+0.3", place: "林茨" },
    { mark: "15.28", holder: "尤利马尔·罗哈斯", country: "VEN", date: "2022-09-08", wind: "-0.2", place: "苏黎世" },
    { mark: "15.28", holder: "亚尔赫利斯·萨维涅", country: "CUB", date: "2007-08-31", wind: "+0.9", place: "大阪" },
    { mark: "15.27", holder: "亚米莱·阿尔达马", country: "CUB", date: "2003-08-08", wind: "+1.3", place: "伦敦" },
    { mark: "15.25", holder: "奥莉加·里帕科娃", country: "KAZ", date: "2010-09-04", wind: "+1.7", place: "斯普利特（克罗地亚）" },
    { mark: "15.25", holder: "塔季扬娜·列别杰娃", country: "RUS", date: "2001-08-10", wind: "-0.8", place: "埃德蒙顿" },
    { mark: "15.25", holder: "赫里索皮伊·德韦齐", country: "GRE", date: "2004-08-23", wind: "-0.1", place: "雅典" },
    { mark: "15.25", holder: "西娅·拉丰", country: "DMA", date: "2026-06-26", wind: "+0.8", place: "萨格勒布" },
    { mark: "15.23", holder: "塔季扬娜·列别杰娃", country: "RUS", date: "2006-07-03", wind: "+0.6", place: "雅典" },
    { mark: "15.23", holder: "塔季扬娜·列别杰娃", country: "RUS", date: "2004-06-23", wind: "+0.8", place: "雷西姆诺（希腊）" },
    { mark: "15.21", holder: "亚米莱·阿尔达马", country: "SUD", date: "2004-06-23", wind: "+1.2", place: "雷西姆诺（希腊）" },
    { mark: "15.20", holder: "萨尔卡·卡斯帕尔科娃", country: "CZE", date: "1997-08-04", wind: "±0.0", place: "雅典" },
    { mark: "15.20", holder: "亚尔赫利斯·萨维涅", country: "CUB", date: "2008-07-14", wind: "+1.3", place: "雷西姆诺（希腊）" },
    { mark: "15.20", holder: "特雷扎·马里诺娃", country: "BUL", date: "2000-09-24", wind: "-0.3", place: "悉尼" },
    { mark: "15.19", holder: "塔季扬娜·列别杰娃", country: "RUS", date: "2006-07-11", wind: "+0.5", place: "洛桑" },
    { mark: "15.19", holder: "尤利马尔·罗哈斯", country: "VEN", date: "2021-06-19", wind: "+1.4", place: "马德里" },
    { mark: "15.18", holder: "伊娃·普兰泽娃", country: "BUL", date: "1995-08-10", wind: "+0.3", place: "哥德堡" },
    { mark: "15.18", holder: "尤利马尔·罗哈斯", country: "VEN", date: "2023-07-16", wind: "+0.3", place: "霍茹夫（波兰）" },
    { mark: "15.18", holder: "塔季扬娜·列别杰娃", country: "RUS", date: "2003-08-26", wind: "-0.2", place: "巴黎" },
    { mark: "15.17", holder: "卡特琳·伊巴古恩", country: "COL", date: "2016-08-14", wind: "+0.4", place: "里约热内卢" },
    { mark: "15.16", holder: "特蕾西亚·史密斯", country: "JAM", date: "2004-08-02", wind: "+0.7", place: "林茨" },
    { mark: "15.16", holder: "罗迪卡·马特埃斯库", country: "ROU", date: "1997-08-04", wind: "+0.1", place: "雅典" },
    { mark: "15.16", holder: "尤利马尔·罗哈斯", country: "VEN", date: "2023-07-05", wind: "+1.1", place: "圣萨尔瓦多" },
    { mark: "15.15", holder: "亚尔赫利斯·萨维涅", country: "CUB", date: "2008-07-09", wind: "+1.5", place: "塞萨洛尼基（希腊）" },
    { mark: "15.15", holder: "塔季扬娜·列别杰娃", country: "RUS", date: "2006-08-09", wind: "+1.4", place: "哥德堡" },
    { mark: "15.15", holder: "阿希娅·汉森", country: "GBR", date: "1997-09-13", wind: "+1.7", place: "福冈" },
    { mark: "15.15", holder: "尤利马尔·罗哈斯", country: "VEN", date: "2021-05-28", wind: "+2.0", place: "多哈" },
    { mark: "15.15", holder: "尤利马尔·罗哈斯", country: "VEN", date: "2023-08-31", wind: "+0.2", place: "苏黎世" },
    { mark: "15.14", holder: "塔季扬娜·列别杰娃", country: "RUS", date: "2007-07-02", wind: "+0.8", place: "雅典" },
    { mark: "15.14", holder: "塔季扬娜·列别杰娃", country: "RUS", date: "2003-09-05", wind: "+0.3", place: "布鲁塞尔" },
    { mark: "15.14", holder: "尤利马尔·罗哈斯", country: "VEN", date: "2021-05-08", wind: "+2.0", place: "伊维萨（西班牙）" },
    { mark: "15.14", holder: "罗迪卡·马特埃斯库", country: "ROU", date: "1997-06-14", wind: "-0.1", place: "布加勒斯特" },
    { mark: "15.14", holder: "塔季扬娜·列别杰娃", country: "RUS", date: "2004-08-23", wind: "+0.7", place: "雅典" },
    { mark: "15.14", holder: "娜杰日达·阿列希娜", country: "RUS", date: "2009-07-26", wind: "+1.9", place: "切博克萨雷（俄罗斯）" },
    { mark: "15.13", holder: "塔季扬娜·列别杰娃", country: "RUS", date: "2003-09-13", wind: "+0.1", place: "摩纳哥" },
    { mark: "15.13", holder: "塔季扬娜·列别杰娃", country: "RUS", date: "2006-09-16", wind: "+1.4", place: "雅典" },
    { mark: "15.13", holder: "达维斯莱迪斯·贝拉斯科", country: "CUB", date: "2026-06-19", wind: "+1.3", place: "多哈" },
    { mark: "15.12", holder: "塔季扬娜·列别杰娃", country: "RUS", date: "2003-07-04", wind: "-0.9", place: "巴黎" },
    { mark: "15.12", holder: "尤利马尔·罗哈斯", country: "VEN", date: "2021-07-09", wind: "±0.0", place: "摩纳哥" },
    { mark: "15.12", holder: "伊娃·普兰泽娃", country: "BUL", date: "1998-09-19", wind: "+2.0", place: "东京" },
    { mark: "15.11", holder: "塔季扬娜·列别杰娃", country: "RUS", date: "2005-07-01", wind: "-0.2", place: "巴黎" },
    { mark: "15.11", holder: "特蕾西亚·史密斯", country: "JAM", date: "2005-08-07", wind: "+0.8", place: "赫尔辛基" },
    { mark: "15.11", holder: "尤利马尔·罗哈斯", country: "VEN", date: "2019-08-09", wind: "+0.6", place: "利马" },
    { mark: "15.11", holder: "奥莉加·里帕科娃", country: "KAZ", date: "2008-08-17", wind: "+0.3", place: "北京" },
    { mark: "15.11", holder: "亚米莱·阿尔达马", country: "CUB", date: "2003-06-27", wind: "+0.1", place: "奥斯陆" },
    { mark: "15.10", holder: "塔季扬娜·列别杰娃", country: "RUS", date: "2007-07-25", wind: "+0.4", place: "摩纳哥" },
  ],
  topListTitle: "前 65 名",
  topListNote:
    "门槛 15.10 米，合规成绩全录（含并列）。罗哈斯18席、列别杰娃17席，两人合计过半；克拉维茨与伊巴古恩各占若干席位。中国选手无一人达到门槛，全国纪录为谢荔梅的14.90米（2007年乌鲁木齐）。",
  history: [
    {
      heading: "一个被拒绝的项目",
      paragraphs: [
        "女子三级跳远长期被认为「不适合女性」——国际田联直到1990年才正式承认女子三级跳世界纪录。1989年7月，苏联的加林娜·奇斯佳科娃在斯德哥尔摩跳出14.52米；1990年8月，中国的李惠荣在札幌以14.54米改写——亚洲选手在这个项目的早期写下过自己的名字。",
        "1991年6月莫斯科，伊涅萨·克拉维茨14.95米；1993年，俄罗斯的约兰达·陈14.97米、安娜·比留科娃15.09米。四年之间，纪录被推高半米。",
      ],
    },
    {
      heading: "克拉维茨的15.50与1995年哥德堡",
      paragraphs: [
        "1995年8月10日哥德堡世锦赛，克拉维茨在第一跳就把成绩定格在15.50米——那是女子三级跳远第一次进入15.5米台，也是这条纪录悬置最久的一段（至2019年）。她同届还以15.50米夺金，成为这个项目第一位世界冠军级的统治者。",
        "1996年亚特兰大，女子三级跳远首次进入奥运会，克拉维茨以15.33米夺金；此后十余年，古巴的萨维涅、希腊的德韦齐、俄罗斯的列别杰娃、哥伦比亚的伊巴古恩轮流登顶，15.20米左右成为大赛的夺冠线。",
      ],
    },
    {
      heading: "罗哈斯：15.67 与四连冠",
      paragraphs: [
        "2017年伦敦世锦赛，21岁的罗哈斯以14.91米夺冠；2019年多哈15.37米、2022年尤金15.47米、2023年布达佩斯15.08米——四届世锦赛全胜。2021年8月1日东京奥运决赛，她在最后一跳越过15.67米，把世界纪录写到自己名下，并夺得奥运金牌。",
        "2024年巴黎她因伤退赛，金牌被多米尼克的拉丰以15.02米拿走——那是这个项目第一次由加勒比小国登顶。2025年东京世锦赛，古巴的佩雷斯以14.94米夺冠：15.67米仍在原处。",
      ],
    },
  ],

  sources: [
    { label: "World Athletics · 官方纪录与总榜", url: "https://worldathletics.org/records/all-time-toplists/jumps/triple-jump/outdoor/women/senior" },
    { label: "Alltime-Athletics · 女子三级跳远历史总榜", url: "https://alltime-athletics.com/wtripleok.htm" },
    { label: "Olympedia · Athletics — Triple Jump, Women（历届奥运逐届成绩）", url: "https://www.olympedia.org/event_names/114" },
  ],
};
