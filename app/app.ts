// ライブラリ読み込み
import express from "express";
import helmet from "helmet";
import cors from "cors";
import { errorHandler } from "./middleware/errorException";
import { logMiddleware } from "./middleware/logMiddleware";
const app = express();
app.use(helmet());
// ここはデプロイ先の環境変数から取得するというムーブいいのでは？
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

//body-parserの設定
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 4242; // port番号を指定

// ログ用ミドルウェア
app.use(logMiddleware);

// 個別ルーティング設定
const testRouter = require("./routes/testRouter");
app.use("/test", testRouter);

// いずれのルーティングにもマッチしない(==NOT FOUND)
app.use((_req, res) => {
  res.status(404).send({ message: "not Found" });
});

// errorに関するmiddlewareは最後に記述する必要がある
// error要ミドルウェア
app.use(errorHandler);

//サーバ起動
app.listen(port);
console.log("listen on port " + port);
