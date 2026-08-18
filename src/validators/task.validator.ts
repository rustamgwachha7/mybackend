import { z } from "zod";

export const createTaskSchema = z.object({
  title: z.string().min(1, "Title is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const updateTaskSchema = z.object({
  title: z.string().min(1, "Title cannot be empty").optional(),
  status: z.enum(["pending", "in-progress", "done"], {
    message: "Status must be pending, in-progress, or done",
  }).optional(),
  email: z.string().email("Invalid email address").optional(),
  password: z.string().min(6, "Password must be at least 6 characters").optional(),
});