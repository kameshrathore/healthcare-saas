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
  const [isListView, setIsListView] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 space-y-6">
      {/* 🔹 Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="space-y-1 text-left">
  <h2 className="text-3xl font-bold tracking-tight">Patient Details</h2>
  <p className="text-muted-foreground">
    Manage and view all patient records in one place.
  </p>
</div>


        {/* 🔹 Toggle Switch */}
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

      {/* 🔹 Patient Data */}
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
              <CardContent>
                <p className="text-sm text-gray-600">Age: {p.age}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
