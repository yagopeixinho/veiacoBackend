import jwt from "jsonwebtoken";

import { Request, Response, NextFunction } from "express";
import { UnauthorizedError } from "../helpers/appError";
import { AuthPayLoad } from "../types/AuthUserDTO";

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

    const { id } = data as AuthPayLoad;

    req.id = id;

    return next();
  } catch (err) {
    throw new UnauthorizedError("Acesso negado!");
  }
}
