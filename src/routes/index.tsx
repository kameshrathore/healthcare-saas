import {
  createRootRoute,
  createRoute,
  Outlet,
  redirect,
} from "@tanstack/react-router";

import Dashboard from "@/pages/dashboard";
import Analytics from "@/pages/analytics";
import PatientDetails from "@/pages/patient-details";
import Login from "@/pages/login";
import { auth } from "@/services/firebase";
import { getCurrentUser } from "@/services/auth";

/* ROOT */
const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

/* LOGIN */
const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: Login,
});

/* PROTECTED LAYER */
const protectedRoute = createRoute({
  id: "protected",
  getParentRoute: () => rootRoute,

  beforeLoad: async () => {
  const user = await getCurrentUser();

  if (!user) {
    throw redirect({ to: "/login" });
  }
},

  component: () => <Outlet />,
});

/* CHILD ROUTES */
const dashboardRoute = createRoute({
  getParentRoute: () => protectedRoute,
  path: "/",
  component: Dashboard,
});

const analyticsRoute = createRoute({
  getParentRoute: () => protectedRoute,
  path: "/analytics",
  component: Analytics,
});

const patientsRoute = createRoute({
  getParentRoute: () => protectedRoute,
  path: "/patients",
  component: PatientDetails,
});

/* EXPORT TREE */
export const routeTree = rootRoute.addChildren([
  loginRoute,
  protectedRoute.addChildren([
    dashboardRoute,
    analyticsRoute,
    patientsRoute,
  ]),
]);
