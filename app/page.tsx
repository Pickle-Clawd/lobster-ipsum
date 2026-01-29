import Generator from '@/components/Generator';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-4">
            <span className="text-6xl">🦞</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Lobster Ipsum
            </h1>
            <span className="text-6xl">🦞</span>
          </div>
          <p className="text-xl text-ocean-200 max-w-2xl mx-auto">
            Generate hilarious lobster-themed Lorem Ipsum text for your next project.
            Choose from lobster facts, ocean terminology, seafood puns, and pirate speak!
          </p>
        </div>

        {/* Generator */}
        <Generator />

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 space-y-2">
            <div className="text-4xl">🦞</div>
            <h3 className="text-lg font-semibold text-white">Lobster Facts</h3>
            <p className="text-ocean-200 text-sm">
              Learn quirky facts about our crustacean friends while filling space.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 space-y-2">
            <div className="text-4xl">🌊</div>
            <h3 className="text-lg font-semibold text-white">Ocean Vibes</h3>
            <p className="text-ocean-200 text-sm">
              Dive deep into oceanic terminology and marine science.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 space-y-2">
            <div className="text-4xl">🦐</div>
            <h3 className="text-lg font-semibold text-white">Seafood Puns</h3>
            <p className="text-ocean-200 text-sm">
              Delicious seafood facts and culinary knowledge for foodies.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 space-y-2">
            <div className="text-4xl">🏴‍☠️</div>
            <h3 className="text-lg font-semibold text-white">Pirate Speak</h3>
            <p className="text-ocean-200 text-sm">
              Arrr! Add some nautical nonsense to your placeholder text.
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-ocean-300 text-sm pt-8">
          <p>Made with love and lobster claws</p>
          <p className="mt-2">
            <a
              href="https://github.com/Pickle-Clawd/lobster-ipsum"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ocean-400 hover:text-ocean-300 transition-colors"
            >
              View on GitHub
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
