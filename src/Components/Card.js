import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatchCart, useCart } from "./ContextReducer";
import categoryData from "../Data/Category";
import Rating from "./Rating";
import { toast } from "react-toastify";
export default function Card({ cardDetails }) {
  let dispatch = useDispatchCart();
  let products = useCart();
  const [quantity, setQuantity] = useState(1);
  const handleIncrease = () => {
    var x = quantity;
    setQuantity(x + 1);
  };
  const handleDecrease = () => {
    if (quantity == 1) {
      return;
    } else {
      var x = quantity;
      setQuantity(x - 1);
    }
  };
  const handleCart = async () => {
    var user =localStorage.getItem("User");
    if(!user){
      toast.warning("User Not LoggedIn")
    }else{
      let product = false;
    console.log("clicked");

    if (products.length > 0) {
      for (const item of products) {
        if (item.title == cardDetails.title) {
          product = true;
          break;
        }
      }
    }
    if (product) {
      alert("Already Added");
    } else {
      await dispatch({
        type: "ADD",
        company: cardDetails.company,
        title: cardDetails.title,
        img: cardDetails.img,
        qty: quantity,
        price: cardDetails.newPrice,
      });
      toast.success("Item Added to Cart")
    }
    }
  };
  return (
    <>
      <div className="card " style={{ width: "19rem", height: "350px" }}>
        <img
          src={cardDetails.img}
          className="card-img-top"
          alt="..."
          style={{ height: "180px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{cardDetails.title} </h5>
          <p>
            <Rating value={cardDetails.rating} text={cardDetails.reviews} />
          </p>
          <h6 className="mt-2">
            <span style={{ textDecoration: "line-through" }}>
              {" "}
              &nbsp;{cardDetails.prevPrice}
            </span>
            Rs:{cardDetails.newPrice}
          </h6>
          <div className="d-flex flex-row mt-3">
            <p>
              Qty:
              <button
                className="btn  border  rounded fw-bold mx-2"
                onClick={handleDecrease}
              >
                <AiOutlineMinus />
              </button>
              {quantity}
              <button
                className="btn  border  rounded fw-bold mx-2"
                onClick={handleIncrease}
              >
                <AiOutlinePlus />
              </button>
            </p>
            <span className="ms-auto">
             
              <button className="btn btn-success fw-bold" onClick={handleCart}>
                Add to Cart
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
