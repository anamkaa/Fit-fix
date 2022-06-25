import React from "react";
import { Barbell } from "phosphor-react";

const Navbar = () => {
  return (
    <>
      <nav className="nav-wrap ff-nav-wrap">
        <div className="nav-head ff-nav-head">FitFlix </div>

        <div className="ff-nav-wrap-search">
          <input type="search" className="ff-nav-search" placeholder="search" />
        </div>

        <div className="ff-nav-icon-wrap">
          <div className="ff-nav-icon-chip">
            <Barbell size={32} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
