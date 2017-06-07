import {footer} from "../common/footer.data";
import {futureThinking} from "../common/futureThinking.data";
import {aboutMetadata} from "../common/meta.data";
export const aboutDb={
getAboutusDetails() {
  let res ={

    aboutUsOneLiner : "We regard our work of UI-UX, Web Applications, eCommerce, Internet of Things and Mobile Applications as our Feature Five Game Changers that make our clients win in their business!",
    details: [
      {
        title: "Who we are?",
        description: "<p>We are the Masters of Software Design &amp; Development for the web, specializing in UI-UX, Web Applications, eCommerce, Internet of Things and Mobile Applications.</p> <p>Our rich and dedicated techno-managerial team of experts builds lean Systems with continual agile development methodologies.</p> <p>With decades of Web Development experience, we are the best-in-class choice for our clients who need Web and Mobile solutions.</p>",
        class: "who-we-are",
        contentClass: "who-we-are-content",
        img: "./assets/images/who-we-are.jpg",
        alt: "Who we are",
        imgClass: "who-we-are-img"
      },
      {
        title: "What we do? ",
        description: "<p>We serve our IT Clients with cutting edge Technologies with our In-House Agile Team offering swift delivery rates.</p> <p>We integrate best quality, cost effective and result orientated projects to our clients.</p> <p>The products are delivered by our free minded creative experts who leverage their imagination and innovation to the best of their abilities.</p>",
        class: "what-we-do",
        contentClass: "what-we-do-content",
        img: "./assets/images/what-we-do.jpg",
        alt: "What we do ",
        imgClass: "what-we-do-img"
      },
      {
        title: "How we do? ",
        description: "<p>We capitalize consumer behaviour and client expectations to build effective Software Solutions and Web Systems.</p> <p>We keep our continuous attention on current Technology Trends, ongoing Industry Standards and ever-changing market movements to create fail-safe and intelligent solutions.</p> <p>We utilize our developers, designers and architects to create global products and services to match and serve the merit of industry benchmarks and standards.</p><p>The charisma of people who code with charm brings together an unmatched symphony of success that our clients look forward to.</p>",
        class: "how-we-do",
        contentClass: "how-we-do-content",
        img: "./assets/images/how-we-do.jpg",
        alt: "How we do ",
        imgClass: "how-we-do-img"
      }
    ],
    banner: [
      {
        img: "./assets/images/about.jpg",
        alt: "aboutus"

      }

    ],

    footer : footer,
    metaData : aboutMetadata,

    futureThinking : futureThinking,
    /* Delete the code after testing by -Pooja
    slider1: "/src/app/home/slider/slider1.jpg",
    slider2: "/src/app/home/slider/slider2.jpg",*/

  };
  return Promise.resolve(res);
}};
