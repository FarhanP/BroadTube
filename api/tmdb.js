export const config = {
  runtime: "edge",
};

export default async function handler(req) {
  const TMDB_KEY = process.env.TMDB_API;

  if (!TMDB_KEY) {
    return new Response(JSON.stringify({ error: "TMDB key not set" }), {
      status: 500,
    });
  }

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_KEY}`
    );
    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to fetch TMDb" }), {
      status: 500,
    });
  }
}
