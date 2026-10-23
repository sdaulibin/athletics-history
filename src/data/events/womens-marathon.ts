import type { AthleticsEvent } from "@/lib/types";

/**
 * 女子马拉松（室外）
 * 数据截至：2026年10月
 *
 * 收录口径（宁缺毋滥）：
 *  - 世界纪录演进只收室外标准赛道纪录，起于2003年（拉德克利夫的2:15:25）；
 *    此前的纪录（如2001年高桥尚子的2:19:46）从略；
 *  - 历史最好成绩榜以 2:18:00 为门槛：合规成绩全录（含并列）共 75 条；
 *  - 波士顿等点对点赛道成绩带 a 标记（源表口径），本站以备注注明助力赛道。 */
export const womensMarathon: AthleticsEvent = {
  slug: "womens-marathon",
  group: "track",
  markKind: "time",
  gender: "women",
  venue: "outdoor",
  name: "女子马拉松",
  summary:
    "2:09:56——2024年10月13日的芝加哥马拉松，露丝·切普恩盖蒂奇把女子马拉松的世界纪录压进2小时10分，成为第一个做到这件事的女性。女子马拉松1970年代才被正式承认，1984年才进入奥运会；此后四十余年，纪录从2:24一路推到2:09:56。拉德克利夫的2:15:25曾被视为不可逾越，而科斯盖、阿塞法、切普恩盖蒂奇在五年里三次改写——女子长跑的边界，正在以比男子更快的速度移动。",
  dataAsOf: "2026年10月",
  progression: [
    { mark: "2:15:25", holder: "葆拉·拉德克利夫", country: "GBR", date: "2003-04-13", place: "伦敦", note: "前世界纪录" },
    { mark: "2:14:04", holder: "布丽吉德·科斯盖", country: "KEN", date: "2019-10-13", place: "芝加哥", note: "前世界纪录" },
    { mark: "2:11:53", holder: "蒂吉斯特·阿塞法", country: "ETH", date: "2023-09-24", place: "柏林", note: "前世界纪录" },
    { mark: "2:09:56", holder: "露丝·切普恩盖蒂奇", country: "KEN", date: "2024-10-13", place: "芝加哥", note: "前世界纪录" },
  ],

  asianRecord: {
    mark: "2:18:59", holder: "前田穗南", country: "JPN",
    date: "2024-01-28", place: "大阪",
    note: "日本选手，以2:18:59创亚洲纪录；亚洲女子马拉松的顶端长期由日本与中国选手把持。",
  },
  chineseRecord: {
    mark: "2:19:39", holder: "孙英杰", country: "CHN",
    date: "2003-10-19", place: "北京",
    note: "中国选手，2003年10月19日北京马拉松跑出2:19:39，全国纪录保持至今；周春秀2007年伦敦2:20:38、2008年北京奥运铜牌是此后最接近的一页。",
  },
  topList: [
    { mark: "2:09:56", holder: "露丝·切普恩盖蒂奇", country: "KEN", date: "2024-10-13", place: "芝加哥" },
    { mark: "2:10:51", holder: "福蒂恩·特斯法伊", country: "ETH", date: "2026-03-15", place: "巴塞罗那" },
    { mark: "2:11:53", holder: "蒂吉斯特·阿塞法", country: "ETH", date: "2023-09-24", place: "柏林" },
    { mark: "2:13:44", holder: "西凡·哈桑", country: "NED", date: "2023-10-08", place: "芝加哥" },
    { mark: "2:14:00", holder: "乔伊西琳·杰普科斯盖", country: "KEN", date: "2025-12-07", place: "瓦伦西亚" },
    { mark: "2:14:04", holder: "布丽吉德·科斯盖", country: "KEN", date: "2019-10-13", place: "芝加哥" },
    { mark: "2:14:18", holder: "露丝·切普恩盖蒂奇", country: "KEN", date: "2022-10-09", place: "芝加哥" },
    { mark: "2:14:29", holder: "布丽吉德·科斯盖", country: "KEN", date: "2026-03-01", place: "东京" },
    { mark: "2:14:43", holder: "佩雷斯·杰普奇尔奇尔", country: "KEN", date: "2025-12-07", place: "瓦伦西亚" },
    { mark: "2:14:57", holder: "哈维·费萨", country: "ETH", date: "2025-10-12", place: "芝加哥" },
    { mark: "2:14:58", holder: "阿马内·贝里索", country: "ETH", date: "2022-12-04", place: "瓦伦西亚" },
    { mark: "2:15:25", holder: "葆拉·拉德克利夫", country: "GBR", date: "2003-04-13", place: "伦敦" },
    { mark: "2:15:37", holder: "露丝·切普恩盖蒂奇", country: "KEN", date: "2023-10-08", place: "芝加哥" },
    { mark: "2:15:37", holder: "蒂吉斯特·阿塞法", country: "ETH", date: "2022-09-25", place: "柏林" },
    { mark: "2:15:41", holder: "蒂吉斯特·阿塞法", country: "ETH", date: "2026-04-26", place: "伦敦" },
    { mark: "2:15:50", holder: "蒂吉斯特·阿塞法", country: "ETH", date: "2025-04-27", place: "伦敦" },
    { mark: "2:15:51", holder: "沃尔克内什·德格法", country: "ETH", date: "2023-12-03", place: "瓦伦西亚" },
    { mark: "2:15:53", holder: "海伦·奥比里", country: "KEN", date: "2026-04-26", place: "伦敦" },
    { mark: "2:15:55", holder: "苏图梅·阿塞法", country: "ETH", date: "2024-03-03", place: "东京" },
    { mark: "2:15:55", holder: "乔伊西琳·杰普科斯盖", country: "KEN", date: "2026-04-26", place: "伦敦" },
    { mark: "2:16:02", holder: "布丽吉德·科斯盖", country: "KEN", date: "2022-03-06", place: "东京" },
    { mark: "2:16:07", holder: "蒂吉斯特·凯特马", country: "ETH", date: "2024-01-07", place: "迪拜" },
    { mark: "2:16:14", holder: "罗斯玛丽·万吉鲁", country: "KEN", date: "2024-03-03", place: "东京" },
    { mark: "2:16:16", holder: "佩雷斯·杰普奇尔奇尔", country: "KEN", date: "2024-04-21", place: "伦敦" },
    { mark: "2:16:22", holder: "阿尔马兹·阿雅娜", country: "ETH", date: "2023-12-03", place: "瓦伦西亚" },
    { mark: "2:16:23", holder: "蒂吉斯特·阿塞法", country: "ETH", date: "2024-04-21", place: "伦敦" },
    { mark: "2:16:24", holder: "乔伊西琳·杰普科斯盖", country: "KEN", date: "2024-04-21", place: "伦敦" },
    { mark: "2:16:28", holder: "罗斯玛丽·万吉鲁", country: "KEN", date: "2023-03-05", place: "东京" },
    { mark: "2:16:31", holder: "苏图梅·阿塞法", country: "ETH", date: "2025-03-02", place: "东京" },
    { mark: "2:16:34", holder: "凯贝德·梅格图", country: "ETH", date: "2024-04-21", place: "伦敦" },
    { mark: "2:16:36", holder: "贝尔图坎·韦尔德", country: "ETH", date: "2026-03-01", place: "东京" },
    { mark: "2:16:36", holder: "布丽吉德·科斯盖", country: "KEN", date: "2025-11-30", place: "上海" },
    { mark: "2:16:42", holder: "蒂吉斯特·凯特马", country: "ETH", date: "2024-09-29", place: "柏林" },
    { mark: "2:16:49", holder: "阿莱穆·梅格图", country: "ETH", date: "2024-12-01", place: "瓦伦西亚" },
    { mark: "2:16:49", holder: "莱特森贝特·吉迪", country: "ETH", date: "2022-12-04", place: "瓦伦西亚" },
    { mark: "2:16:52", holder: "亚勒姆泽夫·耶瓦劳", country: "ETH", date: "2024-10-20", place: "Amsterdam" },
    { mark: "2:16:56", holder: "温弗里达·莫拉", country: "KEN", date: "2025-03-02", place: "东京" },
    { mark: "2:16:56", holder: "采海·格梅丘", country: "ETH", date: "2023-03-05", place: "东京" },
    { mark: "2:16:58", holder: "阿马内·贝里索", country: "ETH", date: "2024-03-03", place: "东京" },
    { mark: "2:17:00", holder: "哈维·费萨", country: "ETH", date: "2025-03-02", place: "东京" },
    { mark: "2:17:01", holder: "玛丽·凯塔尼", country: "KEN", date: "2017-04-23", place: "伦敦" },
    { mark: "2:17:05", holder: "布里利安·基普科奇", country: "KEN", date: "2026-04-26", place: "汉堡" },
    { mark: "2:17:08", holder: "露丝·切普恩盖蒂奇", country: "KEN", date: "2019-01-25", place: "迪拜" },
    { mark: "2:17:09", holder: "阿莱穆·梅格图", country: "ETH", date: "2023-10-08", place: "芝加哥" },
    { mark: "2:17:16", holder: "佩雷斯·杰普奇尔奇尔", country: "KEN", date: "2020-12-06", place: "瓦伦西亚" },
    { mark: "2:17:18", holder: "阿莱穆·梅格图", country: "ETH", date: "2025-10-12", place: "芝加哥" },
    { mark: "2:17:18", holder: "露丝·切普恩盖蒂奇", country: "KEN", date: "2022-03-13", place: "名古屋" },
    { mark: "2:17:18", holder: "葆拉·拉德克利夫", country: "GBR", date: "2002-10-13", place: "芝加哥" },
    { mark: "2:17:20", holder: "阿尔马兹·阿雅娜", country: "ETH", date: "2022-10-16", place: "Amsterdam" },
    { mark: "2:17:22", holder: "莎伦·洛凯迪", country: "KEN", date: "2025-04-21", place: "波士顿" },
    { mark: "2:17:23", holder: "乔伊西琳·杰普科斯盖", country: "KEN", date: "2023-10-08", place: "芝加哥" },
    { mark: "2:17:23", holder: "亚勒姆泽夫·耶瓦劳", country: "ETH", date: "2022-04-24", place: "汉堡" },
    { mark: "2:17:25", holder: "哈维·费萨", country: "ETH", date: "2024-10-27", place: "Frankfurt" },
    { mark: "2:17:26", holder: "亚勒姆泽夫·耶瓦劳", country: "ETH", date: "2022-10-02", place: "伦敦" },
    { mark: "2:17:29", holder: "希拉·切普基鲁伊", country: "KEN", date: "2022-12-04", place: "瓦伦西亚" },
    { mark: "2:17:32", holder: "苏图梅·阿塞法", country: "ETH", date: "2024-10-13", place: "芝加哥" },
    { mark: "2:17:36", holder: "塔杜·特肖梅", country: "ETH", date: "2022-12-04", place: "瓦伦西亚" },
    { mark: "2:17:37", holder: "艾纳莱姆·德斯塔", country: "ETH", date: "2025-10-19", place: "Amsterdam" },
    { mark: "2:17:39", holder: "哈维·费萨", country: "ETH", date: "2026-03-01", place: "东京" },
    { mark: "2:17:39", holder: "苏图梅·阿塞法", country: "ETH", date: "2026-03-01", place: "东京" },
    { mark: "2:17:41", holder: "海伦·奥比里", country: "KEN", date: "2025-04-21", place: "波士顿" },
    { mark: "2:17:41", holder: "沃尔克内什·德格法", country: "ETH", date: "2019-01-25", place: "迪拜" },
    { mark: "2:17:42", holder: "葆拉·拉德克利夫", country: "GBR", date: "2005-04-17", place: "伦敦" },
    { mark: "2:17:43", holder: "乔伊西琳·杰普科斯盖", country: "KEN", date: "2021-10-03", place: "伦敦" },
    { mark: "2:17:45", holder: "洛娜·萨尔皮特", country: "ISR", date: "2020-03-01", place: "东京" },
    { mark: "2:17:49", holder: "希拉·切普基鲁伊", country: "KEN", date: "2023-09-24", place: "柏林" },
    { mark: "2:17:51", holder: "艾琳·切普泰", country: "KEN", date: "2024-10-13", place: "芝加哥" },
    { mark: "2:17:55", holder: "沃尔克内什·埃德萨", country: "ETH", date: "2025-04-27", place: "汉堡" },
    { mark: "2:17:56", holder: "贝尔图坎·沃尔德", country: "ETH", date: "2025-10-19", place: "Amsterdam" },
    { mark: "2:17:56", holder: "蒂鲁内什·迪巴巴", country: "ETH", date: "2017-04-23", place: "伦敦" },
    { mark: "2:17:57", holder: "安杰拉·塔努伊", country: "KEN", date: "2021-10-17", place: "Amsterdam" },
    { mark: "2:17:58", holder: "德吉图·阿齐梅拉乌", country: "ETH", date: "2021-10-03", place: "伦敦" },
    { mark: "2:17:58", holder: "阿舍特·贝凯雷", country: "ETH", date: "2022-03-06", place: "东京" },
    { mark: "2:17:59", holder: "希沃特·格布雷基丹", country: "ETH", date: "2023-12-03", place: "瓦伦西亚" },
    { mark: "2:18:00", holder: "罗斯玛丽·万吉鲁", country: "KEN", date: "2022-09-25", place: "柏林" },
  ],
  topListTitle: "前 75 名",
  topListNote:
    "门槛 2:18:00，合规成绩全录（含并列）。切普恩盖蒂奇、阿塞法与科斯盖占据前三；哈桑以2:13:44位列其中。中国选手无一人入榜，全国纪录为孙英杰2003年北京的2:19:39。",
  history: [
    {
      heading: "从被拒绝到被承认",
      paragraphs: [
        "女子马拉松长期不被官方承认：1960年代美国女性只能以「非官方」身份参赛。1984年洛杉矶，美国的琼·贝努瓦以2:24:52夺得首枚奥运女子马拉松金牌；1980年代，挪威的瓦伊茨与葡萄牙的莫塔把世界最好成绩推到2:21左右。",
        "2001年，日本的高桥尚子以2:19:46成为第一个跑进2:20的女性；1990年代的世界最好成绩则由挪威与肯尼亚选手把持。",
      ],
    },
    {
      heading: "拉德克利夫的2:15:25",
      paragraphs: [
        "2003年4月13日伦敦，葆拉·拉德克利夫以2:15:25改写世界纪录——这条纪录悬置十六年。她在2002年芝加哥与2003年伦敦连续跑出历史级成绩，把女子马拉松带进2:15台。",
        "2000年代还有肯尼亚的凯塔尼、埃塞俄比亚的迪巴巴与基普拉加特在大赛中轮流登顶。",
      ],
    },
    {
      heading: "科斯盖、阿塞法与切普恩盖蒂奇",
      paragraphs: [
        "2019年10月13日芝加哥，布丽吉德·科斯盖2:14:04，终结拉德克利夫十六年的纪录；2023年9月柏林，蒂吉斯特·阿塞法2:11:53；2024年10月芝加哥，露丝·切普恩盖蒂奇2:09:56。五年三破，女子马拉松进入2:10台时代。",
        "2020年东京与2024年巴黎两届奥运，女子马拉松金牌分别由杰普奇尔奇尔与哈桑获得；2026年伦敦，阿塞法以2:15:41夺冠。",
      ],
    },
  ],

  sources: [
    { label: "World Athletics · 官方纪录与总榜", url: "https://worldathletics.org/records/all-time-toplists/road-running/marathon/outdoor/women/senior" },
    { label: "Alltime-Athletics · 女子马拉松历史总榜", url: "https://alltime-athletics.com/wmaraok.htm" },
    { label: "Olympedia · Athletics — Marathon, Women（历届奥运逐届成绩）", url: "https://www.olympedia.org/event_names/103" },
    { label: "Track & Field News · 世锦赛逐项目成绩", url: "https://trackandfieldnews.com/world-championships-results/history-of-world-championships-results-marathon-women/" },
  ],
};
