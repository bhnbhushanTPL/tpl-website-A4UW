/**
 * Created by TPL-pc on 5/24/2017.
 */
import {advantagesDb} from "./advantages.component";
import {homeDb} from "./data/home/home.data"


// Our API for demos only
import {workDB} from "./data/menu/work.data";
import {processDB} from "./data/menu/process.data";
import {contactUsDB} from "./data/menu/contact-us.data";
import {homeDB} from "./data/menu/home.data";
import {serviceDb} from "./data/menu/services.data";
import {architectureDb} from "./data/projects/apllication.architecture.project";
import {aboutDb} from "./data/menu/about.data";
import {processAutomationDb} from "./data/projects/process.automation.project.data";
import {performanceDb} from "./data/projects/performance.optimization.project";
import {cloudDeploymentDb} from "./data/projects/cloudDeployment.project.data";
import {blogsDb} from "./data/menu/blogs.data";
import {newsDb} from "./data/menu/news.data";
import {allworkProjectDb} from "./data/projects/work-detail.data";
import {allServiceProjectDb} from "./data/projects/all.service.project.data";

export function getAdvantagesApi(req, res) {
  advantagesDb.getAdvantages()
    .then(data => {
      return data;
    })
    .then(data => res.json(data));
}

export function getHomeApi(req, res){
  homeDb.getHomeData()
    .then(data => {
      return data;
    })
    .then(data => res.json(data));
}

// you would use cookies/token etc
var USER_ID = 'f9d98cf1-1b96-464e-8755-bcc2a5c09077'; // hardcoded as an example
//TO DO var nodemailer = require("nodemailer");

export function serverApi(req, res) {
  homeDB.get()
    .then(data => {
      return data;
    })
    .then(data => res.json(data));
}

export function getWorkDetailsApi(req, res) {
  workDB.getWorkDetails()
    .then(data => {
      return data;
    })
    .then(data => res.json(data));
}

export function getProcessDetailsApi(req, res) {
  processDB.getProcessDetails()
    .then(data => {
      return data;
    })
    .then(data => res.json(data));
}

export function getContactUsDetailsApi(req, res) {
  contactUsDB.getContactUsDetails()
    .then(data => {
      return data;
    })
    .then(data => res.json(data));
}

export function getAllServiceProjectApi(req, res) {

  allServiceProjectDb.getAllServiceProjects()
    .then(data => {
      return data;
    })
    .then(data => res.json(data));
}

export function getApplicationArchitectProjectsApi(req, res) {

  architectureDb.getApplicationArchitectProjects()
    .then(data => {
      return data;
    })
    .then(data => res.json(data));
}

export function getProcessAutomationProjectsApi(req, res) {

  processAutomationDb.getProcessAutomationProjects()
    .then(data => {
      return data;
    })
    .then(data => res.json(data));
}

export function getPerformanceOptimizationProjectsApi(req, res) {

  performanceDb.getPerformanceOptimizationProjects()
    .then(data => {
      return data;
    })
    .then(data => res.json(data));
}

export function getCloudDeploymentProjectsApi(req, res) {

  cloudDeploymentDb.getCloudDeploymentProjects()
    .then(data => {
      return data;
    })
    .then(data => res.json(data));
}

export function getServicesDetailsApi(req, res) {

  serviceDb.getServicesDetails()
    .then(data => {
      return data;
    })
    .then(data => res.json(data));
}

export function getAboutusDetailsApi(req, res) {

  aboutDb.getAboutusDetails()
    .then(data => {
      return data;
    })
    .then(data => res.json(data));
}

export function getBlogsDetailsApi(req, res) {

  blogsDb.getBlogsListings()
    .then(data => {
      return data;
    })
    .then(data => res.json(data));
}

export function getNewsDetailsApi(req, res) {

  newsDb.getNewsListings()
    .then(data => {
      return data;
    })
    .then(data => res.json(data));
}

export function getAllWorkProjectApi(req, res) {

  allworkProjectDb.getAllWorkProjects()
    .then(data => {
      return data;
    })
    .then(data => res.json(data));
}


//For send Mail
export function sendMailApi(req, res) {
  console.log('req'+JSON.stringify(req.body));

  var mailTo = {
    to :'admin@techprimelab.com',
    subject : 'Techprimelab - Reach out to us',
    html :  'Message Body:<p>Hi Admin,<br>'+req.body.name +
    ' is trying to reach you. Following are his/her details:' +
    '<br> Name: '+req.body.name+'<br>Email : '+req.body.email+
    '<br>Contact Number:'+req.body.number+'<br>Message: '+req.body.message,
    replyTo :req.body.email
  };
  // var smtpTransport = nodemailer.createTransport("SMTP",{
  //   service: "Gmail",
  //   auth: {
  //     user: "redminestatus@techprimelab.com",
  //     pass: "Contactu$@tpl"
  //   }
  // });
  // smtpTransport.sendMail(mailTo, function(err, response){
  //   if(err){
  //     console.log("Error sending mail: %s",err);
  //   }else{
  //
  //     console.log("Message sent: " + response.message);
  //     res.message=response.message;
  //   }
  // });

}

