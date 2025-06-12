import { motion } from "framer-motion"; // Importing the `motion` object from Framer Motion for animation support

// Define animation variants for different shapes
const shapeVariants = {
  // Initial state of the first rectangle (off-screen to the left, fully transparent)
  rectObj1: {
    x: -100,
    opacity: 0,
  },
  // Final animated state of the first rectangle (moved into view, fully visible)
  animateRect: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2, // animation lasts 2 seconds
    },
  },

  // Initial state of the circle (off-screen above, fully transparent)
  circObj1: {
    y: -100,
    opacity: 0,
  },
  // Final animated state of the circle (moves down into place, fully visible)
  animateCirc: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 3, // slower animation, 3 seconds
    },
  },

  // Initial state of the second rectangle (same as first)
  rectObj2: {
    x: -100,
    opacity: 0,
  },
  // Final animated state of the second rectangle
  animateRect2: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2, // same duration as the first rectangle
    },
  },
};

// Variants for animating a list container and its child items
const listVariants = {
  // Initial state: moves the entire list diagonally and keeps it visible
  initial: {
    x: -100,
    y: -100,
    opacity: 1,
  },
  // Final animated state: list returns to origin (0,0)
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 3, // animation duration for list container
      staggerChildren: 1, // each child (li) animates one after another
    },
  },
};

// Main component rendering animated shapes and a list
const Test = () => {
  return (
    <section
      style={{
        display: "flex",             // Arrange children horizontally
        alignItems: "center",        // Vertically center items
        justifyContent: "center",    // Center items horizontally
        gap: "2rem",                 // Space between each element
      }}
    >
      {/* Red rectangle animating from the left */}
      <motion.div
        variants={shapeVariants}
        initial="rectObj1"
        animate="animateRect"
        style={{ width: 300, height: 300, background: "red" }}
      />

      {/* Yellow circle animating from the top */}
      <motion.div
        variants={shapeVariants}
        initial="circObj1"
        animate="animateCirc"
        style={{
          width: 300,
          height: 300,
          background: "yellow",
          borderRadius: "100%", // makes it a circle
        }}
      />

      {/* Green rectangle animating from the left */}
      <motion.div
        variants={shapeVariants}
        initial="rectObj2"
        animate="animateRect2"
        style={{
          width: 300,
          height: 300,
          background: "Green",
        }}
      />

      {/* Animated list with staggered appearance for each item */}
      <motion.ul variants={listVariants} initial="initial" animate="animate">
        <motion.li variants={listVariants}>React</motion.li>
        <motion.li variants={listVariants}>Javascript</motion.li>
        <motion.li variants={listVariants}>Next.js</motion.li>
      </motion.ul>
    </section>
  );
};

export default Test; // Export the component so it can be used elsewhere
