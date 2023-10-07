import './App.css';
import Body from './components/body';
import CardsSection from './components/cardsSection';
import Footer from './components/footerSection';
import ProjectsSection from './components/projectsSection';
import Navbar from './components/navbar';


function App() {
  return (
    <>
      <header className="App-header">
      </header>
      <main>
        <Navbar/>
        <Body/>
        <CardsSection/>
        <ProjectsSection/>
        <Footer/>
      </main>
    </>
  );
}

export default App;
