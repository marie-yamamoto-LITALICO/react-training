import { TodoAppRepositoryImpl } from "./TodoAppRepository";
import { prisma } from "../../prisma";

describe("TodoAppRepositoryImpl Unit Test", () => {
  afterAll(async () => {
    await prisma.todoApp.deleteMany();
    await prisma.$disconnect();
  });

  const repository = new TodoAppRepositoryImpl(prisma);

  it("getTodoApps", async () => {
    const TodoApp = await prisma.todoApp.create({ data: { name: "TodoApp" } });
    expect(await repository.getTodoApps()).toEqual([TodoApp]);
  });

  it("createTodoApp", async () => {
    expect(
      await repository.createTodoApp({ name: "createTodoApp" })
    ).toHaveProperty("name", "createTodoApp");
  });

  it("updateTodoApp", async () => {
    const TodoApp = await prisma.todoApp.create({ data: { name: "TodoApp" } });
    expect(
      await repository.updateTodoApp({
        id: TodoApp.id,
        data: { name: "updateTodoApp" },
      })
    ).toHaveProperty("name", "updateTodoApp");
  });

  it("deleteTodo", async () => {
    const TodoApp = await prisma.todoApp.create({ data: { name: "TodoApp" } });
    await repository.deleteTodoApp(TodoApp.id);
    expect(
      await prisma.todo.findFirst({ where: { id: TodoApp.id } })
    ).toBeNull();
  });
});
