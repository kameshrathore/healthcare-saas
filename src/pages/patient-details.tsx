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
import { LayoutGrid, List } from "lucide-react";

// ---------------- DATA ----------------
const patients: Patient[] = [ { id: "PT-1001", name: "John Doe", age: 45, gender: "Male", phone: "+91 9876543210", condition: "Diabetes", severity: "High", lastVisit: "2026-04-20", status: "In Treatment", }, { id: "PT-1002", name: "Jane Smith", age: 32, gender: "Female", phone: "+91 9123456780", condition: "Hypertension", severity: "Medium", lastVisit: "2026-04-10", status: "Active", }, { id: "PT-1003", name: "Michael Brown", age: 60, gender: "Male", phone: "+91 9988776655", condition: "Asthma", severity: "Low", lastVisit: "2026-03-28", status: "Discharged", }, { id: "PT-1004", name: "Emily Johnson", age: 28, gender: "Female", phone: "+91 9011122233", condition: "Anemia", severity: "Low", lastVisit: "2026-04-15", status: "Active", }, { id: "PT-1005", name: "David Wilson", age: 52, gender: "Male", phone: "+91 9112233445", condition: "Arthritis", severity: "Medium", lastVisit: "2026-04-01", status: "In Treatment", }, { id: "PT-1006", name: "Sophia Martinez", age: 36, gender: "Female", phone: "+91 9001122334", condition: "Migraine", severity: "Low", lastVisit: "2026-03-25", status: "Active", }, { id: "PT-1007", name: "James Anderson", age: 41, gender: "Male", phone: "+91 8899001122", condition: "Obesity", severity: "Medium", lastVisit: "2026-04-18", status: "In Treatment", }, { id: "PT-1008", name: "Olivia Taylor", age: 29, gender: "Female", phone: "+91 9988123412", condition: "Thyroid Disorder", severity: "Medium", lastVisit: "2026-04-12", status: "Active", }, { id: "PT-1009", name: "William Thomas", age: 55, gender: "Male", phone: "+91 9877001122", condition: "Heart Disease", severity: "High", lastVisit: "2026-04-05", status: "In Treatment", }, { id: "PT-1010", name: "Isabella Moore", age: 33, gender: "Female", phone: "+91 9123004455", condition: "PCOS", severity: "Medium", lastVisit: "2026-03-30", status: "Active", }, { id: "PT-1011", name: "Alexander Jackson", age: 47, gender: "Male", phone: "+91 9009876543", condition: "Sleep Apnea", severity: "Low", lastVisit: "2026-04-02", status: "Active", }, { id: "PT-1012", name: "Mia White", age: 24, gender: "Female", phone: "+91 8899123456", condition: "Allergies", severity: "Low", lastVisit: "2026-04-19", status: "Active", }, { id: "PT-1013", name: "Benjamin Harris", age: 62, gender: "Male", phone: "+91 9000112233", condition: "Parkinson’s", severity: "High", lastVisit: "2026-03-20", status: "In Treatment", }, { id: "PT-1014", name: "Charlotte Clark", age: 38, gender: "Female", phone: "+91 9111002233", condition: "Depression", severity: "Medium", lastVisit: "2026-04-08", status: "Active", }, { id: "PT-1015", name: "Henry Lewis", age: 50, gender: "Male", phone: "+91 9223344556", condition: "Chronic Kidney Disease", severity: "High", lastVisit: "2026-04-11", status: "In Treatment", }, ];

export default function PatientDetails() {
  const [isListView, setIsListView] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 space-y-6">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <div className="space-y-1 text-left">
          <h2 className="text-3xl font-bold tracking-tight">
            Patient Details
          </h2>
          <p className="text-muted-foreground">
            Manage, track, and view all patient records efficiently.
          </p>
        </div>

        {/* SWITCH */}
        <div className="flex items-center bg-white/80 border rounded-full p-1 shadow-sm w-fit">

          <button
            onClick={() => setIsListView(true)}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm transition ${
              isListView ? "bg-indigo-600 text-white shadow" : "text-gray-600"
            }`}
          >
            <List className="h-4 w-4" />
            List
          </button>

          <button
            onClick={() => setIsListView(false)}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm transition ${
              !isListView ? "bg-indigo-600 text-white shadow" : "text-gray-600"
            }`}
          >
            <LayoutGrid className="h-4 w-4" />
            Grid
          </button>

        </div>

      </div>

      {/* TABLE VIEW */}
      {isListView ? (
        <Card className="shadow-md hover:shadow-xl transition border bg-white/90 backdrop-blur">
          <CardContent>
            <DataTable columns={columns} data={patients} />
          </CardContent>
        </Card>
      ) : (

        /* ---------------- PREMIUM GRID VIEW ---------------- */
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

  {patients.map((p) => (
    <Card
      key={p.id}
      className="group relative overflow-hidden rounded-2xl border bg-white/70 backdrop-blur-xl shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
    >

      {/* gradient top strip */}
      <div
        className={`h-1 w-full ${
          p.severity === "High"
            ? "bg-gradient-to-r from-red-500 to-pink-500"
            : p.severity === "Medium"
            ? "bg-gradient-to-r from-yellow-400 to-orange-400"
            : "bg-gradient-to-r from-green-400 to-emerald-500"
        }`}
      />

      {/* HEADER */}
      <CardHeader className="pb-3 space-y-2">
        <div className="flex justify-between items-start">

          <div>
            <CardTitle className="text-lg font-semibold tracking-tight">
              {p.name}
            </CardTitle>

            <CardDescription className="text-xs text-muted-foreground">
              ID: {p.id}
            </CardDescription>
          </div>

          {/* status */}
          <span className={`text-[11px] px-2 py-1 rounded-full font-medium ${
            p.status === "Active"
              ? "bg-blue-100 text-blue-700"
              : p.status === "In Treatment"
              ? "bg-purple-100 text-purple-700"
              : "bg-gray-100 text-gray-600"
          }`}>
            {p.status}
          </span>

        </div>

        {/* condition pill */}
        <div className="flex gap-2 flex-wrap">
          <span className="text-xs bg-black/5 px-2 py-1 rounded-full">
            {p.condition}
          </span>

          <span className={`text-xs px-2 py-1 rounded-full ${
            p.severity === "High"
              ? "bg-red-100 text-red-600"
              : p.severity === "Medium"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-green-100 text-green-600"
          }`}>
            {p.severity} Risk
          </span>
        </div>
      </CardHeader>

      {/* BODY */}
      <CardContent className="space-y-3 text-sm">

        <div className="grid grid-cols-2 gap-3 text-xs">

          <div className="bg-gray-50 rounded-lg p-2">
            <p className="text-gray-400">Age</p>
            <p className="font-semibold">{p.age}</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-2">
            <p className="text-gray-400">Gender</p>
            <p className="font-semibold">{p.gender}</p>
          </div>

        </div>

        <div className="bg-gray-50 rounded-lg p-2 text-xs">
          <p className="text-gray-400">Phone</p>
          <p className="font-medium">{p.phone}</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-2 text-xs">
          <p className="text-gray-400">Last Visit</p>
          <p className="font-medium">{p.lastVisit}</p>
        </div>

      </CardContent>

      {/* FOOTER ACTIONS */}
      <div className="flex items-center justify-between px-5 pb-4">

        <button className="text-xs text-gray-500 hover:text-indigo-600 transition">
          View
        </button>

        <button className="text-xs bg-indigo-600 text-white px-3 py-1 rounded-full hover:bg-indigo-700 transition">
          Contact
        </button>

      </div>

    </Card>
  ))}

</div>
      )}

    </div>
  );
}
