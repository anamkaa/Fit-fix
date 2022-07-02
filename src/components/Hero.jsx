import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="ff-hero-wrap">
        <div className="ff-hero-container-main flex flex-row-rev flex-wrap flex-justify-space-evenly flex-align-center">
          <div className="ff-hero-container-img">
            <img
              src="../assets/hero-img.svg"
              className="image image-lg ff-hero-img"
              alt="hero-img"
            />
          </div>

          <div className="ff-hero-container-text flex flex-col text-left flex-align-start">
            <p className="ff-hero-text-box">
              <p className="h6"> FIX YOUR FITNESS</p>

              <p className="h1">LEVEL UP YOURSELF </p>

              <p className="h1">
                WITH <span className="text-orange"> FITFLIX</span>
              </p>
            </p>

            <Link to="/videolistingpage">
              <button class="btn btn-warning-ghost ff-btn-primary btn-lg">
                START NOW
              </button>
            </Link>
            <div className="ff-hero-container-category">
              <button className="btn btn-warning btn-warning-hover ff-btn-secondary">
                YOGA
              </button>
              <button className="btn btn-warning btn-warning-hover ff-btn-secondary">
                PILATES
              </button>
              <button className="btn btn-warning btn-warning-hover ff-btn-secondary">
                CARDIO
              </button>
              <button className="btn btn-warning btn-warning-hover ff-btn-secondary">
                STRENGTH
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
