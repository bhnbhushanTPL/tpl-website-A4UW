import {uiuxDb} from "./uiux.project.data";
import {webDb} from "./web.project.data";
import {mobileDb} from "./mobile.project.data";
import {onlinestoreDb} from "./onlinestore.project.data";
import {iotDb} from "./iot.project.data";
export const allServiceProjectDb= {
  getAllServiceProjects(){
    let res = {
      allService:[
        uiuxDb,
        webDb,
        mobileDb,
        onlinestoreDb,
        iotDb
      ],
    };
    return Promise.resolve(res);
  },
};
