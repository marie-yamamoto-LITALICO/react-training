import { LabelRepositoryImpl } from "./LabelRepository";
import { prisma } from "../../prisma";

describe("LabelRepositoryImpl Unit Test", () => {
  afterAll(async () => {
    await prisma.label.deleteMany();
    await prisma.$disconnect();
  });

  const repository = new LabelRepositoryImpl(prisma);

  it("getLabels", async () => {
    const label = await prisma.label.create({ data: { name: "label" } });
    expect(await repository.getLabels()).toEqual([label]);
  });

  it("createLabel", async () => {
    expect(
      await repository.createLabel({ name: "createLabel" })
    ).toHaveProperty("name", "createLabel");
  });

  it("updateLabel", async () => {
    const label = await prisma.label.create({ data: { name: "label" } });
    expect(
      await repository.updateLabel({
        id: label.id,
        data: { name: "updateLabel" },
      })
    ).toHaveProperty("name", "updateLabel");
  });

  it("deleteTodo", async () => {
    const label = await prisma.label.create({ data: { name: "label" } });
    await repository.deleteLabel(label.id);
    expect(await prisma.todo.findFirst({ where: { id: label.id } })).toBeNull();
  });
});
