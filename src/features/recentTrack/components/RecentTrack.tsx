import spotifyMark from '@/assets/spotify-mark.svg';
import { useToken } from '../api/getToken';
import { useTracks } from '../api/getTracks';
import { useRecentTracks } from '../api/getRecentTracks';

export const RecentTrack = () => {
  const token = useToken({});
  const recentTracks = useRecentTracks({});

  const access_token = token.data?.access_token;
  const recentTrack = recentTracks.data?.recenttracks.track[0];

  const tracks = useTracks({
    access_token: access_token ?? '',
    artist: recentTrack?.artist['#text'] ?? '',
    config: {
      enabled: !!access_token && !!recentTrack?.artist['#text'] && !!recentTrack?.name,
    },
    track: recentTrack?.name ?? '',
  });

  const track = tracks.data?.tracks.items[0];

  if (tracks.isLoading || track === undefined) {
    return (
      <div role="status" className="inline-flex gap-2 items-center max-w-sm animate-pulse">
        <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-6"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-48"></div>
      </div>
    );
  }

  // Fallback
  if (track === undefined) {
    return (
      <div className="inline-flex gap-2">
        <img src={spotifyMark} alt="Spotify logo" className="h-6 w-6 dark:invert" />
        <a
          href="https://open.spotify.com/track/1nM9Jgm0oInPG0yKtcEQD0?si=a901014dfe37479a"
          target="_blank"
        >
          Baths - Sunspell
        </a>
      </div>
    );
  }

  return (
    <div className="inline-flex gap-2 items-center">
      <img src={spotifyMark} alt="Spotify logo" className="h-6 w-6" />
      <a href={track.uri} target="_blank">
        {track.name}, {track.artists[0].name}
      </a>
    </div>
  );
};
