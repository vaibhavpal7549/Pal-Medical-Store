import { NextResponse } from 'next/server';

export async function GET() {
  const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!placeId || !apiKey) {
    return NextResponse.json(
      { error: 'Missing NEXT_PUBLIC_GOOGLE_PLACE_ID or GOOGLE_PLACES_API_KEY environment variables.' },
      { status: 500 }
    );
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${apiKey}`;
    const response = await fetch(url, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });
    
    const data = await response.json();

    if (data.status === 'OK') {
      const reviews = data.result.reviews || [];
      return NextResponse.json(reviews);
    } else {
      console.error('Google Places API Error:', data.error_message || data.status);
      return NextResponse.json(
        { error: data.error_message || 'Failed to fetch reviews from Google API' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
