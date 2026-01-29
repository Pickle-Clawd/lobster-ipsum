import { NextRequest, NextResponse } from 'next/server';
import { generateLobsterIpsum, Theme } from '@/lib/generator';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const paragraphs = parseInt(searchParams.get('paragraphs') || '3');
  const theme = (searchParams.get('theme') || 'lobster') as Theme;

  // Validate paragraphs
  if (isNaN(paragraphs) || paragraphs < 1 || paragraphs > 10) {
    return NextResponse.json(
      { error: 'Paragraphs must be between 1 and 10' },
      { status: 400 }
    );
  }

  // Validate theme
  const validThemes: Theme[] = ['lobster', 'ocean', 'seafood', 'pirate', 'classic'];
  if (!validThemes.includes(theme)) {
    return NextResponse.json(
      { error: 'Theme must be one of: lobster, ocean, seafood, pirate, classic' },
      { status: 400 }
    );
  }

  const text = generateLobsterIpsum(paragraphs, theme);

  return NextResponse.json({
    text,
    paragraphs,
    theme,
  });
}
