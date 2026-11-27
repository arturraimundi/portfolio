import { useEffect } from 'react'
import './App.css'

import Header from './components/Header'
import Projects from './components/Projects'
import Experience from './components/Experience'
import { useMouseEffects } from './useMouseEffects'

function App() {
  useMouseEffects()

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('.reveal')

    if (!('IntersectionObserver' in window)) {
      sections.forEach((section) => section.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          currentObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <div className="cursor-glow" aria-hidden="true" />

      <nav className="nav">
        <a href="#top" className="nav-brand">Artur Raimundi</a>
        <div className="nav-links">
          <a href="#projects">Projetos</a>
          <a href="#experience">Experiência</a>
          <a
            href="https://github.com/arturraimundi"
            target="_blank"
            rel="noreferrer"
            className="nav-cta"
          >
            GitHub
          </a>
        </div>
      </nav>

      <Header />

      <main className="content">
        <Projects />
        <Experience />
      </main>

      <footer className="footer">
        <p>© 2026 Artur Raimundi</p>
        <a href="#top">Voltar ao topo ↑</a>
      </footer>
    </div>
  )
}

export default App
