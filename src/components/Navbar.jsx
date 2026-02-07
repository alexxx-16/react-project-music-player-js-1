export const Navbar = () => {
  return (
    <nav className="flex w-full max-w-4xl justify-between rounded-xl bg-zinc-700 px-6 py-2 shadow-md">
      <div className="text-xl text-purple-400">Alex Music</div>
      <div className="text-md flex gap-4 text-white">
        <button className="transition-all duration-200 hover:text-purple-300">
          All Songs
        </button>
        <button className="transition-all duration-200 hover:text-purple-300">
          Playlists
        </button>
      </div>
    </nav>
  );
};
