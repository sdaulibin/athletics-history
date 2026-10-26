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
import { mens110mHurdles } from "./events/mens-110m-hurdles";
import { mens110mHurdlesChampions } from "./champions/mens-110m-hurdles";
import { womens100mHurdles } from "./events/womens-100m-hurdles";
import { womens100mHurdlesChampions } from "./champions/womens-100m-hurdles";
import { mens400mHurdles } from "./events/mens-400m-hurdles";
import { mens400mHurdlesChampions } from "./champions/mens-400m-hurdles";
import { womens400mHurdles } from "./events/womens-400m-hurdles";
import { womens400mHurdlesChampions } from "./champions/womens-400m-hurdles";
import { mensDiscusThrow } from "./events/mens-discus-throw";
import { mensDiscusThrowChampions } from "./champions/mens-discus-throw";
import { womensDiscusThrow } from "./events/womens-discus-throw";
import { womensDiscusThrowChampions } from "./champions/womens-discus-throw";
import { mens4x100mRelay } from "./events/mens-4x100m-relay";
import { mens4x100mRelayChampions } from "./champions/mens-4x100m-relay";
import { womens4x100mRelay } from "./events/womens-4x100m-relay";
import { womens4x100mRelayChampions } from "./champions/womens-4x100m-relay";
import { mens4x400mRelay } from "./events/mens-4x400m-relay";
import { mens4x400mRelayChampions } from "./champions/mens-4x400m-relay";
import { womens4x400mRelay } from "./events/womens-4x400m-relay";
import { womens4x400mRelayChampions } from "./champions/womens-4x400m-relay";
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
import { mensHighJump } from "./events/mens-high-jump";
import { mensHighJumpChampions } from "./champions/mens-high-jump";
import { womensHighJump } from "./events/womens-high-jump";
import { womensHighJumpChampions } from "./champions/womens-high-jump";
import { mensLongJump } from "./events/mens-long-jump";
import { mensLongJumpChampions } from "./champions/mens-long-jump";
import { womensLongJump } from "./events/womens-long-jump";
import { womensLongJumpChampions } from "./champions/womens-long-jump";
import { mensTripleJump } from "./events/mens-triple-jump";
import { mensTripleJumpChampions } from "./champions/mens-triple-jump";
import { womensTripleJump } from "./events/womens-triple-jump";
import { womensTripleJumpChampions } from "./champions/womens-triple-jump";
import { mens5000m } from "./events/mens-5000m";
import { mens5000mChampions } from "./champions/mens-5000m";
import { womens5000m } from "./events/womens-5000m";
import { womens5000mChampions } from "./champions/womens-5000m";
import { mens10000m } from "./events/mens-10000m";
import { mens10000mChampions } from "./champions/mens-10000m";
import { womens10000m } from "./events/womens-10000m";
import { womens10000mChampions } from "./champions/womens-10000m";
import { mensShotPut } from "./events/mens-shot-put";
import { mensShotPutChampions } from "./champions/mens-shot-put";
import { womensShotPut } from "./events/womens-shot-put";
import { womensShotPutChampions } from "./champions/womens-shot-put";
import { mensHammer } from "./events/mens-hammer";
import { mensHammerChampions } from "./champions/mens-hammer";
import { womensHammer } from "./events/womens-hammer";
import { womensHammerChampions } from "./champions/womens-hammer";
import { mensJavelin } from "./events/mens-javelin";
import { mensJavelinChampions } from "./champions/mens-javelin";
import { womensJavelin } from "./events/womens-javelin";
import { womensJavelinChampions } from "./champions/womens-javelin";
import { mensMarathon } from "./events/mens-marathon";
import { mensMarathonChampions } from "./champions/mens-marathon";
import { womensMarathon } from "./events/womens-marathon";
import { womensMarathonChampions } from "./champions/womens-marathon";



export const events = [
  { ...mens100m, champions: mens100mChampions },
  { ...womens100m, champions: womens100mChampions },
  { ...mens200m, champions: mens200mChampions },
  { ...womens200m, champions: womens200mChampions },
  { ...mens400m, champions: mens400mChampions },
  { ...womens400m, champions: womens400mChampions },
  { ...mens110mHurdles, champions: mens110mHurdlesChampions },
  { ...womens100mHurdles, champions: womens100mHurdlesChampions },
  { ...mens400mHurdles, champions: mens400mHurdlesChampions },
  { ...womens400mHurdles, champions: womens400mHurdlesChampions },
  { ...mensDiscusThrow, champions: mensDiscusThrowChampions },
  { ...womensDiscusThrow, champions: womensDiscusThrowChampions },
  { ...mens4x100mRelay, champions: mens4x100mRelayChampions },
  { ...womens4x100mRelay, champions: womens4x100mRelayChampions },
  { ...mens4x400mRelay, champions: mens4x400mRelayChampions },
  { ...womens4x400mRelay, champions: womens4x400mRelayChampions },
  { ...mens800m, champions: mens800mChampions },
  { ...womens800m, champions: womens800mChampions },
  { ...mens1500m, champions: mens1500mChampions },
  { ...womens1500m, champions: womens1500mChampions },
  { ...mensPoleVault, champions: mensPoleVaultChampions },
  { ...womensPoleVault, champions: womensPoleVaultChampions },
  { ...mensHighJump, champions: mensHighJumpChampions },
  { ...womensHighJump, champions: womensHighJumpChampions },
  { ...mensLongJump, champions: mensLongJumpChampions },
  { ...womensLongJump, champions: womensLongJumpChampions },
  { ...mensTripleJump, champions: mensTripleJumpChampions },
  { ...womensTripleJump, champions: womensTripleJumpChampions },
  { ...mens5000m, champions: mens5000mChampions },
  { ...womens5000m, champions: womens5000mChampions },
  { ...mens10000m, champions: mens10000mChampions },
  { ...womens10000m, champions: womens10000mChampions },
  { ...mensShotPut, champions: mensShotPutChampions },
  { ...womensShotPut, champions: womensShotPutChampions },
  { ...mensHammer, champions: mensHammerChampions },
  { ...womensHammer, champions: womensHammerChampions },
  { ...mensJavelin, champions: mensJavelinChampions },
  { ...womensJavelin, champions: womensJavelinChampions },
  { ...mensMarathon, champions: mensMarathonChampions },
  { ...womensMarathon, champions: womensMarathonChampions },
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
