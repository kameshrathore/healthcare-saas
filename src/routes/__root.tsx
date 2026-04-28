import { createRootRoute, Outlet } from "@tanstack/react-router";
import { AppBreadcrumb } from "@/components/ui/app-breadcrumb";

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen flex flex-col">
      
      {/* Header / Breadcrumb */}
      <div className="p-4 border-b bg-white/60 backdrop-blur">
        <AppBreadcrumb />
      </div>

      {/* Page Content */}
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  ),
});