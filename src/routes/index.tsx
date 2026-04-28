import {
  createRootRoute,
  createRoute,
  Outlet,
} from "@tanstack/react-router";

import Dashboard from "@/pages/dashboard";
import Analytics from "@/pages/analytics";
import PatientDetails from "@/pages/patient-details";
import Login from "@/pages/login";

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: Login,
});

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
