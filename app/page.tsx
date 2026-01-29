import Generator from '@/components/Generator';

export default function Home() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Hero Header */}
        <header className="text-center space-y-6 pt-8">
          {/* Animated Lobster Logo */}
          <div className="flex items-center justify-center gap-3 sm:gap-6">
            <span className="text-5xl sm:text-7xl animate-float drop-shadow-lg" role="img" aria-label="lobster">
              🦞
            </span>
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="text-gradient">Lobster</span>
                <span className="text-white"> Ipsum</span>
              </h1>
              <div className="h-1 w-32 sm:w-48 mx-auto bg-gradient-to-r from-lobster-500 via-sand-400 to-ocean-500 rounded-full" />
            </div>
            <span className="text-5xl sm:text-7xl animate-float-delayed drop-shadow-lg" role="img" aria-label="lobster">
              🦞
            </span>
          </div>

          {/* Tagline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-ocean-200 max-w-2xl mx-auto leading-relaxed font-light">
            Generate <span className="text-lobster-300 font-medium">deliciously quirky</span> placeholder text
            for your next project. Choose from lobster facts, ocean vibes, seafood puns, and pirate speak!
          </p>

          {/* Quick stats */}
          <div className="flex items-center justify-center gap-4 sm:gap-8 text-sm text-ocean-300">
            <div className="flex items-center gap-2">
              <span className="text-foam-400">4</span> themes
            </div>
            <span className="text-ocean-600">|</span>
            <div className="flex items-center gap-2">
              <span className="text-foam-400">100+</span> sentences
            </div>
            <span className="text-ocean-600">|</span>
            <div className="flex items-center gap-2">
              <span className="text-foam-400">Free</span> forever
            </div>
          </div>
        </header>

        {/* Generator Component */}
        <Generator />

        {/* Features Section */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Pick Your <span className="text-gradient-ocean">Flavor</span>
            </h2>
            <p className="text-ocean-300">Four unique themes to spice up your placeholder text</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                emoji: '🦞',
                title: 'Lobster Facts',
                description: 'Quirky facts about our crustacean friends',
                gradient: 'from-lobster-600/20 to-lobster-900/20',
                border: 'border-lobster-500/30',
                delay: 'stagger-1'
              },
              {
                emoji: '🌊',
                title: 'Ocean Vibes',
                description: 'Deep dive into marine terminology',
                gradient: 'from-ocean-600/20 to-ocean-900/20',
                border: 'border-ocean-500/30',
                delay: 'stagger-2'
              },
              {
                emoji: '🦐',
                title: 'Seafood Puns',
                description: 'Delicious facts for the foodie in you',
                gradient: 'from-sand-400/20 to-lobster-800/20',
                border: 'border-sand-400/30',
                delay: 'stagger-3'
              },
              {
                emoji: '🏴‍☠️',
                title: 'Pirate Speak',
                description: 'Arrr! Nautical nonsense awaits ye',
                gradient: 'from-ocean-800/20 to-ocean-950/20',
                border: 'border-ocean-400/30',
                delay: 'stagger-4'
              }
            ].map((feature) => (
              <div
                key={feature.title}
                className={`
                  group relative overflow-hidden rounded-2xl p-6
                  bg-gradient-to-br ${feature.gradient}
                  border ${feature.border}
                  backdrop-blur-sm
                  transition-all duration-300
                  hover:scale-[1.02] hover:shadow-xl hover:shadow-ocean-900/30
                  animate-fade-in-up opacity-0 ${feature.delay}
                `}
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative space-y-3">
                  <span className="text-4xl block group-hover:animate-wave">{feature.emoji}</span>
                  <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="text-ocean-300 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* API Section */}
        <section className="glass rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">⚡</span>
            <h3 className="text-xl font-semibold text-white">Use the API</h3>
          </div>
          <p className="text-ocean-300">
            Need lobster ipsum in your app? Use our simple API endpoint:
          </p>
          <code className="block bg-ocean-950/50 text-foam-300 p-4 rounded-lg text-sm font-mono overflow-x-auto">
            GET /api/generate?paragraphs=3&theme=lobster
          </code>
          <p className="text-ocean-400 text-sm">
            Themes: <span className="text-lobster-400">lobster</span> | <span className="text-ocean-300">ocean</span> | <span className="text-sand-400">seafood</span> | <span className="text-foam-400">pirate</span>
          </p>
        </section>

        {/* Footer */}
        <footer className="text-center space-y-4 py-8 border-t border-ocean-800/50">
          <div className="flex items-center justify-center gap-2 text-ocean-400">
            <span>Made with</span>
            <span className="text-lobster-400 animate-pulse">❤️</span>
            <span>and lobster claws</span>
            <span className="animate-claw-snap inline-block">🦞</span>
          </div>
          <div className="flex items-center justify-center gap-6 text-sm">
            <a
              href="https://github.com/Pickle-Clawd/lobster-ipsum"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ocean-400 hover:text-ocean-200 transition-colors duration-200 flex items-center gap-2 group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View on GitHub
            </a>
          </div>
          <p className="text-ocean-600 text-xs">
            © {new Date().getFullYear()} Lobster Ipsum. Snap, snap!
          </p>
        </footer>
      </div>
    </main>
  );
}
