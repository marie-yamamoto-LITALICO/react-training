import { TodoAppUseCaseImpl } from "./TodoAppUseCase";

import {
  CreateTodoAppPayload,
  UpdateTodoAppPayload,
  DeleteTodoAppPayload,
} from "../../interface/usecase/TodoAppUseCase";
import { TodoAppRepository } from "../../interface/repository/TodoAppRepository";

const TodoApps = [
  {
    id: 1,
    name: "TodoApp1",
    createdAt: new Date("2021/01/01"),
    updatedAt: new Date("2021/01/01"),
  },
  {
    id: 2,
    name: "TodoApp2",
    createdAt: new Date("2021/01/01"),
    updatedAt: new Date("2021/01/01"),
  },
];

const repositoryMock: TodoAppRepository = {
  getTodoApps: async () => TodoApps,
  createTodoApp: async (payload: CreateTodoAppPayload) => ({
    id: 3,
    name: payload.name,
    createdAt: new Date("2021/01/01"),
    updatedAt: new Date("2021/01/01"),
  }),
  updateTodoApp: async ({ id, data }: UpdateTodoAppPayload) => ({
    ...data,
    id,
    createdAt: new Date("2021/01/01"),
    updatedAt: new Date("2021/01/01"),
  }),
  deleteTodoApp: async (id: DeleteTodoAppPayload) => ({
    id,
    name: "DeletedTodoApp",
    createdAt: new Date("2021/01/01"),
    updatedAt: new Date("2021/01/01"),
  }),
};

describe("TodoAppUseCaseImpl Unit Test", () => {
  const useCase = new TodoAppUseCaseImpl(repositoryMock);

  it("getTodoApps", async () => {
    expect(await useCase.getTodoApps()).toEqual(TodoApps);
  });

  it("createTodoApp", async () => {
    expect(await useCase.createTodoApp({ name: "hoge" })).toEqual({
      id: 3,
      name: "hoge",
      createdAt: new Date("2021/01/01"),
      updatedAt: new Date("2021/01/01"),
    });
  });

  it("updateTodoApp", async () => {
    expect(await useCase.updateTodoApp({ id: 2, data: { name: "hoge" } })).toEqual({
      id: 2,
      name: "hoge",
      createdAt: new Date("2021/01/01"),
      updatedAt: new Date("2021/01/01"),
    });
  });

  it("deleteTodoApp", async () => {
    expect(await useCase.deleteTodoApp(2)).toEqual({
      id: 2,
      name: "DeletedTodoApp",
      createdAt: new Date("2021/01/01"),
      updatedAt: new Date("2021/01/01"),
    });
  });
});
