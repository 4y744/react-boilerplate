import { createRouter, RouterProvider } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { routeTree } from "~/routeTree.gen";

export const router = createRouter({ routeTree });

export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
      {import.meta.env.DEV && <TanStackRouterDevtools router={router} />}
    </>
  );
};
