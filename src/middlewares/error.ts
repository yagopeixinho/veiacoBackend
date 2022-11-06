import { NextFunction, Request, Response } from "express";
import { AppError } from "../helpers/appError";

export function errorMiddleware(
  error: Error & Partial<AppError>,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const statusCode = error.statusCode ?? 500;
  const message = error.statusCode ? error.message : "Internal Server Error";
  return res.status(statusCode).json({ message });
}
