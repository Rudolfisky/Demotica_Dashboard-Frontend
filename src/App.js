import './App.css';
import AuthenticationChecker from './Components/authenticationChecker';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div data-testid="app" id="app"> 
          <AuthenticationChecker/>
        </div>
      </header>
    </div>
  );
}

export default App;
