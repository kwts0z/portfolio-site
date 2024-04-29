import linkedIn from "../assets/images/linkedIn.png";
import email from "../assets/images/email2.png";
import github from "../assets/images/github.png";

function scrollToSection(elementId) {
  console.log('scrollToSection called with elementId:', elementId);
  const element = document.getElementById(elementId);
  if(element){
    element.scrollIntoView({ behavior: 'smooth' });
  };
}

function Footer() {
  return (
    <div id="footer" className="flex flex-col bg-secondary justify-center items-center px-2 pb-5 md:px-10">
      <div className="flex flex-row justify-between w-full">
        <div className="mb-12">
          <ul className="text-background font-bold text-3xl space-y-4 list-disc pl-10">
            <li><a href='#home' onClick={(e) => {e.preventDefault(); scrollToSection('home')}}>Home</a></li>
            <li><a href='#education' onClick={(e) => {e.preventDefault(); scrollToSection('education')}}>Education</a></li>
            <li><a href='#projects' onClick={(e) => {e.preventDefault(); scrollToSection('projects')}}>Projects</a></li>
          </ul>
        </div>
        <div className="flex flex-col items-center space-y-5 space-x-1 md:space-y-0 md:flex-row md:space-x-5">
          <a target="_blank" rel="noreferrer" href="https://github.com/kwts0z"><img src={github} alt="Github" className="w-16 h-16 md:w-24 md:h-24 hover:opacity-70"></img></a>
          <div className="flex flex-row space-x-2 md:space-x-5">
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/k0nstantinos-giannopoulos/"><img src={linkedIn} alt="Linked In" className="w-16 h-16 md:w-24 md:h-24 hover:opacity-70"></img></a>
            <a target="_blank" rel="noreferrer" href="mailto:kostas5217@gmail.com"><img src={email} alt="email" className="w-16 h-16 md:w-24 md:h-24 hover:opacity-70"></img></a>
          </div>
        </div>
      </div>
      <h1 className=" text-background self-center">Copyright © Made with ReactJS by me.</h1>
    </div>
  );
}

export default Footer;