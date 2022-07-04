import { z } from "zod";

export const TodoResponse = z.object({
  id: z.number(),
  name: z.string(),
  isArchived: z.boolean(),
  todoAppId: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const GetTodosResponse = TodoResponse.array();
export type GetTodosResponse = z.infer<typeof GetTodosResponse>;

export const CreateTodoPayload = z.object({
  name: z.string(),
  todoAppId: z.number(),
});
export type CreateTodoPayload = z.infer<typeof CreateTodoPayload>;
export const CreateTodoResponse = TodoResponse;
export type CreateTodoResponse = z.infer<typeof CreateTodoResponse>;

export const UpdateTodoPayload = z.object({
  id: z.number(),
  data: z.object({
    name: z.string(),
    isArchived: z.boolean(),
    todoAppId: z.number(),
  }),
});
export type UpdateTodoPayload = z.infer<typeof UpdateTodoPayload>;
export const UpdateTodoResponse = TodoResponse;
export type UpdateTodoResponse = z.infer<typeof UpdateTodoResponse>;

export const DeleteTodoPayload = z.number();
export type DeleteTodoPayload = z.infer<typeof DeleteTodoPayload>;
export const DeleteTodoResponse = TodoResponse;
export type DeleteTodoResponse = z.infer<typeof DeleteTodoResponse>;

export const AddLabelPayload = z.object({
  id: z.number(),
  labelId: z.number(),
});
export type AddLabelPayload = z.infer<typeof AddLabelPayload>;
export const AddLabelResponse = TodoResponse;
export type AddLabelResponse = z.infer<typeof AddLabelResponse>;

export const DeleteLabelPayload = z.object({
  id: z.number(),
  labelId: z.number(),
});
export type DeleteLabelPayload = z.infer<typeof DeleteLabelPayload>;
export const DeleteLabelResponse = TodoResponse;
export type DeleteLabelResponse = z.infer<typeof DeleteLabelResponse>;

export type TodoUseCase = {
  getTodos: () => Promise<GetTodosResponse>;
  createTodo: (payload: CreateTodoPayload) => Promise<CreateTodoResponse>;
  updateTodo: (payload: UpdateTodoPayload) => Promise<UpdateTodoResponse>;
  deleteTodo: (payload: DeleteTodoPayload) => Promise<DeleteTodoResponse>;
  addLabel: (payload: AddLabelPayload) => Promise<AddLabelResponse>;
  deleteLabel: (payload: DeleteLabelPayload) => Promise<DeleteLabelResponse>;
};
