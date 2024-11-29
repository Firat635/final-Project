import React from "react";
import "./box.css";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { GrOverview } from "react-icons/gr";
import { MdAddShoppingCart } from "react-icons/md";

const Box = () => {
  return (
    <div className="box">
      <div className="wish">
        <FaRegHeart className="heartIcon" />
        <GrOverview className="glassIcon"/>
      </div>
      <div className="img">
        <img
          src="https://midas-theme.myshopify.com/cdn/shop/products/prd-01_f156d36d-a9f2-4d75-a979-10b836a0a466_240x.jpg?v=1610436779"
          alt=""
        />
        <div className="hidden">
          <img
            src="https://midas-theme.myshopify.com/cdn/shop/products/prd-02_dfaec357-9888-47d6-aa83-edb571a635c6.jpg?v=1610436779"
            alt=""
          />
        </div>
      </div>
      <div className="box-body d-flex flex-column gap-1">
        <span className="title">Molla</span>
        <p>Petite Table Lamp</p>
        <span>$675.00</span>
        <div className="rating d-flex">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
          <FaRegStar />
        </div>
      </div>
      <div className="btn">
        <button>
          <MdAddShoppingCart /> ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Box;
