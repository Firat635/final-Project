import React from "react";
import Header from "../../components/header/Header";
import "bootstrap";
import "./home.css";
import Carousel from "../../components/Carousel/Carousel.jsx";
import { BsArrowRight } from "react-icons/bs";
import CarouselMini from "../../components/CarouselMini/CarouselMini.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import CarouselBox from "../../components/carouselBox/CarouselBox.jsx";
import { HiArrowLongRight } from "react-icons/hi2";
const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <Carousel />
        </section>
        <section className="mb-5">
          <CarouselMini />
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
              <div className="col-12 col-lg-4 col-md-4 col-sm-12 ">
                <div className="decorBoxHomeDecor">
                  <p>Clearance</p>
                  <h3>Home Decor</h3>
                  <p className="fromText">up to 30% off</p>
                  <button className="discoverBtn">
                    Discover Now
                    <BsArrowRight />
                  </button>
                </div>
                <div className="decorBoxHomeDecorBox">
                  <p>New Arrivals</p>
                  <h3>
                    Collection <br />
                    Chairs
                  </h3>
                  <p className="fromText">from $39.00</p>
                  <button className="discoverBtn">
                    Shop Now
                    <BsArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <CarouselBox />
        </section>
        <section id="blogSec">
          <div className="container">
            <h2>From Our Blog</h2>
            <div className="row">
              <div className="col-12 col-lg-4 col-md-6 col-sm-12">
                <div className="blogBoxAll">
                  <div className="blogBoxPhoto">
                    <img
                      src="https://midas-theme.myshopify.com/cdn/shop/articles/blog-1_9b964edb-8153-4c01-a9a1-95ca56b6eaaa_540x.jpg?v=1610433595"
                      alt=""
                    />
                  </div>
                  <p>Aug 23, 2019</p>
                  <a href="/">Sed adipiscing ornare.</a>
                  <button>VIEW THIS STORE <HiArrowLongRight className="storeIcon" /></button>
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

export default Home;
