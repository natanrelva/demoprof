// Portfólio estilo "Art Deco" com visual sofisticado e profissional
// Stack: React + Tailwind + shadcn/ui + Framer Motion

import { motion } from 'framer-motion'
// import { Button } from '@/components/ui/button'

export default function Portfolio() {

  const username = "Natã Relva"
  
  return (
    <div className="bg-[#f4f1ee] min-h-screen text-[#2e2e2e] font-serif">
      {/* Header com tipografia art deco */}
      <header className="text-center py-16 border-b border-[#d1cfc8]">
        <h1 className="text-5xl tracking-[0.2em] uppercase">{username}</h1>
        <p className="mt-4 text-lg italic">Desenvolvedor Front-End & Criador de Experiências Digitais</p>
      </header>

      {/* Sessão de projetos */}
      <main className="max-w-5xl mx-auto py-16 px-6">
        <section className="mb-24">
          <h2 className="text-3xl mb-8 uppercase border-b pb-2 border-[#d1cfc8]">Projetos</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[1, 2].map((id) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="border border-[#c1beba] p-6 rounded-xl shadow-md bg-white"
              >
                <h3 className="text-2xl mb-2 font-bold">Projeto {id}</h3>
                <p className="text-sm mb-4">Descrição breve do projeto {id} com foco em design e funcionalidade.</p>
                <a
                  href="#"
                  className="text-[#3a3a3a] underline hover:text-black transition"
                >
                  Ver no GitHub
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Sessão de contato */}
        <section className="text-center">
          <h2 className="text-3xl mb-6 uppercase border-b pb-2 border-[#d1cfc8]">Contato</h2>
          <p className="mb-6 text-lg">Entre em contato através do e-mail ou redes sociais:</p>
          <div className="flex justify-center gap-6">
            {/* <Button variant="outline">LinkedIn</Button>
            <Button variant="outline">GitHub</Button>
            <Button variant="outline">Email</Button> */}
          </div>
        </section>
      </main>

      <footer className="text-center py-10 border-t border-[#d1cfc8] text-sm">
        <p>&copy; 2025 - Desenvolvido por Seu Nome</p>
      </footer>
    </div>
  )
}
