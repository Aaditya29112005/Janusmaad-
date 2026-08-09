'use client';

import React, { useState } from 'react';

export const GrowthSimulator: React.FC = () => {
  // Monthly Ad Spend in INR: 1L (100,000) to 1Cr (10,000,000)
  const [monthlySpend, setMonthlySpend] = useState<number>(1000000); // Default 10L
  // Promise on lift: 10% to 100%
  const [liftPercentage, setLiftPercentage] = useState<number>(20); // Default 20%
  // Baseline conversion rate (e.g. 2%)
  const [baselineCvr, setBaselineCvr] = useState<number>(2.0);
  // Average order value in INR (e.g. ₹2,000)
  const [aov, setAov] = useState<number>(2500);

  // Formatting currency in INR (Lakhs & Crores format)
  const formatINR = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Cr`;
    }
    if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} L`;
    }
    return `₹${Math.round(amount).toLocaleString('en-IN')}`;
  };

  // Calculation
  const estimatedTraffic = monthlySpend / 15; // Assume avg CPC of ₹15
  const currentRevenue = estimatedTraffic * (baselineCvr / 100) * aov;
  const newCvr = baselineCvr * (1 + liftPercentage / 100);
  const newRevenue = estimatedTraffic * (newCvr / 100) * aov;
  const extraRevenue = newRevenue - currentRevenue;

  return (
    <div className="py-20 bg-[#F9F8F3] border-b border-black/10 relative z-10 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="mb-16 text-left">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-black tracking-tight mb-4">
            Do the Math
          </h2>
          <p className="text-lg md:text-xl text-neutral-700 font-medium max-w-3xl leading-relaxed">
            Adjust your monthly spend and expected lift below. Watch the numbers move in real-time — making your growth decision completely effortless.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Box */}
          <div className="lg:col-span-7 bg-white border-2 border-black p-8 sm:p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] space-y-8">
            
            {/* Slider 1: Monthly Ad Spend (1L to 1Cr) */}
            <div>
              <div className="flex justify-between items-end mb-3">
                <label className="text-sm font-mono font-bold uppercase tracking-wider text-black">
                  Monthly Ad Spend
                </label>
                <span className="text-2xl font-mono font-black text-black">
                  {formatINR(monthlySpend)}
                </span>
              </div>
              <input
                type="range"
                min={100000} // 1 Lakh
                max={10000000} // 1 Crore
                step={100000}
                value={monthlySpend}
                onChange={(e) => setMonthlySpend(Number(e.target.value))}
                className="w-full h-2 bg-neutral-200 rounded-none appearance-none cursor-pointer accent-black border border-black"
              />
              <div className="flex justify-between text-[11px] font-mono text-neutral-500 mt-2">
                <span>1L (₹1,00,000)</span>
                <span>50L</span>
                <span>1CR (₹1,00,000,00)</span>
              </div>
            </div>

            {/* Slider 2: Our promise on lift (10% to 100%) */}
            <div>
              <div className="flex justify-between items-end mb-3">
                <label className="text-sm font-mono font-bold uppercase tracking-wider text-black">
                  Our promise on lift
                </label>
                <span className="text-2xl font-mono font-black text-blue-600">
                  +{liftPercentage}%
                </span>
              </div>
              <input
                type="range"
                min={10}
                max={100}
                step={5}
                value={liftPercentage}
                onChange={(e) => setLiftPercentage(Number(e.target.value))}
                className="w-full h-2 bg-neutral-200 rounded-none appearance-none cursor-pointer accent-black border border-black"
              />
              <div className="flex justify-between text-[11px] font-mono text-neutral-500 mt-2">
                <span>10% (Min Lift)</span>
                <span>50%</span>
                <span>100% (Double CVR)</span>
              </div>
            </div>

            {/* Secondary Parameters Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-neutral-200">
              <div>
                <label className="text-xs font-mono font-bold uppercase text-neutral-600 mb-2 block">
                  Current Conversion Rate ({baselineCvr}%)
                </label>
                <input
                  type="range"
                  min={0.5}
                  max={5.0}
                  step={0.1}
                  value={baselineCvr}
                  onChange={(e) => setBaselineCvr(Number(e.target.value))}
                  className="w-full h-1.5 bg-neutral-200 appearance-none cursor-pointer accent-black"
                />
              </div>

              <div>
                <label className="text-xs font-mono font-bold uppercase text-neutral-600 mb-2 block">
                  Average Order Value ({formatINR(aov)})
                </label>
                <input
                  type="range"
                  min={500}
                  max={10000}
                  step={250}
                  value={aov}
                  onChange={(e) => setAov(Number(e.target.value))}
                  className="w-full h-1.5 bg-neutral-200 appearance-none cursor-pointer accent-black"
                />
              </div>
            </div>

          </div>

          {/* Results Output Box */}
          <div className="lg:col-span-5 bg-black text-white p-8 sm:p-10 border-2 border-black shadow-[6px_6px_0px_0px_rgba(204,255,0,1)] flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <p className="text-neutral-400 font-mono text-xs uppercase tracking-widest mb-1">
                  Status Quo Revenue
                </p>
                <div className="text-2xl font-mono text-neutral-400 line-through">
                  {formatINR(currentRevenue)} / mo
                </div>
              </div>

              <div className="h-px bg-neutral-800 w-full" />

              <div>
                <p className="text-[#CCFF00] font-mono text-xs uppercase tracking-widest mb-1">
                  Projected Revenue (+{liftPercentage}% Lift)
                </p>
                <div className="text-4xl sm:text-5xl font-mono font-black text-white tracking-tight">
                  {formatINR(newRevenue)}
                  <span className="text-base text-neutral-400 font-normal"> / mo</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800">
              <div className="bg-[#CCFF00] text-black p-4 font-mono font-black text-center text-lg shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]">
                +{formatINR(extraRevenue)} EXTRA REVENUE / MO
              </div>
              <p className="text-[11px] font-mono text-neutral-400 text-center mt-3">
                Calculated over same ad budget without increasing customer acquisition costs.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

