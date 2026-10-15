import type { EventGroup } from "@/lib/types";
import { mens100m } from "./events/mens-100m";
import { mens100mChampions } from "./champions/mens-100m";

export const events = [
  { ...mens100m, champions: mens100mChampions },
];

export const groupMeta: Record<EventGroup, { zh: string }> = {
  track: { zh: "径赛" },
  field: { zh: "田赛" },
  combined: { zh: "全能" },
  relay: { zh: "接力" },
};

export const genderMeta: Record<string, { zh: string }> = {
  men: { zh: "男子" },
  women: { zh: "女子" },
};

export const siteConfig = {
  name: "田径史",
  tagline: "每一秒，每一厘米，都被记住",
  description:
    "收录田径各项目的历史沿革与世界纪录演进：从1968年海因斯的9.95，到博尔特悬置十七年的9.58——每一个时代的名字，都在这里。",
};
