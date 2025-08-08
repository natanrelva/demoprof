import { motion } from 'framer-motion'
import { Button } from './components/atoms/Button'
import { MainHeader } from './components/atoms/Header'
import { MainFooter } from './components/atoms/Footer'

export default function Portfolio() {
  const username = "Natã Relva"
  
  return (
    <div className="bg-[#f4f1ee] min-h-screen text-[#2e2e2e] font-serif">
      <MainHeader 
        name={username} 
        description="Desenvolvedor Front-End & Criador de Experiências Digitais" 
      />
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
            <Button label="LinkedIn"></Button>
            <Button label="GitHub"></Button>
            <Button label="Email"></Button>
          </div>
        </section>
      </main>

      <MainFooter/>
    </div>
  )
}
