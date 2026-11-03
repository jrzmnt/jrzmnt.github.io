import { useEffect, useState } from 'react'
import { HashRouter, NavLink, Route, Routes } from 'react-router-dom'
import { MotionConfig, motion, useScroll, useSpring } from 'framer-motion'
import { perfil } from './data/site.js'
import { IdiomaProvider, useIdioma } from './i18n.jsx'
import SeletorIdioma from './components/SeletorIdioma.jsx'
import Home from './pages/Home.jsx'
import Pesquisas from './pages/Pesquisas.jsx'
import Pesquisa from './pages/Pesquisa.jsx'
import Curriculo from './pages/Curriculo.jsx'

const navItems = [
  { to: '/', chave: 'inicio', end: true },
  { to: '/pesquisas', chave: 'pesquisas' },
  { to: '/curriculo', chave: 'curriculo' },
]

const anoAtual = new Date().getFullYear()

// Linha no topo que mostra quanto da página já foi lida.
function BarraProgresso() {
  const { scrollYProgress } = useScroll()
  const escala = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX: escala }}
      className="no-print fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-neutral-400 via-neutral-900 to-neutral-400 dark:from-neutral-600 dark:via-neutral-100 dark:to-neutral-600"
    />
  )
}

function BotaoTema() {
  const { t } = useIdioma()
  const [escuro, setEscuro] = useState(() => {
    try {
      return localStorage.getItem('tema') === 'escuro'
    } catch {
      return false
    }
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', escuro)
    try {
      localStorage.setItem('tema', escuro ? 'escuro' : 'claro')
    } catch {
      // Sem armazenamento disponível, o tema vale só nesta visita.
    }
  }, [escuro])

  return (
    <button
      onClick={() => setEscuro((v) => !v)}
      aria-label={escuro ? t('ativarTemaClaro') : t('ativarTemaEscuro')}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition hover:scale-105 hover:border-neutral-900 hover:text-neutral-900 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-neutral-300 dark:hover:text-neutral-100"
    >
      {escuro ? (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      )}
    </button>
  )
}

function Layout() {
  const { t } = useIdioma()

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-neutral-50 text-neutral-900 antialiased transition-colors duration-500 dark:bg-neutral-950 dark:text-neutral-100">
      <div aria-hidden="true" className="no-print pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="manchas absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-indigo-300/40 blur-3xl dark:bg-indigo-700/20" />
        <div className="manchas absolute -right-40 top-1/3 h-[32rem] w-[32rem] rounded-full bg-fuchsia-300/30 blur-3xl [animation-delay:-7s] dark:bg-fuchsia-800/20" />
        <div className="manchas absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-sky-300/30 blur-3xl [animation-delay:-13s] dark:bg-sky-800/20" />
      </div>

      <BarraProgresso />

      <header className="no-print fixed inset-x-0 top-0 z-50 border-b border-neutral-200/70 bg-white/70 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/70">
        <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3">
          <NavLink to="/" className="font-semibold tracking-tight">
            {perfil.nome}
          </NavLink>
          <div className="flex items-center gap-3 sm:gap-5">
            <ul className="flex gap-3 text-sm sm:gap-5">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) =>
                      `relative py-1 transition after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-neutral-900 after:transition-transform dark:after:bg-neutral-100 ${
                        isActive
                          ? 'font-medium text-neutral-900 after:scale-x-100 dark:text-neutral-100'
                          : 'text-neutral-500 after:scale-x-0 hover:text-neutral-900 hover:after:scale-x-100 dark:text-neutral-400 dark:hover:text-neutral-100'
                      }`
                    }
                  >
                    {t(item.chave)}
                  </NavLink>
                </li>
              ))}
            </ul>
            <SeletorIdioma />
            <BotaoTema />
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-5 pb-24 pt-28">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pesquisas" element={<Pesquisas />} />
          <Route path="/pesquisas/:slug" element={<Pesquisa />} />
          <Route path="/curriculo" element={<Curriculo />} />
        </Routes>
      </main>

      <footer className="no-print border-t border-neutral-200 py-8 text-center text-sm text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
        <p>
          {t('copyright')} {anoAtual} {perfil.nome}
        </p>
      </footer>
    </div>
  )
}

function App() {
  return (
    <IdiomaProvider>
      <MotionConfig reducedMotion="user">
        <HashRouter>
          <Layout />
        </HashRouter>
      </MotionConfig>
    </IdiomaProvider>
  )
}

export default App
