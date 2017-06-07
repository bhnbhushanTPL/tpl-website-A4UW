import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import 'rxjs/Rx';
import * as express from 'express';
import * as compression from 'compression';
import { platformServer, renderModuleFactory } from '@angular/platform-server';
import { ServerAppModule } from './app/server-app.module';
import { ngExpressEngine } from './modules/ng-express-engine/express-engine';
import { ROUTES } from './routes';
import { enableProdMode } from '@angular/core';
enableProdMode();
const app = express();
const port = Number(process.env.PORT || 8080);

app.engine('html', ngExpressEngine({
  bootstrap: ServerAppModule
}));

app.set('view engine', 'html');
app.set('views', 'src');


import {
  getAdvantagesApi,getHomeApi,serverApi, getServicesDetailsApi, getAboutusDetailsApi, getApplicationArchitectProjectsApi,
  getProcessAutomationProjectsApi, getPerformanceOptimizationProjectsApi,
  getCloudDeploymentProjectsApi, getProcessDetailsApi, getContactUsDetailsApi, getBlogsDetailsApi, getNewsDetailsApi
} from './backend/api';

import { getWorkDetailsApi } from './backend/api';
import {sendMailApi} from "./backend/api";
//TO DO import { ngApp } from './main.node';
//TO DO import {pageNotFound} from "./main.node";
import {getAllWorkProjectApi} from "./backend/api";
import {getAllServiceProjectApi} from "./backend/api";

app.get('/api/advantages',getAdvantagesApi);
app.get('/api/homeData', getHomeApi);

app.get('/api/data', serverApi);
app.get('/api/work',getWorkDetailsApi);
app.get('/api/process',getProcessDetailsApi);
app.get('/api/contactUs',getContactUsDetailsApi);
app.get('/api/services',getServicesDetailsApi);
app.get('/api/about',getAboutusDetailsApi);
app.get('/api/applicationArchitect', getApplicationArchitectProjectsApi);
app.get('/api/processAutomation', getProcessAutomationProjectsApi);
app.get('/api/performanceOptimization', getPerformanceOptimizationProjectsApi);
app.get('/api/cloudDeployment', getCloudDeploymentProjectsApi);
app.get('/api/blogs', getBlogsDetailsApi);
app.get('/api/news', getNewsDetailsApi);
app.get('/api/allWork', getAllWorkProjectApi);
app.get('/api/allService', getAllServiceProjectApi);
app.post('/api/send', sendMailApi);


app.use(compression());

app.use('',express.static('dist'));

app.use('/assets',express.static('dist/assets'));

app.use('/static',express.static('dist/static', {
  index: false
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

app.listen(port,() => {
	console.log(`Listening at ${port}`);
});
