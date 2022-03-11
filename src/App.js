import './scss/App.scss'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CartProvider } from './components/context/cartContext';
import HeaderBar from './components/headerBar/HeaderBar';
import Home from './components/home/Home';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import CartContainer from './components/cartContainer/CartContainer';
import CheckOut from './components/checkOut/CheckOut';
import UserPanel from './components/userPanel/UserPanel';
import Footer from './components/footer/Footer';
import 'react-slideshow-image/dist/styles.css'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="App">
          <HeaderBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/all" component={ItemListContainer} />
            <Route exact path="/category/:categoryId" component={ItemListContainer} />
            <Route exact path="/item/:itemId" component={ItemDetailContainer} />
            <Route exact path="/account" component={UserPanel} />
            <Route exact path="/cart" component={CartContainer} />
            <Route exact path="/checkout" component={CheckOut} />
          </Switch>
        <Footer />
      </div>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;