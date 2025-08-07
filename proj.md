# Projeto de Portfólio Elegante com Vite + Vercel

## Visão Geral
Vou criar um projeto de portfólio moderno, elegante e altamente performático usando:
- **Vite** (React + TypeScript) para desenvolvimento ultrarrápido
- **Tailwind CSS** com plugins para estilos avançados
- **Framer Motion** para animações suaves
- **Three.js** para elementos 3D interativos
- **Vercel** para deploy instantâneo com otimizações automáticas

## Estrutura do Projeto

```
src/
├── assets/
│   └── fonts/              # Fontes personalizadas
│   └── images/             # Imagens otimizadas
├── components/
│   ├── ui/                 # Componentes de UI reutilizáveis
│   ├── sections/           # Seções do portfólio
│   └── layout/             # Componentes de layout
├── hooks/                  # Hooks personalizados
├── lib/                    # Utilitários e configurações
├── styles/                 # Estilos globais
├── App.tsx
└── main.tsx
```

## Tecnologias Principais

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.3",
    "framer-motion": "^10.16.4",
    "three": "^0.164.1",
    "@react-three/fiber": "^8.15.27",
    "@react-three/drei": "^9.114.3",
    "tailwindcss": "^3.3.0",
    "@tailwindcss/typography": "^0.5.10",
    "lucide-react": "^0.294.0"
  },
  "devDependencies": {
    "@types/three": "^0.164.1",
    "@vitejs/plugin-react": "^4.2.1",
    "vite": "^4.4.5",
    "vite-plugin-svgr": "^2.4.0"
  }
}
```

## Design Elegante & Recursos

### 1. Sistema Visual
- **Paleta de Cores**:
  ```json
  {
    "primary": "#6366F1",      // Índigo vibrante
    "secondary": "#10B981",    // Esmeralda
    "dark": "#0F172A",         // Azul profundo
    "light": "#F8FAFC",        // Branco suave
    "accent": "#F59E0B"        // Âmbar
  }
  ```
  
- **Tipografia**:
  - `font-sans`: "Inter" (moderna e legível)
  - `font-mono`: "JetBrains Mono" (para snippets de código)

### 2. Componentes Chave

**Hero Section Interativa** (`src/components/sections/Hero.tsx`):
```tsx
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

const Hero = () => (
  <section className="min-h-screen relative overflow-hidden">
    <div className="absolute inset-0 z-0">
      <Canvas>
        <OrbitControls enableZoom={false} />
        <Stars radius={100} depth={50} count={5000} factor={4} />
      </Canvas>
    </div>
    
    <motion.div 
      className="relative z-10 container mx-auto px-4 py-32"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
        Transformo <span className="text-indigo-400">ideias</span> em 
        <br /><span className="text-emerald-400">experiências digitais</span>
      </h1>
      <p className="text-xl text-slate-300 max-w-2xl mb-8">
        Desenvolvedor full-stack especializado em criar soluções elegantes 
        e performáticas com tecnologias modernas.
      </p>
      
      <motion.div 
        className="flex gap-4"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium">
          Ver Projetos
        </button>
        <button className="bg-transparent border-2 border-indigo-600 text-indigo-400 hover:bg-indigo-950/30 px-6 py-3 rounded-lg font-medium">
          Contato
        </button>
      </motion.div>
    </motion.div>
  </section>
);
```

### 3. Animações e Transições
```tsx
// src/components/ui/AnimatedCard.tsx
import { motion } from 'framer-motion';

const AnimatedCard = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    whileHover={{ 
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
    }}
    transition={{ 
      type: "spring", 
      stiffness: 300,
      damping: 15
    }}
    className="bg-white/5 backdrop-blur-lg border border-slate-800 rounded-xl p-6"
  >
    {children}
  </motion.div>
);
```

### 4. Seção de Projetos 3D
```tsx
// src/components/sections/Projects.tsx
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { OrbitControls } from '@react-three/drei';

const ProjectCube = ({ color, position }) => {
  const meshRef = useRef();
  
  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color={color} metalness={0.5} roughness={0.2} />
    </mesh>
  );
};

const ProjectsSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-16">Projetos Destacados</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="h-96">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <ProjectCube color="#6366F1" position={[0, 0, 0]} />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
        
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-4">Sistema de E-commerce Multicanal</h3>
          <p className="text-slate-400 mb-6">
            Plataforma completa com integração de WhatsApp/Telegram, agentes IA 
            e arquitetura baseada em grafos.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-indigo-900/50 text-indigo-300 px-3 py-1 rounded-full text-sm">React</span>
            <span className="bg-emerald-900/50 text-emerald-300 px-3 py-1 rounded-full text-sm">Node.js</span>
            <span className="bg-amber-900/50 text-amber-300 px-3 py-1 rounded-full text-sm">Neo4j</span>
            <span className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full text-sm">LangChain</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);
```

## Configurações Essenciais

### 1. `vite.config.ts`
```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    svgr({ 
      svgrOptions: {
        icon: true,
      }
    })
  ],
  build: {
    chunkSizeWarningLimit: 1600,
  },
});
```

### 2. `tailwind.config.js`
```js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366F1',
        secondary: '#10B981',
        dark: '#0F172A',
        light: '#F8FAFC',
        accent: '#F59E0B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
```

### 3. Deploy na Vercel

1. Crie um repositório no GitHub
2. Conecte à Vercel:
   ```bash
   npm install -g vercel
   vercel login
   vercel init
   ```
3. Configure as opções:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Development Command: `vite dev --port $PORT`

4. Adicione variáveis de ambiente (se necessário)

**Vantagens do Deploy na Vercel:**
- Edge Functions para lógica de backend
- Otimização automática de imagens
- CDN global com cache inteligente
- Preview de branches para testes
- Analytics integrados

## Recursos Avançados

### 1. Modo Escuro Inteligente
```tsx
// src/hooks/useDarkMode.ts
import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [isDark, setIsDark] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mediaQuery.addEventListener('change', handler);
    
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);
  
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);
  
  return [isDark, setIsDark] as const;
};
```

### 2. Animação de Scroll Suave
```tsx
// src/components/ui/SmoothScroll.tsx
import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const SmoothScroll = ({ children }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-2 bg-indigo-600 origin-left z-50" 
        style={{ scaleX }} 
      />
      {children}
    </>
  );
};
```

## Estrutura Final de Páginas

```
/
├── /#home          → Hero com efeito de partículas
├── /#about         → Biografia com timeline animada
├── /#skills        → Habilidades com gráficos interativos
├── /#projects      → Projetos com visualização 3D
├── /#experience    → Experiência profissional com cards
└── /#contact       → Formulário elegante com validação
```

## Performance Otimizada

1. **Divisão de Código Automática**: Vite divide automaticamente os chunks
2. **Pré-carregamento**: Recursos críticos carregados primeiro
3. **Compressão**: Assets otimizados durante o build
4. **Cache Eficiente**: Headers HTTP configurados pela Vercel
5. **Lazy Loading**: Componentes 3D carregados sob demanda

```bash
npm run build
```

Resultado esperado:
- Lighthouse Performance: 98+
- Tamanho total do bundle: < 200KB
- Carregamento inicial: < 1s

Este projeto oferece uma base sólida para um portfólio impressionante que demonstra habilidades técnicas avançadas enquanto mantém uma experiência de usuário elegante e performática.