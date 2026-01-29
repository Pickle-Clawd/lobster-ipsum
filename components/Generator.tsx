'use client';

import { useState, useCallback } from 'react';
import { Theme } from '@/lib/generator';

const themes: { id: Theme; emoji: string; label: string; color: string; activeColor: string; description: string }[] = [
  { id: 'lobster', emoji: '🦞', label: 'Lobster', color: 'from-lobster-500/20 to-lobster-700/20', activeColor: 'from-lobster-500 to-lobster-700', description: 'Crustacean facts' },
  { id: 'ocean', emoji: '🌊', label: 'Ocean', color: 'from-ocean-500/20 to-ocean-700/20', activeColor: 'from-ocean-500 to-ocean-700', description: 'Marine science' },
  { id: 'seafood', emoji: '🦐', label: 'Seafood', color: 'from-sand-400/20 to-lobster-600/20', activeColor: 'from-sand-400 to-lobster-600', description: 'Culinary delight' },
  { id: 'pirate', emoji: '🏴‍☠️', label: 'Pirate', color: 'from-ocean-600/20 to-ocean-900/20', activeColor: 'from-ocean-600 to-ocean-900', description: 'Nautical yarns' },
  { id: 'classic', emoji: '📜', label: 'Classic', color: 'from-stone-400/20 to-stone-600/20', activeColor: 'from-stone-400 to-stone-600', description: 'Lorem ipsum' },
];

export default function Generator() {
  const [paragraphs, setParagraphs] = useState(3);
  const [theme, setTheme] = useState<Theme>('lobster');
  const [generatedText, setGeneratedText] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleGenerate = useCallback(async () => {
    setLoading(true);
    setIsAnimating(true);
    try {
      const response = await fetch(`/api/generate?paragraphs=${paragraphs}&theme=${theme}`);
      const data = await response.json();
      setGeneratedText(data.text);
    } catch (error) {
      console.error('Error generating text:', error);
    } finally {
      setLoading(false);
      setTimeout(() => setIsAnimating(false), 300);
    }
  }, [paragraphs, theme]);

  const handleCopy = useCallback(async () => {
    if (generatedText) {
      await navigator.clipboard.writeText(generatedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [generatedText]);

  const selectedTheme = themes.find(t => t.id === theme);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* Main Control Panel */}
      <div className="glass rounded-3xl p-6 sm:p-8 space-y-8 shadow-2xl shadow-ocean-950/50">
        {/* Theme Selector */}
        <div className="space-y-4">
          <label className="flex items-center gap-2 text-sm font-medium text-ocean-200 uppercase tracking-wider">
            <span className="w-2 h-2 bg-lobster-500 rounded-full animate-pulse" />
            Choose Your Theme
          </label>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => setTheme(t.id)}
                className={`
                  group relative overflow-hidden rounded-xl p-4 sm:p-5
                  transition-all duration-300 ease-out
                  ${theme === t.id
                    ? `bg-gradient-to-br ${t.activeColor} shadow-lg shadow-${t.id === 'lobster' ? 'lobster' : 'ocean'}-500/30 scale-[1.02]`
                    : `bg-gradient-to-br ${t.color} hover:scale-[1.02]`
                  }
                  border ${theme === t.id ? 'border-white/30' : 'border-white/10 hover:border-white/20'}
                `}
              >
                {/* Shine effect on active */}
                {theme === t.id && (
                  <div className="absolute inset-0 animate-shimmer pointer-events-none" />
                )}

                <div className="relative flex flex-col items-center gap-2">
                  <span className={`text-3xl sm:text-4xl transition-transform duration-300 ${theme === t.id ? 'scale-110' : 'group-hover:scale-110'}`}>
                    {t.emoji}
                  </span>
                  <span className={`font-semibold text-sm sm:text-base ${theme === t.id ? 'text-white' : 'text-white/80'}`}>
                    {t.label}
                  </span>
                  <span className={`text-xs ${theme === t.id ? 'text-white/70' : 'text-white/50'} hidden sm:block`}>
                    {t.description}
                  </span>
                </div>

                {/* Active indicator */}
                {theme === t.id && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-white rounded-t-full" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Paragraph Slider */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm font-medium text-ocean-200 uppercase tracking-wider">
              <span className="w-2 h-2 bg-ocean-500 rounded-full animate-pulse" />
              Paragraphs
            </label>
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold text-gradient tabular-nums">{paragraphs}</span>
              <span className="text-ocean-400 text-sm">/ 10</span>
            </div>
          </div>

          <div className="relative py-2">
            <input
              type="range"
              min="1"
              max="10"
              value={paragraphs}
              onChange={(e) => setParagraphs(parseInt(e.target.value))}
              className="w-full h-2 rounded-lg cursor-pointer"
            />
            {/* Progress fill indicator */}
            <div
              className="absolute top-1/2 left-0 h-2 bg-gradient-to-r from-lobster-500 to-lobster-600 rounded-lg pointer-events-none -translate-y-1/2"
              style={{ width: `${((paragraphs - 1) / 9) * 100}%` }}
            />
          </div>

          {/* Quick select buttons */}
          <div className="flex items-center justify-center gap-2">
            {[1, 3, 5, 10].map((num) => (
              <button
                key={num}
                onClick={() => setParagraphs(num)}
                className={`
                  px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200
                  ${paragraphs === num
                    ? 'bg-ocean-600 text-white'
                    : 'bg-ocean-900/50 text-ocean-300 hover:bg-ocean-800/50'
                  }
                `}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        {/* Generate Button */}
        <button
          onClick={handleGenerate}
          disabled={loading}
          className={`
            relative w-full py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl
            transition-all duration-300 ease-out
            bg-gradient-to-r from-lobster-500 via-lobster-600 to-lobster-500
            background-size-200 hover:background-position-right
            text-white shadow-lg shadow-lobster-500/30
            hover:shadow-xl hover:shadow-lobster-500/40 hover:scale-[1.01]
            disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100
            overflow-hidden group
          `}
          style={{
            backgroundSize: '200% 100%',
          }}
        >
          {/* Animated background on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

          <span className="relative flex items-center justify-center gap-3">
            {loading ? (
              <>
                <span className="animate-spin text-2xl">🦞</span>
                <span>Generating...</span>
              </>
            ) : (
              <>
                <span className="text-2xl group-hover:animate-wave">🦞</span>
                <span>Generate Lobster Ipsum</span>
                <span className="text-2xl group-hover:animate-wave" style={{ animationDelay: '0.1s' }}>🦞</span>
              </>
            )}
          </span>
        </button>
      </div>

      {/* Generated Text Output */}
      {generatedText && (
        <div className={`glass rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl shadow-ocean-950/50 ${isAnimating ? 'animate-scale-in' : ''}`}>
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{selectedTheme?.emoji}</span>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Your {selectedTheme?.label} Text
                </h3>
                <p className="text-ocean-400 text-sm">
                  {paragraphs} paragraph{paragraphs > 1 ? 's' : ''} of deliciousness
                </p>
              </div>
            </div>

            <button
              onClick={handleCopy}
              className={`
                flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl
                font-medium text-sm transition-all duration-300
                ${copied
                  ? 'bg-foam-500 text-white'
                  : 'bg-ocean-700 text-white hover:bg-ocean-600'
                }
              `}
            >
              {copied ? (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>Copy All</span>
                </>
              )}
            </button>
          </div>

          {/* Text Content */}
          <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
            {generatedText.split('\n\n').map((paragraph, index) => (
              <p
                key={index}
                className="text-ocean-100 leading-relaxed text-base sm:text-lg animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Word count footer */}
          <div className="pt-4 border-t border-ocean-700/50 flex items-center justify-between text-sm text-ocean-400">
            <span>{generatedText.split(/\s+/).length} words</span>
            <span>{generatedText.length} characters</span>
          </div>
        </div>
      )}
    </div>
  );
}
