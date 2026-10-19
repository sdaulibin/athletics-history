import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于",
  description: "田径史是什么、数据从哪里来、收录范围与路线图。",
};

const sections = [
  {
    heading: "这是什么",
    body: [
      "田径史是一个非商业的爱好者项目，目标是系统地整理田径各项目的历史沿革与世界纪录演进——从 1968 年海因斯的电计时首纪录 9.95，到博尔特悬置十七年的 9.58，把散落在史料里的每一条时间线收拢到一起。它与姊妹站点「泳史」同一套数据架构：完整演进表、阶梯图、项目历史文章与历届大赛冠军榜。",
      "田径数据有三条自己的纪律：成绩分时间、距离（含高度）与全能分数三类；短跑与部分田赛成绩带风速，顺风超过 +2.0 m/s 不计为纪录；因兴奋剂被取消的纪录同样入册，以「已被取消」标记保留——历史不只有被承认的部分。",
    ],
  },
  {
    heading: "数据来源与许可",
    body: [
      "纪录演进数据以维基百科 World record progression 系列条目为底本（许可协议 CC BY-SA 4.0），逐条对照 World Athletics 官方纪录库核对；赛事与地点名为中文译写，成绩、日期与风速保留原文。运动员中文译名参考通行译法，未收录者显示原文。",
      "历届冠军数据以维基百科各届赛事条目的成绩表为底本，与 Olympedia、World Athletics 奖牌库及当届媒体报道交叉核对后才写入。个别届次无法双源核实者宁可留空并在数据文件头注中说明，绝不臆造。",
      "权威纪录以 World Athletics 官网为准。被取消的纪录（约翰逊 1987/1988、蒙哥马利 2002、加特林 2006 等）依据世界田联及 CAS 的处理决定收录其取消状态。",
    ],
  },
  {
    heading: "收录范围与路线图",
    body: [
      "当前范围：室外 · 男女 100 米先行——男子百米（首个上线项目：17 条纪录条目含 4 条被取消；历史最好成绩榜前五十，9.80 以内合规成绩全录 56 条；52 条冠军条目覆盖奥运 1924 起、世锦赛 1983–2025 全部 20 届、亚运 1998 起八届）；女子百米（8 条纪录条目，10.49 悬置三十八年；历史最好成绩榜前五十，10.72 以内全录 56 条；41 条冠军条目覆盖奥运 1968 起、世锦赛 1983–2025 全部 20 届、亚运 1998 起（2006/2010 两届未核实暂缺））。两项目均标注现亚洲纪录与中国纪录。",
      "路线图：径赛全距离（200/400/800/1500/5000/10000 米、110 米栏、400 米栏、3000 米障碍）；田赛（跳高、撑竿跳、跳远、三级跳、铅球、铁饼、链球、标枪）；接力（4×100/4×400）；十项全能；随后增加室内数据与奥运纪录；建立运动员页面。",
    ],
  },
  {
    heading: "如何参与",
    body: [
      "站点的全部数据都是代码化的：每个项目对应 src/data/events/ 下的一个 TypeScript 文件（径赛填 markKind: \"time\"，田赛填 \"distance\"），按已有的样板填入 progression 与 history，再到 src/data/index.ts 注册即可生成新页面。",
      "发现数据错漏？欢迎对照数据来源核查后修正对应文件——这比截图转载更可靠，也是这个项目存在的意义。",
    ],
  },
  {
    heading: "技术实现",
    body: [
      "Next.js（App Router + TypeScript）+ Tailwind CSS 构建的纯静态站点（output: export），纪录演进图为手写 SVG 阶梯图，无图表库依赖。构建产物可部署到 Vercel、GitHub Pages 等任意静态托管。",
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-track-950">关于田径史</h1>
      <div className="mt-8 space-y-10">
        {sections.map((s) => (
          <section key={s.heading}>
            <h2 className="text-xl font-semibold text-track-800">{s.heading}</h2>
            <div className="mt-3 space-y-3 leading-loose text-slate-600">
              {s.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
