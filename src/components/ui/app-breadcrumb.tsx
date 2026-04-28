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
    <Breadcrumb className="mb-4">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {paths.map((path, index) => {
          const isLast = index === paths.length - 1;

          return (
            <>
              <BreadcrumbSeparator />

              <BreadcrumbItem key={path}>
                {isLast ? (
                  <BreadcrumbPage>
                    {routeMap[path] || "Page"}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link to={path as any}>
                      {routeMap[path] || "Page"}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
