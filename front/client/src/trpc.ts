import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "../../../back/server/trpc/index";

// const BACKEND_URL = "http://localhost:3301/trpc";

export const trpc = createTRPCReact<AppRouter>();
