import React, { useState } from 'react';
import type { CalculatorInputs } from '../types/calculator';
import { states } from '../utils/states';

export const Calculator = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    method: 'heat',
    squareFeet: 1000,
    infestationLevel: 'low',
    state: 'NJ'
  });

  const calculateCost = () => {
    const baseCost = {
      heat: 1.5,
      chemical: 1.0,
      integrated: 2.0
    }[inputs.method];

    const levelMultiplier = {
      low: 1,
      medium: 1.5,
      high: 2
    }[inputs.infestationLevel];

    const stateCostFactor = states[inputs.state].costFactor;
    
    return (inputs.squareFeet * baseCost * levelMultiplier * stateCostFactor).toFixed(2);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Treatment Method</label>
          <select
            className="w-full border rounded-md p-2"
            value={inputs.method}
            onChange={(e) => setInputs({ ...inputs, method: e.target.value })}
          >
            <option value="heat">Heat Treatment</option>
            <option value="chemical">Chemical Treatment</option>
            <option value="integrated">Integrated Pest Management</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Square Footage</label>
          <input
            type="number"
            className="w-full border rounded-md p-2"
            value={inputs.squareFeet}
            onChange={(e) => setInputs({ ...inputs, squareFeet: Number(e.target.value) })}
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Infestation Level</label>
          <select
            className="w-full border rounded-md p-2"
            value={inputs.infestationLevel}
            onChange={(e) => setInputs({ ...inputs, infestationLevel: e.target.value })}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">State</label>
          <select
            className="w-full border rounded-md p-2"
            value={inputs.state}
            onChange={(e) => setInputs({ ...inputs, state: e.target.value })}
          >
            {Object.entries(states).map(([code, { name }]) => (
              <option key={code} value={code}>{name}</option>
            ))}
          </select>
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-bold text-gray-900">Estimated Cost</h3>
          <p className="text-3xl font-bold text-red-600">${calculateCost()}</p>
          <p className="text-sm text-gray-500 mt-2">
            This is an estimate. Contact us for an accurate quote.
          </p>
          <a
            href="tel:8778195061"
            className="mt-4 block w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 px-4 rounded-lg text-center font-bold hover:from-orange-600 hover:to-red-700 transition-colors"
          >
            Call Now: 877-819-5061
          </a>
        </div>
      </div>
    </div>
  );
};