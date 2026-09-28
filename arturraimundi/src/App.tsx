import { useState } from 'react'
import './App.css'

// 2. Importe o componente Projects (ajuste o caminho se salvou em outra pasta)
import Header from './components/Header' 
import Projects from './components/Projects' 
import Experience from './components/Experience' 

function App() {
  return (
    <>
      <Header />
      <Projects />
      <Experience />
      <footer>
        <p>© 2026 - Todos os direitos reservados</p>
      </footer>
    </>
  )
}

export default App