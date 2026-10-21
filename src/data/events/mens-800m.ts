import type { AthleticsEvent } from "@/lib/types";

/**
 * 男子 800 米（室外）世界纪录演进
 * 数据截至：2026年10月
 *
 * 收录口径（宁缺毋滥）：
 *  - 世界纪录演进收电计时时代（1968起）：手计时口径条目注明，含1972年沃特尔
 *    平杜贝尔手计时纪录、1973年菲亚斯科纳罗（手计时）两项旧口径条目；
 *  - 历史最好成绩榜以 1:42.39 为门槛：合规成绩全录（含并列）共 80 条；
 *  - 1972年及以前的奥运决赛成绩部分超出总榜下限，以维基单项决赛页核对补注；
 *  - 800米无风速限制问题。
 */
export const mens800m: AthleticsEvent = {
  slug: "mens-800m",
  group: "track",
  markKind: "time",
  gender: "men",
  venue: "outdoor",
  name: "男子 800 米",
  summary:
    "1:40.91——2012年8月9日的伦敦之夜，鲁迪沙独自领跑、枪响即决，把中距离跑的想象边界一次推进0.91秒。两圈之间藏着径赛最微妙的两难：第一圈敢不敢，第二圈还能不能。从科的1:41.73到基普凯特的48天三破，再到瓦尼翁伊与阿罗普在巴黎把1:41.2写进同一场比赛——这项纪录的每一次改写，都关于胆量如何被精确计量。",
  dataAsOf: "2026年10月",
  progression: [
    { mark: "1:44.40", holder: "拉尔夫·杜贝尔", country: "AUS", date: "1968-10-15", meet: "奥运会", place: "墨西哥城", note: "电计时1:44.40与手计时1:44.3并记，平手计时世界纪录；高原（约2240米）" },
    { mark: "1:44.3", holder: "戴夫·沃特尔", country: "USA", date: "1972-07-01", meet: "美国奥运选拔赛", place: "尤金", note: "手计时口径，追平杜贝尔的世界纪录；一个月后慕尼黑决赛他以1:45.86俯冲夺金" },
    { mark: "1:43.7", holder: "马尔切洛·菲亚斯科纳罗", country: "ITA", date: "1973-06-27", place: "米兰", note: "手计时口径；南非出生的意大利人在米兰改写" },
    { mark: "1:43.50", holder: "阿尔贝托·胡安托雷纳", country: "CUB", date: "1976-07-25", meet: "奥运会", place: "蒙特利尔", note: "手计时1:43.5与电计时1:43.50并记；「超人」以400米选手的底子同届加冕双金" },
    { mark: "1:43.44", holder: "阿尔贝托·胡安托雷纳", country: "CUB", date: "1977-08-21", place: "索非亚", note: "悬置近两年；古巴人把自己的名字写了两遍" },
    { mark: "1:42.33", holder: "塞巴斯蒂安·科", country: "GBR", date: "1979-07-05", place: "奥斯陆", note: "手计时1:42.4与电计时1:42.33并记；一夜把纪录压进1:43" },
    { mark: "1:41.73", holder: "塞巴斯蒂安·科", country: "GBR", date: "1981-06-10", place: "佛罗伦萨", note: "悬置十六年零五十八天——至1997年才被追平" },
    { mark: "1:41.73", holder: "威尔逊·基普凯特", country: "DEN", date: "1997-07-07", place: "斯德哥尔摩", note: "追平科的1:41.73；丹麦国旗下的肯尼亚人" },
    { mark: "1:41.24", holder: "威尔逊·基普凯特", country: "DEN", date: "1997-08-13", place: "苏黎世", note: "Weltklasse之夜真正改写" },
    { mark: "1:41.11", holder: "威尔逊·基普凯特", country: "DEN", date: "1997-08-24", place: "科隆", note: "48天内对世界纪录的第三次改写（含一次追平）" },
    { mark: "1:41.09", holder: "大卫·鲁迪沙", country: "KEN", date: "2010-08-22", place: "柏林", note: "中断13年后的改写；1:41.09" },
    { mark: "1:41.01", holder: "大卫·鲁迪沙", country: "KEN", date: "2010-08-29", place: "列蒂（意大利）", note: "一周之内二破" },
    { mark: "1:40.91", holder: "大卫·鲁迪沙", country: "KEN", date: "2012-08-09", meet: "奥运会", place: "伦敦", note: "现世界纪录；决赛独自领跑，历史首个1:40台，悬置十四年" },
  ],

  asianRecord: {
    mark: "1:42.79", holder: "优素福·萨阿德·卡迈勒", country: "BRN",
    date: "2008-07-29", meet: "黄金联赛", place: "摩纳哥",
    note: "以第二名完赛时跑出（历史总榜录为7月19日，赛历为7月29日，本站从赛历）。他生于肯尼亚，本名格雷戈里·孔切拉，为1987年世锦赛冠军比利·孔切拉之子，后入籍巴林；2006年多哈亚运会冠军、2009年柏林世锦赛铜牌",
  },
  chineseRecord: {
    mark: "1:45.46", holder: "奚枭横", country: "CHN",
    date: "2026-09-29", meet: "亚运会", place: "名古屋",
    note: "决赛第4名——冠军落合晃1:44.48创赛会纪录，奚枭横距铜牌0.21秒。全国纪录两年半内三度改写：刘德助1:45.66（2024年厦门钻石联赛）→奚枭横1:45.48（2025年十五运会，广州，刘德助同场1:45.84居次）→本条；室内另有刘德助的1:46.63（2024年济南）",
  },

  topList: [
    { mark: "1:40.91", holder: "大卫·鲁迪沙", country: "KEN", date: "2012-08-09", meet: "奥运会", place: "伦敦", note: "现世界纪录；奥运决赛独自领跑，历史首个1:40台" },
    { mark: "1:41.01", holder: "大卫·鲁迪沙", country: "KEN", date: "2010-08-29", place: "列蒂（意大利）", note: "前世界纪录" },
    { mark: "1:41.09", holder: "大卫·鲁迪沙", country: "KEN", date: "2010-08-22", place: "柏林", note: "前世界纪录" },
    { mark: "1:41.11", holder: "伊曼纽尔·瓦尼翁伊", country: "KEN", date: "2024-08-22", meet: "钻石联赛", place: "洛桑", note: "追平基普凯特的历史并列第四；洛桑钻石联赛A组" },
    { mark: "1:41.11", holder: "威尔逊·基普凯特", country: "DEN", date: "1997-08-24", place: "科伦", note: "前世界纪录；48天内对世界纪录的第三次改写（含一次追平）" },
    { mark: "1:41.19", holder: "伊曼纽尔·瓦尼翁伊", country: "KEN", date: "2024-08-10", meet: "奥运会", place: "巴黎", note: "夺冠成绩；阿罗普1:41.20同场创北美纪录，史上最快奥运前二" },
    { mark: "1:41.20", holder: "马可·阿罗普", country: "CAN", date: "2024-08-10", meet: "奥运会", place: "巴黎", note: "同场亚军；加拿大及北美纪录" },
    { mark: "1:41.24", holder: "威尔逊·基普凯特", country: "DEN", date: "1997-08-13", place: "苏黎世", note: "前世界纪录" },
    { mark: "1:41.33", holder: "大卫·鲁迪沙", country: "KEN", date: "2011-09-10", place: "列蒂（意大利）", note: "赛季世界最好成绩" },
    { mark: "1:41.44", holder: "伊曼纽尔·瓦尼翁伊", country: "KEN", date: "2025-07-11", meet: "钻石联赛", place: "摩纳哥", note: "夺冠成绩" },
    { mark: "1:41.46", holder: "贾迈勒·塞杰蒂", country: "ALG", date: "2024-07-12", meet: "钻石联赛", place: "摩纳哥", note: "阿尔及利亚纪录" },
    { mark: "1:41.50", holder: "贾迈勒·塞杰蒂", country: "ALG", date: "2024-08-10", meet: "奥运会", place: "巴黎", note: "同场季军；奥运史上最快第三名" },
    { mark: "1:41.51", holder: "大卫·鲁迪沙", country: "KEN", date: "2010-07-10", place: "海斯登-佐尔德（比利时）" },
    { mark: "1:41.54", holder: "大卫·鲁迪沙", country: "KEN", date: "2012-07-06", place: "巴黎" },
    { mark: "1:41.56", holder: "贾迈勒·塞杰蒂", country: "ALG", date: "2024-07-07", meet: "钻石联赛", place: "巴黎" },
    { mark: "1:41.58", holder: "伊曼纽尔·瓦尼翁伊", country: "KEN", date: "2024-07-07", meet: "钻石联赛", place: "巴黎" },
    { mark: "1:41.61", holder: "加布里埃尔·蒂亚尔", country: "FRA", date: "2024-07-07", meet: "钻石联赛", place: "巴黎" },
    { mark: "1:41.67", holder: "布莱斯·霍普尔", country: "USA", date: "2024-08-10", meet: "奥运会", place: "巴黎", note: "美国纪录" },
    { mark: "1:41.72", holder: "马可·阿罗普", country: "CAN", date: "2024-08-22", meet: "钻石联赛", place: "洛桑" },
    { mark: "1:41.73", holder: "威尔逊·基普凯特", country: "DEN", date: "1997-07-07", place: "斯德哥尔摩" },
    { mark: "1:41.73", holder: "尼杰尔·阿莫斯", country: "BOT", date: "2012-08-09", meet: "奥运会", place: "伦敦" },
    { mark: "1:41.73", holder: "塞巴斯蒂安·科", country: "GBR", date: "1981-06-10", place: "佛罗伦萨" },
    { mark: "1:41.74", holder: "大卫·鲁迪沙", country: "KEN", date: "2012-06-09", place: "纽约" },
    { mark: "1:41.76", holder: "伊曼纽尔·瓦尼翁伊", country: "KEN", date: "2026-08-27", meet: "钻石联赛", place: "苏黎世" },
    { mark: "1:41.77", holder: "若阿金·克鲁斯", country: "BRA", date: "1984-08-26", place: "科伦" },
    { mark: "1:41.80", holder: "伊曼纽尔·瓦尼翁伊", country: "KEN", date: "2026-09-04", meet: "钻石联赛", place: "布鲁塞尔" },
    { mark: "1:41.83", holder: "威尔逊·基普凯特", country: "DEN", date: "1996-09-01", place: "列蒂（意大利）" },
    { mark: "1:41.83", holder: "贾迈勒·塞杰蒂", country: "ALG", date: "2026-08-27", meet: "钻石联赛", place: "苏黎世" },
    { mark: "1:41.84", holder: "马可·阿罗普", country: "CAN", date: "2026-06-28", meet: "钻石联赛", place: "巴黎" },
    { mark: "1:41.86", holder: "伊曼纽尔·瓦尼翁伊", country: "KEN", date: "2025-09-20", meet: "世锦赛", place: "东京", note: "夺冠成绩；打破基普凯特1999年1:43.30的锦标赛纪录" },
    { mark: "1:41.86", holder: "马可·阿罗普", country: "CAN", date: "2024-08-25", meet: "钻石联赛", place: "霍茹夫（波兰）" },
    { mark: "1:41.89", holder: "尼杰尔·阿莫斯", country: "BOT", date: "2019-07-12", meet: "钻石联赛", place: "摩纳哥" },
    { mark: "1:41.90", holder: "贾迈勒·塞杰蒂", country: "ALG", date: "2025-09-20", meet: "世锦赛", place: "东京" },
    { mark: "1:41.91", holder: "贾迈勒·塞杰蒂", country: "ALG", date: "2026-09-13", meet: "世界田径终极锦标赛", place: "布达佩斯" },
    { mark: "1:41.95", holder: "伊曼纽尔·瓦尼翁伊", country: "KEN", date: "2025-06-15", meet: "钻石联赛", place: "斯德哥尔摩" },
    { mark: "1:41.95", holder: "马可·阿罗普", country: "CAN", date: "2025-09-20", meet: "世锦赛", place: "东京" },
    { mark: "1:42.00", holder: "伊曼纽尔·瓦尼翁伊", country: "KEN", date: "2025-07-19", meet: "钻石联赛", place: "伦敦" },
    { mark: "1:42.01", holder: "大卫·鲁迪沙", country: "KEN", date: "2009-09-06", place: "列蒂（意大利）" },
    { mark: "1:42.01", holder: "乔什·霍伊", country: "USA", date: "2025-07-11", meet: "钻石联赛", place: "摩纳哥" },
    { mark: "1:42.04", holder: "大卫·鲁迪沙", country: "KEN", date: "2010-06-04", meet: "钻石联赛", place: "奥斯陆" },
    { mark: "1:42.04", holder: "穆罕默德·阿陶伊", country: "ESP", date: "2024-07-12", meet: "钻石联赛", place: "摩纳哥" },
    { mark: "1:42.05", holder: "伊曼纽尔·科里尔", country: "KEN", date: "2018-07-22", meet: "钻石联赛", place: "伦敦" },
    { mark: "1:42.08", holder: "阿龙·凯梅伊", country: "KEN", date: "2024-07-07", meet: "钻石联赛", place: "巴黎" },
    { mark: "1:42.08", holder: "威克利夫·金亚马尔", country: "KEN", date: "2024-07-07", meet: "钻石联赛", place: "巴黎" },
    { mark: "1:42.08", holder: "库珀·卢特肯豪斯", country: "USA", date: "2026-06-10", meet: "钻石联赛", place: "奥斯陆" },
    { mark: "1:42.08", holder: "穆罕默德·阿陶伊", country: "ESP", date: "2024-08-10", meet: "奥运会", place: "巴黎" },
    { mark: "1:42.09", holder: "伊曼纽尔·瓦尼翁伊", country: "KEN", date: "2026-06-10", meet: "钻石联赛", place: "奥斯陆" },
    { mark: "1:42.10", holder: "加布里埃尔·蒂亚尔", country: "FRA", date: "2024-07-12", meet: "钻石联赛", place: "摩纳哥" },
    { mark: "1:42.13", holder: "阿龙·凯梅伊", country: "KEN", date: "2024-07-12", meet: "钻石联赛", place: "摩纳哥" },
    { mark: "1:42.13", holder: "马可·阿罗普", country: "CAN", date: "2026-07-12", place: "埃德蒙顿" },
    { mark: "1:42.14", holder: "加布里埃尔·蒂亚尔", country: "FRA", date: "2024-08-10", meet: "奥运会", place: "巴黎" },
    { mark: "1:42.14", holder: "尼杰尔·阿莫斯", country: "BOT", date: "2018-07-20", meet: "钻石联赛", place: "摩纳哥" },
    { mark: "1:42.15", holder: "大卫·鲁迪沙", country: "KEN", date: "2016-08-15", meet: "奥运会", place: "里约热内卢" },
    { mark: "1:42.15", holder: "基安·麦克菲利普斯", country: "IRL", date: "2025-09-20", meet: "世锦赛", place: "东京" },
    { mark: "1:42.16", holder: "多纳万·布雷泽尔", country: "USA", date: "2025-08-03", meet: "钻石联赛", place: "尤金" },
    { mark: "1:42.17", holder: "威尔逊·基普凯特", country: "DEN", date: "1996-09-16", place: "东京" },
    { mark: "1:42.19", holder: "布兰登·米勒", country: "USA", date: "2026-07-18", meet: "钻石联赛", place: "伦敦" },
    { mark: "1:42.19", holder: "伊曼纽尔·瓦尼翁伊", country: "KEN", date: "2026-08-21", meet: "钻石联赛", place: "洛桑" },
    { mark: "1:42.20", holder: "贾迈勒·塞杰蒂", country: "ALG", date: "2025-07-11", meet: "钻石联赛", place: "摩纳哥" },
    { mark: "1:42.20", holder: "威尔逊·基普凯特", country: "DEN", date: "1997-08-22", place: "布鲁塞尔" },
    { mark: "1:42.21", holder: "穆罕默德·阿陶伊", country: "ESP", date: "2025-09-20", meet: "世锦赛", place: "东京" },
    { mark: "1:42.22", holder: "马可·阿罗普", country: "CAN", date: "2025-07-19", meet: "钻石联赛", place: "伦敦" },
    { mark: "1:42.23", holder: "阿布巴卡尔·卡基·哈米斯", country: "SUD", date: "2010-06-04", meet: "钻石联赛", place: "奥斯陆" },
    { mark: "1:42.27", holder: "库珀·卢特肯豪斯", country: "USA", date: "2025-08-03", meet: "钻石联赛", place: "尤金" },
    { mark: "1:42.27", holder: "威尔逊·基普凯特", country: "DEN", date: "1999-09-03", meet: "黄金联赛", place: "布鲁塞尔" },
    { mark: "1:42.27", holder: "本·帕蒂森", country: "GBR", date: "2024-07-12", meet: "钻石联赛", place: "摩纳哥" },
    { mark: "1:42.27", holder: "贾迈勒·塞杰蒂", country: "ALG", date: "2025-06-15", meet: "钻石联赛", place: "斯德哥尔摩" },
    { mark: "1:42.28", holder: "马可·阿罗普", country: "CAN", date: "2026-09-13", meet: "世界田径终极锦标赛", place: "布达佩斯" },
    { mark: "1:42.28", holder: "萨米·科斯凯伊", country: "KEN", date: "1984-08-26", place: "科伦" },
    { mark: "1:42.29", holder: "马克斯·伯金", country: "GBR", date: "2025-09-20", meet: "世锦赛", place: "东京" },
    { mark: "1:42.30", holder: "加布里埃尔·蒂亚尔", country: "FRA", date: "2024-08-22", meet: "钻石联赛", place: "洛桑" },
    { mark: "1:42.31", holder: "贾迈勒·塞杰蒂", country: "ALG", date: "2026-08-21", meet: "钻石联赛", place: "洛桑" },
    { mark: "1:42.32", holder: "威尔逊·基普凯特", country: "DEN", date: "2002-09-08", place: "列蒂（意大利）" },
    { mark: "1:42.33", holder: "塞巴斯蒂安·科", country: "GBR", date: "1979-07-05", place: "奥斯陆", note: "前世界纪录（手计时1:42.4）" },
    { mark: "1:42.34", holder: "多纳万·布雷泽尔", country: "USA", date: "2019-10-01", meet: "世锦赛", place: "多哈", note: "夺冠成绩；美国及北美纪录、锦标赛纪录" },
    { mark: "1:42.34", holder: "威尔弗雷德·邦盖", country: "KEN", date: "2002-09-08", place: "列蒂（意大利）" },
    { mark: "1:42.34", holder: "若阿金·克鲁斯", country: "BRA", date: "1984-08-22", place: "苏黎世" },
    { mark: "1:42.36", holder: "马克斯·伯金", country: "GBR", date: "2025-07-19", meet: "钻石联赛", place: "伦敦" },
    { mark: "1:42.37", holder: "穆罕默德·阿曼", country: "ETH", date: "2013-09-06", meet: "钻石联赛", place: "布鲁塞尔" },
    { mark: "1:42.37", holder: "伊曼纽尔·瓦尼翁伊", country: "KEN", date: "2025-08-28", meet: "钻石联赛", place: "苏黎世" },
  ],

  topListNote:
    "门槛取1:42.39——合规成绩全录（含并列）共80条。鲁迪沙一人占十席、瓦尼翁伊十二席且仍在继续；2024年7月7日与8月10日的两场巴黎之战（钻石联赛、奥运决赛）合计贡献11条——门槛以内近七分之一的成绩诞生于那个夏天。亚洲纪录卡迈勒的1:42.79（2008年摩纳哥）距门槛0.40秒；中国纪录奚枭横的1:45.46（2026年亚运决赛第4名）距门槛3.07秒。",

  history: [
    {
      heading: "两圈的两难：从杜贝尔到科",
      paragraphs: [
        "1968年10月15日，墨西哥城，拉尔夫·杜贝尔以1:44.3（电计时1:44.40）平了世界纪录并夺冠——电计时时代800米的第一座标杆立在高原上。1972年，戴夫·沃特尔在美国选拔赛追平手计时纪录后，于慕尼黑决赛最后三步俯冲，以1:45.86险胜——那场比赛至今仍是奥运史上最慢也最惨烈的800米决赛之一。1976年，「超人」胡安托雷纳在蒙特利尔以1:43.50改写纪录，同届再夺400米金牌——奥运史上再无人重演这样的双冠。",
        "1979年7月5日的奥斯陆，22岁的塞巴斯蒂安·科把纪录压到1:42.33；1981年6月10日的佛罗伦萨，1:41.73。此后是漫长的十六年——科自己、奥维特、克鲁斯，所有人都被挡在这道门外。1984年洛杉矶，克鲁斯以1:43.00夺冠，距离科的世界纪录只差0.27秒，却始终差着那0.27秒。",
      ],
    },
    {
      heading: "1997：基普凯特的48天",
      paragraphs: [
        "威尔逊·基普凯特1995年就在哥德堡拿下世锦赛金牌，但1997年才是他的年份：7月7日斯德哥尔摩，1:41.73——追平科保持十六年的世界纪录；8月13日苏黎世Weltklasse，1:41.24；8月24日科隆，1:41.11。48天，三度改写（含一次追平），雅典世锦赛冠军夹在其中。悉尼奥运他被尼尔斯·舒曼在最后直道反超（1:45.14对1:45.08），那枚银牌成了完美赛季唯一的缺口。",
        "1:41.11悬置了十三年。其间阿布巴卡尔·卡基、大卫·鲁迪沙等新一代肯尼亚人轮番叩门：2008年巴林归化选手优素福·萨阿德·卡迈勒在摩纳哥跑出1:42.79（亚洲纪录，悬置至今），2010年6月4日奥斯陆，卡基1:42.23——差0.12秒。",
      ],
    },
    {
      heading: "鲁迪沙：1:40.91",
      paragraphs: [
        "2010年8月22日柏林，1:41.09；8月29日列蒂，1:41.01。21岁的大卫·鲁迪沙在八天之内两破世界纪录。但真正的杰作在两年后：2012年8月9日的伦敦，他从前程就独自领跑，1:40.91——人类第一次在两圈内跑进101秒。身后七人，五人创个人最好成绩、三项国家纪录；第二名尼杰尔·阿莫斯的1:41.73，恰好等于科和基普凯特的世界纪录。",
        "2016年里约他带伤卫冕（1:42.15），成为1968年之后首位蝉联奥运800米的人。此后伤病缠身，2017年后再未回到1:41——但1:40.91至今悬置十四年，是男子径赛现存最古老的世界纪录之一。",
      ],
    },
    {
      heading: "瓦尼翁伊与阿罗普：1:41.2的战争",
      paragraphs: [
        "2024年8月10日的巴黎是奥运史上最快的800米决赛：伊曼纽尔·瓦尼翁伊1:41.19夺冠，马可·阿罗普1:41.20摘银——史上最快的奥运前二；贾迈勒·塞杰蒂1:41.50的铜牌，是奥运史上最快的第三名。2025年东京世锦赛，瓦尼翁伊以1:41.86打破基普凯特保持了26年的锦标赛纪录（1:43.30）；2026年9月的布达佩斯首届终极锦标赛，1:41.2的战争仍在继续。北美的纵深令人心惊：阿罗普之外，霍普尔（1:41.67，美国纪录）、卢特肯豪斯、米勒、霍伊都在1:42.3以内排队。",
        "亚洲的刻度由两个巴林名字与一个日本名字标记：卡迈勒的1:42.79（2008）悬置十八年，2026年名古屋亚运会上，2006年出生的落合晃以1:44.48创赛会纪录——日本全国纪录，驹泽大学在读。中国的刻度同场改写：奚枭横在决赛跑出1:45.46（第4名，距铜牌0.21秒），把全国纪录从自己名下的1:45.48（2025年十五运会，广州）又推低0.02秒——再往前是刘德助的1:45.66（2024年，厦门）。两年半三度改写，中国男子800米正贴着1:45的门框向1:44靠近。",
      ],
    },
  ],
  sources: [
    {
      label: "Wikipedia：Men's 800 metres world record progression",
      url: "https://en.wikipedia.org/wiki/Men%27s_800_metres_world_record_progression",
    },
    {
      label: "Wikipedia：800 metres at the World Championships in Athletics",
      url: "https://en.wikipedia.org/wiki/800_metres_at_the_World_Championships_in_Athletics",
    },
    {
      label: "Alltime-Athletics：男子800米历史成绩总榜（Peter Larsson 维护）",
      url: "http://www.alltime-athletics.com/m_800ok.htm",
    },
    {
      label: "GBR Athletics：亚运会 1951–2002 田径奖牌总表",
      url: "https://www.gbrathletics.com/ic/asg.htm",
    },
  ],
};
