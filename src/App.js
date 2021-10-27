import './scss/App.scss'
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <ItemListContainer saludo='Bienvenido a Pasokon'/>
      <ItemDetailContainer />
    </div>
  );
}

export default App;
