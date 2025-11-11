import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Era = () => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const onScroll = () => {
      const rect = element.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.75;
      if (inView) {
        controls.start("visible");
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // Check on mount in case already in view

    return () => window.removeEventListener("scroll", onScroll);
  }, [controls]);

  return (
    <div className="h">
      <motion.div
        className="d"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeUpVariant}
      >
        <div className="detail_grid vv">
          <motion.div className="detail_sub a f bulsai jut" variants={fadeUpVariant}>
            <motion.div className="couple_section" variants={fadeUpVariant}>
              <h2 className="couple_name">Entertainment</h2>

              <p className="d_p">
                We have an amazing lineup of entertainment for our big day! 
                Enjoy performances from The Nashville Heat during the day, The Hype Band in the evening, 
                plus a caricature artist, photo booth, and fire dancers for extra fun.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Era;
