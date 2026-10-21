import type { ChampionEntry } from "@/lib/types";

/**
 * 女子 800 米 · 历届大赛冠军
 * 空缺说明（宁缺毋滥，未能核实的届次暂缺）：
 *  - 奥运会：1928 年首设（手计时），此后被逐出奥运赛程，1960 年恢复——
 *    两段皆收，手计时条目注明；1972 起电计时；
 *  - 世锦赛：1983–2025 全部 20 届已核（含 2011/2012 萨维诺娃被除名后的递补序列）；
 *  - 亚运会：1994 年及以前各届未能双源核实，暂缺；1998 起双源收录。
 */
export const womens800mChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "基利·霍奇金森", country: "GBR", mark: "1:56.72", note: "埃塞俄比亚的杜古马1:57.15银、肯尼亚的莫拉铜——22年后英国重返该项目之巅" },
  { series: "olympics", year: 2020, city: "东京", champion: "阿辛·穆", country: "USA", mark: "1:55.21", note: "赛事于2021年举行；霍奇金森1:55.88银——两位00后的领奖台" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "卡斯特尔·塞门亚", country: "RSA", mark: "1:55.28", note: "尼永萨巴银、万布伊铜——非洲包揽领奖台" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "卡斯特尔·塞门亚", country: "RSA", mark: "1:57.23", note: "原冠军萨维诺娃2017年因生物护照违规被剥夺金牌，塞门亚递补；耶利莫1:56.19递补银牌亦由此而来" },
  { series: "olympics", year: 2008, city: "北京", champion: "帕梅拉·耶利莫", country: "KEN", mark: "1:54.87", note: "18岁；肯尼亚首枚女子中跑奥运金牌" },
  { series: "olympics", year: 2004, city: "雅典", champion: "凯利·霍尔姆斯", country: "GBR", mark: "1:56.38", note: "同届再夺1500米——继卡赞金娜、马斯特科娃后奥运史上第三位双冠女将" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "玛丽亚·穆托拉", country: "MOZ", mark: "1:56.15", note: "莫桑比克史上首枚奥运金牌" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "斯韦特兰娜·马斯特科娃", country: "RUS", mark: "1:57.73", note: "继卡赞金娜（1976）后第二位同届800/1500双冠女将" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "埃伦·范兰根", country: "NED", mark: "1:55.54", note: "荷兰纪录；独联体的努鲁特迪诺娃1:55.99银、古巴的基罗特1:56.80铜" },
  { series: "olympics", year: 1988, city: "汉城", champion: "西格伦·沃达尔斯", country: "GDR", mark: "1:56.10", note: "东德1-2（沃赫特尔银）" },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "多伊娜·梅林特", country: "ROU", mark: "1:57.60", note: "罗马尼亚首夺该项目奥运金牌" },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "娜杰日达·奥利扎连科", country: "URS", mark: "1:53.43", wr: true, or: true, note: "决赛改写世界纪录，苏联包揽前三（米涅耶娃1:54.81银）——奥运纪录至今悬置46年" },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "塔季扬娜·卡赞金娜", country: "URS", mark: "1:54.94", wr: true, or: true, note: "决赛改写世界纪录；同届再夺1500米金牌" },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "希尔德加德·法尔克", country: "FRG", mark: "1:58.55", or: true, note: "首位跑进2分钟的女将（1971年）；主场夺金" },
  { series: "olympics", year: 1968, city: "墨西哥城", champion: "玛德琳·曼宁", country: "USA", mark: "2:00.92", or: true, note: "手计时2:00.9；奥运纪录" },
  { series: "olympics", year: 1964, city: "东京", champion: "安·帕克", country: "GBR", mark: "2:01.1", note: "手计时；决赛改写世界纪录" },
  { series: "olympics", year: 1960, city: "罗马", champion: "柳德米拉·舍夫佐娃", country: "URS", mark: "2:04.3", note: "手计时（电计时2:04.5）；与澳大利亚的琼斯同秒冲线，终点摄影分出胜负" },
  { series: "olympics", year: 1928, city: "阿姆斯特丹", champion: "莉娜·拉德克", country: "GER", mark: "2:16.8", note: "手计时；奥运首设女子800米——日本的人见绢枝2:17.6摘银，亚洲女子首枚奥运田径奖牌。赛后该项目因「女子不宜中跑」的舆论被逐出奥运，三十二年后方才恢复" },

  // —— 世界锦标赛（1983–2025 全 20 届） ——
  { series: "worlds", year: 2025, city: "东京", champion: "莉莲·奥迪拉", country: "KEN", mark: "1:54.62", note: "亨特-贝尔1:54.90银、霍奇金森1:54.91铜——世锦赛史上首次三人同破1:55；韦罗1:56.17第六" },
  { series: "worlds", year: 2023, city: "布达佩斯", champion: "玛丽·莫拉", country: "KEN", mark: "1:56.03", note: "霍奇金森1:56.34银、穆1:56.61铜" },
  { series: "worlds", year: 2022, city: "尤金", champion: "阿辛·穆", country: "USA", mark: "1:56.30", note: "与2021年奥运同款领奖台：霍奇金森1:56.38银、莫拉1:56.71铜" },
  { series: "worlds", year: 2019, city: "多哈", champion: "哈莉玛·纳卡伊", country: "UGA", mark: "1:58.04", note: "乌干达该项目首枚世界大赛金牌" },
  { series: "worlds", year: 2017, city: "伦敦", champion: "卡斯特尔·塞门亚", country: "RSA", mark: "1:55.16", note: "尼永萨巴银、威尔逊铜" },
  { series: "worlds", year: 2015, city: "北京", champion: "玛丽娜·阿尔扎马萨瓦", country: "BLR", mark: "1:58.03", note: "加拿大的毕晓普1:58.12银、肯尼亚的苏姆1:58.18铜" },
  { series: "worlds", year: 2013, city: "莫斯科", champion: "尤妮斯·苏姆", country: "KEN", mark: "1:57.38", note: "爆冷击败卫冕冠军" },
  { series: "worlds", year: 2011, city: "大邱", champion: "卡斯特尔·塞门亚", country: "RSA", mark: "1:56.35", note: "原冠军萨维诺娃2017年被除名后递补；杰普科斯盖1:57.42银" },
  { series: "worlds", year: 2009, city: "柏林", champion: "卡斯特尔·塞门亚", country: "RSA", mark: "1:55.45", note: "18岁首登世界之巅，性别资格争议随之而来" },
  { series: "worlds", year: 2007, city: "大阪", champion: "珍妮特·杰普科斯盖", country: "KEN", mark: "1:56.04", note: "肯尼亚女子首夺该项目世锦赛金牌" },
  { series: "worlds", year: 2005, city: "赫尔辛基", champion: "苏利亚·卡拉塔尤德", country: "CUB", mark: "1:58.82", note: "决赛无人跑进1:58.5——战术绞杀之夜" },
  { series: "worlds", year: 2003, city: "巴黎", champion: "玛丽亚·穆托拉", country: "MOZ", mark: "1:59.89", note: "决赛无人跑进2分钟；霍尔姆斯2:00.18银——穆托拉凭最后50米制胜" },
  { series: "worlds", year: 2001, city: "埃德蒙顿", champion: "玛丽亚·穆托拉", country: "MOZ", mark: "1:57.17", note: "卫冕成功（1993年首冠后时隔八年）" },
  { series: "worlds", year: 1999, city: "塞维利亚", champion: "卢德米拉·福尔马诺娃", country: "CZE", mark: "1:56.68", note: "捷克独立后的首枚女子800米世锦赛金牌" },
  { series: "worlds", year: 1997, city: "雅典", champion: "安娜·菲德利亚·基罗特", country: "CUB", mark: "1:57.14", note: "1993年家中煤气爆炸重度烧伤后的王者归来——两年两金" },
  { series: "worlds", year: 1995, city: "哥德堡", champion: "安娜·菲德利亚·基罗特", country: "CUB", mark: "1:56.11", note: "烧伤复出后的第一枚世界大赛金牌" },
  { series: "worlds", year: 1993, city: "斯图加特", champion: "玛丽亚·穆托拉", country: "MOZ", mark: "1:55.43", note: "20岁；莫桑比克的第一个世界冠军头衔" },
  { series: "worlds", year: 1991, city: "东京", champion: "莉莉娅·努鲁特迪诺娃", country: "URS", mark: "1:57.50", note: "苏联在该项目的最后一届世锦赛" },
  { series: "worlds", year: 1987, city: "罗马", champion: "西格伦·沃达尔斯", country: "GDR", mark: "1:55.26", note: "东德1-2（沃赫特尔1:55.32银）；基罗特第四" },
  { series: "worlds", year: 1983, city: "赫尔辛基", champion: "雅尔米拉·克拉托赫维洛娃", country: "TCH", mark: "1:54.68", note: "两周前刚以1:53.28改写世界纪录；首届世锦赛" },

  // —— 亚运会（1998 起双源收录） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "吴洪娇", country: "CHN", mark: "2:04.49", note: "中国第二枚亚运女子800米金牌（王春雨2018年后）；巴林的杰普科斯盖2:05.16银" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "塔鲁希·卡鲁纳拉特纳", country: "SRI", mark: "2:03.20", note: "印度的贝恩斯2:03.75银；王春雨2:03.90铜——个人第三届亚运奖牌" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "王春雨", country: "CHN", mark: "2:01.80", note: "中国首枚该项目亚运金牌；2021年东京奥运跻身第五（1:57.00）" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "玛格丽塔·穆卡舍娃", country: "KAZ", mark: "1:59.02", note: "亚运会赛会纪录；印度的卢卡1:59.19银、中国的赵婧1:59.48铜" },
  { series: "asiangames", year: 2010, city: "广州", champion: "玛格丽塔·穆卡舍娃", country: "KAZ", mark: "2:00.29", note: "卫冕之路的首金" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "玛丽亚姆·优素福·贾马尔", country: "BRN", mark: "2:01.79", note: "日后两夺世锦赛1500米金牌（2007大阪、2009柏林）的巴林名将" },
  { series: "asiangames", year: 2002, city: "釜山", champion: "比纳莫尔", country: "IND", mark: "2:04.17", note: "印度的姊妹传奇之一" },
  { series: "asiangames", year: 1998, city: "曼谷", champion: "乔蒂尔莫伊·西克达尔", country: "IND", mark: "2:01.00", note: "中国的王元萍2:04.45铜" },
];
