import Card from "./card";
import image from "../assets/images/placeholder.jpg"
import "./styles/projectSection.css";


function ProjectsSection() {

  return (
    <div id="projects" className="relative flex flex-col items-center justify-center w-full" >
      <div className="relative flex flex-col h-full w-full px-10 items-center lg:items-start">
        <hr className="h-0.5 bg-text border-0 rounded-full w-full"/>
        <h1 className="text-7xl font-extrabold -z-10 text-text lg:text-9xl">Projects</h1>
      </div>
      <div className="flex flex-col pb-56 w-full justify-center items-center space-y-10">
        <div className="flex flex-col pt-10 items-center space-y-10 lg:space-y-0 lg:space-x-10 xl:space-x-20 lg:flex-row">
          <div className="relative lg:top-24"><Card image={image} /></div>
          <Card image={image}/>
          <div className="relative lg:top-24"><Card image={image} /></div>
        </div>
        <div className="flex flex-col items-center space-y-10 lg:space-y-0 lg:space-x-20 lg:flex-row lg:pt-40">
          <div className="relative"><Card image={image} /></div>
          <Card image={image}/>
        </div>
      </div>
      <div class="custom-shape-divider-bottom-1697562712">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" class="shape-fill"></path>
          </svg>
      </div>
    </div>
  );
}

export default ProjectsSection;
