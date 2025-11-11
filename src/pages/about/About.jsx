import "./ac.css";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const About = () => {
  return (
    <div className="abo">
      <h2 className="welcome_title">Wedding Day Itinerary</h2>

      <div className="abo_grid">
        <div className="abo_sub ee">
          <img
            src="https://i.imgur.com/d3L3HZw.png"
            alt=""
            className="abo_img"
          />
          <h2 className="abo_time">12:00PM</h2>
          <h1 className="actual">Welcome drinks & appetisers (1st band)</h1>
        </div>
        <div className="abo_sub"></div>
        <div className="abo_sub"></div>

        <div className="abo_sub bb">
          <img
            src="https://i.imgur.com/GBN5LhQ.png"
            alt=""
            className="abo_img"
          />
          <h2 className="abo_time">1:45PM</h2>
          <h1 className="actual">Please be seated for ceremony</h1>
        </div>
        <div className="abo_sub"></div>
        <div className="abo_sub"></div>

        <div className="abo_sub ee">
          <img
            src="https://i.imgur.com/Svdt4um.png"
            alt=""
            className="abo_img"
          />
          <h2 className="abo_time">2:00PM</h2>
          <h1 className="actual">Ceremony begins</h1>
        </div>
        <div className="abo_sub"></div>
        <div className="abo_sub"></div>

        <div className="abo_sub bb">
          <img
            src="https://i.imgur.com/tNFjgEI.png"
            alt=""
            className="abo_img"
          />
          <h2 className="abo_time">3:00PM</h2>
          <h1 className="actual">Speeches & Food</h1>
        </div>
        <div className="abo_sub ee">
          <img
            src="https://i.imgur.com/Svdt4um.png"
            alt=""
            className="abo_img"
          />
          <h2 className="abo_time">4:00PM</h2>
          <h1 className="actual">Cake Cutting</h1>
        </div>

        <div className="abo_sub"></div>
        <div className="abo_sub"></div>
        <div className="abo_sub bb">
          <img
            src="https://i.imgur.com/d3L3HZw.png"
            alt=""
            className="abo_img"
          />
          <h2 className="abo_time">4:15PM</h2>
          <h1 className="actual">Photo Shoot</h1>
        </div>
        <div className="abo_sub ee">
          <img
            src="https://i.imgur.com/GBN5LhQ.png"
            alt=""
            className="abo_img"
          />
          <h2 className="abo_time">5:00-6:00PM</h2>
          <h1 className="actual">Evening guests arrive & 2nd band</h1>
        </div>
        <div className="abo_sub"></div>
        <div className="abo_sub"></div>

        <div className="abo_sub bb">
          <img
            src="https://i.imgur.com/Svdt4um.png"
            alt=""
            className="abo_img"
          />
          <h2 className="abo_time">7:00PM</h2>
          <h1 className="actual">First Dance</h1>
        </div>
        <div className="abo_sub ee">
          <img
            src="https://i.imgur.com/tNFjgEI.png"
            alt=""
            className="abo_img"
          />
          <h2 className="abo_time">9:00PM</h2>
          <h1 className="actual">Fire Dancers</h1>
        </div>

        <div className="abo_sub"></div>
        <div className="abo_sub"></div>

        <div className="abo_sub bb">
          <img
            src="https://i.imgur.com/d3L3HZw.png"
            alt=""
            className="abo_img"
          />
          <h2 className="abo_time">10:00PM</h2>
          <h1 className="actual">3rd Music Act</h1>
        </div>
        <div className="abo_sub ee">
          <img
            src="https://i.imgur.com/GBN5LhQ.png"
            alt=""
            className="abo_img"
          />
          <h2 className="abo_time">11:00PM</h2>
          <h1 className="actual">End of Night</h1>
        </div>
      </div>

      {/* Accordion section with details */}
      <motion.div
        className="details_wrap"
        initial={{ opacity: 0, y: 18, scale: 0.995 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h3 className="welcome_title">More Details</h3>

        <Accordion type="single" className="" collapsible defaultValue="">
          <AccordionItem className="halo" value="attire">
            <AccordionTrigger className="hp">Attire</AccordionTrigger>
            <AccordionContent>
              <ul className="details_list">
                <li>Dress elegantly and comfortably for a fun wedding day.</li>
                <li>Evening may be cool — layers recommended.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem className="halo" value="parking">
            <AccordionTrigger className="hp">
              Parking &amp; Transportation
            </AccordionTrigger>
            <AccordionContent>
              <ul className="details_list">
                <li>Guests are welcome to park at Redlands Breaks on site.</li>
                <li>
                  For off-site parking, local hotels or Airbnbs may provide
                  options.
                </li>
                <li>
                  Contact David & Katy for assistance with on-site arrangements.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem className="halo" value="dinner">
            <AccordionTrigger className="hp">
              Dinner &amp; Drinks
            </AccordionTrigger>
            <AccordionContent>
              <ul className="details_list">
                <li>
                  Food and drinks will be served during the afternoon and
                  evening.
                </li>
                <li>Please indicate dietary restrictions on RSVP.</li>
                <li>An open bar will be available for guests.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem className="halo" value="music">
            <AccordionTrigger className="hp">
              Music &amp; Entertainment
            </AccordionTrigger>
            <AccordionContent>
              <ul className="details_list">
                <li>
                  Daytime band:{" "}
                  <a href="http://www.thenashvilleheat.co.uk/" target="_blank">
                    The Nashville Heat
                  </a>
                </li>
                <li>
                  Evening band:{" "}
                  <a href="https://www.thehypeband.co.uk/" target="_blank">
                    The Hype Band
                  </a>
                </li>
                <li>
                  Additional entertainment: Caricatures by Wayne Savage, Bucking
                  Bronco, Photo Booth, Saxophone by Wendy, Fire Dancers.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem className="halo" value="children">
            <AccordionTrigger className="hp">Children</AccordionTrigger>
            <AccordionContent>
              <ul className="details_list">
                <li>Kids are welcome to join the celebration.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem className="halo" value="sharing">
            <AccordionTrigger className="hp">Sharing Memories</AccordionTrigger>
            <AccordionContent>
              <ul className="details_list">
                <li>
                  Photographer and videographer will capture the day. Guests can
                  use photo booths and share memories online.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem className="halo" value="registry">
            <AccordionTrigger className="hp">Registry</AccordionTrigger>
            <AccordionContent>
              <ul className="details_list">
                <li>
                  Your presence is our gift! We’re grateful to celebrate with
                  you.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </div>
  );
};

export default About;
