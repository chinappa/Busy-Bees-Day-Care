import React, { useState } from 'react';
import { strategyData } from './strategy-data';
import Prototype from './components/Prototype';
import Markdown from 'react-markdown';
import { LayoutTemplate, Lightbulb, FileText, Smartphone } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'strategy' | 'prototype'>('strategy');
  const [activeStrategyId, setActiveStrategyId] = useState<string>(strategyData[0].id);

  const activeStrategy = strategyData.find(s => s.id === activeStrategyId) || strategyData[0];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-slate-200 px-6 py-3 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 p-1.5 rounded-lg">
            <LayoutTemplate className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg text-slate-800">Busy Bees Website Plan</span>
        </div>
        
        <div className="flex bg-slate-100 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab('strategy')}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'strategy' ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileText className="w-4 h-4" />
            Strategy Document
          </button>
          <button
            onClick={() => setActiveTab('prototype')}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'prototype' ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            Homepage Prototype
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex overflow-hidden">
        {activeTab === 'prototype' ? (
          <div className="w-full h-[calc(100vh-61px)] overflow-y-auto">
            <Prototype />
          </div>
        ) : (
          <div className="flex w-full max-w-6xl mx-auto h-[calc(100vh-61px)]">
            
            {/* Sidebar for Strategy Items */}
            <aside className="w-80 border-r border-slate-200 bg-white overflow-y-auto shrink-0 hidden md:block">
              <div className="p-4 border-b border-slate-100 bg-slate-50/50">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1 flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5" /> Complete Plan
                </h2>
                <p className="text-sm text-slate-600">12-Step Conversion Strategy</p>
              </div>
              <div className="py-2">
                {strategyData.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveStrategyId(section.id)}
                    className={`w-full text-left px-4 py-3 text-sm transition-colors border-l-2 ${
                      activeStrategyId === section.id 
                      ? 'border-indigo-600 bg-indigo-50/50 text-indigo-900 font-semibold' 
                      : 'border-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </div>
            </aside>

            {/* Mobile Strategy Nav (Select) */}
            <div className="md:hidden p-4 border-b border-slate-200 bg-white w-full absolute z-10">
              <select 
                value={activeStrategyId}
                onChange={(e) => setActiveStrategyId(e.target.value)}
                className="w-full bg-slate-100 border-none rounded-lg p-3 text-sm font-medium focus:ring-2 focus:ring-indigo-600 outline-none"
              >
                {strategyData.map((s) => (
                  <option key={s.id} value={s.id}>{s.title}</option>
                ))}
              </select>
            </div>

            {/* Markdown Content Area */}
            <div className="flex-1 overflow-y-auto bg-slate-50 p-6 md:p-12 relative pt-20 md:pt-12">
              <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
                <h1 className="text-3xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-6">
                  {activeStrategy.title}
                </h1>
                <div className="prose prose-indigo max-w-none text-slate-700">
                  <Markdown>{activeStrategy.content}</Markdown>
                </div>
                
                {/* Navigation Footer */}
                <div className="mt-16 pt-8 border-t border-slate-100 flex justify-between">
                   <button 
                     onClick={() => {
                       const currentIndex = strategyData.findIndex(s => s.id === activeStrategyId);
                       if (currentIndex > 0) setActiveStrategyId(strategyData[currentIndex - 1].id);
                     }}
                     disabled={activeStrategyId === strategyData[0].id}
                     className="text-sm font-medium text-slate-500 hover:text-indigo-600 disabled:opacity-30 disabled:hover:text-slate-500 transition-colors"
                   >
                     ← Previous Section
                   </button>
                   <button 
                     onClick={() => {
                       const currentIndex = strategyData.findIndex(s => s.id === activeStrategyId);
                       if (currentIndex < strategyData.length - 1) setActiveStrategyId(strategyData[currentIndex + 1].id);
                     }}
                     disabled={activeStrategyId === strategyData[strategyData.length - 1].id}
                     className="text-sm font-medium text-indigo-600 hover:text-indigo-800 disabled:opacity-30 disabled:hover:text-indigo-600 transition-colors"
                   >
                     Next Section →
                   </button>
                </div>
              </div>
            </div>

          </div>
        )}
      </main>
    </div>
  );
}
