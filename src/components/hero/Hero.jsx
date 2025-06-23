import "./hero.css";
import Shape from "./Shape";
import Speech from "./Speech";
import rajLogo from "/Rajmazing-r-logo.svg";

import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";

const awardVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const followVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const toggleButtonStyle = {
  backgroundColor: "#F0B346",
  color: "#161014",
  padding: "10px 24px",
  border: "none",
  borderRadius: "24px",
  fontWeight: "700",
  cursor: "pointer",
  fontSize: "14px",
  letterSpacing: "1px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
  marginTop: "16px",
  transition: "all 0.3s ease",
};



const Hero = () => {

  const [showText, setShowText] = useState(false);
  return (
    <div className="hero">
      <div className="hSection left">
        {/* TITLE */}
 {/* TITLE */}
{/* TITLE */}
<motion.h1
  initial={{ y: -100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 1 }}
  className="hTitle"
>
  {/* LINE 1 */}
  <motion.span
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 }}
    className="block text-[0.8em] tracking-widest uppercase leading-tight mb-2 font-medium text-[#E8CD86]"
  >
    Hey there,
  </motion.span>

  {/* LINE 2 */}
  <motion.span
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.25 }}
    className="block text-[1.4em] leading-[1.1] tracking-tight font-black uppercase"
    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
  >
    <span style={{ color: '#F0B346' }}>I’m</span>{' '}
    <span
      style={{
        color: '#E3EAF2',
        textShadow: '1px 1px 3px rgba(240, 179, 70, 0.3)',
        fontWeight: 900,
      }}
    >
      Casey
    </span>
  </motion.span>

  {/* LINE 3 */}
  <motion.span
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
    className="block text-[0.5em] tracking-[0.4em] mt-4 font-semibold uppercase"
    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
  >
    <span style={{ color: '#E8CD86' }}>Developer</span>{' '}
    <span style={{ color: '#F0B346' }}>•</span>{' '}
    <span
      style={{
        color: '#E3EAF2',
        letterSpacing: '0.5em',
        fontWeight: 700,
      }}
    >
      Designer
    </span>
  </motion.span>
</motion.h1>

        {/* AWARDS */}
        <motion.div
          variants={awardVariants}
          initial="initial"
          animate="animate"
          className="awards"
        >
         <div className="awardsContainer">
  <motion.h2 className={`awardsTitle ${showText ? "" : "hiddenText"}`}>
    Creative at Heart, Precise in Practice
  </motion.h2>
  
  <motion.p className={`awardsText ${showText ? "" : "hiddenText"}`}>
    A developer on a mission to bring your ideas to life. Whether it's a web app,
    portfolio, or custom tool, I craft clean, modern solutions that help you stand out.
    Let’s turn your vision into something real.
  </motion.p>

 



<motion.button
  whileHover={{
    scale: 1.2,
    backgroundColor: "#E8CD86",
  }}
  whileTap={{
    scale: 0.9,
  }}
  style={{
    width: "fit-content",
    backgroundColor: "#F0B346",
    color: "#161014",
    padding: "10px 24px",
    border: "none",
    borderRadius: "24px",
    fontWeight: "700",
    cursor: "pointer",
    fontSize: "14px",
    letterSpacing: "1px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    /* REMOVE marginTop */
  }}
  className="toggleTextButton"
  onClick={() => setShowText(!showText)}
>
  {showText ? "Hide" : "Read More"}
</motion.button>





</div>


          <motion.div variants={awardVariants} className="awardList">
            <motion.img
              variants={awardVariants}
              src="/award1.png"
              alt="Award 1"
            />
            <motion.img
              variants={awardVariants}
              src="/award2.png"
              alt="Award 2"
            />
            <motion.img
              variants={awardVariants}
              src="/award3.png"
              alt="Award 3"
            />
          </motion.div>
        </motion.div>
        {/* SCROLL SVG */}
        <a href="#services" className="scroll">
          <motion.img
            animate={{ y: [0, 20, 0], opacity: [0, 1, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
            src={rajLogo}
            alt="Scroll Icon"
            style={{ width: "64px", height: "64px" }}
          />
        </a>
      </div>
      <div className="hSection right">
        {/* FOLLOW */}
        <motion.div
          variants={followVariants}
          initial="initial"
          animate="animate"
          className="follow"
        >
          <motion.a variants={followVariants} href="/">
            <img src="/instagram.png" alt="instagram" />
          </motion.a>
          <motion.a variants={followVariants} href="/">
            <img src="/youtube.png" alt="youtube" />
          </motion.a>

          <motion.a variants={followVariants} href="/">
            <img src="/facebook.png" alt="facebook" />
          </motion.a>

          <motion.div className="followTextContainer">
            <div className="followText"> FOLLOW ME</div>
          </motion.div>
        </motion.div>
        {/* BUBBLE */}
        <Speech />
        {/* CERTIFICATE */}
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="certificate"
        >
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
        </motion.div>

        {/* CONTACT BUTTON  */}
        <motion.a href="/#contact" className="contactLink" animate={{
          x:[200, 0],
          opacity: [0,1]
        }}
        transition = {{
          duration: 2
        }}
        
        >
          <motion.div 
          animate={{ rotate: [0,360] }} 
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="contactButton">
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="#F0B346" />

              <path
                id="innerCirclePath"
                fill="none"
                d="M 100, 100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />

              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="-1%">
                  {" "}
                  ● Hire Me ●{" "}
                </textPath>
              </text>

              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="51%">
                  {" "}
                  Contact Me{" "}
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
          </motion.div>
        </motion.a>
      </div>
      <div className="bg">
        {/* 3d imgs  */}
        <Canvas>
          <Suspense fallback="loading">
            <Shape />
          </Suspense>
          
        </Canvas>
        <div className="hImg">
          <img
            // src="/IMG_2269-removebg-preview (1).png"
            src="/AI_IMG_ME.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
