import { Component } from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import { Http } from '@angular/http';
//TODO import { ROUTER_DIRECTIVES } from '@angular/router';
//TODO import {ShowcaseService} from "../seo-services/showcase-service";



@Component({
  selector: 'tp-header',
  // directives: [
  //   ROUTER_DIRECTIVES
  // ],
  styleUrls: ['./header.component.scss'],
  templateUrl: 'header.template.html'
})

export class Header {
  work : string = "work";
  services: string = "services";
  isShowcaseVisible : Boolean = true;
  subscription : Subscription;
  isHide: boolean=true;

  // TODO constructor(public http: Http,showcaseService : ShowcaseService) {
  //
  //   this.subscription = showcaseService.changeShowcase$.subscribe(
  //     value => {
  //       this.isShowcaseVisible = value;
  //     }
  //   );
  // }
  uncheckMenu() {
    this.isShowcaseVisible = true;
    var element : any = document.getElementById ("menu-toggle");
    element.checked = false;
  }
}
