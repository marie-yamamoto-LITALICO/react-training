import { TodoUseCaseImpl } from "./usecase/TodoUseCase/TodoUseCase";
import { TodoRepositoryImpl } from "./repository/TodoRepository";
import { prisma } from "./prisma";
import { createApp } from "./createApp";
import { LabelUseCaseImpl } from "./usecase/LabelUseCase";
import { LabelRepositoryImpl } from "./repository/LabelRepository";
import { TodoAppUseCaseImpl } from "./usecase/TodoAppUseCase";
import { TodoAppRepositoryImpl } from "./repository/TodoAppRepository";

const todoUseCase = new TodoUseCaseImpl(new TodoRepositoryImpl(prisma));
const labelUseCase = new LabelUseCaseImpl(new LabelRepositoryImpl(prisma));
const todoAppUseCase = new TodoAppUseCaseImpl(
  new TodoAppRepositoryImpl(prisma)
);

const app = createApp(todoUseCase, labelUseCase, todoAppUseCase);

app.listen(3500, () => {
  console.log("Start backend sever at localhost:3500.");
});
