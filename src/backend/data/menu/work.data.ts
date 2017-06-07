import {footer} from "../common/footer.data";
import {futureThinking} from "../common/futureThinking.data";
import {workMetadata} from "../common/meta.data";

export const workDB = {
  getWorkDetails() {
    let res = {

      portfolio: {
        id: ["slider"],
        spanClass: ["slide-text"],
        sliderImages: [
          {
            img: "/src/app/work/slider/automobile.jpg",
            alt: "Automobile",
            class: "slide-1",
            spanClass: "slide-text",
            imgText: "Automobile"
          },
          {
            img: "/src/app/work/slider/healthcare.jpg",
            alt: "Healthcare",
            class: "slide-2",
            imgText: "Healthcare"
          },
          {
            img: "/src/app/work/slider/agriculture.jpg",
            alt: "Agriculture",
            class: "slide-3",
            imgText: "Agriculture"
          },
          {
            img: "/src/app/work/slider/e-commerce.jpg",
            alt: "eCommerce",
            class: "slide-4",
            imgText: "eCommerce"
          },
          {
            img: "/src/app/work/slider/IT.jpg",
            alt: "IT",
            class: "slide-5",
            imgText: "Information Technology"
          },
          {
            img: "/src/app/work/slider/real-estate.jpg",
            alt: "Real Estate",
            class: "slide-6",
            imgText: "Real Estate"
          }
        ],
        type: [
          {
            img: "/src/app/work/images/icons/e-commerce.png",
            alt: "eCommerce",
            title: "eCommerce",
            class: "works-list e-commerce",
            url: "onlinestore"
          },
          {
            img: "/src/app/work/images/icons/automobile.png",
            alt: "Automobile",
            title: "Automobile",
            class: "works-list automobile",
            url: "automobile"
          },
          {
            img: "/src/app/work/images/icons/agriculture.png",
            alt: "Agriculture",
            title: "Agriculture",
            class: "works-list agriculture",
            url: "agriculture"
          },
          {
            img: "/src/app/work/images/icons/information-technology.png",
            alt: "Information Technology",
            title: "Information Technology",
            class: "works-list information-technology",
            url: "/infoTech"
          },
          {
            img: "/src/app/work/images/icons/healthcare.png",
            alt: "Healthcare",
            title: "HealthCare",
            class: "works-list healthcare",
            url: "healthcare"
          },
          {
            img: "/src/app/work/images/icons/real-estate.png",
            alt: "Real Estate",
            title: "Real Estate",
            class: "works-list real-estate",
            url: "realEstate"
          }
        ]
      },

      footer: footer,

      futureThinking: futureThinking,
      metaData : workMetadata,

      slider1: "/src/app/home/slider/slider1.jpg",
      slider2: "/src/app/home/slider/slider2.jpg",

      services1: "./assets/images/web-application.png",
      Texttype1: "Web Application",
      servicesDes1: "Lorem Ipsum is simply dummy text",
      services2: "./assets/images/mobile-application.png",
      Texttype2: "Mobile Application",
      servicesDes2: "Lorem Ipsum is simply dummy text",
      services3: "./assets/images/e-commerce.png",
      Texttype3: "e-Commerce",
      servicesDes3: "Lorem Ipsum is simply dummy text",
      services4: "./assets/images/iot.png",
      Texttype4: "IoT",
      servicesDes4: "Lorem Ipsum is simply dummy text",

      UiUx: "./assets/images/ui-ux.png",
      clienttitle: "Our Clients",
      futurethinkingtitle: "Happenings At Our Company",
      contacttitle: "Contact Us",
      worktitle: "Our Works",
      companyname: "Software Private Limited",

      tplAutomobile: "Automobile",
      tplAgriculture: "Agriculture",
      tplOnlineStore: "Online Store",
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
      techprimelabemail: "sales@techprimelab.com careers@techprimelab.com",
      curiousimg: "./assets/images/curious.png",

      techprimelabfacebook: "./assets/images/fb.svg",
      techprimelablinkedin: "./assets/images/linked-in.svg",
      techprimelabgoogleplus: "./assets/images/google-plus.svg",

      logo: "/src/app/home/logo.svg",
      techprimelablogo: "./assets/images/tpl-logo.png",
      uixText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      projectdescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
      projectlistdescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
      project1: "KPIT Klarity Dashboard",
      project1img: "./assets/images/kpit-1.png",
      project2: "KPIT UDD",
      project2img: "./assets/images/kpit-2.png",
      serviceType1: "UI/UX",
      serviceType2: "Web",
      serviceType3: "Mobile",
      serviceType4: "Online Store",
      serviceType5: "IoT",
      serviceType6: "Application Architect",
      serviceType7: "Process Automation",
      serviceType8: "Performance Optimization",
      serviceType9: "Cloud Deployment",
      tabTitle: "Our Work",
      tabDescription: "Our Mainstream work profile is designated to provide world class IT Solutions in UI/UX, Web, Mobile, eCommerce, IoT, Application Architecture and Performance Optimization for Sectors in Automobile, HealthCare, Agriculture and eCommerce.",
    };
    return  Promise.resolve(res);
  }
}
