import "./hero.css";
import Speech from "./Speech";

import rajLogo from "/Rajmazing-r-logo.svg";

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
          <h2>Top Rated Designer</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
            incidunt neque eaque ab ea provident error natus, at aperiam ipsam
            iste perspiciatis eum itaque delectus suscipit fugiat. Sint,
            deleniti hic?
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
        <img
          src="/RajSealFinal-removebg-preview.png"
          alt="Certificate"
          className="w-80 h-80 object-contain"
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
              <textPath href="#innerCirclePath"> ● Hire Me ● </textPath>
            </text>

            <text className="circleText">
              <textPath href="#innerCirclePath" startOffset="44%">
                {" "}
                ● Contact Me ●{" "}
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
  );
};

export default Hero;

//  <svg
//             width="50px"
//             height="50px"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
//               stroke="white"
//               strokeWidth="1"
//             />
//             <path
//               animate={{ y: [0, 5] }}
//               transition={{
//                 repeat: Infinity,
//                 duration: 4,
//                 ease: "easeInOut",
//               }}
//               d="M12 5V8"
//               stroke="white"
//               strokeWidth="1"
//               strokeLinecap="round"
//             />
//           </svg>
