import { TodoApp, PrismaClient } from "@prisma/client";
import { TodoAppRepository } from "../../interface/repository/TodoAppRepository";
import {
  CreateTodoAppPayload,
  DeleteTodoAppPayload,
  UpdateTodoAppPayload,
} from "../../interface/usecase/TodoAppUseCase";

export class TodoAppRepositoryImpl implements TodoAppRepository {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  public async getTodoApps(): Promise<TodoApp[]> {
    return this.prisma.todoApp.findMany();
  }

  public async createTodoApp(data: CreateTodoAppPayload): Promise<TodoApp> {
    return this.prisma.todoApp.create({ data });
  }

  public async updateTodoApp({
    id,
    data,
  }: UpdateTodoAppPayload): Promise<TodoApp> {
    return this.prisma.todoApp.update({ where: { id }, data });
  }

  public async deleteTodoApp(id: DeleteTodoAppPayload): Promise<TodoApp> {
    return this.prisma.todoApp.delete({ where: { id } });
  }
}
