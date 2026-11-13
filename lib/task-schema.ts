import { z } from "zod";

export const taskStatuses = ["belum", "proses", "selesai"] as const;

export const taskSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Judul minimal 3 karakter.")
    .max(150, "Judul maksimal 150 karakter."),
  deadline: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Deadline harus berformat YYYY-MM-DD.")
    .refine(
      (value) =>
        new Date(`${value}T00:00:00Z`).toISOString().slice(0, 10) === value,
      "Tanggal deadline tidak valid.",
    ),
  status: z.enum(taskStatuses, { message: "Status harus belum, proses, atau selesai." }),
});

export type TaskInput = z.infer<typeof taskSchema>;
