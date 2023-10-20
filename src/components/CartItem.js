import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove, decreaseQty, increaseQty } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex, qty }) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from cart");
  };

  return (
    <div className="flex items-center p-2 md:p-5 justify-between   mt-2 mb-2 md:mx-5 ">
      <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">
        <div className="w-[30%]">
          <img className="object-cover " src={item.image} alt="item-img" />
        </div>
        <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
          <h1 className="text-xl text-slate-700 font-semibold">{item.title}</h1>
          <h1 className="text-base text-slate-700 font-medium">
            {item.description}
          </h1>
          <div className="flex items-center justify-between">
            <div className="flex gap-12 items-center">
              <p className="font-bold text-lg text-green-600">₹{item.price}</p>
              <p>
                <button
                  className="p-1 mr-2 bg-[#dadada] border rounded-lg font-bold w-[30px]"
                  onClick={() => {
                    if (item.qty > 1) dispatch(decreaseQty(item.id));
                  }}
                >
                  -
                </button>
                <span className="text-lg font-bold">{item.qty}</span>
                <button
                  className="p-1 ml-2 bg-[#dadada]  border rounded-lg font-bold w-[30px]"
                  onClick={() => dispatch(increaseQty(item.id))}
                >
                  +
                </button>
              </p>
            </div>
            <div
              className="text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
              onClick={removeFromCart}
            >
              <AiFillDelete />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
