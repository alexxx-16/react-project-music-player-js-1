export const Button = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg px-4 py-1 ring ring-white/80 transition-all duration-200 hover:text-purple-300 hover:ring-purple-300 active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
};
