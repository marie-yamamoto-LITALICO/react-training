import { TodoApp } from "@prisma/client";
import {
  CreateTodoAppPayload,
  UpdateTodoAppPayload,
  DeleteTodoAppPayload,
} from "../usecase/TodoAppUseCase";

export type TodoAppRepository = {
  getTodoApps: () => Promise<TodoApp[]>;
  createTodoApp: (payload: CreateTodoAppPayload) => Promise<TodoApp>;
  updateTodoApp: (payload: UpdateTodoAppPayload) => Promise<TodoApp>;
  deleteTodoApp: (payload: DeleteTodoAppPayload) => Promise<TodoApp>;
};
