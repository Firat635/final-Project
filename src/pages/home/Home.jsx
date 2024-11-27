import React from "react";
import Header from "../../components/header/Header";
import "bootstrap";
import "./home.css";
import Carousel from "../../components/Carousel/Carousel.jsx";
import { BsArrowRight } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <Carousel />
        </section>
        <section id="decorBox">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-5 col-md-4 col-sm-12 ">
                <div className="decorBoxTables">
                  <p>Clearence</p>
                  <h3>Coffee Tables</h3>
                  <p className="fromText">from $19.99</p>
                  <button>
                    Shop Now <BsArrowRight />
                  </button>
                </div>
              </div>
              <div className="col-12 col-lg-3 col-md-4 col-sm-12 ">
                <div className="decorBoxKitchenware">
                  <p>On Sale</p>
                  <h3>Kitchenware</h3>
                  <p className="fromText">from $39.00</p>
                  <button className="discoverBtn">
                    Discover Now
                    <BsArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
};

export default Home;
