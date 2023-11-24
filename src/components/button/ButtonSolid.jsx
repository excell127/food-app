export default function ButtonSolid({ children, className }) {
  return (
    <button
      className={`bg-[#FA4A0C] text-white font-bold text-lg px-6 py-4 shadow-lg border-[#FA4A0C] border ${className}`}
    >
      {children}
    </button>
  );
}
