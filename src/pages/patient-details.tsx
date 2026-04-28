"use client";

import { DataTable } from "@/components/ui/data-table";
import { columns, type Patient } from "./patient-columns";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const patients: Patient[] = [
  { id: "1", name: "John Doe", age: 45, condition: "Diabetes" },
  { id: "2", name: "Jane Smith", age: 32, condition: "Hypertension" },
  { id: "3", name: "Michael Brown", age: 60, condition: "Asthma" },
];

export default function PatientDetails() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 space-y-6">

      {/* 🔹 Header */}
      <div className="space-y-1">
        <h2 className="text-3xl font-bold tracking-tight">
          Patient Details
        </h2>
        <p className="text-muted-foreground">
          Manage and view all patient records in one place.
        </p>
      </div>

      {/* 🔹 Table Card */}
      <Card className="shadow-sm hover:shadow-xl transition border bg-white/80 backdrop-blur">
        <CardHeader>
          <CardTitle>All Patients</CardTitle>
          <CardDescription>
            A list of all registered patients
          </CardDescription>
        </CardHeader>

        <CardContent>
          <DataTable columns={columns} data={patients} />
        </CardContent>
      </Card>

    </div>
  );
}
