import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";



const Speech = () => {
  return (
    <motion.div 
    className="bubbleContainer"
    animate={{opacity:[0,1]}}
    transition={{duration: 1}}
    
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            // Same substring at the start will only be typed out once, initially
            "Need a website..?",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "Contact me for a quick consultation...",
            1000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
        //   omitDeletionAnimation
          repeat={Infinity}
        />
      </div>
      <img src="/BlackMan.jpeg" alt="" />
    </motion.div>
  );
};

export default Speech;
