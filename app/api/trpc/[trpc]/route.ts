import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { productRouter } from "@/server/routers/product";

export const runtime = "nodejs";

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: productRouter,
    createContext: () => ({}),
  });

export { handler as GET, handler as POST };
