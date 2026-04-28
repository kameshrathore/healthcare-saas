// src/pages/analytics.tsx
"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
} from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/ui/chart";

// Patient data (monthly hospital stats)
const chartData = [
  { month: "January", opd: 320, ipd: 120 },
  { month: "February", opd: 410, ipd: 180 },
  { month: "March", opd: 380, ipd: 150 },
  { month: "April", opd: 290, ipd: 200 },
  { month: "May", opd: 450, ipd: 210 },
  { month: "June", opd: 500, ipd: 230 },
];

// Chart config
const chartConfig = {
  opd: {
    label: "OPD Patients",
    color: "#22c55e", // green
  },
  ipd: {
    label: "IPD Patients",
    color: "#f97316", // orange
  },
} satisfies ChartConfig;

export default function Analytics() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-text-h font-heading text-2xl">
        Patient Analytics
      </h2>

      <ChartContainer config={chartConfig} className="h-[380px] w-full">
        <BarChart
          accessibilityLayer
          data={chartData}
          margin={{ top: 10, right: 20, left: 0, bottom: 5 }}
          barGap={10}
        >
          {/* Grid */}
          <CartesianGrid vertical={false} strokeDasharray="3 3" />

          {/* X Axis */}
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />

          {/* Tooltip */}
          <ChartTooltip content={<ChartTooltipContent />} />

          {/* Legend */}
          <ChartLegend content={<ChartLegendContent />} />

          {/* Bars */}
          <Bar
            dataKey="opd"
            fill="var(--color-opd)"
            radius={[6, 6, 0, 0]}
          />
          <Bar
            dataKey="ipd"
            fill="var(--color-ipd)"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
