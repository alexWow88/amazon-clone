import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { SportsBasketball } from "@mui/icons-material";
import { useStateValue } from "../../StateProvider";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  let subtotal = 0;

  for (let i = 0; i < basket.length; i++) {
    subtotal += basket[i].price;
  }

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items) :<strong> ${subtotal}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
