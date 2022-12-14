import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'

const Orders = () => {
    const { products, initialCart } = useLoaderData(); //{ products: products,initialCart:initialCart}
    const [cart, setCart] = useState(initialCart)
    const handelRemoveItem = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }
    return (
        <div>
            <div className='shop-container'>
                <div className="orders-container">
                    {
                        cart.map(product => <ReviewItem
                            key={product.id}
                            product={product}
                            handelRemoveItem={handelRemoveItem}
                        ></ReviewItem>)
                    }

                </div>
                
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;