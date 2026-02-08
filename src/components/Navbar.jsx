import { Link, useLocation } from "react-router";

export const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="flex w-full max-w-4xl justify-between rounded-xl bg-zinc-800 px-6 py-3 shadow-md ring ring-zinc-700">
      <div className="text-xl text-purple-400">Alex Music</div>
      <div className="text-md flex gap-4 text-white">
        <Link
          className={`transition-all duration-200 hover:text-purple-300 active:scale-95 ${location.pathname === "/" ? "text-white" : "text-white/50"}`}
          to="/"
        >
          All Songs
        </Link>
        <Link
          className={`transition-all duration-200 hover:text-purple-300 active:scale-95 ${location.pathname === "/playlists" ? "text-white" : "text-white/50"}`}
          to="/playlists"
        >
          Playlists
        </Link>
      </div>
    </nav>
  );
};
