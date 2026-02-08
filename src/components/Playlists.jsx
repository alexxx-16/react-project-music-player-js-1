import { useState } from "react";
import { useMusic } from "../context/MusicContext";
import { Button } from "./Button";

export const Playlists = () => {
  const [newPlaylistName, setNewPlaylistName] = useState("");
  const { createPlaylist, playlists } = useMusic();

  const handleCreatePlaylist = () => {
    if (newPlaylistName.trim()) {
      createPlaylist(newPlaylistName.trim());
      setNewPlaylistName("");
    }
  };

  return (
    <div className="flex w-full max-w-xl flex-col justify-center gap-4 rounded-xl bg-zinc-800 p-4 ring ring-zinc-700">
      <h2 className="text-center text-xl">Playlists</h2>
      <div className="flex flex-col gap-4 rounded-xl bg-zinc-700 p-4 ring ring-zinc-600">
        <h3>Create a new playlist</h3>
        <div className="flex items-center justify-between gap-4">
          <input
            type="text"
            placeholder="Playlist Name"
            className="flex-3 rounded-lg px-3 py-1 ring ring-white/80 outline-none focus:ring-purple-300"
            onChange={(e) => setNewPlaylistName(e.target.value)}
            value={newPlaylistName}
          />
          <Button
            onClick={handleCreatePlaylist}
            className="w-fit flex-1 self-center"
          >
            Create
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 rounded-xl bg-zinc-700 p-4 ring ring-zinc-600">
        {playlists.length === 0 ? (
          <p className="text-white/50">No playlists yet.</p>
        ) : (
          playlists.map((playlist) => (
            <div className="flex items-center justify-between">
              <div className="flex-1 text-xl" key={playlist.id}>
                {playlist.name}
              </div>
              <div className="flex w-full flex-1 justify-end gap-4 font-extralight">
                <Button>Delete</Button>
              </div>
            </div>
          ))
        )}{" "}
        <input
          type="text"
          placeholder="Search songs to add..."
          className="rounded-lg px-3 py-2 ring ring-white/80 outline-none focus:ring-purple-300"
        />
      </div>
    </div>
  );
};
