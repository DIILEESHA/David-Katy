import { useEffect, useState } from "react";
import "./h.css";

import couple1 from "../../assets/couple.jpg";
import couple2 from "../../assets/couple2.jpg";
import couple3 from "../../assets/couple3.jpg";

const images = [couple1, couple2, couple3];

const Header = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4500); // 5s per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h">
      {images.map((img, index) => (
        <div
          key={index}
          className={`header_container ${current === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="header_overlay"></div>
          <div className="couple_section">
            <h2 className="couple_name">David &amp; Katy</h2>
            <p className="located">December 6, 2025 | San Francisco, CA</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Header;
