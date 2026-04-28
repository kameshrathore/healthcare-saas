"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

import {
  Users,
  Calendar,
  DollarSign,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 p-6 space-y-10">

      {/* 🔹 HEADER */}
      <div className="space-y-1">
        <h2 className="text-4xl font-bold tracking-tight">
          Dashboard
        </h2>
        <p className="text-muted-foreground">
          Welcome back 👋 Here’s your hospital overview in real time.
        </p>
      </div>

      {/* 🔹 KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Patients */}
        <Card className="relative overflow-hidden border bg-white/70 backdrop-blur-xl shadow-sm hover:shadow-2xl transition group">
          <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500 to-cyan-500" />

          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Total Patients</CardTitle>
              <CardDescription>Overall registered patients</CardDescription>
            </div>
            <Users className="h-6 w-6 text-blue-500 group-hover:scale-110 transition" />
          </CardHeader>

          <CardContent>
            <p className="text-3xl font-bold text-blue-600">120</p>

            <div className="flex items-center gap-2 mt-3">
              <Progress value={70} className="flex-1" />
              <span className="text-xs text-green-600 font-medium">
                +8% ↑
              </span>
            </div>

            <p className="text-xs text-muted-foreground mt-1">
              70% capacity used
            </p>
          </CardContent>
        </Card>

        {/* Appointments */}
        <Card className="relative overflow-hidden border bg-white/70 backdrop-blur-xl shadow-sm hover:shadow-2xl transition group">
          <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-purple-500 to-pink-500" />

          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Appointments</CardTitle>
              <CardDescription>Today's schedule</CardDescription>
            </div>
            <Calendar className="h-6 w-6 text-purple-500 group-hover:scale-110 transition" />
          </CardHeader>

          <CardContent>
            <p className="text-3xl font-bold text-purple-600">18</p>

            <div className="flex items-center gap-2 mt-3">
              <Progress value={40} className="flex-1" />
              <span className="text-xs text-yellow-600 font-medium">
                Busy
              </span>
            </div>

            <p className="text-xs text-muted-foreground mt-1">
              40% booked today
            </p>
          </CardContent>
        </Card>

        {/* Revenue */}
        <Card className="relative overflow-hidden border bg-white/70 backdrop-blur-xl shadow-sm hover:shadow-2xl transition group">
          <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-emerald-500 to-green-400" />

          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Revenue</CardTitle>
              <CardDescription>This month earnings</CardDescription>
            </div>
            <DollarSign className="h-6 w-6 text-green-500 group-hover:scale-110 transition" />
          </CardHeader>

          <CardContent>
            <p className="text-3xl font-bold text-green-600">$12,450</p>
            <div className="flex items-center justify-between mt-3">

  {/* left progress (optional future use) */}
  <div />

  {/* right trend badge */}
  <div className="flex items-center gap-1 text-xs font-medium text-green-600  px-2 py-1">
    <TrendingUp className="h-3.5 w-3.5" />
    +12.4%
  </div>

</div>
<div className="text-xs text-muted-foreground mt-1">
  +12.4% growth
</div>
          </CardContent>
        </Card>
      </div>

      {/* 🔹 Navigation Cards */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* Analytics */}
        <Card className="group hover:shadow-2xl transition-all cursor-pointer border bg-white/80 backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Analytics
              <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition" />
            </CardTitle>
            <CardDescription>
              View insights, trends, and performance metrics
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Button
              asChild
  className="w-full h-9 text-sm font-medium rounded-lg 
             bg-gradient-to-r from-indigo-500 to-purple-600 
             text-white shadow 
             hover:shadow-md hover:scale-[1.01] 
             transition-all duration-200"
            >
  <a href="/analytics" className="flex items-center justify-center gap-1.5">
    Go to Analytics
    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </CardContent>
        </Card>

        {/* Patients */}
        <Card className="group hover:shadow-2xl transition-all cursor-pointer border bg-white/80 backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Patient Details
              <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition" />
            </CardTitle>
            <CardDescription>
              Manage patient records and information
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Button
              asChild
  className="w-full h-9 text-sm font-medium rounded-lg 
             bg-gradient-to-r from-blue-500 to-cyan-500 
             text-white shadow 
             hover:shadow-md hover:scale-[1.01] 
             transition-all duration-200"
            >
  <a href="/patients" className="flex items-center justify-center gap-1.5">
                View Patients
    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </CardContent>
        </Card>

      </div>
      {/* 🔹 RECENT PATIENTS (IMPROVED FEED STYLE) */}
<Card className="border bg-white/70 backdrop-blur-xl shadow-sm hover:shadow-2xl transition">
  <CardHeader>
    <CardTitle>Recent Patients</CardTitle>
    <CardDescription>
      Latest patient activity in your hospital system
    </CardDescription>
  </CardHeader>

  <CardContent className="space-y-4">

    {[
      { name: "John Doe", condition: "Diabetes", status: "In Treatment", severity: "High", time: "2 hrs ago" },
      { name: "Jane Smith", condition: "Hypertension", status: "Active", severity: "Medium", time: "5 hrs ago" },
      { name: "Michael Brown", condition: "Asthma", status: "Discharged", severity: "Low", time: "1 day ago" },
      { name: "Emily Johnson", condition: "Anemia", status: "Active", severity: "Low", time: "1 day ago" },
      { name: "David Wilson", condition: "Arthritis", status: "In Treatment", severity: "Medium", time: "2 days ago" },
    ].map((p, i) => (
      <div
        key={i}
        className="flex items-center justify-between p-4 rounded-2xl border bg-white hover:bg-gray-50 transition group"
      >

        {/* LEFT - Avatar + Info */}
        <div className="flex items-center gap-3">

          {/* Avatar */}
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-semibold text-sm">
            {p.name.charAt(0)}
          </div>

          {/* Info */}
          <div>
            <p className="font-medium text-sm group-hover:text-indigo-600 transition">
              {p.name}
            </p>

            <p className="text-xs text-muted-foreground">
              {p.condition} • {p.time}
            </p>
          </div>

        </div>

        {/* RIGHT - Status */}
        <div className="flex flex-col items-end gap-1">

          <span
            className={`text-[11px] px-2 py-1 rounded-full font-medium ${
              p.status === "Active"
                ? "bg-blue-100 text-blue-600"
                : p.status === "In Treatment"
                ? "bg-purple-100 text-purple-600"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {p.status}
          </span>

          <span
            className={`text-[11px] px-2 py-1 rounded-full ${
              p.severity === "High"
                ? "bg-red-100 text-red-600"
                : p.severity === "Medium"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-green-100 text-green-600"
            }`}
          >
            {p.severity}
          </span>

        </div>

      </div>
    ))}
  </CardContent>
</Card>
    </div>
  );
}
