import { Label } from "@prisma/client";
import {
  CreateLabelPayload,
  UpdateLabelPayload,
  DeleteLabelPayload,
} from "../usecase/LabelUseCase";

export type LabelRepository = {
  getLabels: () => Promise<Label[]>;
  createLabel: (payload: CreateLabelPayload) => Promise<Label>;
  updateLabel: (payload: UpdateLabelPayload) => Promise<Label>;
  deleteLabel: (payload: DeleteLabelPayload) => Promise<Label>;
};
