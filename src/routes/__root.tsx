import { createRootRoute, Outlet } from "@tanstack/react-router";
import { AppBreadcrumb } from "@/components/app-breadcrumb";

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen flex flex-col">
      <div className="p-4 border-b">
        <AppBreadcrumb />
      </div>

      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  ),
});