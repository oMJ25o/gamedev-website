import logo from './logo.svg';
import './App.css';
import IntroSection from './components/Intro.js';
import Works from './components/Works.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <IntroSection/>
        <Works/>
      </header>
    </div>
  );
}

export default App;
