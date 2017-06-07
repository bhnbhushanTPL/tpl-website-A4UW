export const performanceDb={
  getPerformanceOptimizationProjects(){
  let res={
    title : "Performance Optimization",
    description :"We deliver Performance Optimization solutions that compress and compact data, code and services in our client’s software. Our optimization technologies and methodologies are a strong result of aggressive frameworks and systems we have. We create fit to use and best fit products that are highly optimized for web, mobile and desktop work environments.",
    projects :[
      {
        projectTitle:"Performance Optimization Klarity Dashboard",
        projectDescription : "PerformanceOptimization Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
        projectImg : "./assets/images/kpit-1.png",
        imgAlt : "Performance Optimization Klarity Dashboard",
        class : "project-description"
      },
      {
        projectTitle:"Performance Optimization UDD",
        projectDescription : " Performance Optimization Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
        projectImg : "./assets/images/kpit-2.png",
        imgAlt : "Performance Optimization UDD",
        class : "project-description float-right"
      },
      {
        projectTitle:"Performance Optimization Test",
        projectDescription : " Performance Optimization Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
        projectImg : "./assets/images/kpit-1.png",
        imgAlt : "Performance Optimization Klarity Dashboard",
        class : "project-description"
      }
    ],

  };
  return Promise.resolve(res);

}};
