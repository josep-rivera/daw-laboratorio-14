export default function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 active:scale-95 transition text-white shadow ${className}`}
    >
      {children}
    </button>
  );
}
