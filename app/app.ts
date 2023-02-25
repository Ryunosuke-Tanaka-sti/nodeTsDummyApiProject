// ライブラリ読み込み
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import { errorHandler, notFoundException } from "./middleware/errorException";
import { logMiddleware } from "./middleware/logMiddleware";

import testRouter from "./routes/testRouter";

const app = express();
app.use(helmet());

// ここはデプロイ先の環境変数から取得するというムーブいいのでは？
// CORS設定
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

//body-parserの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 4242; // port番号を指定

// ログ用ミドルウェア
app.use(logMiddleware);

// 個別ルーティング設定
app.use("/test", testRouter);

// いずれのルーティングにもマッチしない(==NOT FOUND)
app.use((_req, _res, next) => {
  next(notFoundException());
});

// errorに関するmiddlewareは最後に記述する必要がある
// error用ミドルウェア
app.use(errorHandler);

//サーバ起動
app.listen(port);
console.log("listen on port ", port);
