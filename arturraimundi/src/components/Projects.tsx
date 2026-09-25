import React from 'react';

// 1. Dados do JSON estruturados
const repositories = [
  {
    "id": 1,
    "name": "gumpchess",
    "visibility": "Public",
    "description": "Chess game",
    "language": "JavaScript"
  },
  {
    "id": 2,
    "name": "GerenciamentoDePortfolio-Spring",
    "visibility": "Public",
    "description": "Este é um sistema de gerenciamento de portfólio de projetos desenvolvido com Spring Boot, oferecendo uma API REST para gestão de projetos e membros de equipe.",
    "language": "Java"
  },
  {
    "id": 3,
    "name": "Trashealth",
    "visibility": "Public",
    "description": "Trashealth conecta usuários e empresas, fornecendo informações sobre pontos de coleta de lixo eletrônico e criando um ambiente que estimula práticas sustentáveis e o reaproveitamento de materiais.",
    "language": "HTML"
  },
  {
    "id": 4,
    "name": "weatherApp",
    "visibility": "Public",
    "description": "Website de previsão do tempo desenvolvido com Angular e TypeScript, consumindo a WeatherAPI para exibir dados em tempo real com base na cidade pesquisada.",
    "language": "TypeScript"
  }
];

export default function Projects() {
  return (
    <section id="projects">
      {/* 2. O .map vai repetir a div 'card' para cada repositório */}
      {repositories.map((repo) => (
        <div className="card" key={repo.id}>
          <h3>{repo.name}</h3>
          <span>{repo.visibility}</span>
          <p>{repo.description}</p>
          <small>Linguagem: {repo.language}</small>
        </div>
      ))}
    </section>
  );
}