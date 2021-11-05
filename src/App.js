import './scss/App.scss'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <Switch>
          <Route exact path="/">
            <ItemListContainer saludo='Bienvenido a Pasokon'/>
          </Route>
          <Route exact path="/category/:categoryId" component={ItemListContainer} />
          <Route exact path="/item/:itemId" component={ItemDetailContainer} />
        </Switch>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
