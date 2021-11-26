import './App.css';
import Temp from './Temp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div data-testid="temp" id="temp"> 
          <Temp/>
        </div>
      </header>
    </div>
  );
}

export default App;
