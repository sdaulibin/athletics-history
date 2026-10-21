import type { AthleticsEvent } from "@/lib/types";

/**
 * 女子 800 米（室外）世界纪录演进
 * 数据截至：2026年10月
 *
 * 收录口径（宁缺毋滥）：
 *  - 世界纪录演进收电计时/并记时代（1971年法尔克起）；手计时口径条目注明
 *    （1976年格拉西莫娃为手计时单口径）；1928年拉德克及1934年库贝克
 *    （后被撤销）等手计时早期沿革未列入；
 *  - 历史最好成绩榜以 1:55.69 为门槛：合规成绩全录（含并列）共 74 条；
 *  - 800米无风速限制问题；性别资格争议选手的成绩按官方认定收录。
 */
export const womens800m: AthleticsEvent = {
  slug: "womens-800m",
  group: "track",
  markKind: "time",
  gender: "women",
  venue: "outdoor",
  name: "女子 800 米",
  summary:
    "1:53.28——1983年7月26日的慕尼黑，克拉托赫维洛娃在32岁那年把女子800米的世界纪录一次砍掉0.15秒，然后转身离开。四十三年过去，它成了人类径赛现存最古老的世界纪录：苏联的1:53时代、塞门亚的1:54年代、韦罗与霍奇金森的2026年狂飙，都停在那道门外。两圈之内，女子径赛最长的不在场证明。",
  dataAsOf: "2026年10月",
  progression: [
    { mark: "1:58.45", holder: "希尔德加德·法尔克", country: "FRG", date: "1971-07-11", place: "斯图加特", note: "女子首次跑进2分钟（手计时1:58.5，电计时1:58.45）" },
    { mark: "1:57.48", holder: "斯韦特拉·兹拉特娃", country: "BUL", date: "1973-08-24", place: "雅典", note: "欧锦赛夺冠改写；手计时1:57.5" },
    { mark: "1:56.0", holder: "瓦莲京娜·格拉西莫娃", country: "URS", date: "1976-06-12", place: "基辅", note: "手计时单口径；蒙特利尔奥运前苏联的最后一次改写" },
    { mark: "1:54.94", holder: "塔季扬娜·卡赞金娜", country: "URS", date: "1976-07-26", meet: "奥运会", place: "蒙特利尔", note: "决赛改写（手计时1:54.9）；同届再夺1500米金牌" },
    { mark: "1:54.85", holder: "娜杰日达·奥利扎连科", country: "URS", date: "1980-06-12", place: "莫斯科", note: "苏联锦标赛" },
    { mark: "1:53.43", holder: "娜杰日达·奥利扎连科", country: "URS", date: "1980-07-27", meet: "奥运会", place: "莫斯科", note: "奥运决赛改写，苏联包揽前三（米涅耶娃1:54.81银）；悬置三年" },
    { mark: "1:53.28", holder: "雅尔米拉·克拉托赫维洛娃", country: "TCH", date: "1983-07-26", place: "慕尼黑", note: "现世界纪录；两周后赫尔辛基世锦赛夺冠（1:54.68）。悬置43年——人类径赛现存最古老的世界纪录" },
  ],

  asianRecord: {
    mark: "1:55.54", holder: "刘东", country: "CHN",
    date: "1993-09-09", meet: "全运会", place: "北京",
    note: "亚洲纪录与中国纪录同绩。1993年七运会，「马家军」年代的第七届全国运动会；1:55.54悬置33年，亚运赛场的赛会纪录（穆卡舍娃2014年仁川1:59.02）至今无人接近",
  },
  chineseRecord: {
    mark: "1:55.54", holder: "刘东", country: "CHN",
    date: "1993-09-09", meet: "全运会", place: "北京",
    note: "与亚洲纪录同绩，悬置33年——中国女子径赛悬置最久的全国纪录之一。2018年王春雨在雅加达亚运会夺冠（2:01.80）、2021年东京奥运跻身第五，是此后三十年的最高刻度；2026年名古屋，吴洪娇2:04.49再夺亚运金牌",
  },

  topList: [
    { mark: "1:53.28", holder: "雅尔米拉·克拉托赫维洛娃", country: "TCH", date: "1983-07-26", place: "慕尼黑" },
    { mark: "1:53.43", holder: "娜杰日达·奥利扎连科", country: "URS", date: "1980-07-27", meet: "奥运会", place: "莫斯科", note: "前世界纪录；奥运决赛改写" },
    { mark: "1:53.70", holder: "奥德丽·韦罗", country: "SUI", date: "2026-08-27", meet: "钻石联赛", place: "苏黎世", note: "历史第三快；瑞士纪录；钻石联赛总决赛" },
    { mark: "1:53.80", holder: "奥德丽·韦罗", country: "SUI", date: "2026-06-28", meet: "钻石联赛", place: "巴黎", note: "瑞士纪录（前）" },
    { mark: "1:53.98", holder: "奥德丽·韦罗", country: "SUI", date: "2026-06-07", meet: "钻石联赛", place: "斯德哥尔摩", note: "瑞士纪录（前）；同场霍奇金森1:54.33" },
    { mark: "1:54.01", holder: "帕梅拉·耶利莫", country: "KEN", date: "2008-08-29", meet: "黄金联赛", place: "苏黎世", note: "肯尼亚纪录" },
    { mark: "1:54.25", holder: "卡斯特尔·塞门亚", country: "RSA", date: "2018-06-30", meet: "钻石联赛", place: "巴黎", note: "非洲纪录" },
    { mark: "1:54.33", holder: "基利·霍奇金森", country: "GBR", date: "2026-06-07", meet: "钻石联赛", place: "斯德哥尔摩", note: "英国纪录；同场负于韦罗" },
    { mark: "1:54.44", holder: "安娜·菲德利亚·基罗特", country: "CUB", date: "1989-09-09", place: "巴塞罗那", note: "古巴纪录" },
    { mark: "1:54.45", holder: "奥德丽·韦罗", country: "SUI", date: "2026-06-16", place: "俄斯特拉发", note: "瑞士纪录（前）" },
    { mark: "1:54.60", holder: "卡斯特尔·塞门亚", country: "RSA", date: "2018-07-20", meet: "钻石联赛", place: "摩纳哥" },
    { mark: "1:54.61", holder: "基利·霍奇金森", country: "GBR", date: "2024-07-20", meet: "钻石联赛", place: "伦敦", note: "英国纪录（前）" },
    { mark: "1:54.62", holder: "莉莲·奥迪拉", country: "KEN", date: "2025-09-21", meet: "世锦赛", place: "东京", note: "夺冠成绩；肯尼亚纪录" },
    { mark: "1:54.68", holder: "雅尔米拉·克拉托赫维洛娃", country: "TCH", date: "1983-08-09", meet: "世锦赛", place: "赫尔辛基" },
    { mark: "1:54.71", holder: "费姆克·布勒德斯-博尔", country: "NED", date: "2026-08-27", meet: "钻石联赛", place: "苏黎世", note: "荷兰纪录" },
    { mark: "1:54.74", holder: "基利·霍奇金森", country: "GBR", date: "2025-08-16", meet: "钻石联赛", place: "霍茹夫（波兰）" },
    { mark: "1:54.75", holder: "奥德丽·韦罗", country: "SUI", date: "2026-09-05", meet: "钻石联赛", place: "布鲁塞尔" },
    { mark: "1:54.77", holder: "卡斯特尔·塞门亚", country: "RSA", date: "2018-09-09", place: "俄斯特拉发" },
    { mark: "1:54.81", holder: "费姆克·布勒德斯-博尔", country: "NED", date: "2026-09-05", meet: "钻石联赛", place: "布鲁塞尔" },
    { mark: "1:54.81", holder: "奥德丽·韦罗", country: "SUI", date: "2026-08-14", place: "伯明翰" },
    { mark: "1:54.81", holder: "奥莉加·米涅耶娃", country: "URS", date: "1980-07-27", meet: "奥运会", place: "莫斯科" },
    { mark: "1:54.82", holder: "安娜·菲德利亚·基罗特", country: "CUB", date: "1997-08-24", place: "科伦" },
    { mark: "1:54.85", holder: "娜杰日达·奥利扎连科", country: "URS", date: "1980-06-12", place: "莫斯科" },
    { mark: "1:54.87", holder: "帕梅拉·耶利莫", country: "KEN", date: "2008-08-18", meet: "奥运会", place: "北京", note: "夺冠成绩；18岁，肯尼亚首枚女子中跑奥运金牌" },
    { mark: "1:54.90", holder: "乔治娅·亨特-贝尔", country: "GBR", date: "2025-09-21", meet: "世锦赛", place: "东京", note: "同场亚军；英国纪录" },
    { mark: "1:54.91", holder: "基利·霍奇金森", country: "GBR", date: "2025-09-21", meet: "世锦赛", place: "东京", note: "同场季军" },
    { mark: "1:54.94", holder: "塔季扬娜·卡赞金娜", country: "URS", date: "1976-07-26", meet: "奥运会", place: "蒙特利尔", note: "前世界纪录；蒙特利尔决赛改写" },
    { mark: "1:54.97", holder: "阿辛·穆", country: "USA", date: "2023-09-17", meet: "钻石联赛", place: "尤金" },
    { mark: "1:54.97", holder: "帕梅拉·耶利莫", country: "KEN", date: "2008-07-18", meet: "超级大奖赛", place: "巴黎" },
    { mark: "1:54.98", holder: "卡斯特尔·塞门亚", country: "RSA", date: "2019-05-03", meet: "钻石联赛", place: "多哈" },
    { mark: "1:54.99", holder: "帕梅拉·耶利莫", country: "KEN", date: "2008-06-01", meet: "黄金联赛", place: "柏林" },
    { mark: "1:55.01", holder: "基利·霍奇金森", country: "GBR", date: "2026-08-14", place: "伯明翰" },
    { mark: "1:55.03", holder: "乔治娅·亨特-贝尔", country: "GBR", date: "2026-08-27", meet: "钻石联赛", place: "苏黎世" },
    { mark: "1:55.04", holder: "阿辛·穆", country: "USA", date: "2021-08-21", meet: "钻石联赛", place: "尤金" },
    { mark: "1:55.04", holder: "雅尔米拉·克拉托赫维洛娃", country: "TCH", date: "1983-08-23", place: "奥斯陆" },
    { mark: "1:55.05", holder: "多伊娜·梅林特", country: "ROU", date: "1982-08-01", place: "布加勒斯特", note: "罗马尼亚纪录" },
    { mark: "1:55.16", holder: "帕梅拉·耶利莫", country: "KEN", date: "2008-09-05", meet: "黄金联赛", place: "布鲁塞尔" },
    { mark: "1:55.16", holder: "卡斯特尔·塞门亚", country: "RSA", date: "2017-08-13", meet: "世锦赛", place: "伦敦", note: "夺冠成绩" },
    { mark: "1:55.19", holder: "玛丽亚·穆托拉", country: "MOZ", date: "1994-08-17", place: "苏黎世", note: "莫桑比克纪录" },
    { mark: "1:55.19", holder: "基利·霍奇金森", country: "GBR", date: "2023-09-17", meet: "钻石联赛", place: "尤金" },
    { mark: "1:55.19", holder: "约兰达·切尔普拉克", country: "SLO", date: "2002-07-20", place: "海斯登-佐尔德（比利时）" },
    { mark: "1:55.21", holder: "阿辛·穆", country: "USA", date: "2021-08-03", meet: "奥运会", place: "东京" },
    { mark: "1:55.26", holder: "西格伦·沃达尔斯", country: "GDR", date: "1987-08-31", meet: "世锦赛", place: "罗马", note: "夺冠成绩" },
    { mark: "1:55.27", holder: "卡斯特尔·塞门亚", country: "RSA", date: "2017-07-21", meet: "钻石联赛", place: "摩纳哥" },
    { mark: "1:55.27", holder: "卡斯特尔·塞门亚", country: "RSA", date: "2018-08-30", meet: "钻石联赛", place: "苏黎世" },
    { mark: "1:55.28", holder: "卡斯特尔·塞门亚", country: "RSA", date: "2016-08-20", meet: "奥运会", place: "里约热内卢", note: "夺冠成绩" },
    { mark: "1:55.29", holder: "玛丽亚·穆托拉", country: "MOZ", date: "1997-08-24", place: "科伦" },
    { mark: "1:55.32", holder: "克里斯蒂娜·沃赫特尔", country: "GDR", date: "1987-08-31", meet: "世锦赛", place: "罗马", note: "同场亚军；与沃达尔斯包揽金银" },
    { mark: "1:55.33", holder: "卡斯特尔·塞门亚", country: "RSA", date: "2016-07-15", meet: "钻石联赛", place: "摩纳哥" },
    { mark: "1:55.33", holder: "奥德丽·韦罗", country: "SUI", date: "2026-08-21", meet: "钻石联赛", place: "洛桑", note: "瑞士纪录（前）" },
    { mark: "1:55.41", holder: "帕梅拉·耶利莫", country: "KEN", date: "2008-06-06", meet: "黄金联赛", place: "奥斯陆" },
    { mark: "1:55.41", holder: "奥莉加·米涅耶娃", country: "URS", date: "1982-09-08", place: "雅典" },
    { mark: "1:55.41", holder: "费姆克·布勒德斯-博尔", country: "NED", date: "2026-08-21", meet: "钻石联赛", place: "洛桑" },
    { mark: "1:55.42", holder: "尼科利娜·什特雷娃", country: "BUL", date: "1976-07-26", meet: "奥运会", place: "蒙特利尔", note: "同场亚军；保加利亚纪录" },
    { mark: "1:55.43", holder: "玛丽亚·穆托拉", country: "MOZ", date: "1993-08-17", meet: "世锦赛", place: "斯图加特", note: "夺冠成绩" },
    { mark: "1:55.45", holder: "卡斯特尔·塞门亚", country: "RSA", date: "2009-08-19", meet: "世锦赛", place: "柏林", note: "夺冠成绩；18岁首登世界之巅" },
    { mark: "1:55.46", holder: "塔季扬娜·普罗维多希娜", country: "URS", date: "1980-07-27", meet: "奥运会", place: "莫斯科" },
    { mark: "1:55.47", holder: "弗朗辛·尼永萨巴", country: "BDI", date: "2017-07-21", meet: "钻石联赛", place: "摩纳哥" },
    { mark: "1:55.54", holder: "埃伦·范兰根", country: "NED", date: "1992-08-03", meet: "奥运会", place: "巴塞罗那", note: "夺冠成绩；荷兰纪录" },
    { mark: "1:55.54", holder: "刘东", country: "CHN", date: "1993-09-09", place: "北京", note: "亚洲纪录兼中国纪录；七运会，悬置33年" },
    { mark: "1:55.54", holder: "费姆克·布勒德斯-博尔", country: "NED", date: "2026-08-14", place: "伯明翰" },
    { mark: "1:55.55", holder: "玛丽亚·穆托拉", country: "MOZ", date: "2003-07-19", place: "马德里" },
    { mark: "1:55.56", holder: "柳博芙·古林娜", country: "URS", date: "1987-08-31", meet: "世锦赛", place: "罗马" },
    { mark: "1:55.60", holder: "埃尔菲·津", country: "GDR", date: "1976-07-26", meet: "奥运会", place: "蒙特利尔", note: "同场季军" },
    { mark: "1:55.60", holder: "费姆克·布勒德斯-博尔", country: "NED", date: "2026-06-28", meet: "钻石联赛", place: "巴黎" },
    { mark: "1:55.61", holder: "杰玛·里基", country: "GBR", date: "2024-07-20", meet: "钻石联赛", place: "伦敦" },
    { mark: "1:55.61", holder: "阿吉·威尔逊", country: "USA", date: "2017-07-21", meet: "钻石联赛", place: "摩纳哥" },
    { mark: "1:55.62", holder: "玛丽亚·穆托拉", country: "MOZ", date: "1993-08-04", place: "苏黎世" },
    { mark: "1:55.65", holder: "阿奈丝·布尔古安", country: "FRA", date: "2026-06-28", meet: "钻石联赛", place: "巴黎" },
    { mark: "1:55.68", holder: "埃拉·科瓦奇", country: "ROU", date: "1985-06-02", place: "布加勒斯特" },
    { mark: "1:55.68", holder: "卡斯特尔·塞门亚", country: "RSA", date: "2016-09-03", place: "柏林" },
    { mark: "1:55.69", holder: "帕梅拉·耶利莫", country: "KEN", date: "2008-07-11", meet: "黄金联赛", place: "罗马" },
    { mark: "1:55.69", holder: "基利·霍奇金森", country: "GBR", date: "2025-08-20", meet: "钻石联赛", place: "洛桑" },
    { mark: "1:55.69", holder: "伊琳娜·波佳洛夫斯卡娅", country: "URS", date: "1984-06-22", place: "基辅" },
  ],

  topListNote:
    "门槛取1:55.69——合规成绩全录（含并列）共74条。榜首仍被1983年包揽：克拉托赫维洛娃的1:53.28与奥利扎连科的1:53.43之后，是韦罗2026年的1:53.70——43年来人类第三次跨进1:54。塞门亚占十一席、耶利莫七席、穆托拉五席；2026年一个赛季贡献16条，其中韦罗一人七条、布勒德斯-博尔五条，是女子径赛史上最陡的一次年度膨胀。亚洲纪录暨中国纪录刘东的1:55.54（1993年七运会）卡在门槛内第60位。",

  history: [
    {
      heading: "被取消的半个世纪：1928与拉德克",
      paragraphs: [
        "1928年阿姆斯特丹，女子800米首次进入奥运会。德国的莉娜·拉德克以2:16.8夺冠，日本的人见绢枝以2:17.6摘银——亚洲女子第一枚奥运田径奖牌。但赛后几名选手倒在跑道边的照片引发轩然大波，「女子不宜中跑」的论调占据上风，这个项目随即被逐出奥运，一去三十二年。1960年罗马才恢复，苏联的柳德米拉·舍夫佐娃以2:04.3（电计时2:04.5）与澳大利亚的布伦达·琼斯同秒冲线，靠终点摄影分出金银。",
        "电计时时代的第一步在1971年：7月11日斯图加特，希尔德加德·法尔克1:58.45——女子第一次跑进两分钟。1976年蒙特利尔，卡赞金娜在决赛中改写（1:54.94）并同届加冕1500米；1980年莫斯科，奥利扎连科把纪录推到1:53.43，苏联包揽领奖台——那是一个体系的巅峰。",
      ],
    },
    {
      heading: "1:53.28：慕尼黑的三十秒",
      paragraphs: [
        "1983年7月26日，慕尼黑，32岁的雅尔米拉·克拉托赫维洛娃跑出1:53.28。两周后的赫尔辛基首届世锦赛，她再夺800米金牌（1:54.68）与400米银牌——一个赛季、两个项目、一个世界纪录。四十三年过去，1:53.28纹丝不动：它是人类径赛现存最古老的世界纪录，比男子400米的43.03（2016）还老六年。",
        "追得最近的是1:53.43——奥利扎连科自己在1980年留下的第二名成绩。此后的1:54俱乐部里，苏联与东德的体系（米涅耶娃、沃达尔斯、沃赫特尔）、古巴的基罗特（1:54.44，1989）、耶利莫2008年的1:54.01、塞门亚2018年的1:54.25，一代代人都在同一道门前止步。",
      ],
    },
    {
      heading: "塞门亚的年代与递补的领奖台",
      paragraphs: [
        "2009年柏林，18岁的卡斯特尔·塞门亚以1:55.45首登世界之巅，性别资格争议随之而来；此后她两夺奥运（2016、2018世锦赛1:55.16）、2018年跑出1:54.25（非洲纪录），直至2019年世界田联的睾酮新规把她挡在门外。2011年大邱与2012年伦敦的冠军原为俄罗斯的萨维诺娃，2017年因生物护照违规被剥夺，塞门亚递补两金——伦敦决赛的1:57.23与递补序列，成了那个年代最复杂的注脚。",
        "同期群星璀璨：穆托拉（2000年悉尼、2003年巴黎世锦赛）、霍尔姆斯（2004年雅典，同届1500米双金）、耶利莫（2008年北京，1:54.87）、穆（2021年东京，1:55.21）、霍奇金森（2024年巴黎，1:56.72）——奥运冠军年年有，但1:53的门始终关着。",
      ],
    },
    {
      heading: "2025–2026：奥迪拉、韦罗与新的1:53",
      paragraphs: [
        "2025年9月21日，东京世锦赛决赛：肯尼亚的莉莲·奥迪拉1:54.62夺冠，亨特-贝尔1:54.90、霍奇金森1:54.91——世锦赛历史上第一次三人同破1:55。第六名是20岁的瑞士人奥德丽·韦罗（1:56.17），没人想到这只是序章：2026年6月7日斯德哥尔摩1:53.98，6月16日俄斯特拉发1:54.45，6月28日巴黎1:53.80，8月14日伯明翰1:54.81，8月27日苏黎世1:53.70——一个赛季四次改写瑞士纪录，历史第三快。同期的荷兰人布勒德斯-博尔（1:54.71）也把范兰根保持了三十四年的荷兰纪录推进了0.83秒。",
        "亚洲的刻度停在1993年：刘东的1:55.54既是全国纪录也是亚洲纪录，「马家军」全运会的产物悬置33年。亚运赛场上，穆卡舍娃的1:59.02（2014年仁川）是唯一接近2分钟的成绩；王春雨（2018年雅加达）与吴洪娇（2026年名古屋）为中国拿下两金，但2:01开外的夺冠成绩，丈量的是亚洲与世界之间整整一个档次的距离。",
      ],
    },
  ],
  sources: [
    {
      label: "Wikipedia：Women's 800 metres world record progression",
      url: "https://en.wikipedia.org/wiki/Women%27s_800_metres_world_record_progression",
    },
    {
      label: "Wikipedia：800 metres at the World Championships in Athletics",
      url: "https://en.wikipedia.org/wiki/800_metres_at_the_World_Championships_in_Athletics",
    },
    {
      label: "Alltime-Athletics：女子800米历史成绩总榜（Peter Larsson 维护）",
      url: "http://www.alltime-athletics.com/w_800ok.htm",
    },
    {
      label: "GBR Athletics：亚运会 1951–2002 田径奖牌总表",
      url: "https://www.gbrathletics.com/ic/asg.htm",
    },
  ],
};
