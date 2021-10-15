import './scss/App.scss'
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <ItemListContainer saludo='Bienvenido a Pasokon'/>
    </div>
  );
}

export default App;
