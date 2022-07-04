import express from "express";
import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from "@prisma/client/runtime";
import { ZodError } from "zod";

export const errorHandler: express.ErrorRequestHandler = (
  error,
  req,
  res,
  next
) => {
  if (
    error instanceof PrismaClientValidationError ||
    error instanceof PrismaClientKnownRequestError
  ) {
    res.status(400).json({ error });
  }

  if (error instanceof ZodError) {
    res.status(400).json({
      error: error.format(),
    });
  }

  if (error.status) {
    res.status(400).json({ error });
  }

  res.status(500).send({
    error: ["Server Error"],
  });
};
