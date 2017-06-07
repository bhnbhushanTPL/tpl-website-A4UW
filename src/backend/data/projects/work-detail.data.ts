import {automobile} from "./automobile.data";
import {agricultureDb} from "./agriculture.project.data";
import {onlinestoreDb} from "./onlinestore.project.data";
import {healthcareDb} from "./healthcare.project.data";
import {informationTechnologyDb} from "./informationTechnology.project.data";
import {realEstateDb} from "./realEstate.data";
export const allworkProjectDb= {
  getAllWorkProjects(){
    let res = {
    allwork:[
      onlinestoreDb,
      automobile,
      healthcareDb,
      agricultureDb,
      informationTechnologyDb,
      realEstateDb,
    ],
};
    return Promise.resolve(res);

},
}
