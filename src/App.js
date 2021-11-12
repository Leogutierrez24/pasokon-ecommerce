import './scss/App.scss'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Cart from './components/cart/Cart';
import Footer from './components/footer/Footer';
import { CartProvider } from './components/context/cartContext';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
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
            <Route exact path="/cart" component={Cart} />
          </Switch>
        <Footer />
      </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
