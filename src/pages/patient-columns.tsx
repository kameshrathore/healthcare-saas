"use client";

import type { ColumnDef } from "@tanstack/react-table";

export type Patient = {
  id: string;
  name: string;
  age: number;
  gender: "Male" | "Female" | "Other";
  phone: string;
  condition: string;
  severity: "Low" | "Medium" | "High";
  lastVisit: string;
  status: "Active" | "In Treatment" | "Discharged";
};

export const columns: ColumnDef<Patient>[] = [
  {
    accessorKey: "id",
    header: "Patient ID",
    cell: ({ row }) => (
      <div className="font-mono text-xs text-muted-foreground">
        {row.getValue("id")}
      </div>
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "age",
    header: "Age",
    cell: ({ row }) => <div>{row.getValue("age")} yrs</div>,
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "phone",
    header: "Contact",
    cell: ({ row }) => (
      <div className="text-sm text-muted-foreground">
        {row.getValue("phone")}
      </div>
    ),
  },
  {
    accessorKey: "condition",
    header: "Condition",
  },
  {
    accessorKey: "severity",
    header: "Severity",
    cell: ({ row }) => {
      const value = row.getValue("severity") as string;

      const color =
        value === "High"
          ? "text-red-600"
          : value === "Medium"
          ? "text-orange-500"
          : "text-green-600";

      return <div className={`font-medium ${color}`}>{value}</div>;
    },
  },
  {
    accessorKey: "lastVisit",
    header: "Last Visit",
    cell: ({ row }) => {
      const date = new Date(row.getValue("lastVisit"));
      return (
        <div className="text-sm text-muted-foreground">
          {date.toLocaleDateString()}
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;

      const style =
        status === "Active"
          ? "text-green-600"
          : status === "In Treatment"
          ? "text-blue-600"
          : "text-gray-500";

      return <span className={`font-medium ${style}`}>{status}</span>;
    },
  },
];
