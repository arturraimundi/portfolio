import { useState } from 'react'
import './App.css'
// 1. Corrigido: Importe a imagem como uma variável se for usá-la depois
import profileImg from './assets/profile.jpg' 

// 2. Importe o componente Projects (ajuste o caminho se salvou em outra pasta)
import Projects from './components/Projects' 

function App() {
  return (
    <>
      <section id="Introduction">
        <div> 
          <img src={profileImg} alt="Artur Raimundi" /> 
          <h1>Artur Raimundi</h1>
          <p>
             Backend & Data Developer | Data Integration, SQL, PHP | @ComputerScience
          </p>
        </div>
      </section>
      <Projects />
      <footer>
        <p>© 2026 - Todos os direitos reservados</p>
      </footer>
    </>
  )
}

export default App