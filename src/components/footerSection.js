import linkedIn from "../assets/images/linkedIn.png";
import email from "../assets/images/email.png";
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
    <div id="footer" className="flex flex-col bg-secondary justify-center items-center pb-5 px-7 lg:px-20">
      <div className="flex flex-row justify-between w-full">
        <div className="mb-12">
          <ul className="text-background font-bold text-3xl space-y-4 list-disc">
            <li><a href='#home' onClick={(e) => {e.preventDefault(); scrollToSection('home')}}>Home</a></li>
            <li><a href='#education' onClick={(e) => {e.preventDefault(); scrollToSection('education')}}>Education</a></li>
            <li><a href='#projects' onClick={(e) => {e.preventDefault(); scrollToSection('projects')}}>Projects</a></li>
          </ul>
        </div>
        <div className="flex flex-row space-x-5 items-center">
          <a target="_blank" href="https://github.com/kwts0z"><img src={github} alt="Github" className="w-16 h-16 lg:w-24 lg:h-24 hover:opacity-70"></img></a>
          <a target="_blank" href="https://www.linkedin.com/in/k0nstantinos-giannopoulos/"><img src={linkedIn} alt="Linked In" className="w-16 h-16 lg:w-24 lg:h-24 hover:opacity-70"></img></a>
          <a target="_blank" href="mailto:kostas5217@gmail.com"><img src={email} alt="email" className="w-16 h-16 lg:w-24 lg:h-24 hover:opacity-70"></img></a>
        </div>
      </div>
      <h1 className=" text-background self-center">Copyrigh © Made with ReactJS by me.</h1>
    </div>
  );
}

export default Footer;