import React from "react";
import { cartProduct } from "../../../temp/sampleCartProduct";
import CartCardMini from "./CartCardMini";
import { Button } from "../ui/button";

const WishlistPopup = () => {
  const prod = cartProduct;
  return (
    <div className="p-2">
      <div className="flex gap-x-2 items-baseline">
        <p className="body-large-500 border-b border-gray-500 pb-2">Wishlist (2)</p>
        <p>(2)</p>
      </div>
      <div className="flex flex-col gap-3">
        <CartCardMini cartProduct={prod} />
        <CartCardMini cartProduct={prod} />
      </div>
    </div>
  );
};

export default WishlistPopup;
