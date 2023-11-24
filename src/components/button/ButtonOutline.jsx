export default function ButtonOutline({ children, className }) {
  return (
    <button
      className={`border-[#FA4A0C] border text-[#FA4A0C] font-bold text-lg px-6 py-4 ${className}`}
    >
      {children}
    </button>
  );
}
