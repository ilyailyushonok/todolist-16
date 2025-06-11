import type { TaskPriority, TaskStatus } from "@/common/enums/enums"
import { z } from "zod/v4"
import { domainTaskSchema } from "@/features/auth/lib/schemas/schemas.ts"

// export type DomainTask = {
//   description: string
//   title: string
//   status: TaskStatus
//   priority: TaskPriority
//   startDate: string
//   deadline: string
//   id: string
//   todoListId: string
//   order: number
//   addedDate: string
// }

export type GetTasksResponse = {
  error: string | null
  totalCount: number
  items: DomainTask[]
}

export type UpdateTaskModel = {
  description: string|null
  title: string
  status: TaskStatus
  priority: TaskPriority
  startDate: string|null
  deadline: string|null
}
export type DomainTask = z.infer<typeof domainTaskSchema>

