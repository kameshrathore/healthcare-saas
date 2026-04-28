// src/routes/index.tsx
import {
  createRootRoute,
  createRoute,
  Outlet,
} from "@tanstack/react-router";

import Dashboard from "@/pages/dashboard";
import Analytics from "@/pages/analytics";
import PatientDetails from "@/pages/patient-details";
import Login from "@/pages/login";

// Root route with Outlet
const rootRoute = createRootRoute({
  component: () => (
    <div className="p-6">
      <Outlet /> {/* This renders child routes */}
    </div>
  ),
});

// Child routes
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

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: Login,
});

// Route tree
export const routeTree = rootRoute.addChildren([
  dashboardRoute,
  analyticsRoute,
  patientsRoute,
  loginRoute,
]);
