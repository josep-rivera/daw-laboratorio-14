export default function Card({ children }) {
  return (
    <div className="bg-gray-900 border border-gray-800 p-4 rounded-lg shadow">
      {children}
    </div>
  );
}
