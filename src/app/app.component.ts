import { Component, OnInit } from '@angular/core'
import { TransferState } from '../modules/transfer-state/transfer-state';

//declare var $ : JQueryStatic;

@Component({
	selector: 'app-root',
	template: `
    <!--<app-header></app-header>-->
    <tp-header></tp-header>
    <router-outlet></router-outlet>
    <!--<app-footer></app-footer>-->
	`
})

export class AppComponent implements OnInit {
  constructor() {

  }

  ngOnInit() {

  }
}
