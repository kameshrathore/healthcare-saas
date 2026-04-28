import PatientDetails from "@/pages/patient-details";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/patients")({
  component: PatientDetails,
});
