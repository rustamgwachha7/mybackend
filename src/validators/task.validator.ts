import { z } from "zod";

export const createTaskSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
});

export const updateTaskSchema = z.object({
  title: z.string().min(1, "Title cannot be empty").optional(),
  description: z.string().optional(),
  status: z.enum(["pending", "in-progress", "done"], {
    message: "Status must be pending, in-progress, or done",
  }).optional(),
});