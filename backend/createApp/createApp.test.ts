import request from "supertest";
import { createApp } from "./createApp";
import {
  CreateTodoPayload,
  UpdateTodoPayload,
  TodoUseCase,
  AddLabelPayload,
  DeleteLabelPayload as DeleteTodoLabelPayload,
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

const todoApps = [
  {
    id: 1,
    name: "TodoApp1",
    createdAt: new Date("2021/01/01"),
    updatedAt: new Date("2021/01/01"),
  },
  {
    id: 2,
    name: "TodoApp2",
    createdAt: new Date("2021/01/01"),
    updatedAt: new Date("2021/01/01"),
  },
];

const todos = [
  {
    id: 1,
    name: "Todo1",
    todoAppId: 1,
    isArchived: false,
    createdAt: new Date("2021/01/01"),
    updatedAt: new Date("2021/01/01"),
  },
  {
    id: 2,
    name: "Todo2",
    todoAppId: 1,
    isArchived: false,
    createdAt: new Date("2021/01/01"),
    updatedAt: new Date("2021/01/01"),
  },
];

const labels = [
  {
    id: 1,
    name: "label2",
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

const mockTodoUseCase: TodoUseCase = {
  getTodos: async () => todos,
  createTodo: async (payload: CreateTodoPayload) => ({
    ...payload,
    id: 3,
    isArchived: false,
    createdAt: new Date("2021/01/01"),
    updatedAt: new Date("2021/01/01"),
  }),
  updateTodo: async (payload: UpdateTodoPayload) => ({
    ...payload.data,
    id: payload.id,
    createdAt: new Date("2021/01/01"),
    updatedAt: new Date("2021/01/01"),
  }),
  deleteTodo: async (id: number) => ({
    id,
    name: "Todo",
    isArchived: false,
    todoAppId: 1,
    createdAt: new Date("2021/01/01"),
    updatedAt: new Date("2021/01/01"),
  }),
  addLabel: async ({ id }: AddLabelPayload) => ({
    id,
    name: "Todo",
    isArchived: false,
    todoAppId: 1,
    createdAt: new Date("2021/01/01"),
    updatedAt: new Date("2021/01/01"),
  }),
  deleteLabel: async ({ id }: DeleteTodoLabelPayload) => ({
    id,
    name: "Todo",
    isArchived: false,
    todoAppId: 1,
    createdAt: new Date("2021/01/01"),
    updatedAt: new Date("2021/01/01"),
  }),
};

const mockLabelUseCase: LabelUseCase = {
  getLabels: async () => labels,
  createLabel: async (payload: CreateLabelPayload) => ({
    id: 3,
    name: payload.name,
    createdAt: new Date("2021/01/01"),
    updatedAt: new Date("2021/01/01"),
  }),
  updateLabel: async (payload: UpdateLabelPayload) => ({
    ...payload.data,
    id: payload.id,
    createdAt: new Date("2021/01/01"),
    updatedAt: new Date("2021/01/01"),
  }),
  deleteLabel: async (id: DeleteLabelPayload) => ({
    id,
    name: "Todo",
    createdAt: new Date("2021/01/01"),
    updatedAt: new Date("2021/01/01"),
  }),
};

const mockTodoAppUseCase: TodoAppUseCase = {
  getTodoApps: async () => todoApps,
  createTodoApp: async (payload: CreateTodoAppPayload) => ({
    id: 3,
    name: payload.name,
    createdAt: new Date("2021/01/01"),
    updatedAt: new Date("2021/01/01"),
  }),
  updateTodoApp: async (payload: UpdateTodoAppPayload) => ({
    ...payload.data,
    id: payload.id,
    createdAt: new Date("2021/01/01"),
    updatedAt: new Date("2021/01/01"),
  }),
  deleteTodoApp: async (id: DeleteTodoAppPayload) => ({
    id,
    name: "Todo",
    createdAt: new Date("2021/01/01"),
    updatedAt: new Date("2021/01/01"),
  }),
};

const app = createApp(mockTodoUseCase, mockLabelUseCase, mockTodoAppUseCase);

describe("App Request Test", () => {
  it("GET /todos success", async () => {
    const response = await request(app).get("/todos");
    expect(response.statusCode).toBe(200);
  });

  it("POST /todos success", async () => {
    const response = await request(app)
      .post("/todos")
      .send({ name: "CreateTodo", todoAppId: 1 });
    expect(response.statusCode).toBe(200);
  });

  it("Post /todos fail due to send invalid data", async () => {
    const response = await request(app).post("/todos").send({ name: 1 });
    expect(response.statusCode).toBe(400);
  });

  it("PATCH /todos/:id success", async () => {
    const response = await request(app)
      .patch("/todos/1")
      .send({ name: "UpdateTodo", isArchived: false, todoAppId: 1 });
    expect(response.statusCode).toBe(200);
  });

  it("PATCH /todos/:id fail doe to send invalid data", async () => {
    const response = await request(app)
      .patch("/todos/1")
      .send({ name: 1, isArchived: false });
    expect(response.statusCode).toBe(400);
  });

  it("DELETE /todos/:id success", async () => {
    const response = await request(app).delete("/todos/1");
    expect(response.statusCode).toBe(200);
  });

  it("DELETE /dodos/:id fail due to send invalid data", async () => {
    const response = await request(app).delete("/todos/number");
    expect(response.statusCode).toBe(400);
  });

  it("POST /todos/:id/labels/:id success", async () => {
    const response = await request(app).post("/todos/1/labels/1");
    expect(response.statusCode).toBe(200);
  });

  it("POST /todos/:id/labels/:id fail due to send invalid data", async () => {
    const response = await request(app).post("/todos/1/labels/hoge");
    expect(response.statusCode).toBe(400);
  });

  it("DELETE /todos/:id/labels/:id success", async () => {
    const response = await request(app).delete("/todos/1/labels/1");
    expect(response.statusCode).toBe(200);
  });

  it("DELETE /todos/:id/labels/:id fail due to send invalid data", async () => {
    const response = await request(app).delete("/todos/1/labels/hoge");
    expect(response.statusCode).toBe(400);
  });

  it("GET /labels success", async () => {
    const response = await request(app).get("/labels");
    expect(response.statusCode).toBe(200);
  });

  it("POST /labels success", async () => {
    const response = await request(app)
      .post("/labels")
      .send({ name: "CreateLabel" });
    expect(response.statusCode).toBe(200);
  });

  it("Post /labels fail due to send invalid data", async () => {
    const response = await request(app).post("/labels").send({ name: 1 });
    expect(response.statusCode).toBe(400);
  });

  it("PATCH /labels/:id success", async () => {
    const response = await request(app)
      .patch("/labels/1")
      .send({ name: "UpdatedLabel" });
    expect(response.statusCode).toBe(200);
  });

  it("PATCH /labels/:id fail doe to send invalid data", async () => {
    const response = await request(app).patch("/labels/1").send({ name: 1 });
    expect(response.statusCode).toBe(400);
  });

  it("DELETE /labels/:id success", async () => {
    const response = await request(app).delete("/labels/1");
    expect(response.statusCode).toBe(200);
  });

  it("DELETE /labels/:id fail due to send invalid data", async () => {
    const response = await request(app).delete("/labels/number");
    expect(response.statusCode).toBe(400);
  });

  it("GET /todoApps success", async () => {
    const response = await request(app).get("/todoApps");
    expect(response.statusCode).toBe(200);
  });

  it("POST /todoApps success", async () => {
    const response = await request(app)
      .post("/todoApps")
      .send({ name: "CreateLabel" });
    expect(response.statusCode).toBe(200);
  });

  it("Post /todoApps fail due to send invalid data", async () => {
    const response = await request(app).post("/todoApps").send({ name: 1 });
    expect(response.statusCode).toBe(400);
  });

  it("PATCH /todoApps/:id success", async () => {
    const response = await request(app)
      .patch("/todoApps/1")
      .send({ name: "UpdatedLabel" });
    expect(response.statusCode).toBe(200);
  });

  it("PATCH /todoApps/:id fail doe to send invalid data", async () => {
    const response = await request(app).patch("/todoApps/1").send({ name: 1 });
    expect(response.statusCode).toBe(400);
  });

  it("DELETE /todoApps/:id success", async () => {
    const response = await request(app).delete("/todoApps/1");
    expect(response.statusCode).toBe(200);
  });

  it("DELETE /todoApps/:id fail due to send invalid data", async () => {
    const response = await request(app).delete("/todoApps/number");
    expect(response.statusCode).toBe(400);
  });
});
