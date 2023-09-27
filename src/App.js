import './App.css';
import Navbar from './components/navbar';
import Body from './components/body';
import CardsSection from './components/cardsSection';

function App() {
  return (
    <>
      <header className="App-header">
        <Navbar/>
      </header>
      <main>
        <Body/>
        <CardsSection/>
      </main>
    </>
  );
}

export default App;
