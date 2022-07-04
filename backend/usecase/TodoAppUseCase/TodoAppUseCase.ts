import {
  GetTodoAppsResponse,
  UpdateTodoAppResponse,
  UpdateTodoAppPayload,
  DeleteTodoAppPayload,
  DeleteTodoAppResponse,
  CreateTodoAppResponse,
  CreateTodoAppPayload,
} from "../../interface/usecase/TodoAppUseCase";
import { TodoAppUseCase } from "../../interface/usecase/TodoAppUseCase";
import { TodoAppRepository } from "../../interface/repository/TodoAppRepository";

export class TodoAppUseCaseImpl implements TodoAppUseCase {
  private repository: TodoAppRepository;

  constructor(repository: TodoAppRepository) {
    this.repository = repository;
  }

  public async getTodoApps(): Promise<GetTodoAppsResponse> {
    const response = await this.repository.getTodoApps();
    return GetTodoAppsResponse.parse(response);
  }

  public async createTodoApp(
    payload: CreateTodoAppPayload
  ): Promise<CreateTodoAppResponse> {
    const response = await this.repository.createTodoApp(payload);
    return CreateTodoAppResponse.parse(response);
  }

  public async updateTodoApp(
    payload: UpdateTodoAppPayload
  ): Promise<UpdateTodoAppResponse> {
    const response = await this.repository.updateTodoApp(payload);
    return UpdateTodoAppResponse.parse(response);
  }

  public async deleteTodoApp(
    payload: DeleteTodoAppPayload
  ): Promise<DeleteTodoAppResponse> {
    const response = await this.repository.deleteTodoApp(payload);
    return DeleteTodoAppResponse.parse(response);
  }
}
