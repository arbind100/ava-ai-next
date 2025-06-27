// app/page.tsx

import Link from 'next/link';

export default function Home() { return ( <main className="min-h-screen bg-black text-white font-sans px-6 py-10"> <h1 className="text-4xl md:text-6xl font-bold text-center mb-8"> Meet <span className="text-pink-500">AVA</span>: Your Beyond-Human Strategist </h1>

<p className="text-center max-w-3xl mx-auto mb-12 text-lg text-gray-300">
    AVA isn't just AI. It's your personal strategist — capable of generating ideas, plans, and insights
    far beyond human thinking. Built for creators, founders, and visionary brands.
  </p>

  <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {plans.map((plan) => (
      <div key={plan.name} className="border border-pink-500 rounded-2xl p-6 shadow-lg hover:scale-105 transition-all">
        <h2 className="text-2xl font-semibold mb-2 text-pink-400">{plan.name}</h2>
        <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
        <ul className="text-sm text-gray-200 list-disc list-inside space-y-1 mb-4">
          {plan.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
        <p className="text-xl font-bold text-pink-500">{plan.price}</p>
        <Link
          href="https://formspree.io/f/your-form-id"
          target="_blank"
          className="mt-4 inline-block bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-xl"
        >
          Order Now
        </Link>
      </div>
    ))}
  </section>
</main>

); }

const plans = [ { name: 'Starter Plan', price: '$49', description: 'For smart podcasters, indie creators, and rising YouTubers.', features: [ 'Guest Intelligence Scanner', 'Viral Interview Engine', '7-Day AI Content Calendar', 'Mini Hook Oracle', 'Value Ladder Suggestion' ] }, { name: 'Pro Plan', price: '$129', description: 'For personal brands or founders scaling intelligently.', features: [ 'Includes Starter Plan features', 'Persona Analyzer', 'Content Mindmap AI', 'Mini Brand OS', '1-Minute Positioning Statement', 'Audience Archetype Clustering' ] }, { name: 'AVA+ Plan', price: '$299', description: 'For elite creators, startup CEOs, thought-leaders.', features: [ 'Includes Pro Plan features', 'Custom GPT Clone', 'Market Sentiment Simulator', 'Client Mirror Report', 'AI Monetization Hacker', 'Growth Model Inverter', 'Dream Avatar Generator' ] } ];


