import {
  GetLabelsResponse,
  UpdateLabelResponse,
  UpdateLabelPayload,
  DeleteLabelPayload,
  DeleteLabelResponse,
  CreateLabelResponse,
  CreateLabelPayload,
} from "../../interface/usecase/LabelUseCase";
import { LabelUseCase } from "../../interface/usecase/LabelUseCase";
import { LabelRepository } from "../../interface/repository/LabelRepository";

export class LabelUseCaseImpl implements LabelUseCase {
  private repository: LabelRepository;

  constructor(repository: LabelRepository) {
    this.repository = repository;
  }

  public async getLabels(): Promise<GetLabelsResponse> {
    const response = await this.repository.getLabels();
    return GetLabelsResponse.parse(response);
  }

  public async createLabel(
    payload: CreateLabelPayload
  ): Promise<CreateLabelResponse> {
    const response = await this.repository.createLabel(payload);
    return CreateLabelResponse.parse(response);
  }

  public async updateLabel(
    payload: UpdateLabelPayload
  ): Promise<UpdateLabelResponse> {
    const response = await this.repository.updateLabel(payload);
    return UpdateLabelResponse.parse(response);
  }

  public async deleteLabel(
    payload: DeleteLabelPayload
  ): Promise<DeleteLabelResponse> {
    const response = await this.repository.deleteLabel(payload);
    return DeleteLabelResponse.parse(response);
  }
}
