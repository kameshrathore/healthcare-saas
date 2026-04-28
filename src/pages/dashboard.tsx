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

import { Users, Calendar, DollarSign, ArrowRight } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 space-y-8">

      {/* 🔹 Header */}
      <div className="space-y-1">
        <h2 className="text-3xl font-bold tracking-tight">
          Dashboard
        </h2>
        <p className="text-muted-foreground">
          Welcome back 👋 Here’s what’s happening today.
        </p>
      </div>

      {/* 🔹 Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6">

        {/* Patients */}
        <Card className="shadow-sm hover:shadow-xl transition border bg-white/80 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Total Patients</CardTitle>
              <CardDescription>Overall patient count</CardDescription>
            </div>
            <Users className="h-6 w-6 text-blue-500" />
          </CardHeader>

          <CardContent>
            <p className="text-3xl font-bold text-blue-600">120</p>
            <Progress value={70} className="mt-3" />
            <p className="text-xs text-muted-foreground mt-1">
              70% capacity
            </p>
          </CardContent>
        </Card>

        {/* Appointments */}
        <Card className="shadow-sm hover:shadow-xl transition border bg-white/80 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Appointments</CardTitle>
              <CardDescription>Today's bookings</CardDescription>
            </div>
            <Calendar className="h-6 w-6 text-purple-500" />
          </CardHeader>

          <CardContent>
            <p className="text-3xl font-bold text-purple-600">18</p>
            <Progress value={40} className="mt-3" />
            <p className="text-xs text-muted-foreground mt-1">
              40% booked
            </p>
          </CardContent>
        </Card>

        {/* Revenue */}
        <Card className="shadow-sm hover:shadow-xl transition border bg-white/80 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Revenue</CardTitle>
              <CardDescription>This month</CardDescription>
            </div>
            <DollarSign className="h-6 w-6 text-green-500" />
          </CardHeader>

          <CardContent>
            <p className="text-3xl font-bold text-green-600">$12,450</p>
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
    </div>
  );
}