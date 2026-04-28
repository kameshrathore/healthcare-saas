"use client";
import type { ColumnDef } from "@tanstack/react-table";

export type Patient = {
  id: string;
  name: string;
  age: number;
  condition: string;
  status?: string; // optional if you add later
};

export const columns: ColumnDef<Patient>[] = [
  {
    accessorKey: "name",
    header: () => <div className="text-left">Name</div>,
    cell: ({ row }) => (
      <div className="text-left font-medium">
        {row.getValue("name")}
      </div>
    ),
  },
  {
    accessorKey: "age",
    header: () => <div className="text-center">Age</div>,
    cell: ({ row }) => (
      <div className="text-center">
        {row.getValue("age")}
      </div>
    ),
  },
  {
    accessorKey: "condition",
    header: () => <div className="text-left">Condition</div>,
    cell: ({ row }) => (
      <div className="text-left">
        {row.getValue("condition")}
      </div>
    ),
  },
];
