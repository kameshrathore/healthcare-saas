"use client";

import { DataTable } from "@/components/ui/data-table";
import { columns, type Patient } from "./patient-columns";

const patients: Patient[] = [
  { id: "1", name: "John Doe", age: 45, condition: "Diabetes" },
  { id: "2", name: "Jane Smith", age: 32, condition: "Hypertension" },
  { id: "3", name: "Michael Brown", age: 60, condition: "Asthma" },
];

export default function PatientDetails() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-text-h font-heading text-2xl">Patient Details</h2>
      <DataTable columns={columns} data={patients} />
    </div>
  );
}
