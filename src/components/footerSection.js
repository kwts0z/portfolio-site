import linkedIn from "../assets/images/linkedIn.png";
import email from "../assets/images/email.png";
function Footer() {
  return (
    <div className="flex flex-row w-full h-64 bg-violet-950  justify-around items-center">
      <div className="mb-12">
        <ul className="text-lime-500 font-bold text-3xl space-y-4 list-disc">
          <li>Home</li>
          <li>Education</li>
          <li>Projects</li>
        </ul>
      </div>
      <h1 className="text-lime-500">Copyrigh © Made with ReactJS by me.</h1>
      <div className="flex flex-row h-1/3 space-x-4">
        <img className="" src={linkedIn}></img>
        <img className="" src={email}></img>
      </div>
    </div>
  );
}

export default Footer;