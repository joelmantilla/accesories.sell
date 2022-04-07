import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoutesApp from './RoutesApp';





function App() {

/* let titulo = 'ESTO ES REACT JS' ; */

  return (
    <div className="App">
      <header className="App-header">
        
        <RoutesApp/>


        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}



export default App;
