import { TodoUseCaseImpl } from "./TodoUseCase";
import {
  AddLabelPayload,
  CreateTodoPayload,
  DeleteLabelPayload,
  DeleteTodoPayload,
  UpdateTodoPayload,
} from "../../interface/usecase/TodoUseCase";
import { TodoRepository } from "../../interface/repository/TodoRepository";

const Todos = [
  {
    id: 1,
    name: "Todo1",
    isArchived: false,
    todoAppId: 1,
    createdAt: new Date("2021/01/01"),
    updatedAt: new Date("2021/01/01"),
  },
  {
    id: 2,
    name: "Todo2",
    todoAppId: 1,
    isArchived: false,
    createdAt: new Date("2021/01/01"),
    updatedAt: new Date("2021/01/01"),
  },
];

const repositoryMock: TodoRepository = {
  getTodos: async () => Todos,
  createTodo: async (payload: CreateTodoPayload) => ({
    id: 3,
    name: payload.name,
    todoAppId: 1,
    isArchived: false,
    createdAt: new Date("2021/01/01"),
    updatedAt: new Date("2021/01/01"),
  }),
  updateTodo: async ({ id, data }: UpdateTodoPayload) => ({
    ...data,
    id,
    createdAt: new Date("2021/01/01"),
    updatedAt: new Date("2021/01/01"),
  }),
  deleteTodo: async (id: DeleteTodoPayload) => ({
    id,
    name: "DeletedTodo",
    todoAppId: 1,
    isArchived: false,
    createdAt: new Date("2021/01/01"),
    updatedAt: new Date("2021/01/01"),
  }),
  addLabel: async ({ id }: AddLabelPayload) => ({
    id,
    name: "todo",
    todoAppId: 1,
    isArchived: false,
    createdAt: new Date("2021/01/01"),
    updatedAt: new Date("2021/01/01"),
  }),
  deleteLabel: async ({ id }: DeleteLabelPayload) => ({
    id,
    name: "todo",
    todoAppId: 1,
    isArchived: false,
    createdAt: new Date("2021/01/01"),
    updatedAt: new Date("2021/01/01"),
  }),
};

describe("TodoUseCaseImpl Unit Test", () => {
  const useCase = new TodoUseCaseImpl(repositoryMock);

  it("getTodos", async () => {
    expect(await useCase.getTodos()).toEqual([
      {
        id: 1,
        name: "Todo1",
        todoAppId: 1,
        isArchived: false,
        createdAt: new Date("2021/01/01"),
        updatedAt: new Date("2021/01/01"),
      },
      {
        id: 2,
        name: "Todo2",
        todoAppId: 1,
        isArchived: false,
        createdAt: new Date("2021/01/01"),
        updatedAt: new Date("2021/01/01"),
      },
    ]);
  });

  it("createTodo", async () => {
    expect(await useCase.createTodo({ name: "Hoge", todoAppId: 1 })).toEqual({
      id: 3,
      name: "Hoge",
      todoAppId: 1,
      isArchived: false,
      createdAt: new Date("2021/01/01"),
      updatedAt: new Date("2021/01/01"),
    });
  });

  it("updateTodo", async () => {
    expect(
      await useCase.updateTodo({
        id: 2,
        data: { name: "Hoge", isArchived: false, todoAppId: 1 },
      })
    ).toEqual({
      id: 2,
      name: "Hoge",
      todoAppId: 1,
      isArchived: false,
      createdAt: new Date("2021/01/01"),
      updatedAt: new Date("2021/01/01"),
    });
  });

  it("deleteTodo", async () => {
    expect(await useCase.deleteTodo(2)).toEqual({
      id: 2,
      name: "DeletedTodo",
      todoAppId: 1,
      isArchived: false,
      createdAt: new Date("2021/01/01"),
      updatedAt: new Date("2021/01/01"),
    });
  });

  it("addLabel", async () => {
    expect(await useCase.addLabel({ id: 2, labelId: 1 })).toEqual({
      id: 2,
      name: "todo",
      todoAppId: 1,
      isArchived: false,
      createdAt: new Date("2021/01/01"),
      updatedAt: new Date("2021/01/01"),
    });
  });

  it("deleteLabel", async () => {
    expect(await useCase.deleteLabel({ id: 2, labelId: 1 })).toEqual({
      id: 2,
      name: "todo",
      todoAppId: 1,
      isArchived: false,
      createdAt: new Date("2021/01/01"),
      updatedAt: new Date("2021/01/01"),
    });
  });
});
