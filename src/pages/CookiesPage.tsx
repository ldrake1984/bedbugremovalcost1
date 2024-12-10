import React from 'react';

export const CookiesPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>
      <div className="prose lg:prose-lg">
        <p>Last updated: {new Date().toLocaleDateString()}</p>

        <h2>What Are Cookies</h2>
        <p>
          Cookies are small text files that are stored on your computer when you visit our website. They help us improve your browsing experience and provide essential functionality.
        </p>

        <h2>How We Use Cookies</h2>
        <ul>
          <li>To remember your calculator inputs</li>
          <li>To analyze website traffic and usage patterns</li>
          <li>To improve our services and user experience</li>
        </ul>

        <h2>Managing Cookies</h2>
        <p>
          You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about our cookie policy, please contact:<br />
          Email: inspiremy888@gmail.com
        </p>
      </div>
    </div>
  );
};