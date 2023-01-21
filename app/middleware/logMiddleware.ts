import { NextFunction, Request, Response } from "express";

export const logMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  console.log("Request Type ", req.method);
  next();
};
