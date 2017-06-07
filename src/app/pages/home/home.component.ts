import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Http } from '@angular/http';
import { Response} from '@angular/http';
import {Constant} from "../../shared/constants";
import {BaseClass} from "../../base-classes/base-class";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseClass implements OnInit {

  isVisible: boolean= false;



  // data = { advantages : {}, popularChats: {}, buildSection: {}, graphSection: {} };

  constructor(meta: Meta, title: Title, public http: Http) {
    super(http, "/api/data");

    title.setTitle('Home - TechPrimeLab');

    meta.addTags([
      {
        name: 'author', content: 'techprimelab.com'
      },
      {
        name: 'keywords', content: 'techprimelab'
      },
      {
        name: 'description', content: 'This is my great description.'
      },
    ]);

  }

  ngOnInit() {

    // use services for http calls
    this.http.get('/api/data')
      .subscribe(res => {
        this.data = res.json();
        this.isVisible=true;
      });
  }

  // scrollDown(){
  //   var height= screen.height;
  //   if(height!=568 || height!= 667 || height!= 736){
  //     height-=40;
  //   }
  //   window.scrollBy(0, height);
  // }

}
