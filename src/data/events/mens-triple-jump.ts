import type { AthleticsEvent } from "@/lib/types";

/**
 * 男子三级跳远（室外）
 * 数据截至：2026年10月
 *
 * 收录口径（宁缺毋滥）：
 *  - 世界纪录演进只收室外纪录，起于1968年（萨涅耶夫墨西哥城奥运会的17.39米）；
 *  - 历史最好成绩榜以 17.78 米为门槛：合规成绩全录（含并列）共 74 条；
 *  - 三级跳远受风速限制：顺风超过 +2.0 米/秒的成绩不入榜、不计纪录，故每条均注风速；
 *  - 成绩后标 A 者为高原，标 * 者为该场系列最好一跳超风速时的合法最好成绩。
 */
export const mensTripleJump: AthleticsEvent = {
  slug: "mens-triple-jump",
  group: "field",
  markKind: "distance",
  gender: "men",
  venue: "outdoor",
  name: "男子三级跳远",
  summary:
    "18.29——1995年8月7日的哥德堡，乔纳森·爱德华兹在世锦赛决赛第二跳越过18.29米，顺风+1.3米/秒，把三级跳远的世界纪录一次性推进31厘米。三十一年过去，无人再接近这个数字：历史第二好成绩18.21米，也是爱德华兹的对手泰勒在2015年北京世锦赛上跳出的。三级跳远是三跳的算术——单足跳、跨步跳、跳跃，每一跳的落地都在为下一跳购买速度；踏板之后的三次触地，任何一次失衡都会让成绩归零。",
  dataAsOf: "2026年10月",
  progression: [
    { mark: "17.39", holder: "维克托·萨涅耶夫", country: "GEO", date: "1968-10-17", place: "墨西哥城", note: "前世界纪录；高原" },
    { mark: "17.40", holder: "佩德罗·佩雷斯", country: "CUB", date: "1971-08-05", place: "卡利（哥伦比亚）", note: "前世界纪录；高原" },
    { mark: "17.44", holder: "维克托·萨涅耶夫", country: "GEO", date: "1972-10-17", place: "苏呼米", note: "前世界纪录" },
    { mark: "17.89", holder: "若昂·卡洛斯·德奥利维拉", country: "BRA", date: "1975-10-15", place: "墨西哥城", note: "前世界纪录；高原" },
    { mark: "17.97", holder: "威利·班克斯", country: "USA", date: "1985-06-16", place: "印第安纳波利斯", note: "前世界纪录" },
    { mark: "17.98", holder: "乔纳森·爱德华兹", country: "GBR", date: "1995-07-18", place: "萨拉曼卡", note: "前世界纪录" },
    { mark: "18.29", holder: "乔纳森·爱德华兹", country: "GBR", date: "1995-08-07", place: "哥德堡", note: "前世界纪录" },
  ],

  asianRecord: {
    mark: "17.68", holder: "吴瑞庭", country: "CHN",
    date: "2025-08-04", place: "衢州",
    note: "中国选手，2025年8月4日衢州跳出，为亚洲纪录暨全国纪录；此前亚洲纪录为李延熙的17.59米（2009年济南全运会）。亚洲选手至今无人越过17.70米。",
  },
  chineseRecord: {
    mark: "17.68", holder: "吴瑞庭", country: "CHN",
    date: "2025-08-04", place: "衢州",
    note: "与亚洲纪录同条（17.68米，2025年衢州）。中国三级跳远的厚度在近年明显提升：朱亚明2021年东京奥运以17.57米摘银（中国该项目首枚奥运奖牌），2026年名古屋亚运苏文以17.42米夺金并创赛会纪录。",
  },
  topList: [
    { mark: "18.29", holder: "乔纳森·爱德华兹", country: "GBR", date: "1995-08-07", wind: "+1.3", place: "哥德堡" },
    { mark: "18.21", holder: "克里斯蒂安·泰勒", country: "USA", date: "2015-08-27", wind: "+0.2", place: "北京" },
    { mark: "18.18", holder: "乔丹·亚历杭德罗·迪亚斯", country: "ESP", date: "2024-06-11", wind: "-0.3", place: "罗马" },
    { mark: "18.15", holder: "安迪·迪亚斯", country: "ITA", date: "2026-08-15", wind: "+1.7", place: "伯明翰" },
    { mark: "18.14", holder: "威尔·克莱", country: "USA", date: "2019-06-29", wind: "+0.4", place: "长滩（美国）" },
    { mark: "18.11", holder: "克里斯蒂安·泰勒", country: "USA", date: "2017-05-27", wind: "+0.8", place: "尤金" },
    { mark: "18.09", holder: "肯尼·哈里森", country: "USA", date: "1996-07-27", wind: "-0.4", place: "亚特兰大" },
    { mark: "18.08", holder: "佩德罗·巴勃罗·皮查多", country: "CUB", date: "2015-05-28", wind: "±0.0", place: "哈瓦那" },
    { mark: "18.06", holder: "克里斯蒂安·泰勒", country: "USA", date: "2015-07-09", wind: "+1.1", place: "洛桑" },
    { mark: "18.06", holder: "佩德罗·巴勃罗·皮查多", country: "CUB", date: "2015-05-15", wind: "+0.8", place: "多哈" },
    { mark: "18.06", holder: "威尔·克莱", country: "USA", date: "2019-08-24", wind: "+0.4", place: "巴黎" },
    { mark: "18.04", holder: "佩德罗·巴勃罗·皮查多", country: "POR", date: "2024-06-11", wind: "-0.6", place: "罗马" },
    { mark: "18.04", holder: "克里斯蒂安·泰勒", country: "USA", date: "2015-05-15", wind: "+0.8", place: "多哈" },
    { mark: "18.04", holder: "特迪·坦戈", country: "FRA", date: "2013-08-18", wind: "+0.3", place: "莫斯科" },
    { mark: "18.01", holder: "乔纳森·爱德华兹", country: "GBR", date: "1998-07-09", wind: "+0.4", place: "奥斯陆" },
    { mark: "18.00", holder: "乔纳森·爱德华兹", country: "GBR", date: "1995-08-27", wind: "+1.3", place: "伦敦" },
    { mark: "17.99", holder: "佩德罗·巴勃罗·皮查多", country: "CUB", date: "2015-07-09", wind: "+1.8", place: "洛桑" },
    { mark: "17.99", holder: "乔纳森·爱德华兹", country: "GBR", date: "1998-08-23", wind: "+0.5", place: "布达佩斯" },
    { mark: "17.98", holder: "佩德罗·巴勃罗·皮查多", country: "POR", date: "2021-08-05", wind: "±0.0", place: "东京" },
    { mark: "17.98", holder: "特迪·坦戈", country: "FRA", date: "2010-06-12", wind: "+1.2", place: "纽约" },
    { mark: "17.98", holder: "乔纳森·爱德华兹", country: "GBR", date: "1995-07-18", wind: "+1.8", place: "萨拉曼卡" },
    { mark: "17.97", holder: "威利·班克斯", country: "USA", date: "1985-06-16", wind: "+1.5", place: "印第安纳波利斯" },
    { mark: "17.96", holder: "佩德罗·巴勃罗·皮查多", country: "CUB", date: "2015-06-04", wind: "-0.4", place: "罗马" },
    { mark: "17.96", holder: "克里斯蒂安·泰勒", country: "USA", date: "2011-09-04", wind: "+0.1", place: "大邱" },
    { mark: "17.95", holder: "佩德罗·巴勃罗·皮查多", country: "POR", date: "2018-05-04", wind: "+0.6", place: "多哈" },
    { mark: "17.95", holder: "佩德罗·巴勃罗·皮查多", country: "POR", date: "2022-07-23", wind: "+0.3", place: "尤金" },
    { mark: "17.94", holder: "佩德罗·巴勃罗·皮查多", country: "CUB", date: "2015-05-09", wind: "±0.0", place: "哈瓦那" },
    { mark: "17.93", holder: "肯尼·哈里森", country: "USA", date: "1990-07-02", wind: "+1.6", place: "斯德哥尔摩" },
    { mark: "17.92", holder: "佩德罗·巴勃罗·皮查多", country: "POR", date: "2021-07-06", wind: "+0.4", place: "塞克什白堡（匈牙利）" },
    { mark: "17.92", holder: "乔纳森·爱德华兹", country: "GBR", date: "2001-08-06", wind: "+0.7", place: "埃德蒙顿" },
    { mark: "17.92", holder: "詹姆斯·贝克福德", country: "JAM", date: "1995-05-20", wind: "+1.9", place: "敖德萨" },
    { mark: "17.92", holder: "克里斯蒂安·泰勒", country: "USA", date: "2019-09-29", wind: "+0.9", place: "多哈" },
    { mark: "17.92", holder: "赫里斯托·马尔科夫", country: "BUL", date: "1987-08-31", wind: "+1.6", place: "罗马" },
    { mark: "17.91", holder: "佩德罗·巴勃罗·皮查多", country: "POR", date: "2025-09-19", wind: "+0.5", place: "东京" },
    { mark: "17.91", holder: "威尔·克莱", country: "USA", date: "2017-06-23", wind: "+0.9", place: "萨克拉门托（美国）" },
    { mark: "17.91", holder: "特迪·坦戈", country: "FRA", date: "2011-06-30", wind: "+1.4", place: "洛桑" },
    { mark: "17.90", holder: "雅德尔·格雷戈里奥", country: "BRA", date: "2007-05-20", wind: "+0.4", place: "贝伦（巴西）" },
    { mark: "17.90", holder: "弗拉基米尔·伊诺泽姆采夫", country: "UKR", date: "1990-06-20", wind: "+1.0", place: "布拉迪斯拉发" },
    { mark: "17.89", holder: "若昂·卡洛斯·德奥利维拉", country: "BRA", date: "1975-10-15", wind: "±0.0", place: "墨西哥城" },
    { mark: "17.88", holder: "乔纳森·爱德华兹", country: "GBR", date: "1996-07-27", wind: "+0.9", place: "亚特兰大" },
    { mark: "17.87", holder: "杰登·希伯特", country: "JAM", date: "2023-05-13", wind: "+1.3", place: "巴吞鲁日（美国）" },
    { mark: "17.87", holder: "安迪·迪亚斯", country: "ITA", date: "2026-07-25", wind: "+0.7", place: "佛罗伦萨" },
    { mark: "17.87", holder: "乔丹·亚历杭德罗·迪亚斯", country: "CUB", date: "2022-06-26", wind: "+1.2", place: "内尔哈（西班牙）" },
    { mark: "17.87", holder: "迈克·康利", country: "USA", date: "1987-06-27", wind: "+1.7", place: "圣何塞" },
    { mark: "17.86", holder: "查尔斯·辛普金斯", country: "USA", date: "1985-09-02", wind: "+1.3", place: "神户" },
    { mark: "17.86", holder: "乔丹·亚历杭德罗·迪亚斯", country: "ESP", date: "2024-08-09", wind: "+0.1", place: "巴黎" },
    { mark: "17.86", holder: "迈克·康利", country: "USA", date: "1993-08-16", wind: "+0.3", place: "斯图加特" },
    { mark: "17.86", holder: "克里斯蒂安·泰勒", country: "USA", date: "2016-08-16", wind: "+0.7", place: "里约热内卢" },
    { mark: "17.86", holder: "乔纳森·爱德华兹", country: "GBR", date: "2002-07-28", wind: "+0.7", place: "曼彻斯特" },
    { mark: "17.85", holder: "约埃尔比·克萨达", country: "CUB", date: "1997-08-08", wind: "+0.9", place: "雅典" },
    { mark: "17.84", holder: "迈克·康利", country: "USA", date: "1993-07-04", wind: "+0.7", place: "巴特坎施塔特（德国）" },
    { mark: "17.84", holder: "佩德罗·巴勃罗·皮查多", country: "POR", date: "2024-08-09", wind: "+0.2", place: "巴黎" },
    { mark: "17.82", holder: "于格·法布里斯·赞戈", country: "BUR", date: "2021-07-06", wind: "+0.2", place: "塞克什白堡（匈牙利）" },
    { mark: "17.82", holder: "克里斯蒂安·泰勒", country: "USA", date: "2019-07-12", wind: "+0.2", place: "摩纳哥" },
    { mark: "17.82", holder: "克里斯蒂安·泰勒", country: "USA", date: "2019-08-24", wind: "+0.2", place: "巴黎" },
    { mark: "17.82", holder: "乔纳森·爱德华兹", country: "GBR", date: "1996-06-25", wind: "+1.6", place: "赫尔辛基" },
    { mark: "17.82", holder: "威尔·克莱", country: "USA", date: "2017-05-27", wind: "+1.7", place: "" },
    { mark: "17.81", holder: "克里斯蒂安·泰勒", country: "USA", date: "2018-05-04", wind: "+0.6", place: "多哈" },
    { mark: "17.81", holder: "于格·法布里斯·赞戈", country: "BUR", date: "2023-05-05", wind: "+1.5", place: "多哈" },
    { mark: "17.81", holder: "马里安·奥普雷亚", country: "ROU", date: "2005-07-05", wind: "+1.0", place: "洛桑" },
    { mark: "17.81", holder: "克里斯蒂安·泰勒", country: "USA", date: "2012-08-09", wind: "+0.6", place: "伦敦" },
    { mark: "17.81", holder: "菲利普斯·伊多乌", country: "GBR", date: "2010-07-29", wind: "+0.1", place: "巴塞罗那" },
    { mark: "17.81", holder: "赫里斯托·马尔科夫", country: "BUL", date: "1987-05-31", wind: "+2.0", place: "索非亚" },
    { mark: "17.80", holder: "克里斯蒂安·泰勒", country: "USA", date: "2016-09-01", wind: "+0.1", place: "苏黎世" },
    { mark: "17.80", holder: "赫里斯托·马尔科夫", country: "BUL", date: "1986-08-11", wind: "+0.6", place: "布达佩斯" },
    { mark: "17.79", holder: "肯尼·哈里森", country: "USA", date: "1990-07-04", wind: "-0.8", place: "柏林" },
    { mark: "17.79", holder: "乔纳森·爱德华兹", country: "GBR", date: "1996-08-14", wind: "-0.7", place: "苏黎世" },
    { mark: "17.79", holder: "克里斯蒂安·奥尔松", country: "SWE", date: "2004-08-22", wind: "+1.4", place: "雅典" },
    { mark: "17.78", holder: "尼古拉·穆西延科", country: "UKR", date: "1986-06-07", wind: "+1.0", place: "列宁格勒" },
    { mark: "17.78", holder: "拉萨罗·贝坦库尔特", country: "CUB", date: "1986-06-15", wind: "+0.6", place: "哈瓦那" },
    { mark: "17.78", holder: "乔纳森·爱德华兹", country: "GBR", date: "2002-07-16", wind: "+0.7", place: "斯德哥尔摩" },
    { mark: "17.78", holder: "梅尔文·利斯特", country: "USA", date: "2004-07-17", wind: "+0.8", place: "萨克拉门托（美国）" },
    { mark: "17.78", holder: "克里斯蒂安·泰勒", country: "USA", date: "2016-07-22", wind: "+0.6", place: "伦敦" },
    { mark: "17.78", holder: "肯尼·哈里森", country: "USA", date: "1991-08-26", wind: "-0.8", place: "东京" },
  ],
  topListTitle: "前 74 名",
  topListNote:
    "门槛 17.78 米，合规成绩全录（含并列）。爱德华兹11席、泰勒13席、皮查多12席——三人几乎占满榜单上半部；迪亚斯兄弟（乔丹与安迪）合计6席全部产生于2024年之后。亚洲无一人达到门槛，亚洲纪录与中国纪录同为吴瑞庭的17.68米。",
  history: [
    {
      heading: "从康诺利到施米特：技术的三次革命",
      paragraphs: [
        "1896年雅典，詹姆斯·康诺利以13.71米夺得现代奥运会首枚田径金牌。此后半个世纪，三级跳远的主流技术是「单足跳+跨步跳+跳跃」的连续节奏；波兰的约瑟夫·施米特在1960年罗马以16.81米夺金，把「平跳」技术推到极致。",
        "1968年墨西哥城，苏联的维克托·萨涅耶夫以17.39米夺金并改写世界纪录——高原与技术的结合，让这个项目第一次进入17米台。他此后又连夺1968、1972、1976三届奥运金牌。",
      ],
    },
    {
      heading: "17.89 与 17.97：巴西与美国的插曲",
      paragraphs: [
        "1975年10月，巴西的若昂·卡洛斯·德奥利维拉在墨西哥城跳出17.89米，把纪录推高半米；这条纪录悬置十年，直到1985年威利·班克斯在印第安纳波利斯跳出17.97米。",
        "1980年代的三级跳远被苏联与美国分割，1992年巴塞罗那，美国的迈克·康利以18.17米夺冠（超风速被标），1996年亚特兰大则是美国的肯尼·哈里森18.09米。",
      ],
    },
    {
      heading: "爱德华兹的18.29与当代",
      paragraphs: [
        "1995年7月18日，爱德华兹在萨拉曼卡跳出17.98米；三周后哥德堡世锦赛，他在第二跳落地时把成绩定格在18.29米——顺风+1.3，合规。同届他还跳出18.43米，但那一跳风速+2.4，被判超风速。",
        "此后三十一年，最接近的是泰勒的18.21米（2015年北京世锦赛）与皮查多的18.18米（2024年罗马）。2025年东京世锦赛，皮查多17.91米夺冠；2024年巴黎奥运，乔丹·迪亚斯17.86米夺金。18米已经成为奖牌线，18.29米仍是天花板。",
      ],
    },
  ],

  sources: [
    { label: "World Athletics · 官方纪录与总榜", url: "https://worldathletics.org/records/all-time-toplists/jumps/triple-jump/outdoor/men/senior" },
    { label: "Alltime-Athletics · 男子三级跳远历史总榜", url: "https://alltime-athletics.com/mtripok.htm" },
    { label: "Olympedia · Athletics — Triple Jump, Men（历届奥运逐届成绩）", url: "https://www.olympedia.org/event_names/78" },
  ],
};
