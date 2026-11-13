import { z } from "zod";
import { publicProcedure, router } from "@/server/trpc";
import { createProduct, getProductById, getProducts } from "@/lib/product-store";
import { productSchema } from "@/lib/product-schema";

export const productRouter = router({
  getAll: publicProcedure.query(() => getProducts()),

  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      return (await getProductById(input.id)) ?? null;
    }),

  addProduct: publicProcedure
    .input(productSchema)
    .mutation(({ input }) => createProduct(input)),
});

export type AppRouter = typeof productRouter;
