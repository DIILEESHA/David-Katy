import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import "./am.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Entertainment = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const inView1 = useInView(ref1, { once: true, amount: 0.3 });
  const inView2 = useInView(ref2, { once: true, amount: 0.3 });
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    if (inView1) {
      controls1.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.7, ease: "easeOut" },
      });
    }
    if (inView2) {
      controls2.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.7, ease: "easeOut" },
      });
    }
  }, [inView1, inView2, controls1, controls2]);

  return (
    <div>
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, y: 18, scale: 0.995 }}
        animate={controls1}
        className="details_wrap"
      >
        <h2 className="welcome_title">Entertainment</h2>
        <p className="welocome_p">
          We have lined up an amazing selection of entertainment for our big
          day!
        </p>

        <div className="am_grid">
          {/* Daytime Band */}
          <div className="am_sub">
            <img
              src="http://www.thenashvilleheat.co.uk/wp-content/uploads/2019/01/DSC_4824.jpg" // placeholder, replace if available
              alt="The Nashville Heat"
              className="am_img"
            />
            <br />
            <h3 className="dalsi">The Nashville Heat</h3>
            <p className="pp">
              Daytime band performing during welcome drinks & appetizers.
            </p>
            <a
              className="hamkl"
              href="http://www.thenashvilleheat.co.uk/"
              target="_blank"
            >
              <button className="rsvp_btn">Visit Website</button>
            </a>
          </div>

          {/* Evening Band */}
          <div className="am_sub">
            <img
              src="https://img.warble-entertainment.com//689/the-hype10.jpg" // placeholder, replace if available
              alt="The Hype Band"
              className="am_img"
            />

            <br />
            <h3 className="dalsi">The Hype Band</h3>
            <p className="pp">
              Evening band performing for guest arrivals and dance time.
            </p>
            <a
              className="hamkl"
              href="https://www.thehypeband.co.uk/"
              target="_blank"
            >
              <button className="rsvp_btn">Visit Website</button>
            </a>
          </div>

          {/* Additional Entertainment */}
          <div className="am_sub">
            <h3 className="dalsi">Other Entertainment</h3>
            <ul className="details_list    chao">
              <li>Caricature artist: Wayne Savage</li>
              <li>Bucking Bronco</li>
              <li>Photo Booth</li>
              <li>Fire Dancers</li>
              <li>Saxophone performance by Wendy Sax</li>
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div
        ref={ref2}
        initial={{ opacity: 0, y: 18, scale: 0.995 }}
        animate={controls2}
        style={{ background: "#fff" }}
        className="details_wrap"
      >
        <h3 className="welcome_title">Event Schedule Highlights</h3>

        <Accordion type="single" collapsible defaultValue="">
          <AccordionItem className="halo" value="daytime">
            <AccordionTrigger className="hp">
              Daytime Entertainment
            </AccordionTrigger>
            <AccordionContent>
              <ul className="details_list">
                <li>
                  12:00 - Welcome drinks & appetizers with The Nashville Heat
                </li>
                <li>Photo opportunities and mingling</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem className="halo" value="evening">
            <AccordionTrigger className="hp">
              Evening Entertainment
            </AccordionTrigger>
            <AccordionContent>
              <ul className="details_list">
                <li>5:00 - 6:00 Guest arrivals with The Hype Band</li>
                <li>7:00 - First Dance</li>
                <li>9:00 - Fire Dancers</li>
                <li>10:00 - 3rd music act</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </div>
  );
};

export default Entertainment;
