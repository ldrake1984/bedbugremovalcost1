import React from 'react';

export const PrivacyPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose lg:prose-lg">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2>Introduction</h2>
        <p>
          This Privacy Policy describes how Viking Bug Pros LLC ("we," "our," or "us") collects, uses, and shares your personal information when you visit www.bedbugremovalcostcalculator.com.
        </p>

        <h2>Information We Collect</h2>
        <ul>
          <li>Contact information (name, email, phone number)</li>
          <li>Location information (state)</li>
          <li>Property information (square footage)</li>
          <li>Usage data and analytics</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <ul>
          <li>To provide cost estimates for pest control services</li>
          <li>To communicate with you about our services</li>
          <li>To improve our calculator and services</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2>Contact Us</h2>
        <p>
          For questions about this Privacy Policy, please contact us at:<br />
          Email: inspiremy888@gmail.com<br />
          Address: Innovation Plaza, Flanders, New Jersey, USA
        </p>
      </div>
    </div>
  );
};