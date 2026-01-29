import { vocabulary } from './sentences';

export type Theme = 'lobster' | 'ocean' | 'seafood' | 'pirate' | 'classic';

// Shuffle array using Fisher-Yates algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Generate a pseudo-sentence of random words (gibberish)
function generateGibberishSentence(words: string[], minWords: number, maxWords: number): string {
  const wordCount = Math.floor(Math.random() * (maxWords - minWords + 1)) + minWords;
  const selectedWords: string[] = [];

  for (let i = 0; i < wordCount; i++) {
    const randomIndex = Math.floor(Math.random() * words.length);
    selectedWords.push(words[randomIndex]);
  }

  // Capitalize first word
  if (selectedWords.length > 0) {
    selectedWords[0] = selectedWords[0].charAt(0).toUpperCase() + selectedWords[0].slice(1);
  }

  return selectedWords.join(' ') + '.';
}

export function generateLobsterIpsum(paragraphs: number, theme: Theme): string {
  const words = vocabulary[theme];
  const result: string[] = [];

  for (let i = 0; i < paragraphs; i++) {
    const sentencesInParagraph = Math.floor(Math.random() * 4) + 4; // 4-7 sentences per paragraph
    const paragraph: string[] = [];

    for (let j = 0; j < sentencesInParagraph; j++) {
      // Generate sentences with 5-12 random words each
      paragraph.push(generateGibberishSentence(words, 5, 12));
    }

    result.push(paragraph.join(' '));
  }

  return result.join('\n\n');
}
