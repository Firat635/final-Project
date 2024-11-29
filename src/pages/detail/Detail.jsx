import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import { FaStar } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";
import "./detail.css";
import { MdAddShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { LiaRandomSolid } from "react-icons/lia";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaTumblr } from "react-icons/fa";

export const Detail = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      setCount(value);
    } else if (e.target.value === "") {
      setCount(0);
    }
  };

  return (
    <>
      <Header />
      <main>
        <section id="detailHomeSec">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 col-sm-12 col-md-6 col-xl-6">
                <div className="boxDetail">
                  <img
                    src="https://midas-theme.myshopify.com/cdn/shop/products/prd-01.jpg?v=1610435372"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-12 col-lg-6 col-md-6 col-sm-12 col-xl-6">
                <div className="boxDetailText">
                  <h3>Octa 4240</h3>
                  <p>
                    <span>
                      <FaStar className="starIcon" />
                      <FaStar className="starIcon" />
                      <FaStar className="starIcon" />
                      <FaStar className="starIcon" />
                      <FaStar className="starIcon" />
                    </span>
                    <a href="http://">( 1 review )</a>
                  </p>
                  <p>
                    Vendor: <a href="/">Molla</a>
                  </p>
                  <h3>$746.00</h3>
                  <p className="detailInfoText">
                    Sed egestas, ante et vulputate volutpat, eros pede semper
                    est, vitae luctus metus libero eu augue. Morbi purus libero,
                    faucibus adipiscing. Sed lectus.
                  </p>
                  <div className="detailBoxDropdowns">
                    <p>Color:</p>
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Black
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                          <div className="dropBoxColorBlack">
                            <span className="boxDropColorOne">0</span>
                            Black
                          </div>
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          <div className="dropBoxColorGrey">
                            <span className="boxDropColorTwo">0</span>
                            Grey
                          </div>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="detailBtnBox">
                    <div className="numberBox">
                      <p className="counter">
                        <span onClick={decrement}>-</span>
                        <input
                          type="number"
                          value={count}
                          onChange={handleInputChange}
                          min="0"
                        />
                        <span onClick={increment}>+</span>
                      </p>
                      <button>
                        <MdAddShoppingCart className="btnShopIcon" /> Add to
                        card{" "}
                      </button>
                    </div>
                  </div>
                  <div className="detailWishlistBox">
                    <div className="wishlistBoxOne">
                      <FaRegHeart className="btnHeart" />

                      <button>Add to Wishlist</button>
                    </div>
                    <div className="wishlistBoxOne">
                      <LiaRandomSolid className="btnHeart" />

                      <button>Add to Wishlist</button>
                    </div>
                  </div>
                  <div className="shareBox">
                    <div className="boxCategories">
                      <span>Categories: </span>
                      <p>
                        <a href="/">All</a>,<a href="/"> Featured</a>
                      </p>
                    </div>
                    <div className="shareBoxInfo">
                      <span>Share on:</span>
                      <a href="https://www.facebook.com/">
                        <FaFacebookF className="shareIcon" />
                      </a>
                      <a href="https://x.com/?lang=tr">
                        <FaTwitter className="shareIcon" />
                      </a>

                      <a href="https://www.pinterest.com/">
                        {" "}
                        <FaPinterestP className="shareIcon" />
                      </a>
                      <FaTumblr className="shareIcon" />
                      <a href="https://www.tumblr.com/"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
