import type { AthleticsEvent } from "@/lib/types";

/**
 * 女子 200 米（室外）世界纪录演进
 * 数据截至：2026年10月
 *
 * 收录口径（宁缺毋滥）：
 *  - 电计时口径自 1968 起收录（史文斯卡 22.58，手计时 22.5）；
 *    1977 年起电计时成为唯一口径，此前以手计时为正式纪录；
 *    手计时时代（1935–1968）的沿革未能核实到可靠来源，暂缺；
 *  - 1970 年中国台北的纪政以手计时 22.4（电计时 22.62）改写世界纪录，
 *    电计时口径未及改写——史实收录于演进注记与历史节；
 *  - 21.34 悬置三十八年，与 10.49 同出自格里菲斯-乔伊纳的 1988 年；
 *  - 历史最好成绩榜扩至前五十：21.80 以内合规成绩全录（58 条，含并列）；
 *  - 亚运会：1994 年及以前各届未能双源核实，暂缺。
 */
export const womens200m: AthleticsEvent = {
  slug: "womens-200m",
  group: "track",
  markKind: "time",
  gender: "women",
  venue: "outdoor",
  name: "女子 200 米",
  summary:
    "21.34——1988年9月29日的汉城，格里菲斯-乔伊纳先用半决赛21.56、再以决赛21.34两度改写世界纪录，三十八年悬置至今。东德王朝留下21.71俱乐部，牙买加新一代正逐格逼近；而亚洲的刻度，仍停在1997年李雪梅的22.01。",
  dataAsOf: "2026年10月",
  progression: [
    { mark: "22.58", holder: "Irena Szewińska", country: "POL", date: "1968-10-18", meet: "奥运会", place: "墨西哥城", wind: "+2.0", note: "电计时口径的起点；手计时22.5为当时正式纪录；高原（约2240米）；顺风恰在合规上限" },
    { mark: "22.40", holder: "Renate Stecher", country: "GDR", date: "1972-09-07", meet: "奥运会", place: "慕尼黑", wind: "+1.1", note: "手计时同为22.4；此前1970年，中国台北的纪政曾以手计时22.4（电计时22.62）改写世界纪录" },
    { mark: "22.38", holder: "Renate Stecher", country: "GDR", date: "1973-07-21", place: "德累斯顿", wind: "+1.6" },
    { mark: "22.21", holder: "Irena Szewińska", country: "POL", date: "1974-06-13", place: "波茨坦", wind: "+1.9", note: "直至1977年电计时成为唯一口径，仍是当时最快的电计时成绩" },
    { mark: "22.06", holder: "Marita Koch", country: "GDR", date: "1978-05-28", place: "埃尔福特", wind: "+1.2" },
    { mark: "22.02", holder: "Marita Koch", country: "GDR", date: "1979-06-03", place: "莱比锡", wind: "-1.4", note: "逆风1.4米/秒" },
    { mark: "21.71", holder: "Marita Koch", country: "GDR", date: "1979-06-10", place: "卡尔-马克思城", wind: "+0.7", note: "七天后改写自己的22.02；此后科赫（1984）、德雷克斯勒（1986两度）三次追平，保持至1988年" },
    { mark: "21.56", holder: "Florence Griffith-Joyner", country: "USA", date: "1988-09-29", meet: "奥运会半决赛", place: "汉城", wind: "+1.7", flags: ["sf"], note: "决赛前数小时的半决赛先破21.71" },
    { mark: "21.34", holder: "Florence Griffith-Joyner", country: "USA", date: "1988-09-29", meet: "奥运会决赛", place: "汉城", wind: "+1.3", note: "现世界纪录；一天之内两破，与她的10.49同悬至今" },
  ],

  asianRecord: {
    mark: "22.01", holder: "Li Xuemei", country: "CHN",
    date: "1997-10-22", meet: "第八届全运会", place: "上海", wind: "0.0",
    note: "同时为中国纪录；悬置二十九年——亚洲女子200米的下一步，仍在等待",
  },
  chineseRecord: {
    mark: "22.01", holder: "Li Xuemei", country: "CHN",
    date: "1997-10-22", meet: "第八届全运会", place: "上海", wind: "0.0",
    note: "与10.79出自同一届全运会：1997年10月的上海，四天之内两项全国定格",
  },

  topList: [
    { mark: "21.34", holder: "Florence Griffith-Joyner", country: "USA", date: "1988-09-29", meet: "奥运会决赛", place: "汉城", wind: "+1.3", note: "现世界纪录" },
    { mark: "21.41", holder: "Shericka Jackson", country: "JAM", date: "2023-08-25", meet: "世锦赛", place: "布达佩斯", wind: "+0.1", note: "历史第二快；卫冕" },
    { mark: "21.45", holder: "Shericka Jackson", country: "JAM", date: "2022-07-21", meet: "世锦赛", place: "尤金", wind: "+0.6", note: "夺冠成绩" },
    { mark: "21.47", holder: "Melissa Jefferson-Wooden", country: "USA", date: "2026-09-13", meet: "世界田径终极锦标赛", place: "布达佩斯", wind: "-0.6", note: "历史第四快；首届终极锦标赛夺冠" },
    { mark: "21.48", holder: "Shericka Jackson", country: "JAM", date: "2023-09-08", meet: "钻石联赛", place: "布鲁塞尔", wind: "+0.2" },
    { mark: "21.51", holder: "Julien Alfred", country: "LCA", date: "2026-07-10", meet: "钻石联赛", place: "摩纳哥", wind: "+0.9", note: "历史第五快" },
    { mark: "21.53", holder: "Elaine Thompson-Herah", country: "JAM", date: "2021-08-03", meet: "奥运会", place: "东京", wind: "+0.8", note: "历史第七快；夺冠成绩" },
    { mark: "21.55", holder: "Shericka Jackson", country: "JAM", date: "2022-06-26", meet: "牙买加锦标赛", place: "金斯顿", wind: "0.0" },
    { mark: "21.56", holder: "Florence Griffith-Joyner", country: "USA", date: "1988-09-29", meet: "奥运会（半决赛）", place: "汉城", wind: "+1.7", flags: ["sf"], note: "同日半决赛，先破21.71的世界纪录" },
    { mark: "21.57", holder: "Shericka Jackson", country: "JAM", date: "2023-09-17", meet: "钻石联赛", place: "尤金", wind: "+0.3" },
    { mark: "21.60", holder: "Gabrielle Thomas", country: "USA", date: "2023-07-09", meet: "钻石联赛", place: "尤金", wind: "-0.4" },
    { mark: "21.61", holder: "Gabrielle Thomas", country: "USA", date: "2021-06-26", meet: "美国奥运选拔赛", place: "尤金", wind: "+1.3" },
    { mark: "21.62", holder: "Marion Jones", country: "USA", date: "1998-09-11", meet: "世界杯赛", place: "约翰内斯堡", wind: "-0.6", note: "高原约1750米；琼斯2000年9月后的成绩因兴奋剂被取消，此前成绩依规保留" },
    { mark: "21.63", holder: "Dafne Schippers", country: "NED", date: "2015-08-28", meet: "世锦赛", place: "北京", wind: "+0.2", note: "欧洲纪录；夺冠成绩" },
    { mark: "21.64", holder: "Merlene Ottey", country: "JAM", date: "1991-09-13", meet: "纪念范达米国际赛", place: "布鲁塞尔", wind: "+0.8" },
    { mark: "21.66", holder: "Elaine Thompson-Herah", country: "JAM", date: "2021-08-02", meet: "奥运会（半决赛）", place: "东京", wind: "+0.3", flags: ["sf"] },
    { mark: "21.66", holder: "Merlene Ottey", country: "JAM", date: "1990-08-15", meet: "国际田径赛", place: "苏黎世", wind: "-1.0" },
    { mark: "21.66", holder: "Elaine Thompson-Herah", country: "JAM", date: "2015-08-28", meet: "世锦赛", place: "北京", wind: "+0.2", note: "同场负于斯基珀斯" },
    { mark: "21.67", holder: "Shericka Jackson", country: "JAM", date: "2022-07-19", meet: "世锦赛（半决赛）", place: "尤金", wind: "+2.0", flags: ["sf"], note: "顺风恰在合规上限" },
    { mark: "21.68", holder: "Melissa Jefferson-Wooden", country: "USA", date: "2025-09-19", meet: "世锦赛", place: "东京", wind: "-0.1", note: "夺冠成绩" },
    { mark: "21.69", holder: "Allyson Felix", country: "USA", date: "2012-06-30", meet: "美国奥运选拔赛", place: "尤金", wind: "+1.0" },
    { mark: "21.70", holder: "Gabrielle Thomas", country: "USA", date: "2026-06-06", place: "大学城（美国）", wind: "+0.7" },
    { mark: "21.71", holder: "Shericka Jackson", country: "JAM", date: "2023-07-09", meet: "牙买加锦标赛", place: "金斯顿", wind: "-0.5" },
    { mark: "21.71", holder: "Marita Koch", country: "GDR", date: "1979-06-10", place: "卡尔-马克思城", wind: "+0.7", note: "其后科赫1984、德雷克斯勒1986两度追平" },
    { mark: "21.71", holder: "Julien Alfred", country: "LCA", date: "2025-07-19", meet: "钻石联赛", place: "伦敦", wind: "-0.6", note: "21.71俱乐部第六人" },
    { mark: "21.71", holder: "Marita Koch", country: "GDR", date: "1984-07-21", place: "波茨坦", wind: "+0.3" },
    { mark: "21.71", holder: "Heike Drechsler", country: "GER", date: "1986-06-29", place: "耶拿", wind: "+1.2" },
    { mark: "21.71", holder: "Heike Drechsler", country: "GER", date: "1986-08-29", place: "斯图加特", wind: "-0.8" },
    { mark: "21.72", holder: "Gwen Torrence", country: "USA", date: "1992-08-05", meet: "奥运会（半决赛）", place: "巴塞罗那", wind: "-0.1", flags: ["sf"] },
    { mark: "21.72", holder: "Grace Jackson", country: "JAM", date: "1988-09-29", meet: "奥运会", place: "汉城", wind: "+1.3", note: "同场负于格里菲斯-乔伊纳" },
    { mark: "21.74", holder: "Marlies Göhr", country: "GDR", date: "1984-06-03", place: "埃尔福特", wind: "+0.4" },
    { mark: "21.74", holder: "Silke Möller", country: "GER", date: "1987-09-03", meet: "世锦赛", place: "罗马", wind: "+1.2", note: "夺冠成绩" },
    { mark: "21.74", holder: "Veronica Campbell-Brown", country: "JAM", date: "2008-08-21", meet: "奥运会", place: "北京", wind: "+0.6", note: "卫冕奥运冠军" },
    { mark: "21.74", holder: "Shaunae Miller-Uibo", country: "BAH", date: "2019-08-29", meet: "钻石联赛", place: "苏黎世", wind: "-0.4" },
    { mark: "21.75", holder: "Juliet Cuthbert", country: "JAM", date: "1992-08-05", meet: "奥运会（半决赛）", place: "巴塞罗那", wind: "-0.1", flags: ["sf"] },
    { mark: "21.76", holder: "Marita Koch", country: "GDR", date: "1982-07-03", place: "德累斯顿", wind: "+0.3" },
    { mark: "21.76", holder: "Adaejah Hodge", country: "IVB", date: "2026-07-10", meet: "钻石联赛", place: "摩纳哥", wind: "+0.9", note: "英属维尔京群岛" },
    { mark: "21.76", holder: "Marion Jones", country: "USA", date: "1997-08-13", meet: "国际田径赛", place: "苏黎世", wind: "-0.8" },
    { mark: "21.76", holder: "Florence Griffith-Joyner", country: "USA", date: "1988-09-28", meet: "奥运会（1/4决赛）", place: "汉城", wind: "+0.7", flags: ["h"] },
    { mark: "21.77", holder: "Merlene Ottey", country: "JAM", date: "1993-08-07", meet: "国际田径赛", place: "摩纳哥", wind: "+1.0" },
    { mark: "21.77", holder: "Gabrielle Thomas", country: "USA", date: "2026-09-13", meet: "世界田径终极锦标赛", place: "布达佩斯", wind: "-0.6", note: "同场负于杰斐逊-伍登" },
    { mark: "21.77", holder: "Gwen Torrence", country: "USA", date: "1995-08-18", meet: "国际田径赛", place: "科隆", wind: "-0.3" },
    { mark: "21.77", holder: "Florence Griffith-Joyner", country: "USA", date: "1988-07-22", meet: "美国奥运选拔赛（1/4决赛）", place: "印第安纳波利斯", wind: "-0.1", flags: ["h"] },
    { mark: "21.77", holder: "Abby Steiner", country: "USA", date: "2022-06-26", meet: "美国锦标赛", place: "尤金", wind: "-0.3" },
    { mark: "21.77", holder: "Tori Bowie", country: "USA", date: "2017-05-27", meet: "钻石联赛", place: "尤金", wind: "+1.5" },
    { mark: "21.77", holder: "Inger Miller", country: "USA", date: "1999-08-27", meet: "世锦赛", place: "塞维利亚", wind: "+0.6", note: "夺冠成绩" },
    { mark: "21.78", holder: "Christine Mboma", country: "NAM", date: "2021-09-09", meet: "钻石联赛", place: "苏黎世", wind: "+0.6" },
    { mark: "21.78", holder: "Marita Koch", country: "GDR", date: "1985-08-11", place: "莱比锡", wind: "-1.3" },
    { mark: "21.78", holder: "Elaine Thompson-Herah", country: "JAM", date: "2016-08-17", meet: "奥运会", place: "里约热内卢", wind: "-0.1", note: "夺冠成绩；当届100/200双金" },
    { mark: "21.78", holder: "Gabrielle Thomas", country: "USA", date: "2024-06-28", meet: "美国奥运选拔赛（半决赛）", place: "尤金", wind: "+1.4", flags: ["sf"] },
    { mark: "21.79", holder: "Julien Alfred", country: "LCA", date: "2026-09-04", meet: "钻石联赛", place: "布鲁塞尔", wind: "+0.1" },
    { mark: "21.79", holder: "Silke Möller", country: "GER", date: "1987-08-22", place: "波茨坦", wind: "+1.7" },
    { mark: "21.79", holder: "Shelly-Ann Fraser-Pryce", country: "JAM", date: "2021-06-27", meet: "牙买加锦标赛", place: "金斯顿", wind: "+0.8" },
    { mark: "21.80", holder: "Shericka Jackson", country: "JAM", date: "2022-09-08", meet: "钻石联赛", place: "苏黎世", wind: "-0.9" },
    { mark: "21.80", holder: "Merlene Ottey", country: "JAM", date: "1990-07-10", meet: "国际田径赛", place: "尼斯", wind: "-1.1" },
    { mark: "21.80", holder: "Abby Steiner", country: "USA", date: "2022-06-11", place: "尤金", wind: "+1.3" },
    { mark: "21.80", holder: "Marion Jones", country: "USA", date: "1998-07-20", place: "尤宁代尔（美国）", wind: "+0.4" },
    { mark: "21.80", holder: "Abby Steiner", country: "USA", date: "2022-06-26", meet: "美国锦标赛（半决赛）", place: "尤金", wind: "+0.9", flags: ["sf"] },
  ],
  topListTitle: "前五十",
  topListNote:
    "第50位的成绩为21.79——21.80以内全录共58条。杰克逊一人占九席、汤普森-赫拉四席、托马斯五席；历史前七除21.34外全部出自2021年之后，21.41（2023）与21.47（2026）把「仅次于21.34」的档位重新排过。21.71俱乐部六条成绩分属四人：科赫两条、德雷克斯勒两条、杰克逊与阿尔弗雷德各一。琼斯的四席全部出自1997–1998年，她2000年9月之后的成绩因兴奋剂被取消，此前成绩依规保留。亚洲与中国的纪录李雪梅22.01（1997）距门槛0.21秒；1984年奥运冠军布里斯科的21.81，恰好被挡在门外0.01秒。",

  history: [
    {
      heading: "东德王朝与纪政的插曲",
      paragraphs: [
        "1970年7月12日，慕尼黑，中国台北的纪政跑出手计时22.4（电计时22.62）——她成为那一代最接近世界之巅的亚洲面孔，这项手计时纪录直到1972年才被施特歇尔的22.4（电计时22.40）追平并按电计时口径改写。1972年9月7日的奥运决赛，施特歇尔以22.40夺冠，东德王朝自此接管这个项目：22.38（1973）、22.21（史文斯卡，1974）、22.06与22.02（科赫，1978–1979），直到1979年6月10日，卡尔-马克思城，科赫把纪录砍到21.71。",
        "21.71此后被自家人追了三次：科赫本人1984年、德雷克斯勒1986年两度——九年之间无人更快。1977年起电计时成为唯一口径，科赫的21.71是那个口径下第一项「满分」的世界纪录，也是女子径赛史上最长寿的刻度之一。",
      ],
    },
    {
      heading: "汉城一夜：21.56 与 21.34",
      paragraphs: [
        "1988年9月29日，汉城，同一天的两枪。半决赛21.56（+1.7），先把科赫的21.71送进历史；数小时后的决赛，21.34（+1.3）——格里菲斯-乔伊纳在一届奥运会上把200米世界纪录连破两次，就像四天前她把10.49留在百米牌上一样。两串数字悬置至今：10.49三十八年，21.34三十八年。",
        "最接近的一次是2023年布达佩斯，牙买加的谢莉卡·杰克逊以21.41夺冠——历史第二快，仍差0.07秒。与男子那边19.19与19.26之间的缝隙，恰好一样宽。",
      ],
    },
    {
      heading: "牙买加的接力棒",
      paragraphs: [
        "2008年北京，维罗尼卡·坎贝尔-布朗21.74卫冕；2012年伦敦，三届亚军的阿利森·费利克斯终于以21.88戴上金牌；2016年里约，伊莱恩·汤普森21.78完成100/200双金。2021年东京的雨夜里，汤普森-赫拉跑出21.53——历史第七快，双卫冕；2024年巴黎，哈佛出身的加比·托马斯21.83夺金，把美国队重新带回顶格。",
        "然后是新一代的冲刺：2022尤金、2023布达佩斯，杰克逊两届世锦赛21.45、21.41，把历史第二、第三快都写在自己名下；2025年东京，杰斐逊-伍登21.68登顶；2026年她又在首届世界田径终极锦标赛跑出21.47（历史第四快），圣卢西亚的阿尔弗雷德则以21.51（历史第五快）紧随其后。21.34之后的三十八年，榜单的前排第一次如此拥挤。",
      ],
    },
    {
      heading: "亚洲刻度：李雪梅的 22.01",
      paragraphs: [
        "1997年10月22日，上海，第八届全运会——李雪梅在四天前的百米跑出10.79之后，又把200米定格在22.01（0.0）。亚洲纪录自此悬置二十九年：斯里兰卡的贾亚辛格2000年奥运会递补银牌22.28，是此后最接近的一次，仍差0.27秒。",
        "亚运会的领奖台丈量着另一种速度：1998年曼谷，达沙（Dharsha）22.48夺金并创下赛会纪录——这一站就是二十八年；2002年釜山印度人萨哈23.28、2006年多哈巴林的加斯拉23.19、2010年广州福岛千里23.62、2014年仁川哈萨克斯坦的萨夫罗诺娃23.02、2018年雅加达奥迪翁22.96（当届双金）。2023年杭州，新加坡的佩雷拉23.03拿下该国史上首枚亚运短跑金牌；2026年名古屋她以22.78卫冕，17岁的陈妤颉以22.93摘银——两天前她刚刚以11.06打破百米赛会纪录。亚洲女子200米的下一步，正从她们脚下开始。",
      ],
    },
  ],
  sources: [
    {
      label: "Wikipedia：World record progression 200 metres women",
      url: "https://en.wikipedia.org/wiki/World_record_progression_200_metres_women",
    },
    {
      label: "World Athletics 官方纪录",
      url: "https://worldathletics.org/records/by-category/world-records",
    },
    {
      label: "Alltime-Athletics：女子200米历史成绩总榜（Peter Larsson 维护）",
      url: "http://www.alltime-athletics.com/w_200ok.htm",
    },
    {
      label: "GBR Athletics：亚运会 1951–2002 田径奖牌总表",
      url: "https://www.gbrathletics.com/ic/asg.htm",
    },
  ],
};
