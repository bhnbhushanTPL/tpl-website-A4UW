import {footer} from "../common/footer.data";
import {contactMetadata} from "../common/meta.data";

export const contactUsDB = {
  getContactUsDetails() {
    let res = {
      address1: " Bldg No. 14, 1st Floor,Electronic Estate, Parvati Pune-Satara Road, Pune 411009",
      address2: "670 Lambeth Court,Sunnyvale, CA 94087 ",
      address3: "3 Kingsway Terrace, Locke King Road, Weybridge, KT13 OSX ",

      phoneNo1: "(+91)-20 24218865",
      phoneNo2: "(+1) 408 306 1904",
      phoneNo3: "(+44) 773 453 2830",
      metaData : contactMetadata,

      footer: footer
    };
    return Promise.resolve(res);
  }
}
