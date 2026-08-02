'use client';

import React, { useState } from 'react';

export const GrowthSimulator: React.FC = () => {
  const [monthlyBudget, setMonthlyBudget] = useState(15000);
  const [conversionRate, setConversionRate] = useState(2.5);
  const [averageOrderValue, setAverageOrderValue] = useState(100);

  const calculateCurrentRevenue = () => {
    const visitors = monthlyBudget / 2; // Assuming $2 CPC
    return visitors * (conversionRate / 100) * averageOrderValue;
  };

  const calculateJanusmaadRevenue = () => {
    const visitors = monthlyBudget / 2;
    // Assume we increase CVR by 20% minimum
    const newCvr = conversionRate * 1.2;
    return visitors * (newCvr / 100) * averageOrderValue;
  };

  const extraRevenue = calculateJanusmaadRevenue() - calculateCurrentRevenue();

  const formatCurrency = (val: number) => {
    return val.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    });
  };

  return (
    <div className="py-24 bg-[#F8F9FA] relative z-10 w-full">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="heading-lg text-black mb-16 text-center">Do the math.</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Inputs */}
          <div className="space-y-12">
            <div>
              <div className="flex justify-between items-end mb-4">
                <label className="text-xl font-semibold text-black">Monthly Ad Spend</label>
                <span className="text-2xl font-bold font-heading">{formatCurrency(monthlyBudget)}</span>
              </div>
              <input
                type="range"
                min={5000}
                max={100000}
                step={1000}
                value={monthlyBudget}
                onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                className="w-full h-1 bg-neutral-300 rounded-none appearance-none cursor-pointer accent-black"
              />
            </div>

            <div>
              <div className="flex justify-between items-end mb-4">
                <label className="text-xl font-semibold text-black">Current Conversion Rate</label>
                <span className="text-2xl font-bold font-heading">{conversionRate.toFixed(1)}%</span>
              </div>
              <input
                type="range"
                min={0.5}
                max={10}
                step={0.1}
                value={conversionRate}
                onChange={(e) => setConversionRate(Number(e.target.value))}
                className="w-full h-1 bg-neutral-300 rounded-none appearance-none cursor-pointer accent-black"
              />
            </div>

            <div>
              <div className="flex justify-between items-end mb-4">
                <label className="text-xl font-semibold text-black">Average Order Value</label>
                <span className="text-2xl font-bold font-heading">{formatCurrency(averageOrderValue)}</span>
              </div>
              <input
                type="range"
                min={10}
                max={1000}
                step={10}
                value={averageOrderValue}
                onChange={(e) => setAverageOrderValue(Number(e.target.value))}
                className="w-full h-1 bg-neutral-300 rounded-none appearance-none cursor-pointer accent-black"
              />
            </div>
          </div>

          {/* Results Box */}
          <div className="bg-black text-white p-12 flex flex-col justify-center space-y-8">
            <div>
              <p className="text-neutral-400 font-semibold mb-2 text-sm uppercase tracking-wider">With current setup</p>
              <div className="text-4xl font-heading font-bold opacity-50 line-through">
                {formatCurrency(calculateCurrentRevenue())}
              </div>
            </div>
            
            <div className="h-px w-full bg-neutral-800"></div>

            <div>
              <p className="text-neutral-400 font-semibold mb-2 text-sm uppercase tracking-wider">With Janusmaad (+20% CVR)</p>
              <div className="text-5xl font-heading font-black">
                {formatCurrency(calculateJanusmaadRevenue())}
              </div>
              <p className="text-green-400 font-bold mt-4 text-lg">
                +{formatCurrency(extraRevenue)} / mo extra revenue
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
