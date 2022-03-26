import logo from './logo.svg';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './Container/itemLisContainer/ItemListContainer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from './components/item/ItemList';
import ItemDetailContainer from './Container/ItemDetailContainer/ItemDetailContainer';




function App() {

let titulo = 'ESTO ES REACT JS' ;

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>

        <ItemListContainer saludo={ titulo } subProp='MUNDO'/>

        <section className="item-list-container">
        <ItemList/>
        </section>
        
        <ItemDetailContainer/>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}



export default App;
