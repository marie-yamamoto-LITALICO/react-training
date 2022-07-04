import { z } from "zod";

export const TodoAppResponse = z.object({
  id: z.number(),
  name: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const GetTodoAppsResponse = TodoAppResponse.array();
export type GetTodoAppsResponse = z.infer<typeof GetTodoAppsResponse>;

export const CreateTodoAppPayload = z.object({
  name: z.string(),
});
export type CreateTodoAppPayload = z.infer<typeof CreateTodoAppPayload>
export const CreateTodoAppResponse = TodoAppResponse;
export type CreateTodoAppResponse = z.infer<typeof CreateTodoAppResponse>;

export const UpdateTodoAppPayload = z.object({
  id: z.number(),
  data: z.object({
    name: z.string()
  })
})
export type UpdateTodoAppPayload = z.infer<typeof UpdateTodoAppPayload>
export const UpdateTodoAppResponse = TodoAppResponse;
export type UpdateTodoAppResponse = z.infer<typeof UpdateTodoAppResponse>;

export const DeleteTodoAppPayload = z.number()
export type DeleteTodoAppPayload = z.infer<typeof DeleteTodoAppPayload>
export const DeleteTodoAppResponse = TodoAppResponse;
export type DeleteTodoAppResponse = z.infer<typeof DeleteTodoAppResponse>;


export type TodoAppUseCase = {
  getTodoApps: () => Promise<GetTodoAppsResponse>
  createTodoApp: (payload: CreateTodoAppPayload) => Promise<CreateTodoAppResponse>
  updateTodoApp: (payload: UpdateTodoAppPayload) => Promise<UpdateTodoAppResponse>
  deleteTodoApp: (payload: DeleteTodoAppPayload) => Promise<DeleteTodoAppResponse>
}
