import React from 'react';

export const TermsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
      <div className="prose lg:prose-lg">
        <p>Last updated: {new Date().toLocaleDateString()}</p>

        <h2>Agreement to Terms</h2>
        <p>
          By accessing www.bedbugremovalcostcalculator.com, you agree to be bound by these Terms of Service and all applicable laws and regulations.
        </p>

        <h2>Use License</h2>
        <p>
          The bed bug removal cost calculator is provided for informational purposes only. Cost estimates are approximate and may vary based on actual conditions.
        </p>

        <h2>Disclaimer</h2>
        <p>
          The calculator results are estimates only and do not constitute a guarantee or quote for services. Actual costs may vary significantly based on specific circumstances.
        </p>

        <h2>Contact Information</h2>
        <p>
          Viking Bug Pros LLC<br />
          Innovation Plaza<br />
          Flanders, New Jersey, USA<br />
          Email: inspiremy888@gmail.com
        </p>
      </div>
    </div>
  );
};