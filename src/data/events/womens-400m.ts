import type { AthleticsEvent } from "@/lib/types";

/**
 * 女子 400 米（室外）世界纪录演进
 * 数据截至：2026年10月
 *
 * 收录口径（宁缺毋滥）：
 *  - 电计时序列自1975年国际田联分设电计时纪录起收录，全部 12 项；
 *    手计时时代（1957–1974）的沿革未能核实到可靠来源，暂缺；
 *  - 现世界纪录 47.60（科赫，1985）带兴奋剂争议注记，纪录本身从未被取消；
 *  - 历史最好成绩榜以 49.00 为门槛：合规成绩全录（含并列）共 77 条；
 *    2026年终极锦标赛冠军保利诺的 49.07 在门槛之外，未单列补录；
 *  - 400 米为单项一圈，无风速限制问题。
 */
export const womens400m: AthleticsEvent = {
  slug: "womens-400m",
  group: "track",
  markKind: "time",
  gender: "women",
  venue: "outdoor",
  name: "女子 400 米",
  summary:
    "47.60——1985年10月6日的堪培拉世界杯，玛莉塔·科赫把女子400米推向一个此后四十一年无人返回的高度。从萨林到什文斯卡，从克拉托赫维洛娃的赫尔辛基之夜到麦克劳林-列弗隆的东京改项，这条一圈的赛道上，「48秒」从终点线变成了起跑线。",
  dataAsOf: "2026年10月",
  progression: [
    { mark: "50.14", holder: "里塔·萨林", country: "FIN", date: "1974-09-04", meet: "欧锦赛", place: "罗马", note: "电计时序列的起点；罗马欧锦赛夺冠" },
    { mark: "49.77", holder: "克里斯蒂娜·布雷默", country: "GDR", date: "1976-05-09", place: "德累斯顿", note: "仅存续四十天" },
    { mark: "49.75", holder: "伊雷娜·谢文斯卡", country: "POL", date: "1976-06-22", place: "比得哥什", note: "一个月内被自己改写" },
    { mark: "49.29", holder: "伊雷娜·谢文斯卡", country: "POL", date: "1976-07-29", meet: "奥运会", place: "蒙特利尔", note: "奥运夺冠改写；总榜录作49.28，此处从官方成绩" },
    { mark: "49.19", holder: "玛丽塔·科赫", country: "GDR", date: "1978-07-02", place: "莱比锡" },
    { mark: "49.03", holder: "玛丽塔·科赫", country: "GDR", date: "1978-08-19", place: "波茨坦" },
    { mark: "48.94", holder: "玛丽塔·科赫", country: "GDR", date: "1978-08-31", meet: "欧锦赛", place: "布拉格" },
    { mark: "48.89", holder: "玛丽塔·科赫", country: "GDR", date: "1979-07-29", place: "波茨坦" },
    { mark: "48.60", holder: "玛丽塔·科赫", country: "GDR", date: "1979-08-04", meet: "世界杯（田径）", place: "都灵", note: "此后悬置三年" },
    { mark: "48.16", holder: "玛丽塔·科赫", country: "GDR", date: "1982-09-08", meet: "欧锦赛", place: "雅典" },
    { mark: "47.99", holder: "雅尔米拉·克拉托赫维洛娃", country: "TCH", date: "1983-08-10", meet: "世锦赛", place: "赫尔辛基", note: "首届世锦赛夺冠；同届兼夺800米金牌；作为欧洲纪录悬置至今" },
    { mark: "47.60", holder: "玛丽塔·科赫", country: "GDR", date: "1985-10-06", meet: "世界杯（田径）", place: "堪培拉", note: "现世界纪录，悬置四十一年。东德档案外泄曾指其使用口服康复龙，科赫本人否认；因从未药检阳性且早已超过追诉期限，纪录从未被取消" },
  ],

  asianRecord: {
    mark: "48.14", holder: "萨尔瓦·伊德·纳赛尔", country: "BRN",
    date: "2019-10-03", meet: "世锦赛", place: "多哈",
    note: "尼日利亚出生、代表巴林出战；史上第五快。2018年雅加达亚运50.09、2026年名古屋亚运49.20两夺亚运金牌，49.20为现行赛会纪录",
  },
  chineseRecord: {
    mark: "49.81", holder: "马玉琴", country: "CHN",
    date: "1993-09-11", meet: "全运会", place: "北京",
    note: "七运会夺冠成绩，悬置三十三年，是现行中国径赛个人项目纪录中最古老的一项；其后最佳为李静1997年的50.01",
  },

  topList: [
    { mark: "47.60", holder: "玛丽塔·科赫", country: "GDR", date: "1985-10-06", meet: "世界杯（田径）", place: "堪培拉", note: "现世界纪录；悬置四十一年" },
    { mark: "47.78", holder: "悉尼·麦克劳林-列弗隆", country: "USA", date: "2025-09-18", meet: "世锦赛", place: "东京", note: "夺冠成绩；400米栏名将改项平跑，历史第二快" },
    { mark: "47.98", holder: "玛丽莱迪·保利诺", country: "DOM", date: "2025-09-18", meet: "世锦赛", place: "东京", note: "同场亚军" },
    { mark: "47.99", holder: "雅尔米拉·克拉托赫维洛娃", country: "TCH", date: "1983-08-10", meet: "世锦赛", place: "赫尔辛基", note: "夺冠成绩；欧洲纪录悬置四十余年" },
    { mark: "48.14", holder: "萨尔瓦·伊德·纳赛尔", country: "BRN", date: "2019-10-03", meet: "世锦赛", place: "多哈", note: "夺冠成绩；亚洲纪录" },
    { mark: "48.16", holder: "玛丽塔·科赫", country: "GDR", date: "1982-09-08", meet: "欧锦赛", place: "雅典" },
    { mark: "48.16", holder: "玛丽塔·科赫", country: "GDR", date: "1984-08-17", place: "布拉格" },
    { mark: "48.17", holder: "玛丽莱迪·保利诺", country: "DOM", date: "2024-08-09", meet: "奥运会", place: "巴黎", note: "夺冠成绩" },
    { mark: "48.19", holder: "萨尔瓦·伊德·纳赛尔", country: "BRN", date: "2025-09-18", meet: "世锦赛", place: "东京", note: "同场季军" },
    { mark: "48.22", holder: "玛丽塔·科赫", country: "GDR", date: "1986-08-28", place: "斯图加特" },
    { mark: "48.25", holder: "玛丽-若泽·佩雷克", country: "FRA", date: "1996-07-29", meet: "奥运会", place: "亚特兰大", note: "夺冠成绩；继1992年后卫冕" },
    { mark: "48.26", holder: "玛丽塔·科赫", country: "GDR", date: "1984-07-27", place: "德累斯顿" },
    { mark: "48.27", holder: "奥莉加·布里兹金娜", country: "URS", date: "1985-10-06", meet: "世界杯（田径）", place: "堪培拉" },
    { mark: "48.29", holder: "悉尼·麦克劳林-列弗隆", country: "USA", date: "2025-09-15", meet: "世锦赛（半决赛）", place: "东京", flags: ["sf"] },
    { mark: "48.36", holder: "肖娜·米勒-乌博", country: "BAH", date: "2021-08-06", meet: "奥运会", place: "东京", note: "夺冠成绩；继2016年俯冲夺金后强势卫冕" },
    { mark: "48.37", holder: "肖娜·米勒-乌博", country: "BAH", date: "2019-10-03", meet: "世锦赛", place: "多哈", note: "同场亚军" },
    { mark: "48.45", holder: "雅尔米拉·克拉托赫维洛娃", country: "TCH", date: "1983-07-23", place: "布拉格" },
    { mark: "48.48", holder: "玛丽莱迪·保利诺", country: "DOM", date: "2026-06-28", meet: "钻石联赛", place: "巴黎" },
    { mark: "48.53", holder: "萨尔瓦·伊德·纳赛尔", country: "BRN", date: "2024-08-09", meet: "奥运会", place: "巴黎", note: "同场亚军" },
    { mark: "48.54", holder: "克里斯汀·姆博马", country: "NAM", date: "2021-06-30", meet: "世界U20锦标赛", place: "比得哥什", note: "纳米比亚纪录；时年18岁" },
    { mark: "48.57", holder: "尼基莎·普赖斯", country: "JAM", date: "2024-07-20", meet: "钻石联赛", place: "伦敦" },
    { mark: "48.59", holder: "塔季扬娜·科切姆博娃", country: "TCH", date: "1983-08-10", meet: "世锦赛", place: "赫尔辛基" },
    { mark: "48.60", holder: "玛丽塔·科赫", country: "GDR", date: "1979-08-04", meet: "世界杯（田径）", place: "都灵" },
    { mark: "48.60", holder: "奥莉加·布里兹金娜", country: "URS", date: "1985-08-17", place: "莫斯科" },
    { mark: "48.61", holder: "雅尔米拉·克拉托赫维洛娃", country: "TCH", date: "1981-09-06", place: "罗马" },
    { mark: "48.63", holder: "凯茜·弗里曼", country: "AUS", date: "1996-07-29", meet: "奥运会", place: "亚特兰大" },
    { mark: "48.64", holder: "玛丽莱迪·保利诺", country: "DOM", date: "2026-09-05", meet: "钻石联赛", place: "布鲁塞尔" },
    { mark: "48.65", holder: "奥莉加·布里兹金娜", country: "URS", date: "1988-09-26", place: "首尔", note: "夺冠成绩" },
    { mark: "48.66", holder: "玛丽莱迪·保利诺", country: "DOM", date: "2024-08-25", place: "霍茹夫（波兰）" },
    { mark: "48.67", holder: "萨尔瓦·伊德·纳赛尔", country: "BRN", date: "2025-04-05", place: "金斯顿" },
    { mark: "48.67", holder: "玛丽莱迪·保利诺", country: "DOM", date: "2026-07-10", meet: "钻石联赛", place: "摩纳哥" },
    { mark: "48.70", holder: "桑娅·理查兹-罗斯", country: "USA", date: "2006-09-16", meet: "世界杯（田径）", place: "雅典" },
    { mark: "48.70", holder: "萨尔瓦·伊德·纳赛尔", country: "BRN", date: "2025-08-28", meet: "钻石联赛", place: "苏黎世" },
    { mark: "48.73", holder: "塔季扬娜·科切姆博娃", country: "TCH", date: "1984-08-17", place: "布拉格" },
    { mark: "48.74", holder: "悉尼·麦克劳林-列弗隆", country: "USA", date: "2023-07-08", meet: "钻石联赛", place: "尤金" },
    { mark: "48.75", holder: "悉尼·麦克劳林-列弗隆", country: "USA", date: "2024-06-09", place: "纽约" },
    { mark: "48.76", holder: "玛丽莱迪·保利诺", country: "DOM", date: "2023-08-23", meet: "世锦赛", place: "布达佩斯", note: "夺冠成绩" },
    { mark: "48.77", holder: "玛丽塔·科赫", country: "GDR", date: "1982-07-09", place: "卡尔·马克思城" },
    { mark: "48.79", holder: "德贾尼娅·奥克利", country: "JAM", date: "2026-06-13", meet: "钻石联赛", place: "尤金" },
    { mark: "48.81", holder: "玛丽莱迪·保利诺", country: "DOM", date: "2025-06-20", meet: "钻石联赛", place: "巴黎" },
    { mark: "48.82", holder: "雅尔米拉·克拉托赫维洛娃", country: "TCH", date: "1983-06-23", place: "布拉格" },
    { mark: "48.83", holder: "桑娅·理查兹-罗斯", country: "USA", date: "2009-09-04", meet: "黄金联赛", place: "布鲁塞尔" },
    { mark: "48.83", holder: "玛丽-若泽·佩雷克", country: "FRA", date: "1992-08-05", meet: "奥运会", place: "巴塞罗那", note: "夺冠成绩" },
    { mark: "48.83", holder: "瓦莱丽·布里斯科", country: "USA", date: "1984-08-06", meet: "奥运会", place: "洛杉矶", note: "夺冠成绩；同届200/400双金" },
    { mark: "48.84", holder: "阿莉娅·巴特勒", country: "USA", date: "2026-07-10", meet: "钻石联赛", place: "摩纳哥" },
    { mark: "48.85", holder: "雅尔米拉·克拉托赫维洛娃", country: "TCH", date: "1982-09-08", meet: "欧锦赛", place: "雅典" },
    { mark: "48.85", holder: "萨尔瓦·伊德·纳赛尔", country: "BRN", date: "2025-06-20", meet: "钻石联赛", place: "巴黎" },
    { mark: "48.86", holder: "玛丽塔·科赫", country: "GDR", date: "1984-06-02", place: "埃尔福特" },
    { mark: "48.86", holder: "雅尔米拉·克拉托赫维洛娃", country: "TCH", date: "1982-08-18", place: "苏黎世" },
    { mark: "48.87", holder: "玛丽莱迪·保利诺", country: "DOM", date: "2026-08-23", place: "霍茹夫（波兰）" },
    { mark: "48.87", holder: "玛丽塔·科赫", country: "GDR", date: "1982-08-27", place: "布鲁塞尔" },
    { mark: "48.88", holder: "玛丽塔·科赫", country: "GDR", date: "1980-07-28", place: "莫斯科", note: "夺冠成绩" },
    { mark: "48.89", holder: "尼基莎·普赖斯", country: "JAM", date: "2024-06-08", meet: "钻石联赛", place: "尤金" },
    { mark: "48.89", holder: "玛丽塔·科赫", country: "GDR", date: "1984-07-15", place: "柏林" },
    { mark: "48.89", holder: "阿娜·格瓦拉", country: "MEX", date: "2003-08-27", meet: "世锦赛", place: "巴黎", note: "夺冠成绩" },
    { mark: "48.89", holder: "玛丽塔·科赫", country: "GDR", date: "1979-07-29", place: "波茨坦" },
    { mark: "48.90", holder: "悉尼·麦克劳林-列弗隆", country: "USA", date: "2025-08-02", meet: "钻石联赛", place: "尤金" },
    { mark: "48.90", holder: "娜塔莉亚·布科维茨卡", country: "POL", date: "2024-07-20", meet: "钻石联赛", place: "伦敦" },
    { mark: "48.91", holder: "玛丽莱迪·保利诺", country: "DOM", date: "2026-06-19", meet: "钻石联赛", place: "多哈" },
    { mark: "48.92", holder: "德贾尼娅·奥克利", country: "JAM", date: "2026-05-16", place: "奥本（美国）" },
    { mark: "48.92", holder: "桑娅·理查兹-罗斯", country: "USA", date: "2005-08-19", meet: "黄金联赛", place: "苏黎世" },
    { mark: "48.94", holder: "玛丽莱迪·保利诺", country: "DOM", date: "2026-08-05", place: "圣多明各" },
    { mark: "48.94", holder: "桑娅·理查兹-罗斯", country: "USA", date: "2009-08-28", meet: "黄金联赛", place: "苏黎世" },
    { mark: "48.94", holder: "萨尔瓦·伊德·纳赛尔", country: "BRN", date: "2025-03-29", place: "巴亚瓜纳（多米尼加）" },
    { mark: "48.94", holder: "玛丽塔·科赫", country: "GDR", date: "1978-08-31", meet: "欧锦赛", place: "布拉格" },
    { mark: "48.96", holder: "奥莉加·布里兹金娜", country: "URS", date: "1985-08-03", place: "列宁格勒" },
    { mark: "48.97", holder: "麦迪逊·怀特", country: "USA", date: "2026-06-13", meet: "钻石联赛", place: "尤金" },
    { mark: "48.97", holder: "玛丽莱迪·保利诺", country: "DOM", date: "2026-07-18", meet: "钻石联赛", place: "伦敦" },
    { mark: "48.97", holder: "肖娜·米勒-乌博", country: "BAH", date: "2018-07-20", meet: "钻石联赛", place: "摩纳哥" },
    { mark: "48.97", holder: "玛丽塔·科赫", country: "GDR", date: "1985-09-22", place: "柏林" },
    { mark: "48.97", holder: "玛丽塔·科赫", country: "GDR", date: "1979-08-26", place: "蒙特利尔" },
    { mark: "48.98", holder: "娜塔莉亚·布科维茨卡", country: "POL", date: "2024-08-09", meet: "奥运会", place: "巴黎", note: "同场季军" },
    { mark: "48.98", holder: "娜塔莉亚·布科维茨卡", country: "POL", date: "2024-06-10", meet: "钻石联赛", place: "罗马" },
    { mark: "48.98", holder: "奥莉加·布里兹金娜", country: "URS", date: "1984-06-22", place: "基辅" },
    { mark: "48.98", holder: "玛丽莱迪·保利诺", country: "DOM", date: "2023-05-27", place: "韦斯特伍德（美国）" },
    { mark: "48.99", holder: "玛丽莱迪·保利诺", country: "DOM", date: "2022-09-08", meet: "钻石联赛", place: "苏黎世" },
    { mark: "49.00", holder: "桑娅·理查兹-罗斯", country: "USA", date: "2009-08-18", meet: "世锦赛", place: "柏林", note: "夺冠成绩" },
  ],
  topListTitle: "49.00以内",
  topListNote:
    "门槛取49.00——2009年柏林世锦赛之夜理查兹-罗斯的夺冠成绩恰好圈在界内，合规成绩全录（含并列）共77条；2026年首届终极锦标赛的冠军保利诺（49.07）与亚军耶格尔（49.28）均在门槛之外，未另补录。科赫一人占十五席、保利诺十四席、纳赛尔七席、麦克劳林-列弗隆五席；前五十条里，1985年以前的东欧名字占了将近一半。亚洲纪录纳赛尔的48.14高居第五；中国纪录马玉琴的49.81（1993）距门槛0.81秒，三十三年无人改写。",

  history: [
    {
      heading: "科赫与克拉托赫维洛娃：48 秒以下的双璧",
      paragraphs: [
        "电计时序列从1974年罗马欧锦赛萨林的50.14起步，两年内被布蕾默与什文斯卡接连推低，直到蒙特利尔之夜——什文斯卡49.29，奥运冠军与世界纪录同时到手。此后是科赫的独舞：1978至1979年间八次改写，48.60（1979都灵世界杯）悬置三年；1982年雅典欧锦赛48.16再进一步。",
        "1983年8月10日，赫尔辛基首届世锦赛，雅尔米拉·克拉托赫维洛娃47.99——第一个进入48秒的女人，同届她还拿下800米金牌，那项1:53.28至今仍是世界纪录。两年后的堪培拉世界杯，科赫以47.60回敬，也把女子400米的终极刻度定格在四十一年前的那个澳大利亚春日。东德档案外泄曾指向她用药，科赫以「问心无愧」回应；因从未药检阳性且追诉期早已届满，47.60从未被取消——它是这个项目最伟大、也最具争议的数字。",
      ],
    },
    {
      heading: "奥运会的四十年：从卡特伯特到佩雷克",
      paragraphs: [
        "1964年东京，女子400米首次进入奥运会，贝蒂·卡特伯特以52.0（手计时）夺冠——这是她1956年三枚金牌之后、隔了八年的第四金。1968年墨西哥城，法国的科莱特·贝松52.03爆冷掀翻世界纪录保持者利莲·博德，成为法兰西的全民偶像。此后奥运冠军的名单本身就是一部时代史：科赫（1980）、布里兹金娜（1988）、佩雷克（1992/1996）——佩雷克是第一个在奥运400米上卫冕的女将，四分之一个世纪后才有人重演。",
        "2000年悉尼，凯茜·弗里曼在主场十万人的注视下点燃了那一夜；2016年里约，肖娜·米勒-乌博以一记俯冲撞线49.44险胜，成为奥运史上最著名的终点照片之一；2021年她以48.36强势卫冕；2024年巴黎，保利诺48.17为多米尼加摘得该国首枚女子奥运金牌。",
      ],
    },
    {
      heading: "改项的麦克劳林-列弗隆与保利的时代",
      paragraphs: [
        "2019年多哈，萨尔瓦·伊德·纳赛尔48.14——亚洲纪录、史上第五快，22岁的尼日利亚裔巴林选手把世锦赛决赛跑成了独舞。2023年布达佩斯，玛丽莱迪·保利诺48.76登顶；2024年巴黎奥运48.17、2025年东京世锦赛47.98，她成了47.60之下最稳定的名字。",
        "而2025年9月18日属于另一个人：以400米栏闻名的悉德尼·麦克劳林-列弗隆转入平跑，东京世锦赛决赛47.78——历史第二快，距离科赫只剩0.18秒。2026年她按兵不动，保利诺在钻石联赛跑出48.48、在布达佩斯首届终极锦标赛以49.07夺冠；雅格尔（49.28）、怀特、奥克利、巴特勒……48秒台正在变成一场围剿。",
      ],
    },
    {
      heading: "亚洲与中国的四百米",
      paragraphs: [
        "亚洲女子400米的亚运史，前半部属于斯里兰卡的达马扬蒂·达沙：1998年曼谷51.57、2002年釜山51.13，两届皆与200米双金——四枚金牌，至今无人企及。后半部是巴林的天下：2014年阿德科娅51.59、2018年纳赛尔50.09（赛会纪录）、2022年阿德科娅二度登顶，2026年名古屋纳赛尔49.20再刷赛会纪录，第二金到手；伊朗的扎赫拉·扎雷伊52.38银、印度普拉奇53.21铜。",
        "中国的刻度停在三十三年前：1993年9月11日，北京七运会，马玉琴49.81。其后最佳是李静1997年的50.01，亚运会上陈玉香1998年的52.50银牌已是最接近领奖台的时刻。亚洲纪录在巴林人手中一路下探，而中国的下一秒，仍在49.81之外等待。",
      ],
    },
  ],
  sources: [
    {
      label: "Wikipedia：Women's 400 metres world record progression",
      url: "https://en.wikipedia.org/wiki/Women%27s_400_metres_world_record_progression",
    },
    {
      label: "World Athletics 官方纪录",
      url: "https://worldathletics.org/records/by-category/world-records",
    },
    {
      label: "Alltime-Athletics：女子400米历史成绩总榜（Peter Larsson 维护）",
      url: "http://www.alltime-athletics.com/w_400ok.htm",
    },
    {
      label: "GBR Athletics：亚运会 1951–2002 田径奖牌总表",
      url: "https://www.gbrathletics.com/ic/asg.htm",
    },
  ],
};
