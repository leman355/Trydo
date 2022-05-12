import React from "react";
import "./home.scss";
import { ImCreditCard } from "react-icons/im";
import { BiCube } from "react-icons/bi";
import { BsMouse } from "react-icons/bs";
import mountain from "../images/img1.jpg";

const Home = () => {
  return (
    <div>
      <div className="digital">
        <div className="digContainer">
          <h1>A DIGITAL AGENCY.</h1>
          <div className="row">
            <div className="col-lg-4">
              <ImCreditCard />
              <h3>Business Stratagy</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered.
              </p>
            </div>
            <div className="col-lg-4">
              <BiCube />
              <h3>Website Development</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered.
              </p>
            </div>
            <div className="col-lg-4">
              <BsMouse />
              <h3>Marketing & Reporting</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="save">
        <div className="digContainer">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <img className="img-fluid" src={mountain} alt="" />
            </div>
            <div className="col-lg-7">
              <div className="rightSave">
                <span>ABOUT US</span>
                <h2>Save your time by using Trydo and present yours.</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form. have suffered alteration in some form majority.
                </p>
                <hr />
                <div className="row">
                  <div className="col-lg-4">
                    <p className="awards">AWARDS</p>
                    <h1>800+</h1>
                  </div>
                  <div className="col-lg-4">
                    <p className="awards">HAPPY CLIENT</p>
                    <h1>1200+</h1>
                  </div>
                  <div className="col-lg-4">
                    <p className="awards">YEARS OF EXPERIENCE</p>
                    <h1>12+</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
