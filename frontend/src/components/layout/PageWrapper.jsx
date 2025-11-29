export default function PageWrapper({ children }) {
  return (
    <div className="pt-24 max-w-6xl mx-auto px-6 animate-fadeIn">
      {children}
    </div>
  );
}
