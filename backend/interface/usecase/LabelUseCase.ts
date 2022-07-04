import { z } from "zod";

export const LabelResponse = z.object({
  id: z.number(),
  name: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const GetLabelsResponse = LabelResponse.array();
export type GetLabelsResponse = z.infer<typeof GetLabelsResponse>;

export const CreateLabelPayload = z.object({
  name: z.string(),
});
export type CreateLabelPayload = z.infer<typeof CreateLabelPayload>
export const CreateLabelResponse = LabelResponse;
export type CreateLabelResponse = z.infer<typeof CreateLabelResponse>;

export const UpdateLabelPayload = z.object({
  id: z.number(),
  data: z.object({
    name: z.string()
  })
})
export type UpdateLabelPayload = z.infer<typeof UpdateLabelPayload>
export const UpdateLabelResponse = LabelResponse;
export type UpdateLabelResponse = z.infer<typeof UpdateLabelResponse>;

export const DeleteLabelPayload = z.number()
export type DeleteLabelPayload = z.infer<typeof DeleteLabelPayload>
export const DeleteLabelResponse = LabelResponse;
export type DeleteLabelResponse = z.infer<typeof DeleteLabelResponse>;


export type LabelUseCase = {
  getLabels: () => Promise<GetLabelsResponse>
  createLabel: (payload: CreateLabelPayload) => Promise<CreateLabelResponse>
  updateLabel: (payload: UpdateLabelPayload) => Promise<UpdateLabelResponse>
  deleteLabel: (payload: DeleteLabelPayload) => Promise<DeleteLabelResponse>
}
