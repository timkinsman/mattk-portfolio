import spotifyMark from '@/assets/spotify-mark.svg';
import { useToken } from '../api/getToken';
import { useTracks } from '../api/getTracks';
import { useRecentTracks } from '../api/getRecentTracks';
import { formatTrack } from '../utils';

// todo: get this from matt
const fallbackTrack = {
  artists: [{ name: 'Baths' }],
  name: 'Sunspell',
  uri: 'https://open.spotify.com/track/1nM9Jgm0oInPG0yKtcEQD0?si=a901014dfe37479a',
};

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

  if (token.isLoading || recentTracks.isLoading || tracks.isLoading) {
    return (
      <div role="status" className="inline-flex gap-2 items-center max-w-sm animate-pulse">
        <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-6"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-48"></div>
      </div>
    );
  }

  if (!token.data || !recentTracks.data || !tracks.data) return null;

  return (
    <div className="inline-flex gap-4 items-center ">
      <span className="relative">
        <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-[#1DB954] opacity-75"></span>
        <img src={spotifyMark} alt="Spotify logo" className="h-6 w-6" />
      </span>

      <a href={(track ?? fallbackTrack).uri} target="_blank">
        {formatTrack(track ?? fallbackTrack)}
      </a>
    </div>
  );
};
