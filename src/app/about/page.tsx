"use client";

import React from "react";

const about = () => {
  return (
    <div className="p-6 lg:px-20 xl:px-40">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-sky-800">About Us</h1>
        <p className="mt-4 text-gray-600 text-lg">
          Discover who we are and what drives us.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-sky-700 mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          At our core, we aim to deliver excellence in every product and service
          we offer. Our mission is to create value for our customers by combining
          innovation, quality, and dedication. We strive to build lasting
          relationships and make a positive impact in our industry.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-sky-700 mb-4">Our Vision</h2>
        <p className="text-gray-700 leading-relaxed">
          We envision a world where technology seamlessly integrates with everyday
          life, enhancing experiences and simplifying challenges. Through
          creativity and a commitment to growth, we aim to be leaders in driving
          meaningful innovation.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-sky-700 mb-4">Our Team</h2>
        <p className="text-gray-700 leading-relaxed">
          Behind every success, there's a passionate and dedicated team. Our team
          consists of talented individuals who bring diverse expertise and a
          shared commitment to achieving our goals. Together, we foster an
          environment of collaboration and continuous learning.
        </p>
      </section>
    </div>
  );
};

export default about;
