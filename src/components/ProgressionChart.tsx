"use client";

import { useMemo, useState } from "react";

export interface ChartRecord {
  mark: string;
  value: number;
  holder: string;
  holderDisplay: string;
  countryZh: string;
  date: string;
  dateLabel: string;
  meet?: string;
}

export interface ChartMark {
  date: string;
  label: string;
}

export interface ChartEra {
  from: string;
  to: string;
  label: string;
}

const W = 900;
const H = 440;
const M = { top: 28, right: 150, bottom: 42, left: 58 };
const PW = W - M.left - M.right;
const PH = H - M.top - M.bottom;

function yearFrac(iso: string): number {
  const [y, m = 1, d = 1] = iso.split("-").map(Number);
  return y + (m - 1) / 12 + (d - 1) / 365;
}

/** 从候选档位里选出合适的坐标刻度步长 */
function niceStep(range: number): number {
  const candidates = [0.05, 0.1, 0.2, 0.25, 0.5, 1, 2, 5, 10, 20, 30, 60];
  for (const c of candidates) {
    if (range / c <= 8) return c;
  }
  return 120;
}

function tickLabel(v: number, unit: string): string {
  if (unit === "秒" && v >= 60) {
    const m = Math.floor(v / 60);
    const s = v - m * 60;
    return `${m}:${s.toFixed(2).padStart(5, "0")}`;
  }
  if (unit === "米" || unit === "秒") return `${v}`;
  return `${Math.round(v)}`;
}

export function ProgressionChart({
  records,
  marks = [],
  era,
  unit = "秒",
  higherIsBetter = false,
}: {
  records: ChartRecord[];
  marks?: ChartMark[];
  era?: ChartEra;
  /** 坐标轴单位（秒 / 米 / 分） */
  unit?: string;
  /** 田赛纪录越破越高，坐标方向反转 */
  higherIsBetter?: boolean;
}) {
  const [hover, setHover] = useState<number | null>(null);

  const chart = useMemo(() => {
    if (records.length < 2) return null;

    const xs = records.map((r) => yearFrac(r.date));
    const vs = records.map((r) => r.value);
    const x0 = xs[0];
    const x1 = Math.max(xs[xs.length - 1] + 0.5, x0 + 1);
    const step = niceStep(Math.max(...vs) - Math.min(...vs));
    const pad = step * 1.5;
    const vLo = Math.min(...vs) - (higherIsBetter ? 0 : pad);
    const vHi = Math.max(...vs) + (higherIsBetter ? pad : 0);
    const vMin = higherIsBetter
      ? Math.floor(vLo / step) * step
      : Math.floor(vLo / step) * step;
    const vMax = Math.ceil(vHi / step) * step;

    const px = (yf: number) => M.left + ((yf - x0) / (x1 - x0)) * PW;
    // 径赛：越低越快，y 轴向下放大（成绩越小越靠上）；
    // 田赛：越高越远，y 轴向上放大
    const py = higherIsBetter
      ? (v: number) => M.top + ((v - vMin) / (vMax - vMin)) * PH
      : (v: number) => M.top + ((vMax - v) / (vMax - vMin)) * PH;

    // 阶梯折线：每项纪录保持到下一项诞生
    let path = `M ${px(xs[0])} ${py(vs[0])}`;
    for (let i = 1; i < records.length; i++) {
      path += ` L ${px(xs[i])} ${py(vs[i - 1])} L ${px(xs[i])} ${py(vs[i])}`;
    }
    path += ` L ${px(x1)} ${py(vs[vs.length - 1])}`;

    const baseY = higherIsBetter ? M.top : M.top + PH;
    const area = `${path} L ${px(x1)} ${baseY} L ${px(xs[0])} ${baseY} Z`;

    const vTicks: number[] = [];
    for (let t = vMin; t <= vMax + 1e-9; t += step) vTicks.push(Number(t.toFixed(3)));

    const xStep = x1 - x0 > 60 ? 20 : 10;
    const xTicks: number[] = [];
    for (let y = Math.ceil(x0 / xStep) * xStep; y <= x1; y += xStep) xTicks.push(y);

    return {
      px,
      py,
      xs,
      vs,
      x0,
      x1,
      vMin,
      vMax,
      path,
      area,
      vTicks,
      xTicks,
      eraX1: era ? px(yearFrac(era.from)) : 0,
      eraX2: era ? px(yearFrac(era.to)) : 0,
      bottom: M.top + PH,
      hasEra: era ? yearFrac(era.to) > x0 && yearFrac(era.from) < x1 : false,
    };
  }, [records, era, higherIsBetter]);

  if (!chart) return null;

  const {
    px,
    py,
    xs,
    vs,
    path,
    area,
    vTicks,
    xTicks,
    eraX1,
    eraX2,
    bottom,
    hasEra,
  } = chart;

  const last = records.length - 1;
  const h = hover !== null ? records[hover] : null;

  // 悬浮提示定位（限制在画布内）
  const tipW = 200;
  const tipH = 66;
  const tipX =
    hover !== null
      ? Math.min(Math.max(px(xs[hover]) - tipW / 2, M.left + 2), W - tipW - 4)
      : 0;
  const tipY =
    hover !== null
      ? Math.min(Math.max(py(vs[hover]) - tipH - 14, M.top + 2), bottom - tipH)
      : 0;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full"
      role="img"
      aria-label="世界纪录演进阶梯图"
      onMouseLeave={() => setHover(null)}
    >
      {/* 时代色带（可选） */}
      {hasEra && era && (
        <g>
          <rect
            x={eraX1}
            y={M.top}
            width={Math.max(eraX2 - eraX1, 1.5)}
            height={PH}
            fill="#f59e0b"
            opacity={0.12}
          />
          <text
            x={Math.max(eraX1, 4) + 10}
            y={M.top + PH / 2}
            fontSize={11}
            fill="#b45309"
            opacity={0.9}
            textAnchor="middle"
            transform={`rotate(-90 ${Math.max(eraX1, 4) + 10} ${M.top + PH / 2})`}
          >
            {era.label}
          </text>
        </g>
      )}

      {/* 网格与坐标轴 */}
      {vTicks.map((t) => (
        <g key={t}>
          <line
            x1={M.left}
            x2={W - M.right}
            y1={py(t)}
            y2={py(t)}
            stroke="#e2e8f0"
            strokeDasharray="3 4"
          />
          <text
            x={M.left - 8}
            y={py(t) + 4}
            fontSize={11}
            fill="#94a3b8"
            textAnchor="end"
          >
            {tickLabel(t, unit)}
          </text>
        </g>
      ))}
      {xTicks.map((t) => (
        <text
          key={t}
          x={px(t)}
          y={bottom + 22}
          fontSize={11}
          fill="#94a3b8"
          textAnchor="middle"
        >
          {t}
        </text>
      ))}
      <text
        x={M.left - 44}
        y={M.top - 12}
        fontSize={11}
        fill="#64748b"
      >
        成绩（{unit}）
      </text>

      {/* 历史标注 */}
      {marks.map((m) => {
        const mx = px(yearFrac(m.date));
        const labelX = Math.min(Math.max(mx, M.left + 30), W - M.right - 30);
        return (
          <g key={m.date + m.label}>
            <line
              x1={mx}
              x2={mx}
              y1={M.top}
              y2={bottom}
              stroke="#94a3b8"
              strokeDasharray="4 4"
            />
            <text
              x={labelX}
              y={M.top + 12}
              fontSize={11}
              fill="#475569"
              textAnchor="middle"
            >
              {m.label}
            </text>
          </g>
        );
      })}

      {/* 纪录保持面积与阶梯线 */}
      <path d={area} fill="#e8a087" opacity={0.18} />
      <path
        d={path}
        fill="none"
        stroke="#9a3412"
        strokeWidth={2}
        strokeLinejoin="round"
      />

      {/* 数据点 */}
      {records.map((r, i) => (
        <circle
          key={r.date + r.holder}
          cx={px(xs[i])}
          cy={py(vs[i])}
          r={i === last ? 5 : 3}
          fill={i === last ? "#f59e0b" : "#9a3412"}
          stroke="white"
          strokeWidth={i === last ? 2 : 0}
        />
      ))}

      {/* 现世界纪录标注 */}
      <text
        x={W - M.right + 12}
        y={py(vs[last]) - 4}
        fontSize={15}
        fontWeight={700}
        fill="#9a3412"
        fontFamily="var(--font-mono)"
      >
        {records[last].mark}
      </text>
      <text
        x={W - M.right + 12}
        y={py(vs[last]) + 12}
        fontSize={11}
        fill="#64748b"
      >
        {records[last].holderDisplay}
      </text>

      {/* 悬浮提示 */}
      {h && (
        <g pointerEvents="none">
          <rect
            x={tipX}
            y={tipY}
            width={tipW}
            height={tipH}
            rx={8}
            fill="white"
            stroke="#cbd5e1"
          />
          <text x={tipX + 12} y={tipY + 22} fontSize={13} fontWeight={700} fill="#431407">
            {h.mark}
            <tspan fill="#475569" fontWeight={400}>
              {"  "}
              {h.holderDisplay}
            </tspan>
          </text>
          <text x={tipX + 12} y={tipY + 40} fontSize={11} fill="#64748b">
            {h.dateLabel} · {h.countryZh}
          </text>
          <text x={tipX + 12} y={tipY + 56} fontSize={11} fill="#94a3b8">
            {h.meet ? h.meet.slice(0, 14) : "—"}
          </text>
        </g>
      )}

      {/* 悬浮命中区域 */}
      {records.map((r, i) => (
        <circle
          key={`hit-${r.date}-${r.holder}`}
          cx={px(xs[i])}
          cy={py(vs[i])}
          r={11}
          fill="transparent"
          style={{ cursor: "pointer" }}
          onMouseEnter={() => setHover(i)}
        />
      ))}
    </svg>
  );
}
