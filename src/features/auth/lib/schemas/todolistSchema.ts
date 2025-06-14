import { z } from 'zod/v4'


export const todolistSchema = z.object({
  id: z.string(),
  title:z.string().max(15),
  addedDate: z.string(),
  order:z.number(),
})
export type todolistZODType=z.infer<typeof todolistSchema>

