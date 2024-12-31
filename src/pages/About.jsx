import React from "react";
import "../styles/pages/About.css";

function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <section className="about-content">
        <p>
          Welcome to <span className="brand-name">FakeShop</span>, your one-stop
          destination for all things amazing! Our mission is simple: to bring
          you the best products at the best prices, delivered straight to your
          door. Whether you're shopping for the latest trends, timeless
          classics, or everyday essentials, we’ve got you covered.
        </p>
        <p>
          Founded with a passion for convenience and quality,{" "}
          <span className="brand-name">FakeShop</span> was created to make
          online shopping as seamless and enjoyable as possible. Our team works
          tirelessly to curate a collection of products that you'll love, while
          ensuring exceptional customer service every step of the way.
        </p>
        <p>Why shop with us? Here’s what makes us different:</p>
        <ul className="about-list">
          <li>🌟 A diverse range of products across categories</li>
          <li>💡 Affordable pricing with frequent deals and discounts</li>
          <li>🚚 Fast and reliable shipping</li>
          <li>🛡️ A secure and hassle-free shopping experience</li>
          <li>❤️ A commitment to your satisfaction</li>
        </ul>
        <p>
          We’re more than just an online store—we’re a community of shoppers who
          value convenience, quality, and great service. Thank you for choosing{" "}
          <span className="brand-name">FakeShop</span>. Happy shopping!
        </p>
      </section>
    </div>
  );
}

export default About;
