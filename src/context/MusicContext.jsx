import { createContext, useContext, useState } from "react";

const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const songs = [
    {
      id: 1,
      title: "willow",
      artist: "Taylor Swift",
      url: "/songs/willow.mp3",
      image: "/images/evermore.jpeg",
    },
    {
      id: 2,
      title: "champagne problems",
      artist: "Taylor Swift",
      url: "/songs/champagne%20problems.mp3",
      image: "/images/evermore.jpeg",
    },
    {
      id: 3,
      title: "ivy",
      artist: "Taylor Swift",
      url: "/songs/ivy.mp3",
      image: "/images/evermore.jpeg",
    },
    {
      id: 4,
      title: "evermore",
      artist: "Taylor Swift",
      url: "/songs/evermore.mp3",
      image: "/images/evermore.jpeg",
    },
    {
      id: 5,
      title: "happiness",
      artist: "Taylor Swift",
      url: "/songs/happiness.mp3",
      image: "/images/evermore.jpeg",
    },
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentSong = songs[currentSongIndex];

  const formatTime = (time) => {
    if (isNaN(time) || !time) return "0:00";

    const minutes = Math.floor(time / 60); // time data come in seconds
    const seconds = Math.floor(time % 60);
    return `${minutes}:${String(seconds).padStart(2, "0")}`;
  };

  const nextSong = () =>
    setCurrentSongIndex((prev) => (prev + 1) % songs.length);

  const lastSong = () =>
    setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);

  return (
    <MusicContext.Provider
      value={{
        allSongs: songs,
        setCurrentSongIndex,
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
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => useContext(MusicContext);
