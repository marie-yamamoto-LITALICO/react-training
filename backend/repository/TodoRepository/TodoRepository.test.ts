import { TodoRepositoryImpl } from "./TodoRepository";
import { prisma } from "../../prisma";

describe("TodoRepositoryImpl Unit Test", () => {
  afterAll(async () => {
    await prisma.todoLabel.deleteMany();
    await prisma.todo.deleteMany();
    await prisma.todoApp.deleteMany();
    await prisma.label.deleteMany();
    await prisma.$disconnect();
  });

  const repository = new TodoRepositoryImpl(prisma);

  it("getTodos", async () => {
    const todoApp = await prisma.todoApp.create({ data: { name: "todoapp" } });
    const todo = await prisma.todo.create({
      data: { name: "todo", todoAppId: todoApp.id },
    });
    expect(await repository.getTodos()).toEqual([todo]);
  });

  it("createTodo", async () => {
    const todoApp = await prisma.todoApp.create({ data: { name: "todoapp" } });
    expect(
      await repository.createTodo({ name: "CreateTodo", todoAppId: todoApp.id })
    ).toHaveProperty("name", "CreateTodo");
  });

  it("updateTodo", async () => {
    const todoApp = await prisma.todoApp.create({ data: { name: "todoapp" } });
    const todo = await prisma.todo.create({
      data: { name: "todo", todoAppId: todoApp.id },
    });
    expect(
      await repository.updateTodo({
        id: todo.id,
        data: {
          name: "UpdateTodo",
          isArchived: todo.isArchived,
          todoAppId: todo.todoAppId,
        },
      })
    ).toHaveProperty("name", "UpdateTodo");
  });

  it("deleteTodo", async () => {
    const todoApp = await prisma.todoApp.create({ data: { name: "todoapp" } });
    const todo = await prisma.todo.create({
      data: { name: "todo", todoAppId: todoApp.id },
    });
    await repository.deleteTodo(todo.id);
    expect(await prisma.todo.findFirst({ where: { id: todo.id } })).toBeNull();
  });

  it("addLabel", async () => {
    const todoApp = await prisma.todoApp.create({ data: { name: "todoapp" } });
    const todo = await prisma.todo.create({
      data: { name: "todo", todoAppId: todoApp.id },
    });
    const label = await prisma.label.create({ data: { name: "label" } });
    await repository.addLabel({ id: todo.id, labelId: label.id });
    expect(
      await prisma.todoLabel.findFirst({
        where: { todoId: todo.id, labelId: label.id },
      })
    ).not.toBeNull();
  });

  it("deleteLabel", async () => {
    const todoApp = await prisma.todoApp.create({ data: { name: "todoapp" } });
    const todo = await prisma.todo.create({
      data: { name: "todo", todoAppId: todoApp.id },
    });
    const label = await prisma.label.create({ data: { name: "label" } });
    await prisma.todoLabel.create({
      data: { todoId: todo.id, labelId: label.id },
    });
    await repository.deleteLabel({ id: todo.id, labelId: label.id });
    expect(
      await prisma.todoLabel.findFirst({
        where: { todoId: todo.id, labelId: label.id },
      })
    ).toBeNull();
  });
});
