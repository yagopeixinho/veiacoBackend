import { Request, Response, NextFunction } from "express";

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization;

  if (!authToken)
    return res.status(401).json({ auth: false, message: "Acesso negado!" });

  return next();
}
