import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "@/server/routers/product";

export const trpc = createTRPCReact<AppRouter>();
