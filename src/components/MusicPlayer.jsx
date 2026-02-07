import { useEffect, useRef } from "react";
import { useMusic } from "../context/MusicContext";

export const MusicPlayer = () => {
  const {
    currentSong,
    currentTime,
    setCurrentTime,
    duration,
    setDuration,
    formatTime,
    isPlaying,
    setIsPlaying,
    lastSong,
    nextSong,
  } = useMusic();

  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (isPlaying) audio.play();
    else audio.pause();
  }, [isPlaying, currentSong]);

  useEffect(() => {
    const audio = audioRef.current;

    const handleMetadata = () => {
      setDuration(audio.duration);
    };
    const handleTime = () => {
      setCurrentTime(audio.currentTime);
    };
    const handleEnded = () => nextSong();

    audio.addEventListener("loadedmetadata", handleMetadata);
    audio.addEventListener("timeupdate", handleTime);
    audio.addEventListener("ended", handleEnded);

    if (audio.readyState >= 1) handleMetadata;

    return () => {
      audio.removeEventListener("loadedmetadata", handleMetadata);
      audio.removeEventListener("timeupdate", handleTime);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentSong]);

  return (
    <div className="flex flex-col items-center gap-4 rounded-xl bg-zinc-800 px-4 py-8">
      <audio ref={audioRef} src={currentSong.url} />
      <div className="h-64 w-64">
        <img
          src={currentSong.image}
          alt={currentSong.title}
          className="h-full w-full rounded-xl object-cover shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(192,132,252,0.5)]"
        />
      </div>

      <h3 className="text-2xl">{currentSong.title}</h3>
      <p className="text-sm font-extralight">{currentSong.artist}</p>

      <div className="flex w-full justify-between gap-4">
        <span>{formatTime(currentTime)}</span>
        <input
          type="range"
          min="0"
          max={duration || 0}
          step="0.1"
          value={currentTime || 0}
          onChange={(e) => {
            const time = Number(e.target.value);
            audioRef.current.currentTime = time;
            setCurrentTime(time);
          }}
          className="flex-1 accent-purple-400 outline-none"
        />
        <span>{formatTime(duration)}</span>
      </div>
      <div className="flex w-full justify-evenly">
        <button onClick={lastSong}>last</button>
        <button onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? <span>pause</span> : <span>play</span>}
        </button>
        <button onClick={nextSong}>next</button>
      </div>
    </div>
  );
};
