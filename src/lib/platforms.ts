export const SPOTIFY_URL =
  "https://open.spotify.com/show/033K5h0HiNPgNyijXum1YZ?si=dce4e86142164da7";
export const APPLE_URL = "https://podcasts.apple.com/ch/podcast/machs-eifach/id6788845027";
export const YOUTUBE_URL = "https://www.youtube.com/@MachsEifachCH";
export const INSTAGRAM_URL = "https://www.instagram.com/machs.eifach/";

export const platforms = [
  { label: "Spotify", href: SPOTIFY_URL },
  { label: "Apple Podcasts", href: APPLE_URL },
  { label: "YouTube", href: YOUTUBE_URL },
];

export function spotifyEmbedUrl(episodeUrl: string): string {
  const id = episodeUrl.split("/episode/")[1]?.split(/[?#]/)[0];
  return `https://open.spotify.com/embed/episode/${id}?utm_source=generator`;
}
