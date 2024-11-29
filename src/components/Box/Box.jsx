import React from "react";
import "./box.css";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { GrOverview } from "react-icons/gr";
import { MdAddShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Box = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div className="box">
      <div className="wish">
        <FaRegHeart className="heartIcon" />
        <GrOverview className="glassIcon" />
      </div>
      <div className="img">
        <img src={item.image} alt="product" />
        <div className="hidden">
          <img src={item.image} alt="other Product" />
        </div>
      </div>
      <div className="box-body d-flex flex-column gap-1">
        <span className="title">Molla</span>
        <p onClick={() => navigate(`/detail/${item.id}`)}>{item.title}</p>
        <span>${item.price}</span>
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
