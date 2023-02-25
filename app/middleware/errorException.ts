import { NextFunction, Request, Response } from "express";

class HttpException extends Error {
  statusCode?: number;
  message: string;
  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
  }
}

export const badRequestException = (
  message = "400 Bad Request"
): HttpException => {
  return new HttpException(400, message);
};

export const notFoundException = (message = "404 Not Found"): HttpException => {
  return new HttpException(404, message);
};

export const forbiddenException = (
  message = "403 Forbidden"
): HttpException => {
  return new HttpException(403, message);
};

export const notAllowedMethodExveption = (
  message = "405 not allowed method"
): HttpException => {
  return new HttpException(405, message);
};

export const errorHandler = (
  err: HttpException,
  _req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (res.headersSent) return next(err);
  // ErrorLogに挟む
  res.status(err.statusCode || 500).send({ message: err.message });
  next();
};
