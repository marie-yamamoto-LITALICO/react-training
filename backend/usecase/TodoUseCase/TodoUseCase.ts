import {
  GetTodosResponse,
  UpdateTodoResponse,
  UpdateTodoPayload,
  DeleteTodoResponse,
  CreateTodoResponse,
  CreateTodoPayload,
  TodoUseCase, AddLabelPayload, AddLabelResponse, DeleteLabelPayload, DeleteLabelResponse,
} from "../../interface/usecase/TodoUseCase";
import { TodoRepository } from "../../interface/repository/TodoRepository";

export class TodoUseCaseImpl implements TodoUseCase {
  private repository: TodoRepository;

  constructor(repository: TodoRepository) {
    this.repository = repository;
  }

  public async getTodos(): Promise<GetTodosResponse> {
    const response = await this.repository.getTodos();
    return GetTodosResponse.parse(response);
  }

  public async createTodo(
    payload: CreateTodoPayload
  ): Promise<CreateTodoResponse> {
    const response = await this.repository.createTodo(payload);
    return CreateTodoResponse.parse(response);
  }

  public async updateTodo(
    payload: UpdateTodoPayload
  ): Promise<UpdateTodoResponse> {
    const response = await this.repository.updateTodo(payload);
    return UpdateTodoResponse.parse(response);
  }

  public async deleteTodo(id: number): Promise<DeleteTodoResponse> {
    const response = await this.repository.deleteTodo(id);
    return DeleteTodoResponse.parse(response);
  }

  public async addLabel(payload: AddLabelPayload): Promise<AddLabelResponse> {
    const response = await this.repository.addLabel(payload);
    return AddLabelResponse.parse(response);
  }

  public async deleteLabel(payload: DeleteLabelPayload): Promise<DeleteLabelResponse> {
    const response = await this.repository.deleteLabel(payload);
    return DeleteLabelResponse.parse(response);
  }
}
