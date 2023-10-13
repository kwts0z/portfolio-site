import Card from "./card";
import image from "../assets/images/placeholder.jpg"
import "./styles/projectSection.css";


function ProjectsSection() {

  return (
    <div id="projects" className="relative flex flex-col items-center justify-center w-full" >
      <div className="relative h-full w-full px-10">
        <hr className="h-0.5 bg-text border-0 rounded-full top-0 "/>
        <h1 className="text-8xl font-extrabold -z-10 text-text lg:text-9xl">Projects</h1>
      </div>
      <div className="flex flex-col pb-56 w-full justify-center items-center space-y-10">
        <div className="flex flex-col pt-10 items-center space-y-10 lg:space-y-0 lg:space-x-20 lg:flex-row">
          <div className="relative lg:top-24"><Card image={image} /></div>
          <Card image={image}/>
          <div className="relative lg:top-24"><Card image={image} /></div>
        </div>
        <div className="flex flex-col items-center space-y-10 lg:space-y-0 lg:space-x-20 lg:flex-row lg:pt-40">
          <div className="relative"><Card image={image} /></div>
          <Card image={image}/>
        </div>
      </div>
      <div id="shape-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" id="shape-fill"></path>
        </svg>
      </div>
    </div>
  );
}

export default ProjectsSection;
