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
import {
  Users,
  Activity,
  HeartPulse,
  FlaskConical,
  BarChart3,
  LineChart as LineIcon,
  PieChart as PieIcon,
} from "lucide-react";

// 📊 UPDATED DATA (4 METRICS)
const chartData = [
  { month: "January", opd: 320, ipd: 120, emergency: 90, lab: 210 },
  { month: "February", opd: 410, ipd: 180, emergency: 110, lab: 260 },
  { month: "March", opd: 380, ipd: 150, emergency: 100, lab: 240 },
  { month: "April", opd: 290, ipd: 200, emergency: 130, lab: 220 },
  { month: "May", opd: 450, ipd: 210, emergency: 140, lab: 300 },
  { month: "June", opd: 500, ipd: 230, emergency: 160, lab: 330 },
];

// 🥧 PIE DATA (UPDATED)
const pieData = [
  { name: "OPD", value: 2350 },
  { name: "IPD", value: 1090 },
  { name: "Emergency", value: 680 },
  { name: "Lab Tests", value: 1570 },
];

const COLORS = ["#22c55e", "#f97316", "#ef4444", "#3b82f6"];

const chartConfig = {
  opd: { label: "OPD Patients", color: "#22c55e" },
  ipd: { label: "IPD Patients", color: "#f97316" },
  emergency: { label: "Emergency Cases", color: "#ef4444" },
  lab: { label: "Lab Tests", color: "#3b82f6" },
} satisfies ChartConfig;

export default function Analytics() {
  const [view, setView] = useState<"bar" | "line" | "pie">("bar");

  const totalOPD = chartData.reduce((a, b) => a + b.opd, 0);
  const totalIPD = chartData.reduce((a, b) => a + b.ipd, 0);
  const totalEmergency = chartData.reduce((a, b) => a + b.emergency, 0);
  const totalLab = chartData.reduce((a, b) => a + b.lab, 0);

  return (
    <div className="p-6 space-y-6">

      {/* 🔹 HEADER */}
      <div>
        <h2 className="text-3xl font-bold tracking-tight">
          Patient Analytics
        </h2>
        <p className="text-muted-foreground">
          Real-time hospital insights across OPD, IPD, Emergency & Lab systems
        </p>
      </div>

      {/* 🔹 KPI CARDS */}
      <div className="grid md:grid-cols-4 gap-4">

        <Card className="hover:shadow-xl transition bg-green-50">
          <CardContent className="p-4 flex justify-between items-center">
            <div>
              <p className="text-sm text-muted-foreground">OPD</p>
              <p className="text-2xl font-bold text-green-600">{totalOPD}</p>
            </div>
            <Users className="h-5 w-5 text-green-500" />
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition bg-orange-50">
          <CardContent className="p-4 flex justify-between items-center">
            <div>
              <p className="text-sm text-muted-foreground">IPD</p>
              <p className="text-2xl font-bold text-orange-500">{totalIPD}</p>
            </div>
            <Activity className="h-5 w-5 text-orange-500" />
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition bg-red-50">
          <CardContent className="p-4 flex justify-between items-center">
            <div>
              <p className="text-sm text-muted-foreground">Emergency</p>
              <p className="text-2xl font-bold text-red-500">{totalEmergency}</p>
            </div>
            <HeartPulse className="h-5 w-5 text-red-500" />
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition bg-blue-50">
          <CardContent className="p-4 flex justify-between items-center">
            <div>
              <p className="text-sm text-muted-foreground">Lab Tests</p>
              <p className="text-2xl font-bold text-blue-600">{totalLab}</p>
            </div>
            <FlaskConical className="h-5 w-5 text-blue-500" />
          </CardContent>
        </Card>

      </div>

      {/* 🔥 CENTERED TOGGLE */}
      <div className="flex justify-center">
        <div className="flex gap-2 bg-white/70 border rounded-xl p-2 shadow-sm">

          <button
            onClick={() => setView("bar")}
            className={`px-4 py-1.5 rounded-lg text-sm ${
              view === "bar" ? "bg-indigo-600 text-white" : "text-gray-600"
            }`}
          >
            <BarChart3 className="inline h-4 w-4 mr-1" />
            Bar
          </button>

          <button
            onClick={() => setView("line")}
            className={`px-4 py-1.5 rounded-lg text-sm ${
              view === "line" ? "bg-indigo-600 text-white" : "text-gray-600"
            }`}
          >
            <LineIcon className="inline h-4 w-4 mr-1" />
            Line
          </button>

          <button
            onClick={() => setView("pie")}
            className={`px-4 py-1.5 rounded-lg text-sm ${
              view === "pie" ? "bg-indigo-600 text-white" : "text-gray-600"
            }`}
          >
            <PieIcon className="inline h-4 w-4 mr-1" />
            Pie
          </button>

        </div>
      </div>

      {/* 🔹 CHART */}
      <Card className="hover:shadow-xl transition">
        <CardContent className="p-4">

          <ChartContainer config={chartConfig} className="h-[420px] w-full">

            {/* BAR */}
            {view === "bar" && (
              <BarChart data={chartData}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <Tooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />

                <Bar dataKey="opd" fill="#22c55e" radius={[6, 6, 0, 0]} />
                <Bar dataKey="ipd" fill="#f97316" radius={[6, 6, 0, 0]} />
                <Bar dataKey="emergency" fill="#ef4444" radius={[6, 6, 0, 0]} />
                <Bar dataKey="lab" fill="#3b82f6" radius={[6, 6, 0, 0]} />
              </BarChart>
            )}

            {/* LINE */}
            {view === "line" && (
              <LineChart data={chartData}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <Tooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />

                <Line type="monotone" dataKey="opd" stroke="#22c55e" strokeWidth={2} />
                <Line type="monotone" dataKey="ipd" stroke="#f97316" strokeWidth={2} />
                <Line type="monotone" dataKey="emergency" stroke="#ef4444" strokeWidth={2} />
                <Line type="monotone" dataKey="lab" stroke="#3b82f6" strokeWidth={2} />
              </LineChart>
            )}

            {/* PIE */}
            {view === "pie" && (
              <PieChart>
                <Tooltip />
                <Pie data={pieData} cx="50%" cy="50%" outerRadius={120} dataKey="value" label>
                  {pieData.map((_, index) => (
                    <Cell key={index} fill={COLORS[index]} />
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
