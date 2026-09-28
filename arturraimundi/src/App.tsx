import './App.css'

import Header from './components/Header'
import Projects from './components/Projects'
import Experience from './components/Experience'

function App() {
  return (
    <div className="app">

      <spline-viewer
        url="https://prod.spline.design/FVZWbQH2B6ndj9UU/scene.splinecode"
        events-target="global"
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