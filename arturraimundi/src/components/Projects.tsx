const repositories = [
  {
    id: 1,
    name: 'gumpchess',
    description: 'Jogo de xadrez no navegador.',
    area: 'Frontend',
    tags: ['JavaScript'],
  },
  {
    id: 2,
    name: 'GerenciamentoDePortfolio-Spring',
    description:
      'Sistema de gerenciamento de portfólio de projetos desenvolvido com Spring Boot, oferecendo uma API REST para gestão de projetos e membros de equipe.',
    area: 'Backend',
    tags: ['Java', 'Spring Boot', 'MySQL'],
  },
  {
    id: 3,
    name: 'Trashealth',
    description:
      'Conecta usuários e empresas com informações sobre pontos de coleta de lixo eletrônico, estimulando práticas sustentáveis e o reaproveitamento de materiais.',
    area: 'Fullstack',
    tags: ['Django', 'PostgreSQL'],
  },
  {
    id: 4,
    name: 'weatherApp',
    description:
      'Website de previsão do tempo que consome a WeatherAPI para exibir dados em tempo real com base na cidade pesquisada.',
    area: 'Frontend',
    tags: ['React', 'TypeScript'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section reveal">
      <div className="section-head">
        <p className="eyebrow">01 — Projetos</p>
        <h2>Coisas que construí</h2>
        <p>Uma seleção de projetos pessoais e acadêmicos.</p>
      </div>

      <div className="grid">
        {repositories.map((repo) => (
          <a
            className="card card-link"
            key={repo.id}
            href={`https://github.com/arturraimundi/${repo.name}`}
            target="_blank"
            rel="noreferrer"
          >
            <div className="card-top">
              <span className="card-label">{repo.area}</span>
              <span className="card-arrow" aria-hidden="true">↗</span>
            </div>

            <h3>{repo.name}</h3>
            <p>{repo.description}</p>

            <ul className="tags">
              {repo.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </section>
  )
}
