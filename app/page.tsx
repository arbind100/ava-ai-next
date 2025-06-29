export default function Home() {
  return (
    {/* Hero Section */}
<section className="w-full py-20 bg-gradient-to-b from-black to-gray-900 text-center text-white px-4">
  <h1 className="text-4xl md:text-5xl font-bold mb-4">
    AVA AI — The Smartest Brain for Creators & Startups
  </h1>
  <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mt-4">
    Built by AI. Trained on strategy. Delivered like lightning.  
    <br />This isn't an agency — this is future intelligence.
  </p>
  <div className="mt-6">
    <span className="inline-block bg-blue-600 px-4 py-2 rounded-lg text-sm font-semibold">
      100% Human-Augmented AI · No Guessing · Just Results
    </span>
  </div>
</section>

    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white px-4 py-12">
      <h1 className="text-4xl font-bold mb-10 text-center">
        ⚡ AVA AI Services
      </h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Starter Plan */}
        <div className="bg-[#0f172a] p-6 rounded-2xl shadow-lg border border-gray-800">
          <h2 className="text-2xl font-semibold mb-2">Starter — $49/week</h2>
          <p className="text-gray-400 mb-4">
            For smart podcasters, indie creators, and rising YouTubers.
          </p>
          <ul className="mb-6 space-y-2 text-sm">
            <li>✅ Guest Intelligence Scanner</li>
            <li>✅ Viral Interview Engine</li>
            <li>✅ AI 7-Day Content Plan (channel-specific)</li>
            <li>🧠 Mini Hook Oracle — Emotion-first AI hooks</li>
            <li>🧠 Value Ladder Suggestion — Monetization idea generator</li>
          </ul>
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-medium">
            Order Now
          </button>
        </div>

        {/* Pro Plan */}
        <div className="bg-[#0f172a] p-6 rounded-2xl shadow-lg border border-gray-800">
          <h2 className="text-2xl font-semibold mb-2">Pro — $129/week</h2>
          <p className="text-gray-400 mb-4">
            For personal brands or founders scaling intelligently.
          </p>
          <ul className="mb-6 space-y-2 text-sm">
            <li>✅ Persona Analyzer (tone, energy, language)</li>
            <li>✅ Content Mindmap AI — future-proof strategy</li>
            <li>✅ Mini Brand OS — who you are, who you serve</li>
            <li>🧠 1-Minute Positioning Statement — your brand in 1 line</li>
            <li>🧠 Audience Archetype Clustering — subconscious targeting</li>
          </ul>
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-medium">
            Order Now
          </button>
        </div>

        {/* AVA+ Plan */}
        <div className="bg-[#0f172a] p-6 rounded-2xl shadow-lg border border-gray-800 col-span-1 md:col-span-2">
          <h2 className="text-2xl font-semibold mb-2">AVA+ — $199/week</h2>
          <p className="text-gray-400 mb-4">
            For 1% creators, startup CEOs, thought-leaders.
          </p>
          <ul className="mb-6 space-y-2 text-sm">
            <li>✅ Custom GPT Clone (trained on your voice, tweets, bio)</li>
            <li>✅ Market Sentiment Simulator — test audience reactions</li>
            <li>✅ The Mirror — Brutal AI self-reflection and blind spot finder</li>
            <li>🧠 AI Monetization Hacker — fix revenue leaks</li>
            <li>🧠 Growth Model Inverter — reverse engineer a better strategy</li>
            <li>🧠 Dream Avatar Generator — AI-generated ideal customer</li>
          </ul>
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-medium">
            Order Now
          </button>
        </div>
      </section>
          </main>
      
{/* Testimonials */}
<section className="w-full bg-black py-16 px-4">
  <h2 className="text-3xl font-bold text-center text-white mb-10">🚀 Client Wins with AVA</h2>
  <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
    <div className="bg-[#1f2937] p-6 rounded-xl border border-gray-700 shadow-md">
      <p className="text-gray-300 text-sm italic">“AVA’s Guest Scanner literally gave me better podcast questions than my human team. My views jumped by 3x.”</p>
      <div className="mt-4 text-sm text-gray-400">— Sarah M., Podcast Host (Starter Plan)</div>
    </div>
    <div className="bg-[#1f2937] p-6 rounded-xl border border-gray-700 shadow-md">
      <p className="text-gray-300 text-sm italic">“The Mirror tool exposed flaws I didn’t even know I had in my brand. Painful, but necessary. Game-changing.”</p>
      <div className="mt-4 text-sm text-gray-400">— Jay R., Startup Founder (AVA+ Plan)</div>
    </div>
  </div>
</section>

{/* Use Case Library */}
<section className="w-full bg-gray-950 py-16 px-4 text-white">
  <h2 className="text-3xl font-bold text-center mb-10">💡 What Can AVA Do for You?</h2>
  <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto text-sm text-gray-300">
    <div className="bg-[#0f172a] p-6 rounded-xl border border-gray-800">
      <h3 className="text-xl font-semibold mb-2">🎙 Podcasters</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>AI guest research + questions</li>
        <li>Viral episode title ideas</li>
        <li>Weekly content hooks</li>
      </ul>
    </div>
    <div className="bg-[#0f172a] p-6 rounded-xl border border-gray-800">
      <h3 className="text-xl font-semibold mb-2">📈 Founders</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>AI-powered positioning</li>
        <li>Custom GPT brand clone</li>
        <li>Growth blind spot detector</li>
      </ul>
    </div>
    <div className="bg-[#0f172a] p-6 rounded-xl border border-gray-800">
      <h3 className="text-xl font-semibold mb-2">📹 YouTubers</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Audience intelligence engine</li>
        <li>Persona-enhanced scripting</li>
        <li>Content plan + monetization stack</li>
      </ul>
    </div>
  </div>
</section>

{/* Contact CTA */}
<section className="w-full bg-black py-16 px-4 text-white text-center">
  <h2 className="text-2xl font-semibold mb-4">Still Have Questions?</h2>
  <p className="text-gray-400 max-w-xl mx-auto mb-6">
    DM us directly on WhatsApp or Twitter.  
    We’ll reply within 60 minutes — or AVA will.
  </p>
  <a
    href="https://wa.me/yourwhatsapplink"
    target="_blank"
    className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-sm font-semibold"
  >
    Chat on WhatsApp
  </a>
</section>
    </main>
  );
}
