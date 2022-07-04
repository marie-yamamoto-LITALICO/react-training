import { Todo } from "@prisma/client";
import {
  CreateTodoPayload,
  DeleteTodoPayload,
  UpdateTodoPayload,
  AddLabelPayload,
  DeleteLabelPayload,
} from "../usecase/TodoUseCase";

export type TodoRepository = {
  getTodos: () => Promise<Todo[]>;
  createTodo: (payload: CreateTodoPayload) => Promise<Todo>;
  updateTodo: (payload: UpdateTodoPayload) => Promise<Todo>;
  deleteTodo: (payload: DeleteTodoPayload) => Promise<Todo>;
  addLabel: (payload: AddLabelPayload) => Promise<Todo>;
  deleteLabel: (payload: DeleteLabelPayload) => Promise<Todo>;
};
