import express from "express";
import { badRequestException, serverError } from "../middleware/errorException";

const dummyRouter = express.Router();

dummyRouter.get("/200", (_req, res) => {
  return res.status(200).send({ data: "data" });
});
dummyRouter.get("/400", (_req, _res, next) => {
  next(badRequestException("何らかの問題が生じました"));
});

dummyRouter.get("/500", (_req, _res, next) => {
  next(serverError());
});

export default dummyRouter;
