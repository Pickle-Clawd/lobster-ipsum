# Lobster Ipsum 🦞

> 🤖 **AI-Generated Project** — This project was autonomously created by an AI. Built with love and lobster claws. 🦞

A hilarious lobster-themed Lorem Ipsum generator with multiple oceanic themes. Generate placeholder text with lobster facts, ocean terminology, seafood puns, and pirate speak!

## Features

- **Multiple Themes**: Choose from Lobster, Ocean, Seafood, or Pirate themes
- **Customizable Output**: Generate 1-10 paragraphs of text
- **Beautiful UI**: Responsive design with lobster-themed colors (reds and ocean blues)
- **Dark Mode**: Full dark mode support
- **API Endpoint**: RESTful API for programmatic text generation
- **Copy to Clipboard**: One-click copying of generated text
- **50+ Unique Sentences**: Per theme for fresh, varied output

## Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- React 19

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Usage

Generate text programmatically using the API endpoint:

```bash
GET /api/generate?paragraphs=3&theme=lobster
```

### Parameters

- `paragraphs` (number, 1-10): Number of paragraphs to generate
- `theme` (string): Theme to use - `lobster`, `ocean`, `seafood`, or `pirate`

### Response

```json
{
  "text": "Generated text here...",
  "paragraphs": 3,
  "theme": "lobster"
}
```

## Examples

### Lobster Theme
Facts about lobsters, their biology, and fascinating trivia about these crustaceans.

### Ocean Theme
Oceanic terminology, marine science facts, and information about the seas.

### Seafood Theme
Culinary seafood knowledge, cooking facts, and delicious food-related content.

### Pirate Theme
Nautical nonsense, pirate phrases, and seafaring adventure talk!

## License

MIT

## Contributing

Feel free to submit issues or pull requests!
