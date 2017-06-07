import { Http } from '@angular/http';
import { Response} from '@angular/http';
// import {FutureThinking} from "../future-Thinking/futute-thinking.component";
// import {Footer} from "../footer/footer.component";
// import {HeadClass} from "../head-data/head-class";
// import {SeoService} from "../seo-services/seo.services";

export class BaseClass {
  public data={futureThinking : {} ,news:{}, footer : {},metaData:{}};
  public headObject;
  public object1;
  isVisible: boolean= false;
  constructor(public http: Http, public url : string){
  }
  public func1(test :any){
       // this.seo.set(test);
        console.log("In Test");
  }

  ngOnInit() {
    this.http.get(this.url)

      .map((res:Response) => res.json())
      .subscribe(
        data => {
          this.data = data;
          this.isVisible=true;
        },
        err => console.error(err),
        () => console.log('done')
      );

  }
}
