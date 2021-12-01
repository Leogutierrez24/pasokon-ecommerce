import './scss/App.scss'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Footer from './components/footer/Footer';
import { CartProvider } from './components/context/cartContext';
import CartContainer from './components/cartContainer/CartContainer';
import CheckOut from './components/checkOut/CheckOut';
import HeaderBar from './components/headerBar/HeaderBar';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="App">
          <HeaderBar />
          <Switch>
            <Route exact path="/">
              <ItemListContainer saludo='Bienvenido a Pasokon'/>
            </Route>
            <Route exact path="/category/:categoryId" component={ItemListContainer} />
            <Route exact path="/item/:itemId" component={ItemDetailContainer} />
            <Route exact path="/cart" component={CartContainer} />
            <Route exact path="/checkout" component={CheckOut} />
          </Switch>
        <Footer />
      </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
