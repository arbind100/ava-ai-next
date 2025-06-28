export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-12">⚡ AVA AI Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Starter Plan */}
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Starter</h2>
          <p className="mb-4 text-gray-400">Entry-level access to mind-blowing AI support and cosmic insights.</p>
          <ul className="mb-6 space-y-2 text-sm text-gray-300">
            <li>🧠 1 AI-powered solution</li>
            <li>🔍 15 min Research Time</li>
            <li>📨 Email Delivery</li>
          </ul>
          <p className="text-2xl font-bold mb-4">₹299</p>
          <a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg">
            Order Now
          </a>
        </div>

        {/* Pro Plan */}
        <div className="bg-gray-900 p-6 rounded-xl border border-blue-500 shadow-lg transform scale-105">
          <h2 className="text-2xl font-semibold mb-4">Pro</h2>
          <p className="mb-4 text-gray-400">Human-grade + beyond AI execution. Like having Einstein on speed dial.</p>
          <ul className="mb-6 space-y-2 text-sm text-gray-300">
            <li>🚀 3 Advanced AI Tasks</li>
            <li>🎯 Research + Strategic Execution</li>
            <li>📁 Google Docs + Screenshots</li>
          </ul>
          <p className="text-2xl font-bold mb-4">₹999</p>
          <a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg">
            Order Now
          </a>
        </div>

        {/* Ultimate Plan */}
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Ultimate</h2>
          <p className="mb-4 text-gray-400">Superhuman-level projects. You command, we execute + upgrade you.</p>
          <ul className="mb-6 space-y-2 text-sm text-gray-300">
            <li>🧬 Custom AI + Automation Flow</li>
            <li>💼 Business Use Case Included</li>
            <li>💡 Weekly Strategy Calls (30 min)</li>
          </ul>
          <p className="text-2xl font-bold mb-4">₹2499</p>
          <a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg">
            Order Now
          </a>
        </div>
      </div>
    </main>
  );
}
