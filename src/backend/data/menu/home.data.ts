import {footer} from "../common/footer.data";
import {futureThinking} from "../common/futureThinking.data";
import {header} from "../common/header.data";
import {commonnews} from "../common/common.news.data";

export const homeDB = {
  get() {
    let res = {
        clients: [
                  {
                    class:"biomedtrics",
                    alt:"biomedtrics",
                    href:"work/healthcare"
                  },
                  {
                    class:"cut2it",
                    alt:"cut2it",
                    href:"work/infoTech"
                  },
                  {
                    class:"hirematica",
                    alt:"hirematica",
                    href:"work/onlinestore"
                  },
                  {
                    class:"mybookfind",
                    alt:"mybookfind",
                    href:"work/onlinestore"
                  },
                  {
                    class:"kpit",
                    alt:"kpit",
                    href:"work/infoTech"
                  },
                  {
                    class:"thirsty_carroot",
                    alt:"Thirsty Carroot",
                    href:"work/agriculture"
                  },
                  {
                    class:"source7",
                    alt:"source7",
                    href:"work/onlinestore"
                  },
                  {
                    class:"klotho",
                    alt:"klotho",
                    href:"work/onlinestore"
                  },
                  {
                    class:"rental_roost",
                    alt:"RentalRoost",
                    href:"work/realEstate"
                  }
        ],
      class:"rental_roost",
      alt:"RentalRoost",
      href:"",
      services:[
        {
          img:"./assets/images/web-application.png",
          alt: "Web Application",
          href :"/service/web",
          class: "webApplication hover-row",
          type :"Web Application",
          description:"Genius Web Applications that fulfill Genuine Work Expectations",
        },
        {
          img:"./assets/images/mobile-application.png",
          alt: "Mobile Application",
          href :"/service/mobile",
          class: "mobileApplication hover-row",
          type :"Mobile Application",
          description:"Delivering what matters most while you are Mobile",
        },
        {
          img:"./assets/images/e-commerce.png",
          alt: "eCommerce",
          href :"/service/onlinestore",
          class: "eCommerce hover-row",
          type :"eCommerce",
          description:"Redefining eCommerce to Easy & Effortless Commerce",
        },
        {
          img:"./assets/images/iot.png",
          alt: "IoT",
          href :"/service/iot",
          class: "iot hover-row",
          type :"Internet of Things",
          description:"Rendering Innovation of Talent to deliver Internet of Things",
        }

      ],
      slider1: "./assets/images/slider1.jpg",
      slider2: "./assets/images/slider2.jpg",
      slider3: "./assets/images/slider3.jpg",
      slider4: "./assets/images/slider4.jpg",

      footer : footer,
      futureThinking : futureThinking,
      header: header,
      news: commonnews,

      curiousimg:"./assets/images/curious.png",
      uixText :"An Expert Team creating World Class",
      UiUx: "./assets/images/ui-ux.png",
      UiUxHref: "service/uiux",
      clienttitle:"Our Clients",
      futurethinkingtitle: "Happenings at our Company",
      contacttitle:"Reach Us",
      companyname:"Software Private Limited",

      serviceType1: "UI/UX",
      serviceType2: "Web",
      serviceType3: "Mobile",
      serviceType4: "Online Store",
      serviceType5: "IoT",
      serviceType6: "Application Architect",
      serviceType7: "Process Automation",
      serviceType8: "Performance Optimization",
      serviceType9: "Cloud Deployment",
      tplAutomobile: "Automobile",
      tplAgriculture: "Agriculture",
      tplOnlineStore: "eCommerce",
      tplInformationTechnology: "Information Technology",
      tplHealthcare: "HealthCare",
      tplRealEestate: "Real Estate",
      /*
      Delete the code after testing by -Pooja

      services1:"./assets/images/web-application.png",
      Texttype1:"Web Application",
      servicesDes1:"Genius Web Applications that fulfill Genuine Work Expectations",
      services2:"./assets/images/mobile-application.png",
      Texttype2:"Mobile Application",
      servicesDes2:"Delivering what matters most while you are Mobile",
      services3:"./assets/images/e-commerce.png",
      Texttype3:"eCommerce",
      servicesDes3:"Redefining eCommerce to Easy & Effortless Commerce",
      services4:"./assets/images/iot.png",
      Texttype4:"Internet of Things",
      servicesDes4:" Rendering Innovation of Talent to deliver Internet of Things",
      worktitle: "Our Works",
      tplAutomobile: "Automobile",
      tplAgriculture: "Agriculture",
      tplOnlineStore: "eCommerce",
      tplInformationTechnology: "Information Technology",
      tplHealthcare: "HealthCare",
      tplRealEestate: "Real Estate",
      Automobileimg: "/src/app/work/images/icons/automobile.svg",
      Agricultureimg: "/src/app/work/images/icons/agriculture.svg",
      OnlineStoreimg: "/src/app/work/images/icons/e-commerce.svg",
      InformationTechnologyimg: "/src/app/work/images/icons/information-technology.svg",
      Healthcareimg: "/src/app/work/images/icons/healthcare.svg",
      RealEestateimg: "/src/app/work/images/icons/real-estate.svg",

      contactAddress: "Bldg No 14 1st Floor Electronic Estate Parvati Pune Satara Road,Pune 411009,",
      techprimelabnumber: "sales@techprimelab.com careers@techprimelab.com",
      techprimelabemail:"sales@techprimelab.com careers@techprimelab.com",

       techprimelabfacebook:"./assets/images/fb.svg",
       techprimelablinkedin:"./assets/images/linked-in.svg",
       techprimelabgoogleplus:"./assets/images/google-plus.svg",

       logo: "./assets/images/tpl-logo.png",
       logomobile: "./assets/images/mobile-logo.png",
       techprimelablogo: "./assets/images/tpl-logo.png",

       workdescription: "We create systems that challenge the competitors of our clients and allow our clients to operate swiftly, smartly and strategically in order to stay ahead in their competitive business world. We provide our offerings at their fingertips within the need of their time, supply and demand. We give the right edge to their businesses with cutting edge technologies that take care of their business operations, administration and management with minimal intervention.",
       projectdescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
       projectlistdescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
       project1:"KPIT Klarity Dashboard",
       project1img: "./assets/images/kpit-1.png",
       project2:"KPIT UDD",
       project2img: "./assets/images/kpit-2.png",


      */

    };
    return Promise.resolve(res);
  }

};
