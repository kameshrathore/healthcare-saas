import { createFileRoute, redirect, Outlet } from "@tanstack/react-router";
import { auth } from "@/services/firebase";

const waitForAuth = () =>
  new Promise((resolve) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe();
      resolve(user);
    });
  });

export const Route = createFileRoute("/_protected")({
  beforeLoad: async () => {
    const user: any = await waitForAuth();

    if (!user) {
      throw redirect({ to: "/login" });
    }
  },

  component: () => <Outlet />,
});