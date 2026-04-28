import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

type Patient = {
  id: string;
  name: string;
  age: number;
  condition: string;
};

const patients: Patient[] = [
  { id: "1", name: "John Doe", age: 45, condition: "Diabetes" },
  { id: "2", name: "Jane Smith", age: 32, condition: "Hypertension" },
  { id: "3", name: "Michael Brown", age: 60, condition: "Asthma" },
];

export default function PatientDetails() {
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-text-h font-heading text-2xl">Patient Details</h2>
        <Button
          className="bg-accent text-white hover:bg-accent-border"
          onClick={() => setView(view === "grid" ? "list" : "grid")}
        >
          Switch to {view === "grid" ? "List" : "Grid"} View
        </Button>
      </div>

      {view === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {patients.map((p) => (
            <Card key={p.id} className="shadow-custom border border-border bg-bg text-text">
              <CardHeader>
                <CardTitle className="text-text-h font-heading">{p.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Age: {p.age}</p>
                <p>Condition: {p.condition}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="space-y-2">
          {patients.map((p) => (
            <div
              key={p.id}
              className="flex justify-between items-center border border-border rounded-md p-4 bg-bg shadow-custom"
            >
              <span className="font-heading text-text-h">{p.name}</span>
              <span>Age: {p.age}</span>
              <span>{p.condition}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
