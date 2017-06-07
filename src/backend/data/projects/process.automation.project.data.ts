export const processAutomationDb={
  getProcessAutomationProjects(){
  let res={
    title : "Process Automation",
    description :"Our Process Automation Engineers deliver Process Automation Software, Solutions and Control for diverse automation necessities. We have established our identity as one of the most reliable Process Automation Companies in India working with Robotic Process Automation Vendors and Industry Process Automation Tools.",
    projects :[
      {
        projectTitle:"Process Automation Klarity Dashboard",
        projectDescription : "Process Automation Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
        projectImg : "./assets/images/kpit-1.png",
        imgAlt : "Process Automation Klarity Dashboard",
        class : "project-description"
      },
      {
        projectTitle:"Process Automation UDD",
        projectDescription : " Process Automation Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
        projectImg : "./assets/images/kpit-2.png",
        imgAlt : "Process Automation UDD",
        class : "project-description float-right"
      },
      {
        projectTitle:"Process Automation Test",
        projectDescription : " Process Automation Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
        projectImg : "./assets/images/kpit-1.png",
        imgAlt : "Process Automation Klarity Dashboard",
        class : "project-description"
      }
    ],

  };
  return Promise.resolve(res);

}};
