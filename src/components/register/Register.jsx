import React from "react";
import "./register.css";
import { IoIosArrowRoundForward } from "react-icons/io";

export const Register = () => {
  return (
    <section id="registerSection">
      <div className="registerAllBox">
        <div className="registerBox">
          <div className="registerHeadText">
            <a className="formSign" href="/">
              Sign In
            </a>

            <a className="formRegister" href="/">
              Register
            </a>
          </div>
          <form className="form">
            <label>Email address *</label>
            <input type="email" />
            <label>Password *</label>
            <input type="password" />
            <div className="formBtnBox">
              <button>
                Sign In <IoIosArrowRoundForward />
              </button>
              <a href="/">Forgot Your Password?</a>
            </div>
          </form>
        </div>
        <div className="registerBoxTwo">
          <div className="registerHeadText">
            <a className="formSign" href="/">
              Sign In
            </a>

            <a className="formRegister" href="/">
              Register
            </a>
          </div>
          <form className="form">
            <label>Your email address *</label>
            <input type="email" />
            <label>Password *</label>
            <input type="password" />
            <div className="registerInfoText">
            <input type="checkbox" />
            <span>Subscribe to stay updated with new products and offers!</span>
            </div>
            <div className="formBtnBox">
              <button>
              Register
              <IoIosArrowRoundForward />
              </button>
             
            </div>
          </form>
        </div>
        <button className="btnExt">
            
        </button>
      </div>
    </section>
  );
};
