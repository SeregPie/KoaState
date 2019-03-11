# KoaState

`KoaState(state)`

A simple state middleware.

## setup

### npm

```shell
npm i @seregpie/koa-state
```

### Node

```javascript
let KoaState = require('@seregpie/koa-state');
```

## usage

```javascript
let Koa = require('koa');
let KoaState = require('@seregpie/koa-state');
let mysql = require('mysql');

let app = new Koa();
app.use(KoaState({
  mysql: {
    pool: mysql.createPool({
      database: 'my_db',
      host: 'localhost',
      password: 'secret',
      user: 'me',
    }),
  },
  root: __dirname,
}));

app.use(async (ctx, next) => {
  let {
    mysql,
    root,
  } = ctx.state;
  // process
});
```
