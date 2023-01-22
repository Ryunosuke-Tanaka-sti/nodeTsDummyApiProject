// ライブラリ読み込み
import express from "express";
import helmet from "helmet";
import bodyParser from "body-parser";
import cors from "cors";

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

app.get("/helloworld", (_req, res) => {
  res.status(200).send({ message: "hello, world" });
});

// いずれのルーティングにもマッチしない(==NOT FOUND)
app.use((_req, res) => {
  res.status(404).send({ message: "not Found" });
});

//サーバ起動
app.listen(port);
console.log("listen on port ", port);
