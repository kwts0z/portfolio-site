import './App.css';
import { inject } from '@vercel/analytics';
import Body from './components/body';
import CardsSection from './components/cardsSection';
import Footer from './components/footerSection';
import ProjectsSection from './components/projectsSection';
import Navbar from './components/navbar';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    inject();
  }, []);
  return (
    <div id="outer-container" className='h-full overflow-hidden'>
      <header className="App-header">
      </header>
      <Navbar pageWrapID={"page-wrap"} outerContainerId={"outer-container"} className='h-full'/>
      <main id='page-wrap' className='h-full overflow: auto;'>
        <Body/>
        <CardsSection/>
        <ProjectsSection/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
