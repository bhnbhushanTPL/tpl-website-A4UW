
import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {HeadClass} from "../head-data/head-class";

@Injectable()
export class ShowcaseService {
  // Observable string sources
  private _showcaseSource = new Subject<Boolean>();

  // Observable string streams
  changeShowcase$ = this._showcaseSource.asObservable();

  // Service change commands
  change(isVisible: Boolean) {
    this._showcaseSource.next(isVisible);
  }
}
