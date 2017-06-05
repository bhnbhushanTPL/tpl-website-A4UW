/**
 * This file should be temporary
 * See https://github.com/angular/angular-cli/pull/5194
 */
import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import 'rxjs/Rx';
import * as express from 'express';
import * as compression from 'compression';
import { platformServer, renderModuleFactory } from '@angular/platform-server';
import { ServerAppModuleNgFactory } from './ngfactory/app/server-app.module.ngfactory';
import { ngExpressEngine } from './modules/ng-express-engine/express-engine';
import { ROUTES } from './routes';
//import { App } from './api/app';
import { enableProdMode } from '@angular/core';
enableProdMode();
const app = express();
const port = Number(process.env.PORT || 8080);

app.engine('html', ngExpressEngine({
  aot: true,
  bootstrap: ServerAppModuleNgFactory
}));

app.set('view engine', 'html');
app.set('views', 'src');


import {
  getAdvantagesApi,getHomeApi
} from './backend/api';

app.get('/api/advantages',getAdvantagesApi);
app.get('/api/homeData', getHomeApi);


app.use(compression());

app.use('.ico',express.static(__dirname));

app.use('/assets',express.static('dist/assets'));

app.use('/static',express.static('dist/static', {
  index: false,
  maxAge: 1 * 365 * 24 * 60 * 60 * 1000
}));

ROUTES.forEach(route => {
  app.get(route, (req, res) => {
    console.time(`GET: ${req.originalUrl}`);
    res.render('../dist/index', {
      req: req,
      res: res
    });
    console.timeEnd(`GET: ${req.originalUrl}`);
  });
});

app.listen(port, () => {
  console.log(`Listening at ${port}`);
});
