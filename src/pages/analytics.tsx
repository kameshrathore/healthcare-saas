"use client";

import { useState } from "react";

import {
  Bar,
  BarChart,
  Line,
  LineChart,
  Pie,
  PieChart,
  Cell,
  CartesianGrid,
  XAxis,
  Tooltip,
} from "recharts";

import {
  ChartContainer,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/ui/chart";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Users,
  Activity,
  BarChart3,
  LineChart as LineIcon,
  PieChart as PieIcon,
} from "lucide-react";

// 📊 DATA
const chartData = [
  { month: "January", opd: 320, ipd: 120 },
  { month: "February", opd: 410, ipd: 180 },
  { month: "March", opd: 380, ipd: 150 },
  { month: "April", opd: 290, ipd: 200 },
  { month: "May", opd: 450, ipd: 210 },
  { month: "June", opd: 500, ipd: 230 },
];

// 📊 PIE DATA
const pieData = [
  { name: "OPD", value: 2350 },
  { name: "IPD", value: 1090 },
];

// 📊 COLORS
const COLORS = ["#22c55e", "#f97316"];

// 📊 CONFIG
const chartConfig = {
  opd: { label: "OPD Patients", color: "#22c55e" },
  ipd: { label: "IPD Patients", color: "#f97316" },
} satisfies ChartConfig;

export default function Analytics() {
  const [view, setView] = useState<"bar" | "line" | "pie">("bar");

  const totalOPD = chartData.reduce((a, b) => a + b.opd, 0);
  const totalIPD = chartData.reduce((a, b) => a + b.ipd, 0);

  return (
    <div className="p-6 space-y-6">

      {/* 🔹 HEADER */}
      <div>
        <h2 className="text-3xl font-bold tracking-tight">
          Patient Analytics
        </h2>
        <p className="text-muted-foreground">
          Multi-view insights for OPD, IPD and hospital performance
        </p>
      </div>

      {/* 🔹 VIEW SWITCH */}
      <div className="flex gap-2 flex-wrap">

        <Badge
          onClick={() => setView("bar")}
          className={`cursor-pointer px-3 py-1 ${
            view === "bar"
              ? "bg-indigo-600 text-white"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          <BarChart3 className="h-3 w-3 mr-1" />
          Bar
        </Badge>

        <Badge
          onClick={() => setView("line")}
          className={`cursor-pointer px-3 py-1 ${
            view === "line"
              ? "bg-indigo-600 text-white"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          <LineIcon className="h-3 w-3 mr-1" />
          Line
        </Badge>

        <Badge
          onClick={() => setView("pie")}
          className={`cursor-pointer px-3 py-1 ${
            view === "pie"
              ? "bg-indigo-600 text-white"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          <PieIcon className="h-3 w-3 mr-1" />
          Pie
        </Badge>

      </div>

      {/* 🔹 KPI CARDS */}
      <div className="grid md:grid-cols-3 gap-4">

        <Card className="hover:shadow-xl transition bg-gradient-to-br from-green-50 to-white">
          <CardContent className="p-4 flex justify-between items-center">
            <div>
              <p className="text-sm text-muted-foreground">Total OPD</p>
              <p className="text-2xl font-bold text-green-600">
                {totalOPD}
              </p>
            </div>
            <Users className="h-6 w-6 text-green-500" />
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition bg-gradient-to-br from-orange-50 to-white">
          <CardContent className="p-4 flex justify-between items-center">
            <div>
              <p className="text-sm text-muted-foreground">Total IPD</p>
              <p className="text-2xl font-bold text-orange-500">
                {totalIPD}
              </p>
            </div>
            <Activity className="h-6 w-6 text-orange-500" />
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition bg-gradient-to-br from-blue-50 to-white">
          <CardContent className="p-4 flex justify-between items-center">
            <div>
              <p className="text-sm text-muted-foreground">Growth</p>
              <p className="text-2xl font-bold text-blue-600">+18%</p>
            </div>
            <TrendingUp className="h-6 w-6 text-blue-500" />
          </CardContent>
        </Card>

      </div>

      {/* 🔹 CHART */}
      <Card className="hover:shadow-xl transition">
        <CardContent className="p-4">

          <ChartContainer config={chartConfig} className="h-[420px] w-full">

            {/* 📊 BAR CHART */}
            {view === "bar" && (
              <BarChart data={chartData}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <Tooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />

                <Bar dataKey="opd" fill="#22c55e" radius={[8, 8, 0, 0]} />
                <Bar dataKey="ipd" fill="#f97316" radius={[8, 8, 0, 0]} />
              </BarChart>
            )}

            {/* 📈 LINE CHART */}
            {view === "line" && (
              <LineChart data={chartData}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <Tooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />

                <Line type="monotone" dataKey="opd" stroke="#22c55e" strokeWidth={3} />
                <Line type="monotone" dataKey="ipd" stroke="#f97316" strokeWidth={3} />
              </LineChart>
            )}

            {/* 🥧 PIE CHART */}
            {view === "pie" && (
              <PieChart>
                <Tooltip />
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  dataKey="value"
                  label
                >
                  {pieData.map((entry) => (
                    <Cell key={entry.name} fill={COLORS[pieData.indexOf(entry)]} />
                  ))}
                </Pie>
              </PieChart>
            )}

          </ChartContainer>

        </CardContent>
      </Card>

    </div>
  );
}
