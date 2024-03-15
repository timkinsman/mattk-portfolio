export const formatTrack = (track: { name: string; artists: { name: string }[] }) => {
  return `${track.name} by ${track.artists[0].name}`;
};
