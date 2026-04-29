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

import { LayoutGrid, List, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

/* ---------------- TYPES ---------------- */
type Gender = "Male" | "Female" | "Other";
type Severity = "Low" | "Medium" | "High";
type Status = "Active" | "In Treatment" | "Discharged";

/* ---------------- DATA ---------------- */
const initialPatients: Patient[] = [
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
];

/* ---------------- COMPONENT ---------------- */
export default function PatientDetails() {
  const [isListView, setIsListView] = useState(true);
  const [patients, setPatients] = useState<Patient[]>(initialPatients);
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState<{
    name: string;
    age: string;
    gender: Gender;
    phone: string;
    condition: string;
    severity: Severity;
    lastVisit: string;
    status: Status;
  }>({
    name: "",
    age: "",
    gender: "Male",
    phone: "",
    condition: "",
    severity: "Low",
    lastVisit: "",
    status: "Active",
  });

  const handleChange = (key: keyof typeof form, value: any) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };
  // 🔔 notification helper
function showNotification(title: string, body: string) {
  if (!("Notification" in window)) return;

  if (Notification.permission === "granted") {
    new Notification(title, {
      body,
      icon: "/favicon.svg",
    });
  }
}
  const handleSubmit = (e: any) => {
  e.preventDefault();

  const newPatient: Patient = {
    id: `PT-${1000 + patients.length + 1}`,
    name: form.name,
    age: Number(form.age),
    gender: form.gender,
    phone: form.phone,
    condition: form.condition,
    severity: form.severity,
    lastVisit: form.lastVisit,
    status: form.status,
  };

  setPatients((prev) => [newPatient, ...prev]);

  // ✅ SUCCESS NOTIFICATION
  showNotification(
    "Patient Added ✅",
    `${form.name} has been added successfully`
  );

  // reset form
  setForm({
    name: "",
    age: "",
    gender: "Male",
    phone: "",
    condition: "",
    severity: "Low",
    lastVisit: "",
    status: "Active",
  });

  setOpen(false);
};

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

        <div className="flex items-center gap-3">

          {/* ADD PATIENT */}
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm shadow hover:bg-indigo-700 transition">
                <Plus className="h-4 w-4" />
                Add Patient
              </button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-2xl bg-white p-0 overflow-hidden rounded-2xl">

              <div className="px-6 py-4 border-b bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
                <DialogTitle className="text-lg text-white font-semibold">
                  Add New Patient
                </DialogTitle>
    <p className="text-sm text-white opacity-90">
      Fill in patient details to create a new record
    </p>
              </div>

  {/* FORM */}
              <form onSubmit={handleSubmit} className="p-6 space-y-6">

    {/* BASIC INFO */}
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-black uppercase tracking-wide">
        Basic Information
      </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div className="space-y-1">
                    <Label>Name</Label>
                    <Input
            placeholder="Enter full name"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                    />
                  </div>

        <div className="space-y-1">
                    <Label>Age</Label>
                    <Input
                      type="number"
            placeholder="Enter age"
                      value={form.age}
                      onChange={(e) => handleChange("age", e.target.value)}
                      required
                    />
                  </div>

        <div className="space-y-1">
                    <Label>Gender</Label>
          <Select onValueChange={(v) => handleChange("gender", v)}>
                      <SelectTrigger>
              <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="Male">Male</SelectItem>
                        <SelectItem value="Female">Female</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

        <div className="space-y-1">
                    <Label>Phone</Label>
                    <Input
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      required
                    />
                  </div>

      </div>
    </div>

    {/* MEDICAL INFO */}
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-black uppercase tracking-wide">
        Medical Details
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div className="space-y-1">
                    <Label>Condition</Label>
                    <Select onValueChange={(v) => handleChange("condition", v)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select condition" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="Diabetes">Diabetes</SelectItem>
                        <SelectItem value="Hypertension">Hypertension</SelectItem>
              <SelectItem value="Asthma">Asthma</SelectItem>
              <SelectItem value="Heart Disease">Heart Disease</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

        <div className="space-y-1">
                    <Label>Severity</Label>
                    <Select
                      value={form.severity}
                      onValueChange={(v: Severity) => handleChange("severity", v)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="Low">Low</SelectItem>
                        <SelectItem value="Medium">Medium</SelectItem>
                        <SelectItem value="High">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

        <div className="space-y-1">
                    <Label>Last Visit</Label>
                    <Input
                      type="date"
                      value={form.lastVisit}
                      onChange={(e) => handleChange("lastVisit", e.target.value)}
                      required
                    />
                  </div>

        <div className="space-y-1">
                    <Label>Status</Label>
                    <Select
                      value={form.status}
                      onValueChange={(v: Status) => handleChange("status", v)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="Active">Active</SelectItem>
                        <SelectItem value="In Treatment">In Treatment</SelectItem>
                        <SelectItem value="Discharged">Discharged</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

      </div>
                </div>

    {/* FOOTER */}
    <DialogFooter className="pt-4 flex flex-col-reverse sm:flex-row gap-2">
                  <DialogClose asChild>
        <Button variant="outline" className="w-full sm:w-auto">
          Cancel
        </Button>
                  </DialogClose>

      <Button
        type="submit"
        className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 text-sm shadow hover:bg-indigo-700 transition"
      >
        Add Patient
      </Button>
                </DialogFooter>

              </form>
            </DialogContent>
          </Dialog>

          {/* SWITCH (UNCHANGED) */}
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
      </div>

      {/* TABLE VIEW (UNCHANGED) */}
      {isListView ? (
        <Card className="shadow-md hover:shadow-xl transition border bg-white/90 backdrop-blur">
        <CardContent>
          <DataTable columns={columns} data={patients} />
        </CardContent>
      </Card>
      ) : (

        /* GRID VIEW (UNCHANGED) */
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
