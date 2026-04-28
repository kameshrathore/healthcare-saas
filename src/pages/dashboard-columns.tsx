import { type ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "name",
    header: () => <div className="text-left">Name</div>,
    cell: ({ row }) => (
      <div className="text-left">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "age",
    header: () => <div className="text-center">Age</div>,
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("age")}</div>
    ),
  },
  {
    accessorKey: "condition",
    header: () => <div className="text-left">Condition</div>,
    cell: ({ row }) => (
      <div className="text-left">{row.getValue("condition")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: () => <div className="text-right">Status</div>,
    cell: ({ row }) => {
      const status = row.getValue("status");

      const color =
        status === "Stable"
          ? "text-green-600"
          : status === "Under Review"
          ? "text-yellow-600"
          : "text-red-600";

      return <div className={`text-right ${color}`}>{status}</div>;
    },
  },
];