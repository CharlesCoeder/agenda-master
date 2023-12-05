import { z } from "zod";

export const taskSchema = z.object({
  _id: z.string(),
  title: z.string(),
  description: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
  dueDate: z.string().transform((date) => new Date(date)), // Transform date string to Date object
});
