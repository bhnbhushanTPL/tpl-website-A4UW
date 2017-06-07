import {footer} from "../common/footer.data";
import {futureThinking} from "../common/futureThinking.data";
import {servicesMetadata} from "../common/meta.data";
export const serviceDb={
getServicesDetails() {

  let res ={
    slider1: "/src/app/home/slider/slider1.jpg",
    slider2: "/src/app/home/slider/slider2.jpg",




    portfolio:{
      id: ["slider1"],
      spanClass: ["slide-text1"],
      sliderImages: [
        {
          img: "/src/app/services/slider/application-architect.jpg",
          alt: "Automobile",
          class: "slide-1",
          imgText: "Application Architect"
        },
        {
          img: "/src/app/services/slider/performance-optimization.jpg",
          alt: "Healthcare",
          class: "slide-2",
          imgText: "Performance Optimization"
        },
        {
          img: "/src/app/services/slider/process-automation.jpg",
          alt: "Agriculture",
          class: "slide-3",
          imgText: "Process Automation"
        },
        {
          img: "/src/app/services/slider/cloud-deployment.jpg",
          alt: "eCommerce",
          class: "slide-4",
          imgText: "Cloud Deployment"
        }
      ],
      type: [
        {
          img:"/src/app/services/images/ui-ux.png",
          alt:"UI/UX",
          title: "UI/UX",
          class: "works-list UI-UX",
          url: "uiux"
        },
        {
          img:"/src/app/services/images/web.png",
          alt:"Web",
          title: "Web",
          class: "works-list web",
          url: "web"
        },
        {
          img:"/src/app/services/images/mobile.png",
          alt:"Mobile",
          title: "Mobile",
          class: "works-list mobile",
          url: "mobile"
        },
        {
          img:"/src/app/services/images/online-store.png",
          alt:"Online Store",
          title: "Online Store",
          class: "works-list online-store",
          url: "onlinestore"
        },
        {
          img:"/src/app/services/images/iot.png",
          alt:"IoT",
          title: "IoT",
          class: "works-list iot",
          url: "iot"
        }
        /*{
          img:"/src/app/services/images/application-architect.png",
          alt:"Application Architect",
          title: "Application Architect",
          class: "works-list architect",
          url: "applicationArchitect"
        },
        {
          img:"/src/app/services/images/process-automation.png",
          alt:"Process Automation",
          title: "Process Automation",
          class: "works-list automation",
          url: "processAutomation"
        },
        {
          img:"/src/app/services/images/performance-optimization.png",
          alt:"Performance Optimization",
          title: "Performance Optimization",
          class: "works-list performance",
          url: "performanceOptimization"
        },
        {
          img:"/src/app/services/images/cloud.png",
          alt:"Cloud Deployment",
          title: "Cloud Deployment",
          class: "works-list cloud",
          url: "cloudDeployment"
        }*/
      ]
    },
    footer : footer,
    metaData : servicesMetadata,
    futureThinking : futureThinking,
    services1:"./assets/images/web-application.png",
    Texttype1:"Web Application",
    servicesDes1:"Lorem Ipsum is simply dummy text",
    services2:"./assets/images/mobile-application.png",
    Texttype2:"Mobile Application",
    servicesDes2:"Lorem Ipsum is simply dummy text",
    services3:"./assets/images/e-commerce.png",
    Texttype3:"e-Commerce",
    servicesDes3:"Lorem Ipsum is simply dummy text",
    services4:"./assets/images/iot.png",
    Texttype4:"IoT",
    servicesDes4:"Lorem Ipsum is simply dummy text",

    UiUx: "./assets/images/ui-ux.png",
    clienttitle:"Our Clients",
    futurethinkingtitle: "Happenings At Our Company",
    contacttitle:"Contact Us",
    worktitle: "Our Works",
    companyname:"Software Private Limited",

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
    curiousimg:"./assets/images/curious.png",

    techprimelabfacebook:"./assets/images/fb.svg",
    techprimelablinkedin:"./assets/images/linked-in.svg",
    techprimelabgoogleplus:"./assets/images/google-plus.svg",

    logo: "/src/app/home/logo.svg",
    techprimelablogo: "./assets/images/tpl-logo.png",
    uixText :"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    projectdescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
    projectlistdescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
    project1:"KPIT Klarity Dashboard",
    project1img: "./assets/images/kpit-1.png",
    project2:"KPIT UDD",
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
    tabTitle: "Our Services",
    tabDescription: "<p>We create systems that challenge the competitors of our clients and allow our clients to operate swiftly, smartly and strategically in order to stay ahead in their competitive business world.</p><p>We provide our services at their fingertips within the need of their time, supply and demand. We give the right edge to their businesses with top notch technologies that boost their business operations, administration and management with minimal intervention.</p>" };

  return Promise.resolve(res);
}};
