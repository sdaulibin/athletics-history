# 田径史

田径项目历史与世界纪录演进站点——姊妹项目 [泳史](../swim) 的田径版。

- **技术栈**：Next.js（App Router + TypeScript）+ Tailwind CSS，纯静态导出（`output: export`），演进图为手写 SVG 阶梯图
- **数据模型**：`src/lib/types.ts`——径赛时间 / 田赛距离 / 全能分数三类成绩、风速字段、`ratified: false` 保留被取消纪录
- **数据文件**：`src/data/events/<slug>.ts`（演进+历史+前十）+ `src/data/champions/<slug>.ts`（冠军矩阵），在 `src/data/index.ts` 注册
- **纪律**：宁缺毋滥，查不到标「未能核实」，单源标「待复核」，被兴奋剂取消的纪录入册存史

## 开发

```bash
npm install
npm run dev    # 开发
npm run build  # 静态导出到 out/
```
