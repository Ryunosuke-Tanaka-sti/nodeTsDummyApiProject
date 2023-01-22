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