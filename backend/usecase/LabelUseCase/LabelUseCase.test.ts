import { LabelUseCaseImpl } from "./LabelUseCase";

import {
  CreateLabelPayload,
  UpdateLabelPayload,
  DeleteLabelPayload,
} from "../../interface/usecase/LabelUseCase";
import { LabelRepository } from "../../interface/repository/LabelRepository";

const Labels = [
  {
    id: 1,
    name: "label1",
    createdAt: new Date("2021/01/01"),
    updatedAt: new Date("2021/01/01"),
  },
  {
    id: 2,
    name: "label2",
    createdAt: new Date("2021/01/01"),
    updatedAt: new Date("2021/01/01"),
  },
];

const repositoryMock: LabelRepository = {
  getLabels: async () => Labels,
  createLabel: async (payload: CreateLabelPayload) => ({
    id: 3,
    name: payload.name,
    createdAt: new Date("2021/01/01"),
    updatedAt: new Date("2021/01/01"),
  }),
  updateLabel: async ({ id, data }: UpdateLabelPayload) => ({
    ...data,
    id,
    createdAt: new Date("2021/01/01"),
    updatedAt: new Date("2021/01/01"),
  }),
  deleteLabel: async (id: DeleteLabelPayload) => ({
    id,
    name: "DeletedLabel",
    createdAt: new Date("2021/01/01"),
    updatedAt: new Date("2021/01/01"),
  }),
};

describe("LabelUseCaseImpl Unit Test", () => {
  const useCase = new LabelUseCaseImpl(repositoryMock);

  it("getLabels", async () => {
    expect(await useCase.getLabels()).toEqual(Labels);
  });

  it("createLabel", async () => {
    expect(await useCase.createLabel({ name: "hoge" })).toEqual({
      id: 3,
      name: "hoge",
      createdAt: new Date("2021/01/01"),
      updatedAt: new Date("2021/01/01"),
    });
  });

  it("updateLabel", async () => {
    expect(await useCase.updateLabel({ id: 2, data: { name: "hoge" } })).toEqual({
      id: 2,
      name: "hoge",
      createdAt: new Date("2021/01/01"),
      updatedAt: new Date("2021/01/01"),
    });
  });

  it("deleteLabel", async () => {
    expect(await useCase.deleteLabel(2)).toEqual({
      id: 2,
      name: "DeletedLabel",
      createdAt: new Date("2021/01/01"),
      updatedAt: new Date("2021/01/01"),
    });
  });
});
