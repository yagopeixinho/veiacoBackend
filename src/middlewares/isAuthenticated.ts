import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { UnauthorizedError } from "../helpers/appError";

export interface PayLoad {
  id: string;
  ita: number;
  exp: number;
}

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) throw new UnauthorizedError("Acesso negado!");

  const token = authorization.replace("Bearer", "").trim();

  try {
    const data = jwt.verify(token, "secret");

    const { id } = data as PayLoad;

    req.id = id;

    return next();
  } catch (err) {
    throw new UnauthorizedError("Acesso negado!");
  }
}
