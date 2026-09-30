import { useEffect } from 'react'
import './App.css'

import Header from './components/Header'
import Projects from './components/Projects'
import Experience from './components/Experience'

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('.content > section')

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
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })

    sections.forEach((section) => {
      section.classList.add('reveal-section')
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">

      <spline-viewer
        url="https://prod.spline.design/fJ2ptJKzT-sDkpfO/scene.splinecode"
        background="rgba(218,81,221,0.2)"
        className="spline-background"
      />


      <div className="content">

        <Header />
        <Projects />
        <Experience />

        <footer>
          <p>© 2026 - Todos os direitos reservados</p>
        </footer>
      </div>

    </div>
  )
}

export default App