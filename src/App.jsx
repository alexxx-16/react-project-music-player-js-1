import { AllSongs } from "./components/Allsongs";
import { MusicPlayer } from "./components/MusicPlayer";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router";
import { Playlists } from "./components/Playlists";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col items-center gap-4 bg-zinc-900 p-6">
        <Navbar />

        <main className="flex w-full max-w-4xl justify-between gap-4 text-white">
          <div className="flex-1">
            <MusicPlayer />
          </div>

          <div className="flex-1">
            <Routes>
              <Route path="/" element={<AllSongs />} />
              <Route path="/playlists" element={<Playlists />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
