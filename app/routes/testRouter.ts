import express from "express";
import {
  badRequestException,
  notAllowedMethodExveption,
} from "../middleware/errorException";
import { TestService } from "../service/TestService";
import { isTestType, isTestTypeOmitId, testType } from "../types/testType";

// ルーティングする
const testRouter = express.Router();

// 専用のミドルウェアを用意して、処理前に情報があるかどうかをチェックすることができる
// 今回はメソッドが許可されているかをチェックする
testRouter.use("/", (req, _res, next) => {
  const methodName = req.method;
  switch (methodName) {
    case "GET":
    case "POST":
    case "PUT":
    case "DELETE":
      next();
      break;
    default:
      next(notAllowedMethodExveption());
  }
});

testRouter.get("/", (_req, res, next) => {
  const service = new TestService();
  service
    .getAllData()
    .then((value) => {
      return res.status(200).send({ data: value });
    })
    .catch(() => {
      // console.log("error", value);
      next(badRequestException("何らかの問題が生じました"));
    });
});
testRouter.get("/:id", (req, res, next) => {
  const id = req.params.id;
  // idがないと弾く・文字列が来てもはじく処理をセキュリティ的に追加
  if (!id || !Number(id)) next(badRequestException("idが必要です"));

  const service = new TestService();
  service
    .getData(Number(id))
    .then((value) => {
      if (!value) return res.status(200).send({ data: {} });
      return res.status(200).send({ data: value });
    })
    .catch(() => {
      // console.log("error", value);
      next(badRequestException("何らかの問題が生じました"));
    });
});

testRouter.post("/", (req, res, next) => {
  const postData: testType = req.body as testType;
  // 型判定
  if (!isTestTypeOmitId(postData))
    next(badRequestException("パラメータが不足しています"));

  const service = new TestService();
  service
    .createData(postData)
    .then((value) => {
      if (!value) return res.status(200).send({ data: {} });
      return res.status(200).send({ data: value });
    })
    .catch(() => {
      // console.log("error", value);
      next(badRequestException("一致するid情報がありません"));
    });
});

// 204の場合ではデータが返らないことが前提である
testRouter.put("/", (req, res, next) => {
  const postData: testType = req.body as testType;
  // 型判定
  if (!isTestType(postData))
    next(badRequestException("パラメータが不足しています"));

  const service = new TestService();
  service
    .editData(postData)
    .then(() => {
      return res.status(204).end();
    })
    .catch(() => {
      next(badRequestException("一致するid情報がありません"));
    });
});

testRouter.delete("/", (req, res, next) => {
  const id: number = (req.body as { id: number }).id;
  if (typeof id != "number")
    next(badRequestException("許可されているのは数字のみです"));
  const service = new TestService();
  service
    .deleteData(id)
    .then(() => {
      return res.status(204).end();
    })
    .catch(() => {
      // console.error(value);
      next(badRequestException("一致するid情報がありません"));
    });
});

//routerをモジュールとして扱う準備
export default testRouter;
