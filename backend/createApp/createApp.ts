import express from "express";
import {
  AddLabelPayload,
  CreateTodoPayload,
  DeleteTodoPayload,
  TodoUseCase,
  UpdateTodoPayload,
} from "../interface/usecase/TodoUseCase";
import {
  CreateLabelPayload,
  UpdateLabelPayload,
  DeleteLabelPayload,
  LabelUseCase,
} from "../interface/usecase/LabelUseCase";
import {
  CreateTodoAppPayload,
  UpdateTodoAppPayload,
  DeleteTodoAppPayload,
  TodoAppUseCase,
} from "../interface/usecase/TodoAppUseCase";
import cors from "cors";
import bodyParser from "body-parser";
import { errorHandler } from "./errorHandler";

export const createApp = (
  todoUseCase: TodoUseCase,
  labelUseCase: LabelUseCase,
  todoAppUseCase: TodoAppUseCase
) => {
  const app = express();
  app.use(cors({ origin: "http://localhost:3000" }));
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  app.use(bodyParser.json());

  app.get(
    "/todos",
    async (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      try {
        const todos = await todoUseCase.getTodos();
        res.status(200).json(todos);
      } catch (error) {
        next(error);
      }
    }
  );

  app.post(
    "/todos",
    async (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      try {
        const todo = await todoUseCase.createTodo(
          CreateTodoPayload.parse(req.body)
        );
        res.status(200).json(todo);
      } catch (error) {
        next(error);
      }
    }
  );

  app.patch(
    "/todos/:id",
    async (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      try {
        const id = Number(req.params.id);
        const todo = await todoUseCase.updateTodo(
          UpdateTodoPayload.parse({ id, data: req.body })
        );
        res.status(200).json(todo);
      } catch (error) {
        next(error);
      }
    }
  );

  app.post(
    "/todos/:id/labels/:labelId",
    async (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      try {
        const id = Number(req.params.id);
        const labelId = Number(req.params.labelId);
        const todo = await todoUseCase.addLabel(
          AddLabelPayload.parse({ id, labelId })
        );
        res.status(200).json(todo);
      } catch (error) {
        next(error);
      }
    }
  );

  app.delete(
    "/todos/:id/labels/:labelId",
    async (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      try {
        const id = Number(req.params.id);
        const labelId = Number(req.params.labelId);
        const todo = await todoUseCase.deleteLabel(
          AddLabelPayload.parse({ id, labelId })
        );
        res.status(200).json(todo);
      } catch (error) {
        next(error);
      }
    }
  );

  app.delete(
    "/todos/:id",
    async (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      try {
        const id = Number(req.params.id);
        const todo = await todoUseCase.deleteTodo(DeleteTodoPayload.parse(id));
        res.status(200).json(todo);
      } catch (error) {
        next(error);
      }
    }
  );

  app.get(
    "/labels",
    async (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      try {
        const labels = await labelUseCase.getLabels();
        res.status(200).json(labels);
      } catch (error) {
        next(error);
      }
    }
  );

  app.post(
    "/labels",
    async (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      try {
        const label = await labelUseCase.createLabel(
          CreateLabelPayload.parse(req.body)
        );
        res.status(200).json(label);
      } catch (error) {
        next(error);
      }
    }
  );

  app.patch(
    "/labels/:id",
    async (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      try {
        const id = Number(req.params.id);
        const label = await labelUseCase.updateLabel(
          UpdateLabelPayload.parse({ id, data: req.body })
        );
        res.status(200).json(label);
      } catch (error) {
        next(error);
      }
    }
  );

  app.delete(
    "/labels/:id",
    async (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      try {
        const id = Number(req.params.id);
        const label = await labelUseCase.deleteLabel(
          DeleteLabelPayload.parse(id)
        );
        res.status(200).json(label);
      } catch (error) {
        next(error);
      }
    }
  );

  app.get(
    "/todoApps",
    async (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      try {
        const todoApps = await todoAppUseCase.getTodoApps();
        res.status(200).json(todoApps);
      } catch (error) {
        next(error);
      }
    }
  );

  app.post(
    "/todoApps",
    async (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      try {
        const todoApp = await todoAppUseCase.createTodoApp(
          CreateTodoAppPayload.parse(req.body)
        );
        res.status(200).json(todoApp);
      } catch (error) {
        next(error);
      }
    }
  );

  app.patch(
    "/todoApps/:id",
    async (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      try {
        const id = Number(req.params.id);
        const todoApp = await todoAppUseCase.updateTodoApp(
          UpdateTodoAppPayload.parse({ id, data: req.body })
        );
        res.status(200).json(todoApp);
      } catch (error) {
        next(error);
      }
    }
  );

  app.delete(
    "/todoApps/:id",
    async (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      try {
        const id = Number(req.params.id);
        const todoApp = await todoAppUseCase.deleteTodoApp(
          DeleteTodoAppPayload.parse(id)
        );
        res.status(200).json(todoApp);
      } catch (error) {
        next(error);
      }
    }
  );

  app.use(errorHandler);

  return app;
};
