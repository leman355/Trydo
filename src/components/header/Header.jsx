import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div>
      <div id="header">
        <div className="myContainer">
          <div className="d-flex align-items-center justify-content-between">
            <div className="logo">
              <img className="img-fluid" src={logo} alt="" />
            </div>
          <div className="d-flex align-items-center justify-content-between">
            <ul className="list-unstyled m-0 d-flex ">
              <li>
                <Link to="/">Home</Link>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/">Main Demo</Link>
                  </li>
                  <li>
                    <Link to="/">Main Demo Dark</Link>
                  </li>
                  <li>
                    <Link to="/">Creative Agency</Link>
                  </li>
                  <li>
                    <Link to="/">Creative Agency Landing</Link>
                  </li>
                  <li>
                    <Link to="/">Personal Portfolio</Link>
                  </li>
                  <li>
                    <Link to="/">Personal Portfolio 02</Link>
                  </li>
                  <li>
                    <Link to="/">Personal Portfolio Landing</Link>
                  </li>
                  <li>
                    <Link to="/">Designer Portfolio</Link>
                  </li>
                  <li>
                    <Link to="/">Creative Portfolio</Link>
                  </li>
                  <li>
                    <Link to="/">Business</Link>
                  </li>
                  <li>
                    <Link to="/">Digital Agency</Link>
                  </li>
                  <li>
                    <Link to="/">Minimal Portfolio</Link>
                  </li>
                  <li>
                    <Link to="/">Studio Agency</Link>
                  </li>
                  <li>
                    <Link to="/">Home Particles</Link>
                  </li>
                  <li>
                    <Link to="/">Corporate Business</Link>
                  </li>
                  <li>
                    <Link to="/">Parallax Home</Link>
                  </li>
                  <li>
                    <Link to="/">Startup Agency Demo</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="about">About</Link>
              </li>
              <li>
                <Link to="/pages">Pages</Link>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/">Our Servies</Link>
                  </li>
                  <li>
                    <Link to="/">Service Details</Link>
                  </li>
                  <li>
                    <Link to="/">Our Portfolio</Link>
                  </li>
                  <li>
                    <Link to="/">Portfolio Details</Link>
                  </li>
                  <li>
                    <Link to="/">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/">Coming Soon</Link>
                  </li>
                  <li>
                    <Link to="/">404 Page</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/elements">Elements</Link>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/">Buttons</Link>
                  </li>
                  <li>
                    <Link to="/">List Style</Link>
                  </li>
                  <li>
                    <Link to="/">Tab & Accordion</Link>
                  </li>
                  <li>
                    <Link to="/">Progress Bar</Link>
                  </li>
                  <li>
                    <Link to="/">Columns</Link>
                  </li>
                  <li>
                    <Link to="/">Services Box</Link>
                  </li>
                  <li>
                    <Link to="/">Brand</Link>
                  </li>
                  <li>
                    <Link to="/">Team Members</Link>
                  </li>
                  <li>
                    <Link to="/">Video Popup</Link>
                  </li>
                  <li>
                    <Link to="/">Gallery</Link>
                  </li>
                  <li>
                    <Link to="/">Banner Particles</Link>
                  </li>
                  <li>
                    <Link to="/">Testimonial</Link>
                  </li>
                  <li>
                    <Link to="/">Our Pricing</Link>
                  </li>
                  <li>
                    <Link to="/">Portfolio Style</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/">Shop</Link>
                  </li>
                  <li>
                    <Link to="/">Single Product</Link>
                  </li>
                  <li>
                    <Link to="/">My account</Link>
                  </li>
                  <li>
                    <Link to="/">Checkout</Link>
                  </li>
                  <li>
                    <Link to="/">Cart</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/">Default Blog</Link>
                  </li>
                  <li>
                    <Link to="/">Blog List</Link>
                  </li>
                  <li>
                    <Link to="/">Standard post</Link>
                  </li>
                  <li>
                    <Link to="/">Gallery post</Link>
                  </li>
                  <li>
                    <Link to="/">Video post</Link>
                  </li>
                  <li>
                    <Link to="/">Audio post</Link>
                  </li>
                  <li>
                    <Link to="/">Blockquote post</Link>
                  </li>
                  <li>
                    <Link to="/">Link Post</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <Link className="letstalk" to='/'>LET'S TALK</Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
