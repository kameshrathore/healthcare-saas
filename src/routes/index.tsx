import { Route as rootRoute } from "./__root";
import { createRoute } from "@tanstack/react-router";

import Dashboard from "@/pages/dashboard";
import Analytics from "@/pages/analytics";
import PatientDetails from "@/pages/patient-details";
import Login from "@/pages/login";

/* Public */
const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: Login,
});

/* Protected pages */
const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Dashboard,
});

const analyticsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/analytics",
  component: Analytics,
});

const patientsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/patients",
  component: PatientDetails,
});

export const routeTree = rootRoute.addChildren([
  loginRoute,
  dashboardRoute,
  analyticsRoute,
  patientsRoute,
]);
