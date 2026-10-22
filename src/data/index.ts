import type { EventGroup } from "@/lib/types";
import { mens100m } from "./events/mens-100m";
import { mens100mChampions } from "./champions/mens-100m";
import { womens100m } from "./events/womens-100m";
import { womens100mChampions } from "./champions/womens-100m";
import { mens200m } from "./events/mens-200m";
import { mens200mChampions } from "./champions/mens-200m";
import { womens200m } from "./events/womens-200m";
import { womens200mChampions } from "./champions/womens-200m";
import { mens400m } from "./events/mens-400m";
import { mens400mChampions } from "./champions/mens-400m";
import { womens400m } from "./events/womens-400m";
import { womens400mChampions } from "./champions/womens-400m";
import { mens800m } from "./events/mens-800m";
import { mens800mChampions } from "./champions/mens-800m";
import { womens800m } from "./events/womens-800m";
import { womens800mChampions } from "./champions/womens-800m";
import { mens1500m } from "./events/mens-1500m";
import { mens1500mChampions } from "./champions/mens-1500m";
import { womens1500m } from "./events/womens-1500m";
import { womens1500mChampions } from "./champions/womens-1500m";
import { mensPoleVault } from "./events/mens-pole-vault";
import { mensPoleVaultChampions } from "./champions/mens-pole-vault";
import { womensPoleVault } from "./events/womens-pole-vault";
import { womensPoleVaultChampions } from "./champions/womens-pole-vault";

export const events = [
  { ...mens100m, champions: mens100mChampions },
  { ...womens100m, champions: womens100mChampions },
  { ...mens200m, champions: mens200mChampions },
  { ...womens200m, champions: womens200mChampions },
  { ...mens400m, champions: mens400mChampions },
  { ...womens400m, champions: womens400mChampions },
  { ...mens800m, champions: mens800mChampions },
  { ...womens800m, champions: womens800mChampions },
  { ...mens1500m, champions: mens1500mChampions },
  { ...womens1500m, champions: womens1500mChampions },
  { ...mensPoleVault, champions: mensPoleVaultChampions },
  { ...womensPoleVault, champions: womensPoleVaultChampions },
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
