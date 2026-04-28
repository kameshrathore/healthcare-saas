import { createRootRoute, Outlet } from "@tanstack/react-router";
import { AppBreadcrumb } from "@/components/ui/app-breadcrumb";
import { AppHeader } from "@/pages/layout/AppHeader"; 

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen flex flex-col">

      {/* 🔹 GLOBAL HEADER (ADD THIS) */}
      <AppHeader />

      {/* Breadcrumb */}
      <div className="p-3 bg-white/60 backdrop-blur">
        <AppBreadcrumb />
      </div>

      {/* Page Content */}
      <div className="flex-1 p-3">
        <Outlet />
      </div>

    </div>
  ),
});