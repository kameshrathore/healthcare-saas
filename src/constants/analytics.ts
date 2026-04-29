import type { ChartConfig } from "@/components/ui/chart";

// 📊 CHART DATA
export const chartData = [
  { month: "January", opd: 320, ipd: 120, emergency: 90, lab: 210 },
  { month: "February", opd: 410, ipd: 180, emergency: 110, lab: 260 },
  { month: "March", opd: 380, ipd: 150, emergency: 100, lab: 240 },
  { month: "April", opd: 290, ipd: 200, emergency: 130, lab: 220 },
  { month: "May", opd: 450, ipd: 210, emergency: 140, lab: 300 },
  { month: "June", opd: 500, ipd: 230, emergency: 160, lab: 330 },
];

// 🥧 PIE DATA
export const pieData = [
  { name: "OPD", value: 2350 },
  { name: "IPD", value: 1090 },
  { name: "Emergency", value: 680 },
  { name: "Lab Tests", value: 1570 },
];

// 🎨 COLORS
export const COLORS = ["#22c55e", "#f97316", "#ef4444", "#3b82f6"];

// 📊 CONFIG
export const chartConfig: ChartConfig = {
  opd: { label: "OPD Patients", color: "#22c55e" },
  ipd: { label: "IPD Patients", color: "#f97316" },
  emergency: { label: "Emergency Cases", color: "#ef4444" },
  lab: { label: "Lab Tests", color: "#3b82f6" },
};