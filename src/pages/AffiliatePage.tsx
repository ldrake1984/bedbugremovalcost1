import React from 'react';

export const AffiliatePage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Affiliate Disclosure</h1>
      <div className="prose lg:prose-lg">
        <p>Last updated: {new Date().toLocaleDateString()}</p>

        <h2>Affiliate Links</h2>
        <p>
          www.bedbugremovalcostcalculator.com participates in affiliate programs, including the Amazon Services LLC Associates Program. We may earn commissions from qualifying purchases made through links on our website.
        </p>

        <h2>Product Recommendations</h2>
        <p>
          While we recommend products we believe in, we encourage you to conduct your own research before making any purchases. Affiliate commissions do not increase your purchase price.
        </p>

        <h2>Transparency</h2>
        <p>
          We are committed to transparency in our affiliate relationships. If you have any questions about our affiliate partnerships, please contact us at inspiremy888@gmail.com.
        </p>
      </div>
    </div>
  );
};