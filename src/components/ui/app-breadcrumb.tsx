"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Link, useLocation } from "@tanstack/react-router";
import { Home } from "lucide-react";

const routeMap: Record<string, string> = {
  "/": "Dashboard",
  "/analytics": "Analytics",
  "/patients": "Patients",
};

export function AppBreadcrumb() {
  const location = useLocation();
  const pathname = location.pathname;

  const segments = pathname.split("/").filter(Boolean);

  const paths = segments.map((_, i) => {
    return "/" + segments.slice(0, i + 1).join("/");
  });

  return (
    <Breadcrumb className="mb-2">

      <BreadcrumbList className="flex items-center gap-1 text-xs">

        {/* Home */}
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link
              to="/"
              className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition"
            >
              <Home className="h-3.5 w-3.5" />
              Home
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {paths.map((path, index) => {
          const isLast = index === paths.length - 1;

          return (
            <div key={path} className="flex items-center gap-1">

              <BreadcrumbSeparator className="text-muted-foreground/50" />

              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage className="text-foreground font-medium">
                    {routeMap[path] || "Page"}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link
                      to={path as any}
                      className="text-muted-foreground hover:text-foreground transition"
                    >
                      {routeMap[path] || "Page"}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>

            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}