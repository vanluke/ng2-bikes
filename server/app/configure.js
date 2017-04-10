import mount from 'koa-mount';
import json from 'koa-json';
import cors from 'koa-cors';
import serve from 'koa-static';
import app from './koa-app';
import config from '../config/app-config';
import error from './error';
import listen from './listen';
import routes, { ioRoute } from '../routes';
import attach, { io } from './io-app';
const version = config.get('version');

const endpoint = `/api/v${version}`;
const ioAuth = config.get('io').auth;

console.log('io namespace', ioAuth.namespace);

attach(app);
io.on(ioAuth.namespace, ioRoute);

app.use(json());
app.use(cors());
app.use(mount(endpoint, routes.middleware()));
error(app);

listen(app);