function Button({ children }) {
  return (
    <button className="rounded-full bg-indigo-600 px-6 py-3 text-white font-medium transition-all duration-300 hover:bg-indigo-500 hover:scale-105">
      {children}
    </button>
  );
}

export default Button;
