import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import "./am.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Am = () => {
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
        <h2 className="welcome_title">Where to Stay</h2>
        <p className="welocome_p">
          Guests are more than welcome to stay on-site at Redlands Breaks! You
          can either:
        </p>
        <ul className="details_list">
          {/* <li>Pitch your own tent, or</li> */}
          {/* <li>Book one of our beautiful bell tents.</li> */}
        </ul>
        <p className="welocome_p">
          Please contact <strong>David and Katy</strong> if you’d like to stay
          on-site.
        </p>

        <p className="welocome_p">
          For those preferring local accommodation, here are nearby options:
        </p>

        <div className="am_grid">
          {/* The Crown Hotel */}
          <div className="am_sub">
            <img
              src="https://www.crownhotelblandford.co.uk/wp-content/uploads/sites/3/2023/09/DSC_3341.jpg?format=auto&width=1920"
              alt="The Crown Hotel Blandford Forum"
              className="am_img"
            />
            <br />
            <h3 className="dalsi">The Crown Hotel, Blandford Forum</h3>
            <p className="pp">
              A cozy and elegant stay just a short drive from the venue.
            </p>
            <a
              className="hamkl"
              href="https://www.crownhotelblandford.co.uk"
              target="_blank"
            >
              <button className="rsvp_btn">Visit Website</button>
            </a>
          </div>

          {/* Plumber Manor */}
          <div className="am_sub">
            <img
              src="https://plumbermanor.co.uk/wp-content/uploads/2018/01/summer-gardens-min.jpg"
              alt="Plumber Manor Dorset"
              className="am_img"
            />

            <br />
            <h3 className="dalsi"> Plumber Manor</h3>
            <p className="pp">
              A charming Dorset country house hotel for a luxury stay.
            </p>
            <a
              className="hamkl"
              href="https://plumbermanor.co.uk"
              target="_blank"
            >
              <button className="rsvp_btn">Visit Website</button>
            </a>
          </div>

          {/* Local Airbnbs */}
          <div className="am_sub">
            {/* <img
              src="https://via.placeholder.com/400x250?text=Local+Airbnbs"
              alt="Local Airbnbs near Redlands Breaks"
              className="am_img"
            /> */}
            <h3 className="dalsi">Local Airbnbs</h3>
            <p className="pp">
              There are also lots of local Airbnbs close to the site for
              additional options.
            </p>
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
        <h3 className="welcome_title">More Details</h3>

        <Accordion type="single" collapsible defaultValue="">
          <AccordionItem className="halo" value="getting-here">
            <AccordionTrigger className="hp">Getting Here</AccordionTrigger>
            <AccordionContent>
              <ul className="details_list">
                <li>Venue: Redlands Breaks, Hazelbury Bryan, DT10 2AH</li>
                <li>
                  Directions and travel info:{" "}
                  <a href="http://www.redlandsbreaks.co.uk" target="_blank">
                    www.redlandsbreaks.co.uk
                  </a>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem className="halo" value="parking">
            <AccordionTrigger className="hp">Parking</AccordionTrigger>
            <AccordionContent>
              <ul className="details_list">
                <li>On-site parking available.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem className="halo" value="things-to-do">
            <AccordionTrigger className="hp">
              Things to Do Nearby
            </AccordionTrigger>
            <AccordionContent>
              <ul className="details_list">
                <li>Explore the beautiful Dorset countryside.</li>
                <li>Visit local pubs, cafes, and shops nearby.</li>
                <li>
                  Take a short drive to Blandford Forum for additional
                  activities.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </div>
  );
};

export default Am;
