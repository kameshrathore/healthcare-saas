import Analytics from "@/pages/analytics";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/analytics")({
  component: Analytics,
});
