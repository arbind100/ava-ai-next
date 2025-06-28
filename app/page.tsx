"use client";
import React from "react";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-10">AVA AI Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Starter Plan */}
        <div className="border border-gray-700 rounded-2xl p-6 shadow-xl bg-gray-900">
          <h2 className="text-2xl font-semibold text-green-400 mb-2">Starter</h2>
          <p className="mb-4 text-gray-300">For smart podcasters, indie creators, and rising YouTubers.</p>
          <p className="text-white text-xl font-bold mb-4">$29/week or $89/month</p>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>✅ Guest Intelligence Scanner</li>
            <li>✅ Viral Interview Engine</li>
            <li>✅ AI 7-Day Content Plan</li>
            <li>🧠 Mini Hook Oracle</li>
            <li>🧠 Value Ladder Suggestion</li>
          </ul>
        </div>

        {/* Pro Plan */}
        <div className="border border-gray-700 rounded-2xl p-6 shadow-xl bg-gray-900">
          <h2 className="text-2xl font-semibold text-blue-400 mb-2">Pro</h2>
          <p className="mb-4 text-gray-300">For personal brands or founders scaling intelligently.</p>
          <p className="text-white text-xl font-bold mb-4">$99/week or $299/month</p>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>✅ Everything in Starter</li>
            <li>✅ Persona Analyzer</li>
            <li>✅ Content Mindmap AI</li>
            <li>✅ Mini Brand OS</li>
            <li>🧠 1-Minute Positioning Statement</li>
            <li>🧠 Audience Archetype Clustering</li>
          </ul>
        </div>

        {/* AVA+ Plan */}
        <div className="border border-red-500 border-2 rounded-2xl p-6 shadow-2xl bg-gray-900">
          <h2 className="text-2xl font-semibold text-red-400 mb-2">AVA+</h2>
          <p className="mb-4 text-gray-300">For 1% creators, startup CEOs, and thought-leaders.</p>
          <p className="text-white text-xl font-bold mb-4">$179/week or $549/month</p>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>✅ Everything in Pro</li>
            <li>✅ Custom GPT Clone (voice/bio)</li>
            <li>✅ Market Sentiment Simulator</li>
            <li>✅ The Mirror – Brutal AI Reflection</li>
            <li>🧠 AI Monetization Hacker</li>
            <li>🧠 Growth Model Inverter</li>
            <li>🧠 Dream Avatar Generator</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
// Force update
