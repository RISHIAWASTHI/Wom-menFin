
// export default AboutUs;
import React from "react";
import OurStoryImage from "./images/our-story.jpg";
import OurMissionImage from "./images/our-mission.jpg";
import "./AboutUs.css";
import Navbar from "./Navbar";
import Footer from "./Footer";


const AboutUs = () => {
  return (
    <div>
      <div className="pb-5"><Navbar/></div>
    <div className="about-us-container">
      <section className="about-section text-center">
        <h1 className="about-us text-dark">About Us</h1>
        <h2 className="text-dark">Our Story</h2>
        <p className="text-dark">
        <strong>Empowering India through Financial Literacy</strong>
        </p>
        <div className="our-story">
            <img id="our-story-image" src={OurStoryImage} alt="Our Story" />
            <p className="text-dark" id="our-story-text">
            At Wom-MenFin, we are committed to addressing the pressing issue of financial exclusion in India. Our journey began with a simple yet powerful vision: to bridge the gap between financial knowledge and empowerment for all segments of society.
            Over the years, we have strived to create impactful solutions that tackle the multi-faceted challenges hindering financial inclusion. Through innovative initiatives and collaborative efforts, we aim to transform the way individuals, especially women and youth, perceive and engage with financial concepts.
            </p>
        </div>
      </section>

      <section className="about-section">
        <h2 className="text-dark">Our Vision</h2>
      <p className="text-dark">
        <strong>Enabling Financial Independence and Equality</strong>
      </p>
        <div className="our-story">
        <p id="our-story-text" className="text-dark">
          Our vision is clear: to empower every Indian, regardless of their background or location, with the knowledge and tools needed to make informed financial decisions. By providing accessible and user-friendly resources, we are dedicated to promoting financial literacy and enabling individuals to take control of their economic well-being.
        </p>
        <img id="our-story-image" src={OurMissionImage} alt="Our Mission" />
        </div>
      </section>

      <section className="about-section text-center">
        <h2 className="text-dark">People Involved in Our Mission</h2>
        <div className="person">
          {/* <img src={Person1Image} alt="Person 1" /> */}
          <div>
            <h4 className="text-dark"><strong>Raunak Kumar</strong></h4>
            <p className="text-dark">Aspiring SDE</p>
          </div>
        </div>
        <div className="person">
          {/* <img src={Person2Image} alt="Person 2" /> */}
          <div>
            <h4 className="text-dark"><strong>Rishi Awasthi</strong></h4>
            <p className="text-dark">Aspiring SDE</p>
          </div>
        </div>
        <div className="person">
          {/* <img src={Person3Image} alt="Person 3" /> */}
          <div>
            <h4 className="text-dark"><strong>Parv Gupta</strong></h4>
            <p className="text-dark">Aspiring SDE</p>
          </div>
          
        </div>
        <div className="person">
          {/* <img src={Person3Image} alt="Person 3" /> */}
          <div>
            <h4 className="text-dark"><strong>Akshat Girdhar</strong></h4>
            <p className="text-dark">Aspiring SDE</p>
          </div>
          
        </div>
      </section>
    </div>
    <div><Footer/></div>
    </div>
  );
};

export default AboutUs;
