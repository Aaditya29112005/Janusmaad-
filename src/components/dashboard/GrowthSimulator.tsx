'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts';
import {
  TrendingUp,
  Activity,
  Sliders,
  Database,
  Search,
  Zap,
} from 'lucide-react';

const PERFORMANCE_DATA = {
  cdp: [
    { month: 'Jan', traditional: 120, janusmaad: 140 },
    { month: 'Feb', traditional: 150, janusmaad: 290 },
    { month: 'Mar', traditional: 180, janusmaad: 480 },
    { month: 'Apr', traditional: 210, janusmaad: 790 },
    { month: 'May', traditional: 240, janusmaad: 1200 },
    { month: 'Jun', traditional: 280, janusmaad: 1850 },
  ],
  attribution: [
    { month: 'Jan', traditional: 1000, janusmaad: 1100 },
    { month: 'Feb', traditional: 1150, janusmaad: 1800 },
    { month: 'Mar', traditional: 1300, janusmaad: 2900 },
    { month: 'Apr', traditional: 1450, janusmaad: 4600 },
    { month: 'May', traditional: 1600, janusmaad: 6800 },
    { month: 'Jun', traditional: 1750, janusmaad: 9500 },
  ],
  seo: [
    { month: 'Jan', traditional: 80, janusmaad: 95 },
    { month: 'Feb', traditional: 110, janusmaad: 260 },
    { month: 'Mar', traditional: 140, janusmaad: 620 },
    { month: 'Apr', traditional: 170, janusmaad: 1350 },
    { month: 'May', traditional: 200, janusmaad: 2700 },
    { month: 'Jun', traditional: 230, janusmaad: 4900 },
  ],
};

export const GrowthSimulator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cdp' | 'attribution' | 'seo'>('cdp');
  const [monthlyBudget, setMonthlyBudget] = useState(15000);

  const calculateProjectedROI = () => {
    const multiplier = activeTab === 'cdp' ? 4.8 : activeTab === 'attribution' ? 5.2 : 4.2;
    return (monthlyBudget * multiplier).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    });
  };

  return (
    <div className="glass-panel rounded-3xl p-6 md:p-10 border border-janus-purple/15 shadow-2xl relative overflow-hidden bg-white/95 backdrop-blur-2xl">
      {/* Top Header Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="p-1.5 rounded-lg bg-janus-purple/10 text-janus-purple border border-janus-purple/20">
              <Activity className="w-4 h-4" />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-janus-mint">
              Real-Time Growth Simulator
            </span>
          </div>
          <h3 className="text-xl md:text-3xl font-heading font-bold text-slate-900 tracking-tight">
            Interactive Performance & ROI Dashboard
          </h3>
          <p className="text-xs md:text-sm text-slate-600 font-medium mt-1">
            Simulate your growth velocity with Janusmaad MarTech and CDP architecture vs traditional marketing.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200 self-start lg:self-auto shadow-inner">
          <button
            onClick={() => setActiveTab('cdp')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'cdp'
                ? 'bg-gradient-to-r from-janus-purple to-janus-purple-light text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            CDP Stack
          </button>
          <button
            onClick={() => setActiveTab('attribution')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'attribution'
                ? 'bg-gradient-to-r from-janus-purple to-janus-mint text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            Attribution
          </button>
          <button
            onClick={() => setActiveTab('seo')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'seo'
                ? 'bg-gradient-to-r from-janus-mint to-teal-500 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            Search Everywhere
          </button>
        </div>
      </div>

      {/* Main Grid: Chart & ROI Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
        {/* Recharts Live Chart */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-700">
              Trajectory: Janusmaad (Purple/Mint) vs Industry Baseline (Muted)
            </span>
            <div className="flex items-center gap-4 text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-janus-purple">
                <span className="w-2.5 h-2.5 rounded-full bg-janus-purple" />
                Janusmaad Platform
              </span>
              <span className="flex items-center gap-1.5 text-slate-400">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                Industry Average
              </span>
            </div>
          </div>

          <div className="h-[280px] w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={PERFORMANCE_DATA[activeTab]}>
                <defs>
                  <linearGradient id="janusGlowLight" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7851A9" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#48BE9C" stopOpacity={0.05} />
                  </linearGradient>
                  <linearGradient id="baselineGlowLight" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#94A3B8" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#94A3B8" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(120, 81, 169, 0.1)" />
                <XAxis dataKey="month" stroke="#64748B" fontSize={12} tickLine={false} />
                <YAxis stroke="#64748B" fontSize={12} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#FFFFFF',
                    borderColor: 'rgba(120, 81, 169, 0.2)',
                    borderRadius: '12px',
                    color: '#0F172A',
                    fontSize: '12px',
                    boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)'
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="janusmaad"
                  stroke="#7851A9"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#janusGlowLight)"
                />
                <Area
                  type="monotone"
                  dataKey="traditional"
                  stroke="#94A3B8"
                  strokeWidth={2}
                  strokeDasharray="4 4"
                  fillOpacity={1}
                  fill="url(#baselineGlowLight)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Live ROI Calculator Panel */}
        <div className="lg:col-span-4 bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between space-y-6 shadow-sm">
          <div>
            <div className="flex items-center gap-2 mb-3 text-janus-purple text-xs font-bold uppercase tracking-wider">
              <Sliders className="w-4 h-4" />
              Dynamic Budget Calculator
            </div>

            <label className="text-xs text-slate-700 block mb-2 font-semibold">
              Monthly Ad Spend / Growth Budget
            </label>
            <div className="flex items-center justify-between text-slate-900 font-heading font-bold text-lg mb-2">
              <span>${monthlyBudget.toLocaleString()}</span>
              <span className="text-xs text-slate-500 font-normal">/ month</span>
            </div>

            <input
              type="range"
              min={5000}
              max={100000}
              step={5000}
              value={monthlyBudget}
              onChange={(e) => setMonthlyBudget(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-janus-purple"
            />
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-br from-janus-purple/10 to-janus-mint/10 border border-janus-purple/15 space-y-2">
            <span className="text-xs text-slate-700 font-semibold block">
              Estimated Annual Revenue Impact
            </span>
            <div className="text-2xl md:text-3xl font-heading font-bold text-gradient">
              {calculateProjectedROI()}
            </div>
            <div className="flex items-center gap-1 text-[11px] text-janus-purple font-bold pt-1">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>500X Traffic & Attribution Boost</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
