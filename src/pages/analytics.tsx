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

// Sample data
const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

// Chart config for labels + colors
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb", // blue
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa", // light blue
  },
} satisfies ChartConfig;

export default function Analytics() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-text-h font-heading text-2xl mb-4">Analytics</h2>

      {/* Bar Chart */}
      <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          {/* Grid */}
          <CartesianGrid vertical={false} />

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
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
