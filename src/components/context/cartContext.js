import { createContext, useContext, useState} from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, quantity) => {
        product["cantidad"] = quantity;
        const itemPrice = product.price * product.cantidad;
        product["finalPrice"] = itemPrice;
        const checkProduct = cart.find((item) => item.id === product.id);
        if(!checkProduct){
            setCart([...cart, product]);
        }
    }

    const subPrice = cart.reduce((a, c) => a + c.finalPrice, 0);

    const totalPrice = subPrice;

    const removeFromCart = (productId) => {
        const removeProduct = cart.filter((product) => product.id !== productId);
        setCart(removeProduct);
    }

    const itemsInCart = cart.reduce((a, c) => a + c.cantidad, 0);

    const clearCart = () => {
        setCart([]);
    }

    return(
        <CartContext.Provider value={{ cart, addToCart, subPrice, totalPrice, itemsInCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}