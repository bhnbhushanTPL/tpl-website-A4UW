
export const architectureDb={
getApplicationArchitectProjects(){
  let res={
    title : "Application Architect",
    description :"Our Web Application Architects design and develop Application Architectures for new and existing project ideas of our clients. Our Application Integration Architects play a key role in integrating several different applications to online systems and global databases.",
    projects :[
      {
        projectTitle:"Application Architect Klarity Dashboard",
        projectDescription : "Application Architect Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
        projectImg : "./assets/images/kpit-1.png",
        imgAlt : "Application Architect Klarity Dashboard",
        class : "project-description"
      },
      {
        projectTitle:"Application Architect UDD",
        projectDescription : " Application Architect Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
        projectImg : "./assets/images/kpit-2.png",
        imgAlt : "Application Architect UDD",
        class : "project-description float-right"
      },
      {
        projectTitle:"Application Architect Test",
        projectDescription : " Application Architect Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
        projectImg : "./assets/images/kpit-1.png",
        imgAlt : "Application Architect Klarity Dashboard",
        class : "project-description"
      }
    ],

  };
  return Promise.resolve(res);

}};
