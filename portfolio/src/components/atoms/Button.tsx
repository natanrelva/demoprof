export function Button({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      className="px-4 py-2 border rounded uppercase tracking-wide hover:bg-gray-200 transition"
      onClick={onClick}
    >
      {label}
    </button>
  )
}
