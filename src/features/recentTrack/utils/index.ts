export const formatTrack = (track: { name: string; artists: { name: string }[] }) => {
  return `${track.name}, ${track.artists[0].name}`;
};
