import { z } from 'zod/v4'

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(5),
  rememberMe: z.boolean(),
})

export type LoginInputs = z.infer<typeof loginSchema>