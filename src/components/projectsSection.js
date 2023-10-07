import Card from "./card";
import image from "../assets/images/placeholder.jpg"
import "./styles/projectSection.css";


function ProjectsSection() {

  return (
    <div className="relative" >
      <div className="relative mx-14 h-full">
        <hr className="h-0.5 bg-lime-400 border-0 rounded-full top-0"/>
        <h1 className="absolute text-9xl font-extrabold -z-10 text-transparentText">Projects</h1>
      </div>
      <div className="flex flex-col items-center pb-56">
        <div className="flex justify-between pt-40 w-2/3">
          <div className="relative top-24"><Card image={image} /></div>
          <Card image={image}/>
          <div className="relative top-24"><Card image={image} /></div>
        </div>
        <div className="flex justify-around pt-40 w-2/3">
          <div className="relative"><Card image={image} /></div>
          <Card image={image}/>
        </div>
      </div>
      <div class="custom-shape-divider-bottom-1696439471">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class="shape-fill"></path>
        </svg>
      </div>
    </div>
  );
}

export default ProjectsSection;
