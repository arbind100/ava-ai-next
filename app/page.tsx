import React from "react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-b from-black to-gray-900 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          ⚡ AVA AI — The Smartest Brain for Creators & Startups
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mt-4">
          Built by AI. Trained on strategy. Delivered like lightning. This isn’t an agency — this is future intelligence.
        </p>
        <div className="mt-6">
          <span className="inline-block bg-blue-600 px-4 py-2 rounded-lg text-sm font-semibold">
            100% Human-Augmented AI · No Guessing · Just Results
          </span>
        </div>
      </section>

      {/* Pricing Plans */}
      <main className="flex flex-col items-center justify-center bg-black text-white px-4 py-12">
        <h1 className="text-4xl font-bold mb-10 text-center">⚡ AVA AI Services</h1>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">

          {/* Starter */}
          <div className="bg-[#0f172a] p-6 rounded-2xl shadow-lg border border-gray-800">
            <h2 className="text-2xl font-semibold mb-2">Starter — $49/week</h2>
            <p className="text-gray-400 mb-4">For smart podcasters, indie creators, and rising YouTubers.</p>
            <ul className="mb-6 space-y-2 text-sm">
              <li>✅ Guest Intelligence Scanner</li>
              <li>✅ Viral Interview Engine</li>
              <li>✅ AI 7-Day Content Plan (channel-specific)</li>
              <li>🧠 Mini Hook Oracle — Emotion-first AI hooks</li>
              <li>🧠 Value Ladder Suggestion — Monetization idea generator</li>
            </ul>
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-medium">Order Now</button>
          </div>

          {/* Pro */}
          <div className="bg-[#0f172a] p-6 rounded-2xl shadow-lg border border-gray-800">
            <h2 className="text-2xl font-semibold mb-2">Pro — $129/week</h2>
            <p className="text-gray-400 mb-4">For personal brands or founders scaling intelligently.</p>
            <ul className="mb-6 space-y-2 text-sm">
              <li>✅ Persona Analyzer (tone, energy, language)</li>
              <li>✅ Content Mindmap AI — future-proof strategy</li>
              <li>✅ Mini Brand OS — who you are, who you serve</li>
              <li>🧠 1-Minute Positioning Statement — your brand in 1 line</li>
              <li>🧠 Audience Archetype Clustering — subconscious targeting</li>
            </ul>
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-medium">Order Now</button>
          </div>

          {/* AVA+ */}
          <div className="bg-[#0f172a] p-6 rounded-2xl shadow-lg border border-gray-800 md:col-span-2">
            <h2 className="text-2xl font-semibold mb-2">AVA+ — $199/week</h2>
            <p className="text-gray-400 mb-4">For 1% creators, startup CEOs, thought-leaders.</p>
            <ul className="mb-6 space-y-2 text-sm">
              <li>✅ Custom GPT Clone (trained on your voice, tweets, bio)</li>
              <li>✅ Market Sentiment Simulator — test audience reactions</li>
              <li>✅ The Mirror — Brutal AI self-reflection and blind spot finder</li>
              <li>🧠 AI Monetization Hacker — fix revenue leaks</li>
              <li>🧠 Growth Model Inverter — reverse engineer a better strategy</li>
              <li>🧠 Dream Avatar Generator — AI-generated ideal customer</li>
            </ul>
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-medium">Order Now</button>
          </div>
        </section>
      </main>

      {/* Testimonials Section */}
      <section className="bg-gray-900 text-white py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">💬 What Our Users Say</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-zinc-800 p-6 rounded-xl shadow-md">
            <p className="italic">“AVA gave me an AI-powered growth plan that outperformed my old agency.”</p>
            <p className="mt-4 font-semibold text-blue-400">— Daniel, Creator Economy Coach</p>
          </div>
          <div className="bg-zinc-800 p-6 rounded-xl shadow-md">
            <p className="italic">“I didn’t know what I needed until AVA showed me. It’s scary smart.”</p>
            <p className="mt-4 font-semibold text-blue-400">— Maya, Founder of SpeakEasy</p>
          </div>
        </div>
      </section>

      {/* What AVA Can Do */}
      <section className="bg-black text-white py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">🔮 What Can AVA Actually Do?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-700">
            <h3 className="text-xl font-semibold mb-2">Brand Strategy OS</h3>
            <p className="text-sm text-gray-400">AVA analyzes your identity, market, and audience to give you a full mental OS of your brand.</p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-700">
            <h3 className="text-xl font-semibold mb-2">Content & Distribution Engine</h3>
            <p className="text-sm text-gray-400">Daily content ideas, story-based hooks, and the distribution timing AI — all built-in.</p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-700">
            <h3 className="text-xl font-semibold mb-2">Customer Psychology Toolkit</h3>
            <p className="text-sm text-gray-400">AVA shows you the dreams, fears, logic, and decision-maps of your best-fit customers.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
