import {footer} from "../common/footer.data";
import {futureThinking} from "../common/futureThinking.data";
import {processMetadata} from "../common/meta.data";

export const processDB = {
  getProcessDetails() {
    let res = {
      stageTitle1: "User Stories in JIRA are created",
      stageDescription1: "Your Idea is mapped into sizable technical User Stories",

      stageTitle2: "Priority User Stories are identified",
      stageDescription2: "User Stories that are important to you are prioritized to serve first",

      stageTitle3: "Agile Integrated Development & Testing",
      stageDescription3: "Continuous Integration and Automated Unit Testing are used to ensure Quick and Quality Deliveries",

      stageTitle4: "Automated Deployment",
      stageDescription4: "Automated process is used to Deploy Integrated code to production",

      footer: footer,
      futureThinking: futureThinking,
      metaData : processMetadata,
    };
    return Promise.resolve(res);
  }
}
