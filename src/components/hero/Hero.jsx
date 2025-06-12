import "./hero.css";
import Speech from "./Speech";

import rajLogo from "/Rajmazing-r-logo.svg";

import { motion } from "motion/react"

const Hero = () => {
  return (
    <div className="hero">
      <div className="hSection left">
        {/* TITLE */}
        <h1 className="hTitle">
          {" "}
          Hey There,
          <br />
          <span>I'm Casey!</span>
        </h1>
        {/* AWARDS */}
        <div className="awards">
  <h2 className="awardsTitle">Creative at Heart, Precise in Practice</h2>
  <p className="awardsText">
    A developer on a mission to bring your ideas to life. Whether it's a web app, portfolio, or custom tool, I craft clean, modern solutions that help you stand out. Let’s turn your vision into something real.
  </p>
          <div className="awardList">
            <img src="/award1.png" alt="Award 1" />
            <img src="/award2.png" alt="Award 2" />
            <img src="/award3.png" alt="Award 3" />
          </div>
        </div>
        {/* SCROLL SVG */}
        <a href="#services" className="scroll">
          <img
            src={rajLogo}
            alt="Scroll Icon"
            style={{ width: "64px", height: "64px" }}
          />
        </a>
        
      </div>
      <div className="hSection right">
        {/* FOLLOW */}
        <div className="follow">
          <a href="/">
            <img src="/instagram.png" alt="instagram" />
            <img src="/youtube.png" alt="youtube" />
            <img src="/facebook.png" alt="facebook" />
          </a>
          <div className="followTextContainer">
            <div className="followText"> FOLLOW ME</div>
          </div>
        </div>
        {/* BUBBLE */}
        <Speech />
        {/* CERTIFICATE */}
        <div className="certificate">
          <img
            src="/RajSealFinal-removebg-preview.png"
            alt="Certificate"
            // className="w-80 h-80 object-contain"
          />
          Developer
          <br />
          Testing
          <br />
          Deployment
        </div>
      

      {/* CONTACT BUTTON  */}
      <a href="/#contact" className="contactLink">
        <div className="contactButton">
          <svg viewBox="0 0 200 200" width="150" height="150">
            <circle cx="100" cy="100" r="90" fill="#F0B346" />

            <path
              id="innerCirclePath"
              fill="none"
              d="M 100, 100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
            />

            <text className="circleText">
              <textPath href="#innerCirclePath"startOffset="-1%" > ● Hire Me ● </textPath>
            </text>

            <text className="circleText">
              <textPath href="#innerCirclePath" startOffset="51%">
                {" "}
                 Contact Me {" "}
              </textPath>
            </text>
          </svg>
          <div className="arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="black"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </div>
        </div>
      </a>
      </div>
  <div className="bg">
    <div className="hImg">
 <img src="/rajmazin5.png" alt=""  />
    </div>
    </div>
  </div>

  );
};

export default Hero;

