import { useMusic } from "../context/MusicContext";

export const AllSongs = () => {
  const { allSongs, currentSong, setCurrentSongIndex, setIsPlaying } =
    useMusic();

  return (
    <div className="rounded-xl bg-zinc-800 px-4 py-8">
      <h2 className="mb-4 text-center">All Songs ({allSongs.length})</h2>
      <div className="flex flex-col gap-4">
        {allSongs.map((song, index) => (
          <div
            key={song.id}
            onClick={() => {
              setCurrentSongIndex(index);
              setIsPlaying(true);
            }}
            className={`rounded-xl ${currentSong.id === song.id ? "bg-purple-400/40 ring ring-purple-400 hover:bg-purple-400/60" : "bg-zinc-700 hover:bg-zinc-600"} px-4 py-3 transition-all duration-200 active:scale-98`}
          >
            <div className="mb-2 text-lg">{song.title}</div>
            <div className="flex justify-between text-sm font-extralight">
              <p>{song.artist}</p>
              <p>{song.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
