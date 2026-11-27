import profileImg from '../assets/profile.jpg'

const stack = ['PHP', 'SQL', 'Java', 'React', 'Power BI']

export default function Header() {
  return (
    <header id="top" className="hero">
      <spline-viewer
        url="https://prod.spline.design/fJ2ptJKzT-sDkpfO/scene.splinecode"
        background="#FAF9F5"
        events-target="global"
        className="hero-3d"
      />
      <div className="hero-veil" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-text">
          <img src={profileImg} alt="Artur Raimundi" className="hero-avatar" />

          <p className="eyebrow">Backend & Data Developer</p>

          <h1>
            Olá, eu sou <em>Artur</em>.
          </h1>

          <p className="hero-lead">
            Desenvolvedor focado em integração de dados, SQL e PHP.
            Estudante de Ciência da Computação.
          </p>

          <ul className="chips" aria-label="Tecnologias">
            {stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">Ver projetos</a>
            <a href="#experience" className="btn btn-ghost">Experiência</a>
          </div>
        </div>
      </div>
    </header>
  )
}
