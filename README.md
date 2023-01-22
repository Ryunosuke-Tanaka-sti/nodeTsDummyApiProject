# Node で API を作ってみたいフロントエンドエンジニア

## 環境

- Typescript
- Node
- Express

## 初期設定と Hellow World

- 初期設定
  - [Node.js + Express + TypeScript でREST APIを作成してみよう](https://qiita.com/macaroniSalad0141/items/5e00aa96138d169dabf5)
  - [expressの開発にTypeScriptを利用する](https://qiita.com/zaburo/items/69726cc42ef774990279)
- 環境変数
  - [dotenv](https://www.wakuwakubank.com/posts/662-nodejs-env/)
- 効率系
  - [Eslint＋Prettier導入](https://zenn.dev/big_tanukiudon/articles/c1ab3dba7ba111)
  - [Prettier設定](https://ma-vericks.com/blog/vscode-prettier/)
  - [Prettierの詳細設定](https://qiita.com/takeshisakuma/items/bbb2cd2f1c65de70e363)
  - [nodemonでホットリロード](https://tamiblog.xyz/2021/02/12/post-1640/)

## MiddleWareを用いることでのエラーハンドリング
- [公式のmiddlewareサンプル:express](https://expressjs.com/ja/guide/using-middleware.html)
- [公式のmiddlewareサンプル:express error](https://expressjs.com/ja/guide/error-handling.html)
- [nextを使うハンドリング](https://chaika.hatenablog.com/entry/2020/11/16/083000)
- [Defaultでのハンドリングとの組み合わせでnextを使わない方法](https://note.com/shift_tech/n/n42b96d36f0cf)
- [middleware Cors設定](https://zenn.dev/luvmini511/articles/d8b2322e95ff40)

## 処理部分の取り回し
- [postのデータが情報がちゃんと来ているか判定する部分](https://nishinatoshiharu.com/object-type-guard/)


## 参考資料（これからやりたいこと・コマンド内で調べたこと）

- [Heroku で公開](https://zenn.dev/kiriyama/articles/36b46d98f15161)
- [node アプリの Docker 化](https://tech-blog.s-yoshiki.com/entry/249)
- [DockerNode のトライ](https://zenn.dev/ysmtegsr/scraps/c792cf7e7c96fe)
- [res.json/res.end/res.end](https://neos21.net/blog/2019/03/12-01.html)
- [Halmetって何？](https://qiita.com/qianer-fengtian/items/148602c437e1703aa764)
- [envに取り組む思想系の記事](https://zenn.dev/dove/articles/5fd7926e7da949)

## 叩いたコマンド
```bash
# 開発ライブラリ
yarn add express helmet cors mongodb mongoose body-parser moment
yarn add -D typescript @types/node @types/express @types/helmet @types/cors @types/mongoose ts-node
# tsconfig 作成
npx tsc --init
# .eslintrc.js 作成
npx eslint --init



# 効率上げる系
yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
yarn add -D prettier eslint-config-prettier
yarn add -D nodemon
```