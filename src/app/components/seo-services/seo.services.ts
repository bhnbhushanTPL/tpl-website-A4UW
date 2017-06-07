
import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {HeadClass} from "../head-data/head-class";

@Injectable()
export class SeoService {
  constructor(){
//    g_seoService=this;
  }

  // Observable string sources
  private _showHeadSource = new Subject<HeadClass>();

  // Observable string streams
  changeTitle$ = this._showHeadSource.asObservable();

  // Service change commands
  change(headObject: any) {
    this._showHeadSource.next(headObject)
  }
}
