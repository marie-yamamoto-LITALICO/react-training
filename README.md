# react-training-template

## 開発環境準備

### Docker

https://docs.docker.com/get-docker/

```bash
$ docker -v
=> Docker version 19.03.12, build 48a66213fe # その時点の最新版

$ docker-compose -v
=> docker-compose version 1.26.2, build eefe0d31 # その時点の最新版
```

### Node.js

https://nodejs.org/ja/download/

パッケージマネージャを使いたい人は↓  
https://nodejs.org/ja/download/package-manager

```bash
node -v
=> v14.17.0 # その時点の最新のLTS
```

node_modules インストール

```bash
$ npm install
```

## 開発環境起動

```bash
$ docker-compose up # DB(localhost:3360) & backend sever(localhost:3500)起動
$ npm run start # localhost:3000でfrontend server起動
```

## 研修内容

https://github.com/litalico-engineering/react-training-template/wiki
