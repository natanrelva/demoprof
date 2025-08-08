
export const MainHeader = ({ name, description }: { name: string, description: string }) => {
  return (
    <header className="text-center py-16 border-b border-[#d1cfc8]">
      <h1 className="text-5xl tracking-[0.2em] uppercase">{name}</h1>
      <p className="mt-4 text-lg italic">{description}</p>
    </header>
  )
}