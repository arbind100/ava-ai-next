'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold">Welcome to AVA</h1>
        <p className="text-md mt-2 text-gray-300">Your AI brain for building, scaling & creating without burnout.</p>
      </header>

      {!loggedIn ? (
        <div className="text-center">
          <Button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-xl" onClick={() => setLoggedIn(true)}>
            Login with Google
          </Button>
          <p className="text-sm mt-2 text-gray-400">Clicking this simulates login (we’ll set real login later)</p>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-pink-400">Pick your tool</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ToolCard
              title="7-Day Content Plan"
              desc="Give AVA your niche, and it’ll cook up a full week's worth of scroll-stopping content."
              comingSoon
            />
            <ToolCard
              title="Hook Oracle"
              desc="Want viral podcast titles, YouTube intros, and tweets? AVA writes the first line better than you ever could."
              comingSoon
            />
          </div>
        </div>
      )}
    </div>
  )
}

function ToolCard({ title, desc, comingSoon = false }: { title: string, desc: string, comingSoon?: boolean }) {
  return (
    <Card className="bg-zinc-900 border-zinc-700 rounded-2xl shadow-md hover:shadow-lg transition">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-300 mb-4">{desc}</p>
        <Button disabled={comingSoon} className="bg-pink-600 hover:bg-pink-700 text-white rounded-xl">
          {comingSoon ? 'Coming Soon' : 'Launch'}
        </Button>
      </CardContent>
    </Card>
  )
}
