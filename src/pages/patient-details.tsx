"use client";

import { DataTable } from "@/components/ui/data-table";
import { columns, type Patient } from "./patient-columns";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const patients: Patient[] = [
  { id: "1", name: "John Doe", age: 45, condition: "Diabetes" },
  { id: "2", name: "Jane Smith", age: 32, condition: "Hypertension" },
  { id: "3", name: "Michael Brown", age: 60, condition: "Asthma" },
  { id: "4", name: "Emily Johnson", age: 28, condition: "Anemia" },
  { id: "5", name: "David Wilson", age: 52, condition: "Arthritis" },
  { id: "6", name: "Sophia Martinez", age: 36, condition: "Migraine" },
  { id: "7", name: "James Anderson", age: 41, condition: "Obesity" },
  { id: "8", name: "Olivia Taylor", age: 29, condition: "Thyroid Disorder" },
  { id: "9", name: "William Thomas", age: 55, condition: "Heart Disease" },
  { id: "10", name: "Isabella Moore", age: 33, condition: "PCOS" },
  { id: "11", name: "Alexander Jackson", age: 47, condition: "Sleep Apnea" },
  { id: "12", name: "Mia White", age: 24, condition: "Allergies" },
  { id: "13", name: "Benjamin Harris", age: 62, condition: "Parkinson’s" },
  { id: "14", name: "Charlotte Clark", age: 38, condition: "Depression" },
  { id: "15", name: "Henry Lewis", age: 50, condition: "Chronic Kidney Disease" },
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
