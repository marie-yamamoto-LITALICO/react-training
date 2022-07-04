import { Todo, PrismaClient } from "@prisma/client";
import { TodoRepository } from "../../interface/repository/TodoRepository";
import {
  AddLabelPayload,
  CreateTodoPayload,
  DeleteLabelPayload,
  DeleteTodoPayload,
  UpdateTodoPayload,
} from "../../interface/usecase/TodoUseCase";

export class TodoRepositoryImpl implements TodoRepository {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }
  public async getTodos(): Promise<Todo[]> {
    return this.prisma.todo.findMany();
  }

  public async createTodo(data: CreateTodoPayload): Promise<Todo> {
    return this.prisma.todo.create({ data });
  }

  public async updateTodo({ id, data }: UpdateTodoPayload): Promise<Todo> {
    return this.prisma.todo.update({ where: { id }, data });
  }

  public async deleteTodo(id: DeleteTodoPayload): Promise<Todo> {
    return this.prisma.todo.delete({ where: { id } });
  }

  public async addLabel({ id, labelId }: AddLabelPayload): Promise<Todo> {
    return this.prisma.todo.update({
      where: { id },
      data: {
        todoLabels: {
          create: { labelId },
        },
      },
      include: { todoLabels: true },
    });
  }

  public async deleteLabel({ id, labelId }: DeleteLabelPayload): Promise<Todo> {
    return this.prisma.todo.update({
      where: { id },
      data: {
        todoLabels: {
          delete: { todoId_labelId: { todoId: id, labelId } },
        },
      },
      include: { todoLabels: true },
    });
  }
}
