import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms'
import { TransferHttpModule } from '../modules/transfer-http/transfer-http.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { scssTrial } from './components/scssTrial/scssTrial.component';
import { Header } from './components/header/header.component';

//declare var $ : JQueryStatic;

@NgModule({
	imports: [
    CommonModule,
    HttpModule,
    TransferHttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'about', component: AboutComponent}
    ])
	],
	declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    scssTrial,
    Header
    ],
  exports: [ AppComponent ]
})
export class AppModule {}
