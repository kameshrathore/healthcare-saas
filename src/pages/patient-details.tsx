"use client";

import { useState } from "react";
import { DataTable } from "@/components/ui/data-table";
import { columns, type Patient } from "./patient-columns";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const patients: Patient[] = [
  {
    id: "PT-1001",
    name: "John Doe",
    age: 45,
    gender: "Male",
    phone: "+91 9876543210",
    condition: "Diabetes",
    severity: "High",
    lastVisit: "2026-04-20",
    status: "In Treatment",
  },
  {
    id: "PT-1002",
    name: "Jane Smith",
    age: 32,
    gender: "Female",
    phone: "+91 9123456780",
    condition: "Hypertension",
    severity: "Medium",
    lastVisit: "2026-04-10",
    status: "Active",
  },
  {
    id: "PT-1003",
    name: "Michael Brown",
    age: 60,
    gender: "Male",
    phone: "+91 9988776655",
    condition: "Asthma",
    severity: "Low",
    lastVisit: "2026-03-28",
    status: "Discharged",
  },
  {
    id: "PT-1004",
    name: "Emily Johnson",
    age: 28,
    gender: "Female",
    phone: "+91 9011122233",
    condition: "Anemia",
    severity: "Low",
    lastVisit: "2026-04-15",
    status: "Active",
  },
  {
    id: "PT-1005",
    name: "David Wilson",
    age: 52,
    gender: "Male",
    phone: "+91 9112233445",
    condition: "Arthritis",
    severity: "Medium",
    lastVisit: "2026-04-01",
    status: "In Treatment",
  },
];

export default function PatientDetails() {
  const [isListView, setIsListView] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 space-y-6">

      {/* 🔹 HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <div className="space-y-1 text-left">
          <h2 className="text-3xl font-bold tracking-tight">
            Patient Details
          </h2>
          <p className="text-muted-foreground">
            Manage, track, and view all patient records efficiently.
          </p>
        </div>

        {/* 🔹 TOGGLE */}
        <div className="flex items-center space-x-3 bg-white/70 px-4 py-2 rounded-lg shadow-sm border">
          <Label
            htmlFor="view-toggle"
            className="font-medium text-sm text-gray-700"
          >
            {isListView ? "List View" : "Grid View"}
          </Label>

          <Switch
            id="view-toggle"
            checked={isListView}
            onCheckedChange={setIsListView}
            className="data-[state=checked]:bg-indigo-600 data-[state=unchecked]:bg-gray-300"
          />
        </div>

      </div>

      {/* 🔹 TABLE / GRID */}
      {isListView ? (
        <Card className="shadow-md hover:shadow-xl transition border bg-white/90 backdrop-blur">
          <CardContent>
            <DataTable columns={columns} data={patients} />
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {patients.map((p) => (
            <Card
              key={p.id}
              className="shadow-md hover:shadow-lg transition border bg-white/90 backdrop-blur rounded-xl"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold text-indigo-700">
                  {p.name}
                </CardTitle>
                <CardDescription className="text-sm text-gray-500">
                  {p.condition}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-1 text-sm text-gray-600">
                <p>Age: {p.age}</p>
                <p>Gender: {p.gender}</p>
                <p>Phone: {p.phone}</p>
                <p>Severity: {p.severity}</p>
                <p>Status: {p.status}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
