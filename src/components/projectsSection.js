import Card from "./card";
import "./styles/projectSection.css";
import skoteImage from "../assets/images/skote-site-1.png"
import skoteImage2 from "../assets/images/skote-site-2.png"
import skoteImage3 from "../assets/images/skote-site-3.png"
import skoteImage4 from "../assets/images/skote-site-4.png"
import siteImage1 from "../assets/images/thisSite1.png"
import siteImage2 from "../assets/images/thisSite2.png"
import siteImage3 from "../assets/images/thisSite3.png"

function ProjectsSection() {
  const skote = [
    { url: skoteImage, title: "Georgios audio portfolio website" },
    { url: skoteImage2, title: "Georgios audio portfolio website" },
    { url: skoteImage3, title: "Georgios audio portfolio website" },
    { url: skoteImage4, title: "Georgios audio portfolio website" },
  ];

  const thisSite = [
    { url: siteImage1, title: "This portfolio website" },
    { url: siteImage2, title: "This portfolio website" },
    { url: siteImage3, title: "This portfolio website" },
  ];


  return (
    <div id="projects" className="relative flex flex-col items-center justify-center w-full" >
      <div className="relative flex flex-col h-full w-full px-10 items-center lg:items-start">
        <hr className="h-0.5 bg-text border-0 rounded-full w-full"/>
        <h1 className="text-7xl font-extrabold -z-10 text-text lg:text-9xl">Projects</h1>
      </div>
      <div className="flex flex-col pb-56 w-full justify-center items-center space-y-10">

        <div className="flex flex-col pt-10 items-center space-y-10 xl:space-y-0 xl:space-x-20 xl:flex-row">
          <div className="relative xl:top-24"><Card image={skote} title="Georgios Audio Website" subtitle="A portfolio website for sound designer Georgios." url="https://www.georgiosaudio.com/"/></div>
          <Card image={thisSite} title="This Website" subtitle="This is my portfolio website designed and developed by me." url="https://github.com/kwts0z/portfolio-site"/>
          <div className="relative xl:top-24"><Card video="https://www.youtube.com/watch?v=g9xeKVPCkvw" title="PikPok" subtitle="PikPok is a simple social media platform like instagram, developed as a university project." url="https://github.com/Circe-s-House/pikpok"/></div>
        </div>

        <div className="flex flex-col items-center space-y-10 xl:space-y-0 xl:space-x-20 xl:flex-row xl:pt-40">
          <div className="relative xl:top-24"><Card video="https://youtu.be/E9CtiereuWc" title="OpenGL" subtitle="This university project was developed using OpenGL to create a 3D scene featuring an airplane rotating around the Earth."/></div>
          <Card video="https://youtu.be/PXRCxz0rN-M" title="Car Washing System" subtitle="This is a server/client app designed to automate the process at a car washing company. This is part of a university project" url="https://github.com/kwts0z/car-washing-auto-system"/>
          <div className="relative xl:top-24"><Card video="https://youtu.be/6q8DK-yLDlw" title="Weather Forecast App" subtitle="In this university project, I utilized Scrapy for web scraping to collect and filter weather data from three forecast websites based on humidity, temperature, and wind speed." url="https://github.com/Circe-s-House/weather-forecast"/></div>
        </div>

        <div className="xl:pt-24">
          <Card video="https://youtu.be/iywGxnhXyhw" title="Article Search Engine" subtitle="An Apache Lucene-powered search engine for articles, offering advanced search capabilities through diverse fields and the ability to manage articles with ease." url="https://github.com/kwts0z/TReSA"/>
        </div>
      </div>

      <div id="custom-shape-divider-bottom-1697562712">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" id="shape-fill"></path>
          </svg>
      </div>
    </div>
  );
}

export default ProjectsSection;
