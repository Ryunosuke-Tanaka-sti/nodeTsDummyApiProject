import express from "express";
import helmet from "helmet";
import cors from "cors";
import { TestService } from "../service/TestService";
import { badRequestException } from "../middleware/errorException";
import { testType } from "../types/testType";
const app = express();
app.use(helmet());
app.use(cors());
// ルーティングする
const testRouter = express.Router();

// 専用のミドルウェアを用意して、処理前に情報があるかどうかをチェックする
// ここでエラーハンドリングを行い、ルータの部分では処理のみを行う
testRouter.use("/", (req, res, next) => {
  const methodName = req.method;
  switch (methodName) {
    case "GET":
    case "POST":
    case "PUT":
    case "DELETE":
      next();
      break;
    default:
      res.status(405).send({ message: "not allow method" });
      break;
  }
});

// ここのベストプラクティスを知りたい
const isTestType = (data: testType): data is testType =>
  "id" in data && "text" in data && "done" in data;

testRouter.get("/", (_req, res) => {
  const service = new TestService();
  service
    .test()
    .then((result) => {
      res.status(200).send({ result: result.test });
    })
    .catch(() => {
      // error周りの処理
      console.log("fin");
    });
});
testRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  // idがないと弾く・文字列が来てもはじく処理をセキュリティ的に追加
  if (!id || !Number(id)) throw badRequestException("idが必要です");

  const service = new TestService();
  service
    .test()
    .then((result) => res.status(200).send({ result: result.test }))
    .catch(() => {
      console.log("fin");
    });
});

testRouter.post("/", (req, res) => {
  const postData: testType = req.body as testType;
  // 型判定
  if (!isTestType(postData))
    throw badRequestException("パラメータが不足しています");

  res.status(201).send({ result: "ok" });
});

// 204の場合ではデータが返らないことが前提である
testRouter.put("/", (req, res) => {
  const id: number = (req.body as { id: number }).id;
  if (typeof id != "number")
    throw badRequestException("許可されているのは数字のみです");

  res.status(204).end();
});

testRouter.delete("/", (req, res) => {
  const id: number = (req.body as { id: number }).id;
  if (typeof id != "number")
    throw badRequestException("許可されているのは数字のみです");

  res.status(204).end();
});

//routerをモジュールとして扱う準備
// module.exports = router;
export default testRouter;
