import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "..//..//..//back/server/trpc/index";
//     👆 **type-only** import
// Pass AppRouter as generic here. 👇 This lets the `trpc` object know
// what procedures are available on the server and their input/output types.
const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3300",
    }),
  ],
});
