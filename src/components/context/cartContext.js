import { createContext, useContext, useState} from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, quantity) => {
        product["cantidad"] = quantity;
        const checkProduct = cart.find((item) => item.id === product.id);
        if(checkProduct){
            console.log("volviste a agregar el mismo producto");
        } else {
            setCart([...cart, product]);
            console.log("agregaste un nuevo producto al carrito");
        }
    }

    return(
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}