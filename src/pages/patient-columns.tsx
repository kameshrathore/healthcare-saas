"use client";
import type { ColumnDef } from "@tanstack/react-table";

export type Patient = {
  id: string;
  name: string;
  age: number;
  condition: string;
};

export const columns: ColumnDef<Patient>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "condition",
    header: "Condition",
  },
];
