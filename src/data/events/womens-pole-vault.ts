import type { AthleticsEvent } from "@/lib/types";

/**
 * 女子撑杆跳高（室外）
 * 数据截至：2026年10月
 *
 * 收录口径（宁缺毋滥）：
 *  - 世界纪录演进只收室外纪录，起于1996年（全史总榜可靠覆盖的4.41米）；1991–1995年
 *    该项运动成型期的早期纪录（4.05–4.40米区间）不在总榜覆盖范围内，脉络见历史叙事；
 *  - 室内世界纪录不入本表；
 *  - 历史最好成绩榜以 4.88 米为门槛：合规成绩全录（含并列）共 65 条；
 *  - 撑杆跳无风速限制；成绩后标 A 者为高原成绩（本站以「高海拔」注明）。
 */
export const womensPoleVault: AthleticsEvent = {
  slug: "womens-pole-vault",
  group: "field",
  markKind: "distance",
  gender: "women",
  venue: "outdoor",
  name: "女子撑杆跳高",
  summary:
    "5.06——2009年8月28日的苏黎世，叶莲娜·伊辛巴耶娃把女子撑杆跳的室外世界纪录定在这一高度，十七年过去，无人再能越过。这项运动在女子项目里的历史极短：1990年代才确立世界纪录体系，2000年悉尼才首次进入奥运会。而它的天花板被一个人抬得太高——从2003到2009，伊辛巴耶娃一个人十四次改写室外世界纪录。此后是群芳并起的年代：西多罗娃、席尔瓦、斯特凡尼季、穆恩、肯尼迪、莫泽，金牌开始在世界各地轮转，而5.06依旧悬在那里。",
  dataAsOf: "2026年10月",
  progression: [
    { mark: "4.41", holder: "艾玛·乔治", country: "AUS", date: "1996-01-28", place: "珀斯", note: "艾玛·乔治十余次改写世界纪录的第一站" },
    { mark: "4.42", holder: "艾玛·乔治", country: "AUS", date: "1996-06-29", place: "兰斯（法国）", note: "前世界纪录" },
    { mark: "4.45", holder: "艾玛·乔治", country: "AUS", date: "1996-07-14", place: "札幌", note: "前世界纪录" },
    { mark: "4.50", holder: "艾玛·乔治", country: "AUS", date: "1997-02-08", place: "墨尔本", note: "前世界纪录" },
    { mark: "4.55", holder: "艾玛·乔治", country: "AUS", date: "1997-02-20", place: "墨尔本", note: "前世界纪录" },
    { mark: "4.57", holder: "艾玛·乔治", country: "AUS", date: "1998-02-20", place: "北岸市（新西兰）", note: "前世界纪录" },
    { mark: "4.58", holder: "艾玛·乔治", country: "AUS", date: "1998-03-14", place: "墨尔本", note: "前世界纪录" },
    { mark: "4.59", holder: "艾玛·乔治", country: "AUS", date: "1998-03-21", place: "布里斯班", note: "前世界纪录" },
    { mark: "4.60", holder: "艾玛·乔治", country: "AUS", date: "1999-02-20", place: "悉尼", note: "前世界纪录；七个月后在塞维利亚世锦赛夺冠" },
    { mark: "4.62", holder: "斯泰西·德拉吉拉", country: "USA", date: "2000-05-27", place: "凤凰城（美国）", note: "前世界纪录" },
    { mark: "4.63", holder: "斯泰西·德拉吉拉", country: "USA", date: "2000-07-23", place: "萨克拉门托（美国）", note: "前世界纪录；美国奥运选拔赛" },
    { mark: "4.70A", holder: "斯泰西·德拉吉拉", country: "USA", date: "2001-04-27", place: "波卡特洛（美国）", note: "前世界纪录；高原（波卡特洛，海拔约1360米）" },
    { mark: "4.81", holder: "斯泰西·德拉吉拉", country: "USA", date: "2001-06-09", place: "帕洛阿尔托（美国）", note: "前世界纪录" },
    { mark: "4.82", holder: "叶莲娜·伊辛巴耶娃", country: "RUS", date: "2003-07-13", place: "盖茨黑德（英国）", note: "前世界纪录；伊辛巴耶娃职业生涯十七次改写世界纪录的第一次" },
    { mark: "4.83", holder: "斯泰西·德拉吉拉", country: "USA", date: "2004-06-08", place: "俄斯特拉发", note: "前世界纪录" },
    { mark: "4.87", holder: "叶莲娜·伊辛巴耶娃", country: "RUS", date: "2004-06-27", place: "盖茨黑德（英国）", note: "前世界纪录" },
    { mark: "4.88", holder: "斯韦特兰娜·费奥法诺娃", country: "RUS", date: "2004-07-04", place: "伊拉克利翁（希腊）", note: "前世界纪录" },
    { mark: "4.89", holder: "叶莲娜·伊辛巴耶娃", country: "RUS", date: "2004-07-25", place: "伯明翰", note: "前世界纪录" },
    { mark: "4.90", holder: "叶莲娜·伊辛巴耶娃", country: "RUS", date: "2004-07-30", place: "伦敦", note: "前世界纪录" },
    { mark: "4.91", holder: "叶莲娜·伊辛巴耶娃", country: "RUS", date: "2004-08-25", meet: "奥运会", place: "雅典", note: "奥运纪录；雅典夺冠并创世界纪录" },
    { mark: "4.92", holder: "叶莲娜·伊辛巴耶娃", country: "RUS", date: "2004-09-03", place: "布鲁塞尔", note: "前世界纪录" },
    { mark: "4.93", holder: "叶莲娜·伊辛巴耶娃", country: "RUS", date: "2005-07-05", place: "洛桑", note: "前世界纪录" },
    { mark: "4.95", holder: "叶莲娜·伊辛巴耶娃", country: "RUS", date: "2005-07-16", place: "马德里", note: "前世界纪录" },
    { mark: "5.00", holder: "叶莲娜·伊辛巴耶娃", country: "RUS", date: "2005-07-22", place: "伦敦", note: "前世界纪录；女子首次越过5米" },
    { mark: "5.01", holder: "叶莲娜·伊辛巴耶娃", country: "RUS", date: "2005-08-12", meet: "世锦赛", place: "赫尔辛基", note: "世锦赛夺冠并创世界纪录" },
    { mark: "5.03", holder: "叶莲娜·伊辛巴耶娃", country: "RUS", date: "2008-07-11", place: "罗马", note: "前世界纪录" },
    { mark: "5.04", holder: "叶莲娜·伊辛巴耶娃", country: "RUS", date: "2008-07-29", place: "摩纳哥", note: "前世界纪录" },
    { mark: "5.05", holder: "叶莲娜·伊辛巴耶娃", country: "RUS", date: "2008-08-18", meet: "奥运会", place: "北京", note: "前世界纪录；北京奥运夺冠并改写" },
    { mark: "5.06", holder: "叶莲娜·伊辛巴耶娃", country: "RUS", date: "2009-08-28", place: "苏黎世", note: "现世界纪录；苏黎世Weltklasse之夜，室外纪录至今（2026年）未被撼动" },
  ],

  asianRecord: {
    mark: "4.73", holder: "牛春格", country: "CHN",
    date: "2026-05-31", meet: "全国田径大奖赛", place: "蚌埠",
    note: "2026年5月31日蚌埠站跳出，改写李玲2019年5月18日在上海创造的4.72米。亚洲女子撑杆跳的历史前十二位全部由中国选手占据：李玲4.72、徐惠琴4.70、高淑英4.64——这项运动的亚洲版图高度集中",
  },
  chineseRecord: {
    mark: "4.73", holder: "牛春格", country: "CHN",
    date: "2026-05-31", meet: "全国田径大奖赛", place: "蚌埠",
    note: "与亚洲纪录同条。此前全国纪录为李玲的4.72米（2019年上海），她保持这一纪录七年；徐惠琴4.70米（2019年约克格里姆）。2026年名古屋亚运会，日本的诸田实咲以4.55米夺冠、牛春格4.50米摘银——中国的亚洲统治力在亚运赛场上并未同步兑现",
  },

  topList: [
    { mark: "5.06", holder: "叶莲娜·伊辛巴耶娃", country: "RUS", date: "2009-08-28", place: "苏黎世", note: "现世界纪录；苏黎世Weltklasse之夜，室外纪录至今（2026年）未被撼动" },
    { mark: "5.05", holder: "叶莲娜·伊辛巴耶娃", country: "RUS", date: "2008-08-18", meet: "奥运会", place: "北京", note: "前世界纪录；北京奥运夺冠并改写" },
    { mark: "5.04", holder: "叶莲娜·伊辛巴耶娃", country: "RUS", date: "2008-07-29", place: "摩纳哥", note: "前世界纪录" },
    { mark: "5.03", holder: "叶莲娜·伊辛巴耶娃", country: "RUS", date: "2008-07-11", place: "罗马", note: "前世界纪录" },
    { mark: "5.01", holder: "安热莉卡·西多罗娃", country: "RUS", date: "2021-09-09", meet: "钻石联赛", place: "苏黎世", note: "俄罗斯选手的中立身份年代；历史并列第二快" },
    { mark: "5.01", holder: "叶莲娜·伊辛巴耶娃", country: "RUS", date: "2005-08-12", meet: "世锦赛", place: "赫尔辛基", note: "世锦赛夺冠并创世界纪录" },
    { mark: "5.00", holder: "桑迪·莫里斯", country: "USA", date: "2016-09-09", meet: "钻石联赛", place: "布鲁塞尔", note: "美国纪录（彼时）；布鲁塞尔钻石联赛" },
    { mark: "5.00", holder: "叶莲娜·伊辛巴耶娃", country: "RUS", date: "2005-07-22", place: "伦敦", note: "前世界纪录；人类女子首次越过5米" },
    { mark: "4.95", holder: "妮娜·肯尼迪", country: "AUS", date: "2026-07-10", meet: "钻石联赛", place: "摩纳哥", note: "澳大利亚纪录；摩纳哥钻石联赛" },
    { mark: "4.95", holder: "叶莲娜·伊辛巴耶娃", country: "RUS", date: "2005-07-16", place: "马德里", note: "前世界纪录" },
    { mark: "4.95", holder: "凯蒂·穆恩", country: "USA", date: "2021-06-26", meet: "钻石联赛", place: "尤金" },
    { mark: "4.95", holder: "桑迪·莫里斯", country: "USA", date: "2018-07-27", place: "格林维尔（美国）", note: "美国纪录（彼时）" },
    { mark: "4.95", holder: "安热莉卡·西多罗娃", country: "RUS", date: "2019-09-29", meet: "世锦赛", place: "多哈" },
    { mark: "4.94", holder: "伊莱扎·麦卡特尼", country: "NZL", date: "2018-07-17", place: "约克格里姆（德国）", note: "大洋洲纪录" },
    { mark: "4.93", holder: "叶莲娜·伊辛巴耶娃", country: "RUS", date: "2005-07-05", place: "洛桑", note: "前世界纪录" },
    { mark: "4.93", holder: "珍·苏尔", country: "USA", date: "2018-04-14", place: "奥斯汀（美国）" },
    { mark: "4.93", holder: "凯蒂·穆恩", country: "USA", date: "2021-05-23", place: "玛丽埃塔（美国）" },
    { mark: "4.93", holder: "桑迪·莫里斯", country: "USA", date: "2016-07-23", place: "休斯敦（美国）" },
    { mark: "4.93", holder: "叶莲娜·伊辛巴耶娃", country: "RUS", date: "2008-07-25", place: "伦敦" },
    { mark: "4.93", holder: "叶莲娜·伊辛巴耶娃", country: "RUS", date: "2005-08-26", place: "布鲁塞尔" },
    { mark: "4.92", holder: "凯蒂·穆恩", country: "USA", date: "2020-08-01", place: "玛丽埃塔（美国）" },
    { mark: "4.92", holder: "叶莲娜·伊辛巴耶娃", country: "RUS", date: "2004-09-03", place: "布鲁塞尔", note: "前世界纪录" },
    { mark: "4.92", holder: "珍·苏尔", country: "USA", date: "2008-07-06", place: "尤金" },
    { mark: "4.92", holder: "莫莉·考德里", country: "GBR", date: "2024-06-22", place: "图卢兹（法国）", note: "英国纪录" },
    { mark: "4.92", holder: "伊莱扎·麦卡特尼", country: "NZL", date: "2018-06-23", place: "曼海姆（德国）" },
    { mark: "4.91", holder: "亚里丝莱·席尔瓦", country: "CUB", date: "2015-08-02", place: "贝库姆（德国）" },
    { mark: "4.91", holder: "安热莉卡·西多罗娃", country: "RUS", date: "2022-08-02", place: "切博克萨雷（俄罗斯）" },
    { mark: "4.91", holder: "哈娜·莫尔", country: "USA", date: "2026-09-05", meet: "钻石联赛", place: "布鲁塞尔", note: "时年21岁；布鲁塞尔钻石联赛总决赛" },
    { mark: "4.91", holder: "叶莲娜·伊辛巴耶娃", country: "RUS", date: "2007-07-06", place: "巴黎" },
    { mark: "4.91", holder: "埃卡特里妮·斯特凡尼季", country: "GRE", date: "2017-08-06", meet: "世锦赛", place: "伦敦" },
    { mark: "4.91", holder: "安热莉卡·西多罗娃", country: "RUS", date: "2021-06-10", meet: "钻石联赛", place: "佛罗伦萨" },
    { mark: "4.91", holder: "波琳娜·克诺罗兹", country: "RUS", date: "2026-06-20", place: "切博克萨雷（俄罗斯）", note: "俄罗斯全国锦标赛" },
    { mark: "4.91", holder: "叶莲娜·伊辛巴耶娃", country: "RUS", date: "2004-08-25", meet: "奥运会", place: "雅典" },
    { mark: "4.91", holder: "珍·苏尔", country: "USA", date: "2011-07-26", place: "罗切斯特（美国）" },
    { mark: "4.91", holder: "叶莲娜·伊辛巴耶娃", country: "RUS", date: "2006-07-28", place: "伦敦" },
    { mark: "4.91", holder: "珍·苏尔", country: "USA", date: "2019-03-30", place: "奥斯汀（美国）" },
    { mark: "4.90", holder: "凯蒂·穆恩", country: "USA", date: "2021-08-05", place: "东京" },
    { mark: "4.90", holder: "妮娜·肯尼迪", country: "AUS", date: "2024-08-07", meet: "钻石联赛", place: "巴黎" },
    { mark: "4.90", holder: "亚里丝莱·席尔瓦", country: "CUB", date: "2013-06-08", place: "亨厄洛" },
    { mark: "4.90", holder: "凯蒂·穆恩", country: "USA", date: "2021-07-09", meet: "钻石联赛", place: "摩纳哥" },
    { mark: "4.90", holder: "凯蒂·穆恩", country: "USA", date: "2023-07-09", meet: "钻石联赛", place: "尤金" },
    { mark: "4.90", holder: "叶莲娜·伊辛巴耶娃", country: "RUS", date: "2006-07-11", place: "洛桑" },
    { mark: "4.90", holder: "桑迪·莫里斯", country: "USA", date: "2026-09-12", meet: "世界田径终极锦标赛", place: "布达佩斯" },
    { mark: "4.90", holder: "哈娜·莫尔", country: "USA", date: "2026-09-12", meet: "世界田径终极锦标赛", place: "布达佩斯" },
    { mark: "4.90", holder: "叶莲娜·伊辛巴耶娃", country: "RUS", date: "2007-07-13", place: "罗马" },
    { mark: "4.90", holder: "凯蒂·穆恩", country: "USA", date: "2025-09-17", meet: "世锦赛", place: "东京" },
    { mark: "4.90", holder: "珍·苏尔", country: "USA", date: "2008-05-18", place: "卡森（美国）" },
    { mark: "4.90", holder: "叶莲娜·伊辛巴耶娃", country: "RUS", date: "2016-06-21", place: "切博克萨雷（俄罗斯）" },
    { mark: "4.90", holder: "妮娜·肯尼迪", country: "AUS", date: "2023-08-23", meet: "世锦赛", place: "布达佩斯", note: "世锦赛并列冠军" },
    { mark: "4.90", holder: "凯蒂·穆恩", country: "USA", date: "2023-08-23", meet: "世锦赛", place: "布达佩斯", note: "世锦赛并列冠军" },
    { mark: "4.90", holder: "桑迪·莫里斯", country: "USA", date: "2026-07-25", place: "纽约" },
    { mark: "4.90", holder: "霍莉·布拉德肖", country: "GBR", date: "2021-06-26", place: "曼彻斯特", note: "英国纪录（彼时）" },
    { mark: "4.90", holder: "亚里丝莱·席尔瓦", country: "CUB", date: "2015-08-26", meet: "世锦赛", place: "北京" },
    { mark: "4.90", holder: "桑迪·莫里斯", country: "USA", date: "2019-09-29", meet: "世锦赛", place: "多哈" },
    { mark: "4.90", holder: "叶莲娜·伊辛巴耶娃", country: "RUS", date: "2004-07-30", place: "伦敦", note: "前世界纪录" },
    { mark: "4.89", holder: "叶莲娜·伊辛巴耶娃", country: "RUS", date: "2013-08-13", meet: "世锦赛", place: "莫斯科" },
    { mark: "4.89", holder: "叶莲娜·伊辛巴耶娃", country: "RUS", date: "2004-07-25", place: "伯明翰", note: "前世界纪录" },
    { mark: "4.89", holder: "珍·苏尔", country: "USA", date: "2010-06-27", place: "得梅因（美国）" },
    { mark: "4.88", holder: "珍·苏尔", country: "USA", date: "2007-06-02", place: "纽约" },
    { mark: "4.88", holder: "斯韦特兰娜·费奥法诺娃", country: "RUS", date: "2004-07-04", place: "伊拉克利翁（希腊）", note: "前世界纪录" },
    { mark: "4.88", holder: "妮娜·肯尼迪", country: "AUS", date: "2024-07-12", meet: "钻石联赛", place: "摩纳哥" },
    { mark: "4.88", holder: "安杰莉卡·莫泽", country: "SUI", date: "2024-07-12", meet: "钻石联赛", place: "摩纳哥" },
    { mark: "4.88", holder: "妮娜·肯尼迪", country: "AUS", date: "2024-09-14", meet: "钻石联赛", place: "布鲁塞尔" },
    { mark: "4.88", holder: "桑迪·莫里斯", country: "USA", date: "2018-04-28", place: "得梅因（美国）" },
    { mark: "4.88", holder: "叶莲娜·伊辛巴耶娃", country: "RUS", date: "2008-08-29", place: "苏黎世" },
  ],
  topListTitle: "前 65 名",
  topListNote:
    "门槛 4.88 米，合规成绩全录（含并列）。伊辛巴耶娃独占 21 席（前 10 名中 7 席），穆恩 8 席、莫里斯 7 席、苏尔 7 席紧随。中国选手无一人入榜（全国纪录4.73米，距门槛0.15米）。2026年新入榜 6 条，全部在 4.90 米以上：尼娜·肯尼迪（4.95米，摩纳哥）、哈娜·莫尔（4.91米，布鲁塞尔；4.90米，布达佩斯）、波琳娜·克诺罗兹（4.91米，切博克萨雷）与桑迪·莫里斯（4.90米，纽约；4.90米，布达佩斯终极锦标赛）。",

  history: [
    {
      heading: "迟到的一步：从被拒绝到被承认",
      paragraphs: [
        "女子撑杆跳高在很长时间里被认为「不适合女性」——国际田联直到1990年代才承认这个项目，1997年才设立女子世界纪录的正式体系。1990年代中期，澳大利亚的艾玛·乔治成为第一个把这个项目推到世界级的人：1996年1月她在珀斯越过4.41米，此后四年里十余次改写世界纪录，把纪录从4.41推到4.60米。",
        "2000年悉尼奥运会，女子撑杆跳首次成为奥运项目，美国的斯泰西·德拉吉拉以4.60米夺冠——那是这个项目真正进入公众视野的夜晚。同一时期，德拉吉拉又把世界纪录推到4.81米（2001年）。",
      ],
    },
    {
      heading: "伊辛巴耶娃：一个人的十七次",
      paragraphs: [
        "2003年7月，盖茨黑德，21岁的叶莲娜·伊辛巴耶娃第一次改写世界纪录（4.82米）。此后六年，她把这个数字推到5.06米：2004年一年之内五破（盖茨黑德4.87、伯明翰4.89、伦敦4.90、雅典奥运4.91、布鲁塞尔4.92）；2005年再四破——洛桑4.93、马德里4.95、伦敦5.00（女子首次越过5米）、赫尔辛基世锦赛5.01；2008年罗马5.03、摩纳哥5.04、北京奥运5.05；2009年8月28日苏黎世的Weltklasse，5.06。",
        "她的统治力延伸到荣誉：2004年雅典与2008年北京两枚奥运金牌，2005年、2007年两届世锦赛冠军，2009年柏林则三次试跳失败、未能卫冕（波兰的安娜·罗戈夫斯卡以4.75米夺金）。2013年莫斯科，她在主场以4.89米拿到第三枚世锦赛金牌，随后退役。",
      ],
    },
    {
      heading: "群芳并起：从西多罗娃到穆恩与肯尼迪",
      paragraphs: [
        "伊辛巴耶娃之后，女子撑杆跳进入多人并立的局面：古巴的亚里丝莱·席尔瓦（2015年北京世锦赛4.90米）、希腊的埃卡特里妮·斯特凡尼季（2016年里约奥运4.85米、2017年伦敦世锦赛4.91米）、俄罗斯的安热莉卡·西多罗娃（2019年多哈世锦赛4.95米，2021年苏黎世5.01米）轮番登顶。",
        "2020年代的主角是美国的凯蒂·穆恩与澳大利亚的尼娜·肯尼迪：穆恩拿下2021年东京奥运（4.90米）与2022年尤金世锦赛（4.85米）；2023年布达佩斯世锦赛两人在4.90米处并列、共享金牌；2024年巴黎奥运肯尼迪4.90米夺金、穆恩4.85米摘银；2025年东京世锦赛穆恩以4.90米拿下第三枚世锦赛金牌。2026年，肯尼迪在摩纳哥跳出4.95米，成为现役最接近5米的人。",
      ],
    },
    {
      heading: "中国女子撑杆跳：从孙彩云到牛春格",
      paragraphs: [
        "1990年代初，中国的孙彩云与蔡维艳是女子撑杆跳最早的探索者之一；1998年曼谷亚运会，蔡维艳以4.00米夺金，那是中国在这个项目上的第一个亚运冠军。此后高淑英（4.64米，2007年纽约）接棒，2010年代李玲与徐惠琴把全国纪录推到4.70米以上：李玲4.72米（2019年上海），徐惠琴4.70米（2019年）。",
        "李玲之后，牛春格是新的领军者：2026年5月31日蚌埠，4.73米，亚洲纪录。中国的厚度同样可观——牛春格、李玲、徐惠琴、陈巧铃、戴雨格五人同处4.40米以上。但亚运赛场的现实是另一回事：2026年名古屋，日本的诸田实咲以4.55米夺冠，牛春格4.50米摘银。",
      ],
    },
  ],

  sources: [
    { label: "World Athletics · 官方纪录与总榜", url: "https://worldathletics.org/records/all-time-toplists/jumps/pole-vault/outdoor/women/senior" },
    { label: "Alltime-Athletics · 女子撑杆跳高历史总榜", url: "https://alltime-athletics.com/wpoleok.htm" },
    { label: "Olympedia · Athletics — Pole Vault, Women（历届奥运逐届成绩）", url: "https://www.olympedia.org/event_names/112" },
  ],
};
