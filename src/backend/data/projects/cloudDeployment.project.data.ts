export const cloudDeploymentDb={
  getCloudDeploymentProjects(){
  let res={
    title : "Cloud Deployment",
    description :"We use our Cloud Deployment Managers and Cloud Application Deployment technologies to globally deployment end to end IT solutions for our clients. Our Cloud Deployment Specialists work with Cloud Deployment Models and Tools for Hybrid Cloud Deployment of solutions and services.",
    projects :[
      {
        projectTitle:"Cloud Deployment Klarity Dashboard",
        projectDescription : "Cloud Deployment Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
        projectImg : "./assets/images/kpit-1.png",
        imgAlt : "Cloud Deployment Klarity Dashboard",
        class : "project-description"
      },
      {
        projectTitle:"Cloud Deployment UDD",
        projectDescription : " Cloud Deployment Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
        projectImg : "./assets/images/kpit-2.png",
        imgAlt : "Cloud Deployment UDD",
        class : "project-description float-right"
      },
      {
        projectTitle:"Cloud Deployment Test",
        projectDescription : " Cloud Deployment Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
        projectImg : "./assets/images/kpit-1.png",
        imgAlt : "Cloud Deployment Klarity Dashboard",
        class : "project-description"
      }
    ],

  };
  return Promise.resolve(res);

}
};
