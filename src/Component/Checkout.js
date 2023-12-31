import React from "react";

import "./Checkout.css";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import Subtotal from "./Subtotal";
const Checkout = () => {
  const [{ basket }] = useStateValue();

  return (
  
      <div className="checkout">
        <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        {basket.length === 0 ? (
          <div>
            <h2>Your Shopping basket is Empty</h2>
            <p>
              you have no items in your basket .To buy one or more "ADD TO
              BASKET" next to the item
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping basket</h2>
            {/* List of all checkout products  */}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
        </div>

        <div className="checkout__right">
        <Subtotal />
      </div>
        
          
        
      </div>
    
  );
};

export default Checkout;
