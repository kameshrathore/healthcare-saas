import { createRootRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { AppBreadcrumb } from "@/components/ui/app-breadcrumb";
import { AppHeader } from "@/pages/layout/AppHeader";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });

  // 👇 detect auth pages
  const isAuthPage = pathname === "/login";

  return (
    <div className="min-h-screen flex flex-col">

      {/* ✅ Hide header on login */}
      {!isAuthPage && <AppHeader />}

      {/* ✅ Hide breadcrumb on login */}
      {!isAuthPage && (
        <div className="p-3 bg-white/60 backdrop-blur">
          <AppBreadcrumb />
        </div>
      )}

      {/* Page Content */}
      <div className="flex-1 p-3">
        <Outlet />
      </div>

    </div>
  );
}
