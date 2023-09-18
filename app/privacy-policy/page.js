// src/components/PrivacyPolicy.js
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-8">Last updated: September 14, 2023</p>
        <section className="prose prose-lg max-w-full">
          {/* Add your privacy policy content here */}
          <h2>Information We Collect</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
            odio ac urna pulvinar feugiat. Vivamus bibendum aliquam mi, sed
            scelerisque velit.
          </p>

          {/* Continue adding sections as needed */}
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
