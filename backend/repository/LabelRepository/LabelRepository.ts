import { Label, PrismaClient } from "@prisma/client";
import { LabelRepository } from "../../interface/repository/LabelRepository";
import {
  CreateLabelPayload,
  DeleteLabelPayload,
  UpdateLabelPayload,
} from "../../interface/usecase/LabelUseCase";

export class LabelRepositoryImpl implements LabelRepository {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  public async getLabels(): Promise<Label[]> {
    return this.prisma.label.findMany();
  }

  public async createLabel(data: CreateLabelPayload): Promise<Label> {
    return this.prisma.label.create({ data });
  }

  public async updateLabel({ id, data }: UpdateLabelPayload): Promise<Label> {
    return this.prisma.label.update({ where: { id }, data });
  }

  public async deleteLabel(id: DeleteLabelPayload): Promise<Label> {
    return this.prisma.label.delete({ where: { id } });
  }
}
