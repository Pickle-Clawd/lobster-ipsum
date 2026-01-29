import { sentences } from './sentences';

export type Theme = 'lobster' | 'ocean' | 'seafood' | 'pirate';

export function generateLobsterIpsum(paragraphs: number, theme: Theme): string {
  const themeSentences = sentences[theme];
  const result: string[] = [];

  for (let i = 0; i < paragraphs; i++) {
    const sentencesInParagraph = Math.floor(Math.random() * 4) + 4; // 4-7 sentences per paragraph
    const paragraph: string[] = [];

    for (let j = 0; j < sentencesInParagraph; j++) {
      const randomIndex = Math.floor(Math.random() * themeSentences.length);
      paragraph.push(themeSentences[randomIndex]);
    }

    result.push(paragraph.join(' '));
  }

  return result.join('\n\n');
}
