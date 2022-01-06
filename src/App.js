import './App.css';
import Temp from './Components/Temp';
import AuthenticationChecker from './Components/authenticationChecker';
import LogoutButton from './Components/logout-button';
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
