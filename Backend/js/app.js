"use strict";
// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req:any, res:any) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hola Mundo');
// });
// server.listen(port, hostname, () => {
//   console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
// });
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var POSTGRESQL_ADDON_DB = "brc3eb6i5wutabqzuabc";
var POSTGRESQL_ADDON_HOST = "brc3eb6i5wutabqzuabc-postgresql.services.clever-cloud.com";
var POSTGRESQL_ADDON_PASSWORD = "CsR9yeK3vObzxInD0eyB";
var POSTGRESQL_ADDON_PORT = "5432";
var POSTGRESQL_ADDON_URI = "postgresql://uysple1axoglntdmlvje:CsR9yeK3vObzxInD0eyB@brc3eb6i5wutabqzuabc-postgresql.services.clever-cloud.com:5432/brc3eb6i5wutabqzuabc";
var POSTGRESQL_ADDON_USER = "uysple1axoglntdmlvje";
var POSTGRESQL_ADDON_VERSION = "11";
var pg = require('pg');
pg.connect(process.env.POSTGRESQL_ADDON_URI, function (err, client, done) {
});
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(pg, function () {
    console.log("Example app listening at http://localhost:" + port);
});
