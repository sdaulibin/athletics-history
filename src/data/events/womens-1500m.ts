import type { AthleticsEvent } from "@/lib/types";

/**
 * 女子 1500 米（室外）
 * 数据截至：2026年10月
 *
 * 收录口径（宁缺毋滥）：
 *  - 世界纪录演进收1967年IAAF首次认可起（史密斯），至基皮耶贡3:48.68；
 *  - 历史最好成绩榜以 3:55.16 为门槛：合规成绩全录（含并列）共 71 条，
 *    英里中途成绩（+，本榜未收，女子共 116 条）与高原成绩（A）按原表标注口径；
 *  - 1993七运会/1997八运会中国选手成批出现的成绩保留并注明赛会。
 */
export const womens1500m: AthleticsEvent = {
  slug: "womens-1500m",
  group: "track",
  markKind: "time",
  gender: "women",
  venue: "outdoor",
  name: "女子 1500 米",
  summary:
    "3:48.68——2025年7月5日的尤金，费斯·基皮耶贡把女子1500米的世界纪录推进到前人难以想象的深处，而她改写它只用了一个夏天接一个夏天。三圈半是女子径赛里战术与耐力咬合最紧的距离：位置、节奏、最后一圈的胆量，缺一不可。从卡赞金娜与苏联时代的独白，到1993年北京曲云霞3:50.46悬置22年的东方回响，再到基皮耶贡、哈桑与特斯盖在黄金十年的轮番冲击——这条纪录的每一次易主，都伴随着一个时代的整体提速。",
  dataAsOf: "2026年10月",
  progression: [
    { mark: "4:17.3", holder: "安妮·史密斯", country: "GBR", date: "1967-06-03", place: "奇西克（英国）", note: "IAAAF首次认可的女子1500米世界纪录；+为英里中途成绩——彼时纪录常在英里赛中顺路诞生" },
    { mark: "4:15.6", holder: "玛丽亚·戈默斯", country: "NED", date: "1967-10-24", place: "锡塔德（荷兰）" },
    { mark: "4:12.4", holder: "保利娜·皮尼", country: "ITA", date: "1969-07-02", place: "米兰" },
    { mark: "4:10.77", holder: "雅罗斯拉娃·叶赫利奇科娃", country: "TCH", date: "1969-09-20", meet: "欧洲锦标赛", place: "雅典", note: "电计时4:10.77与手计时4:10.7并记" },
    { mark: "4:09.62", holder: "卡琳·伯内莱特", country: "GDR", date: "1971-08-15", meet: "欧洲锦标赛", place: "赫尔辛基", note: "东德人的欧洲锦标赛夺冠成绩" },
    { mark: "4:06.9", holder: "柳德米拉·布拉金娜", country: "URS", date: "1972-07-18", place: "莫斯科" },
    { mark: "4:06.47", holder: "柳德米拉·布拉金娜", country: "URS", date: "1972-09-04", meet: "奥运会", place: "慕尼黑", note: "奥运一届三破的第一步（预赛）" },
    { mark: "4:05.07", holder: "柳德米拉·布拉金娜", country: "URS", date: "1972-09-07", meet: "奥运会", place: "慕尼黑", note: "第二步（半决赛）" },
    { mark: "4:01.38", holder: "柳德米拉·布拉金娜", country: "URS", date: "1972-09-09", meet: "奥运会", place: "慕尼黑", note: "第三步（决赛）——单届奥运会三破世界纪录，悬置四年" },
    { mark: "3:56.0", holder: "塔季扬娜·卡赞金娜", country: "URS", date: "1976-06-28", place: "波多利斯克（俄罗斯）", note: "首次闯进3:56；五周后她将在蒙特利尔加冕奥运冠军" },
    { mark: "3:55.0", holder: "塔季扬娜·卡赞金娜", country: "URS", date: "1980-07-06", place: "莫斯科", note: "电计时口径按当日规则记为3:55.0" },
    { mark: "3:52.47", holder: "塔季扬娜·卡赞金娜", country: "URS", date: "1980-08-13", place: "苏黎世", note: "苏联中跑黄金年代的封笔——悬置13年，是彼时最古老的世界纪录之一" },
    { mark: "3:50.46", holder: "曲云霞", country: "CHN", date: "1993-09-11", meet: "全运会", place: "北京", note: "七运会决赛；悬置22年，至今仍是亚洲纪录暨中国纪录——王军霞3:51.92同场居次" },
    { mark: "3:50.07", holder: "根泽贝·迪巴巴", country: "ETH", date: "2015-07-17", meet: "钻石联赛", place: "摩纳哥", note: "中断22年后的改写" },
    { mark: "3:49.11", holder: "费斯·基皮耶贡", country: "KEN", date: "2023-06-02", meet: "钻石联赛", place: "佛罗伦萨" },
    { mark: "3:49.04", holder: "费斯·基皮耶贡", country: "KEN", date: "2024-07-07", meet: "钻石联赛", place: "巴黎", note: "一年一破" },
    { mark: "3:48.68", holder: "费斯·基皮耶贡", country: "KEN", date: "2025-07-05", meet: "钻石联赛", place: "尤金", note: "现世界纪录；三年三破，累计把纪录推进1.39秒" },
  ],

  asianRecord: {
    mark: "3:50.46", holder: "曲云霞", country: "CHN",
    date: "1993-09-11", meet: "全运会", place: "北京",
    note: "马家军的核心成员之一；同场王军霞3:51.92，两人至今仍居历史总榜第七与第十五位。1997年之后，亚洲再无人跑进3:56",
  },
  chineseRecord: {
    mark: "3:50.46", holder: "曲云霞", country: "CHN",
    date: "1993-09-11", meet: "全运会", place: "北京",
    note: "与亚洲纪录同条。中国历史第二至第九位全部诞生于1993七运会与1997八运会：姜波3:50.98、郎营来3:51.34、王军霞3:51.92、尹丽丽3:53.91、兰丽新3:53.97（另有预赛3:55.01）、张玲3:54.52、董艳梅3:55.07——29年间无人撼动",
  },

  topList: [
    { mark: "3:48.68", holder: "费斯·基皮耶贡", country: "KEN", date: "2025-07-05", meet: "钻石联赛", place: "尤金", note: "现世界纪录" },
    { mark: "3:49.04", holder: "费斯·基皮耶贡", country: "KEN", date: "2024-07-07", meet: "钻石联赛", place: "巴黎", note: "前世界纪录" },
    { mark: "3:49.11", holder: "费斯·基皮耶贡", country: "KEN", date: "2023-06-02", meet: "钻石联赛", place: "佛罗伦萨", note: "前世界纪录" },
    { mark: "3:50.07", holder: "根泽贝·迪巴巴", country: "ETH", date: "2015-07-17", meet: "钻石联赛", place: "摩纳哥", note: "前世界纪录" },
    { mark: "3:50.30", holder: "古达夫·特斯盖", country: "ETH", date: "2024-04-20", meet: "钻石联赛", place: "厦门" },
    { mark: "3:50.37", holder: "费斯·基皮耶贡", country: "KEN", date: "2022-08-10", meet: "钻石联赛", place: "摩纳哥" },
    { mark: "3:50.46", holder: "曲云霞", country: "CHN", date: "1993-09-11", meet: "全运会", place: "北京", note: "前世界纪录，悬置22年；现亚洲纪录暨中国纪录" },
    { mark: "3:50.62", holder: "古达夫·特斯盖", country: "ETH", date: "2025-08-16", meet: "钻石联赛", place: "霍茹夫（波兰）" },
    { mark: "3:50.72", holder: "费斯·基皮耶贡", country: "KEN", date: "2023-09-16", meet: "钻石联赛", place: "尤金" },
    { mark: "3:50.83", holder: "杰西卡·赫尔", country: "AUS", date: "2024-07-07", meet: "钻石联赛", place: "巴黎", note: "澳大利亚纪录" },
    { mark: "3:50.98", holder: "姜波", country: "CHN", date: "1997-10-18", meet: "全运会", place: "上海", note: "八运会决赛" },
    { mark: "3:51.07", holder: "费斯·基皮耶贡", country: "KEN", date: "2021-07-09", meet: "钻石联赛", place: "摩纳哥" },
    { mark: "3:51.29", holder: "费斯·基皮耶贡", country: "KEN", date: "2024-08-10", meet: "奥运会", place: "巴黎", note: "奥运纪录" },
    { mark: "3:51.34", holder: "郎营来", country: "CHN", date: "1997-10-18", meet: "全运会", place: "上海", note: "同场亚军" },
    { mark: "3:51.92", holder: "王军霞", country: "CHN", date: "1993-09-11", meet: "全运会", place: "北京", note: "同场亚军" },
    { mark: "3:51.95", holder: "西凡·哈桑", country: "NED", date: "2019-10-05", meet: "世锦赛", place: "多哈", note: "锦标赛纪录，保持至今；同届加冕10000米——跨距离双金" },
    { mark: "3:52.15", holder: "费斯·基皮耶贡", country: "KEN", date: "2025-09-16", meet: "世锦赛", place: "东京", note: "世锦赛四连冠之战" },
    { mark: "3:52.47", holder: "塔季扬娜·卡赞金娜", country: "URS", date: "1980-08-13", place: "苏黎世", note: "前世界纪录；46年仍居历史第18位" },
    { mark: "3:52.56", holder: "杰西卡·赫尔", country: "AUS", date: "2024-08-10", meet: "奥运会", place: "巴黎", note: "同场亚军" },
    { mark: "3:52.59", holder: "费斯·基皮耶贡", country: "KEN", date: "2022-05-28", meet: "钻石联赛", place: "尤金" },
    { mark: "3:52.61", holder: "乔治娅·亨特-贝尔", country: "GBR", date: "2024-08-10", meet: "奥运会", place: "巴黎", note: "英国纪录；同场季军" },
    { mark: "3:52.67", holder: "杰西卡·赫尔", country: "AUS", date: "2025-07-05", meet: "钻石联赛", place: "尤金", note: "同场亚军——世界纪录之夜" },
    { mark: "3:52.75", holder: "迪里贝·韦尔特吉", country: "ETH", date: "2024-08-10", meet: "奥运会", place: "巴黎", note: "同场第4名" },
    { mark: "3:52.89", holder: "费斯·基皮耶贡", country: "KEN", date: "2024-08-30", meet: "钻石联赛", place: "罗马" },
    { mark: "3:52.96", holder: "费斯·基皮耶贡", country: "KEN", date: "2022-07-18", meet: "钻石联赛", place: "尤金" },
    { mark: "3:53.11", holder: "费斯·基皮耶贡", country: "KEN", date: "2021-08-06", meet: "奥运会", place: "东京", note: "前奥运纪录" },
    { mark: "3:53.22", holder: "比尔克·海洛姆", country: "ETH", date: "2024-04-20", meet: "钻石联赛", place: "厦门", note: "时年19岁" },
    { mark: "3:53.23", holder: "费斯·基皮耶贡", country: "KEN", date: "2021-08-21", meet: "钻石联赛", place: "尤金" },
    { mark: "3:53.37", holder: "劳拉·缪尔", country: "GBR", date: "2024-08-10", meet: "奥运会", place: "巴黎", note: "同场第5名——决赛前五名全部跑进3:54" },
    { mark: "3:53.60", holder: "西凡·哈桑", country: "NED", date: "2021-07-09", meet: "钻石联赛", place: "摩纳哥" },
    { mark: "3:53.63", holder: "西凡·哈桑", country: "NED", date: "2021-06-10", meet: "钻石联赛", place: "佛罗伦萨" },
    { mark: "3:53.75", holder: "迪里贝·韦尔特吉", country: "ETH", date: "2024-05-25", meet: "钻石联赛", place: "尤金" },
    { mark: "3:53.79", holder: "劳拉·缪尔", country: "GBR", date: "2024-07-07", meet: "钻石联赛", place: "巴黎" },
    { mark: "3:53.91", holder: "费斯·基皮耶贡", country: "KEN", date: "2021-06-10", meet: "钻石联赛", place: "佛罗伦萨" },
    { mark: "3:53.91", holder: "尹丽丽", country: "CHN", date: "1997-10-18", meet: "全运会", place: "上海" },
    { mark: "3:53.93", holder: "迪里贝·韦尔特吉", country: "ETH", date: "2023-09-16", meet: "钻石联赛", place: "尤金" },
    { mark: "3:53.96", holder: "保拉·伊万", country: "ROU", date: "1988-10-01", meet: "奥运会", place: "首尔", note: "奥运纪录，悬置38年至今" },
    { mark: "3:53.97", holder: "兰丽新", country: "CHN", date: "1997-10-18", meet: "全运会", place: "上海" },
    { mark: "3:53.98A", holder: "费斯·基皮耶贡", country: "KEN", date: "2024-06-15", place: "内罗毕", note: "高原成绩（内罗毕，海拔约1800米）；肯尼亚纪录" },
    { mark: "3:54.01", holder: "古达夫·特斯盖", country: "ETH", date: "2021-06-20", meet: "钻石联赛", place: "霍茹夫（波兰）" },
    { mark: "3:54.03", holder: "古达夫·特斯盖", country: "ETH", date: "2023-05-28", meet: "钻石联赛", place: "拉巴特" },
    { mark: "3:54.05", holder: "克劳迪娅·卡齐米尔斯卡", country: "POL", date: "2026-09-05", meet: "钻石联赛", place: "布鲁塞尔", note: "波兰纪录；2026年首届终极锦标赛决赛又以3:57.55夺冠" },
    { mark: "3:54.11", holder: "根泽贝·迪巴巴", country: "ETH", date: "2015-07-08", place: "巴塞罗那" },
    { mark: "3:54.16", holder: "弗雷韦尼·海卢", country: "ETH", date: "2024-08-30", meet: "钻石联赛", place: "罗马", note: "2024年世界室内冠军" },
    { mark: "3:54.22", holder: "费斯·基皮耶贡", country: "KEN", date: "2019-10-05", meet: "世锦赛", place: "多哈", note: "同场第4名——哈桑夺冠之夜" },
    { mark: "3:54.23", holder: "奥莉加·德维尔娜", country: "URS", date: "1982-07-27", place: "基辅" },
    { mark: "3:54.32", holder: "古达夫·特斯盖", country: "ETH", date: "2022-05-28", meet: "钻石联赛", place: "尤金" },
    { mark: "3:54.38", holder: "古达夫·特斯盖", country: "ETH", date: "2019-10-05", meet: "世锦赛", place: "多哈", note: "同场亚军" },
    { mark: "3:54.50", holder: "劳拉·缪尔", country: "GBR", date: "2021-08-06", meet: "奥运会", place: "东京", note: "同场亚军" },
    { mark: "3:54.52", holder: "古达夫·特斯盖", country: "ETH", date: "2022-07-18", meet: "钻石联赛", place: "尤金" },
    { mark: "3:54.52", holder: "张玲", country: "CHN", date: "1997-10-18", meet: "全运会", place: "上海" },
    { mark: "3:54.72", holder: "多尔卡斯·埃沃伊", country: "KEN", date: "2026-09-05", meet: "钻石联赛", place: "布鲁塞尔" },
    { mark: "3:54.73", holder: "杰西卡·赫尔", country: "AUS", date: "2026-09-05", meet: "钻石联赛", place: "布鲁塞尔" },
    { mark: "3:54.73", holder: "比阿特丽斯·切贝特", country: "KEN", date: "2025-08-16", meet: "钻石联赛", place: "霍茹夫（波兰）", note: "五千与万米双料世界纪录保持者的中距离客串" },
    { mark: "3:54.75", holder: "费斯·基皮耶贡", country: "KEN", date: "2024-09-14", meet: "钻石联赛", place: "布鲁塞尔" },
    { mark: "3:54.76", holder: "乔治娅·亨特-贝尔", country: "GBR", date: "2025-07-05", meet: "钻石联赛", place: "尤金", note: "同场季军——世界纪录之夜" },
    { mark: "3:54.79", holder: "比尔克·海洛姆", country: "ETH", date: "2024-08-30", meet: "钻石联赛", place: "罗马" },
    { mark: "3:54.87", holder: "希鲁特·梅谢沙", country: "ETH", date: "2023-07-16", meet: "钻石联赛", place: "霍茹夫（波兰）" },
    { mark: "3:54.87", holder: "费斯·基皮耶贡", country: "KEN", date: "2023-08-22", meet: "世锦赛", place: "布达佩斯", note: "第三届世锦赛金牌之战" },
    { mark: "3:54.92", holder: "多尔卡斯·埃沃伊", country: "KEN", date: "2025-09-16", meet: "世锦赛", place: "东京", note: "同场亚军" },
    { mark: "3:54.93", holder: "比尔克·海洛姆", country: "ETH", date: "2023-07-16", meet: "钻石联赛", place: "霍茹夫（波兰）" },
    { mark: "3:54.98", holder: "杰西卡·赫尔", country: "AUS", date: "2024-08-30", meet: "钻石联赛", place: "罗马" },
    { mark: "3:54.99", holder: "谢尔比·胡利汉", country: "USA", date: "2019-10-05", meet: "世锦赛", place: "多哈", note: "同场季军" },
    { mark: "3:55.01", holder: "兰丽新", country: "CHN", date: "1997-10-17", meet: "全运会", place: "上海", flags: ["h"] },
    { mark: "3:55.06", holder: "茨盖·杜古马", country: "ETH", date: "2026-08-23", meet: "钻石联赛", place: "霍茹夫（波兰）", note: "800米世界室内冠军的1500米客串" },
    { mark: "3:55.07", holder: "董艳梅", country: "CHN", date: "1997-10-18", meet: "全运会", place: "上海" },
    { mark: "3:55.08", holder: "迪里贝·韦尔特吉", country: "ETH", date: "2023-07-16", meet: "钻石联赛", place: "霍茹夫（波兰）" },
    { mark: "3:55.10", holder: "迪里贝·韦尔特吉", country: "ETH", date: "2024-08-08", meet: "奥运会", place: "巴黎", flags: ["sf"] },
    { mark: "3:55.14", holder: "费斯·基皮耶贡", country: "KEN", date: "2023-08-20", meet: "世锦赛", place: "布达佩斯", flags: ["sf"] },
    { mark: "3:55.16", holder: "劳拉·缪尔", country: "GBR", date: "2023-09-16", meet: "钻石联赛", place: "尤金" },
    { mark: "3:55.16", holder: "杰西卡·赫尔", country: "AUS", date: "2025-09-16", meet: "世锦赛", place: "东京", note: "同场季军——基皮耶贡四连冠之夜" },
  ],
  topListTitle: "前 71 名",
  topListNote:
    "门槛 3:55.16，合规成绩全录（含并列）。基皮耶贡独占 19 席（前 13 名中 7 席）；特斯盖 7 席、赫尔 6 席、韦尔特吉 5 席。中国选手 9 席全部来自 1993 年七运会与 1997 年八运会（含一席预赛成绩）；2019 年多哈世锦赛决赛单场 4 人入榜（哈桑、特斯盖、胡利汉、基皮耶贡），2024 年巴黎奥运决赛 5 人入榜。",

  history: [
    {
      heading: "迟到的一步：1972年的慕尼黑",
      paragraphs: [
        "女子1500米直到1967年才被认可世界纪录、1972年才进入奥运会——比男子晚了整整76年。而在慕尼黑，柳德米拉·布拉金娜用一届奥运会回答了所有质疑：预赛4:06.47、半决赛4:05.07、决赛4:01.38，五天内三破世界纪录。此后苏联的塔季扬娜·卡赞金娜两度改写——1976年波多利斯克的3:56.0，1980年苏黎世的3:52.47——加上两枚奥运金牌（1976、1980），她把这项纪录锁进抽屉整整13年。",
      ],
    },
    {
      heading: "东方回响：1993年的北京",
      paragraphs: [
        "1993年9月11日，七运会决赛，曲云霞3:50.46、王军霞3:51.92——马家军在一战之内把世界纪录提高了近两秒。这条纪录悬置22年，直到今天仍是亚洲纪录与中国纪录，曲云霞的历史总榜第七位也仍是肯尼亚与埃塞俄比亚之外的最高排位。四年后的八运会，姜波3:50.98、郎营来3:51.34、尹丽丽3:53.91、兰丽新3:53.97、张玲3:54.52、董艳梅3:55.07——中国选手在这张榜单上共占九席，全部来自1993年9月与1997年10月的全运会赛场（含一席预赛）。这是这张榜单上最特殊的一页，也是最需要历史语境去阅读的一页。",
      ],
    },
    {
      heading: "黄金十年：迪巴巴、哈桑与特斯盖",
      paragraphs: [
        "2015年摩纳哥，根泽贝·迪巴巴以3:50.07终结22年的等待；2019年多哈，西凡·哈桑在锦标赛之夜跑出3:51.95——同届她还拿了10000米金牌，锦标赛纪录至今未破。古达夫·特斯盖七次入榜却始终差世界纪录一步，2024年厦门的3:50.30至今仍是历史第五快。这十年里，纪录的门槛从3:55被推到3:50以内，入榜深度整体下移了三秒。",
      ],
    },
    {
      heading: "基皮耶贡时代：一年一破",
      paragraphs: [
        "2023佛罗伦萨3:49.11、2024巴黎3:49.04、2025尤金3:48.68——费斯·基皮耶贡用三个夏天把世界纪录推进1.39秒，同时在奥运会上完成三连冠（2016、2021、2024）、世锦赛四连冠（2017、2022、2023、2025），大型锦标赛六连冠的跨度无人企及。2024年巴黎奥运决赛，前五名全部跑进3:54；2026年首届终极锦标赛，波兰的克劳迪娅·卡齐米尔斯卡夺冠。纪录还在她手里——没有人知道3:48的边界在哪里。",
      ],
    },
  ],

  sources: [
    { label: "World Athletics · 官方纪录", url: "https://worldathletics.org/records/by-category/world-records" },
    { label: "Alltime-Athletics · 女子1500米历史总榜", url: "https://alltime-athletics.com/w_1500ok.htm" },
    { label: "Wikipedia · 1500 metres at the Olympics", url: "https://en.wikipedia.org/wiki/1500_metres_at_the_Olympics" },
    { label: "Wikipedia · 1500 metres at the World Athletics Championships", url: "https://en.wikipedia.org/wiki/1500_metres_at_the_World_Athletics_Championships" },
    { label: "Wikipedia · 1500 m world record progression", url: "https://en.wikipedia.org/wiki/1500_metres_world_record_progression" },
  ],
};
