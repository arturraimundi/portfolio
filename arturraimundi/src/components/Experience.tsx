import React from 'react';

// 1. Objeto JSON integrado diretamente no arquivo (ou importado)
const experiencesData = {
  "for_profit": [
    {
      "id": 1,
      "company": "IXCSoft",
      "role": "Desenvolvedor",
      "period": "jul 2026 – Presente",
      "highlights": [
        "Desenvolvimento de algoritmos em PHP para rotinas de migração de dados e mapeamento estrutural de sistemas.",
        "Manipulação, análise e validação de dados em múltiplos SGBDs relacionais (MariaDB, PostgreSQL, MySQL e Oracle).",
        "Investigação e resolução de problemas de performance e integridade em scripts de migração de alto volume.",
        "Identificação de inconsistências e correção de falhas de integração em bases de dados complexas.",
        "Atendimento e resolução de chamados técnicos via Jira, com foco na estabilidade de sistemas críticos."
      ]
    },
    {
      "id": 2,
      "company": "ATSJornada by nstech",
      "role": "Analista de Suporte",
      "period": "Set 2025 – jul 2026",
      "highlights": [
        "Análise e validação de dados em bases SQL Server e MySQL para identificação de inconsistências e falhas de integração.",
        "Atuação na resolução de chamados via Jira, com foco em sistemas críticos e análise técnica de problemas.",
        "Suporte e manutenção de dashboards Power BI, incluindo publicação, configuração de gateways e correção de fontes de dados.",
        "Apoio na investigação de problemas de performance e integridade de dados."
      ]
    },
    {
      "id": 3,
      "company": "CORE Soluções Tecnológicas",
      "role": "Desenvolvedor Web Fullstack",
      "period": "Jan 2025 – Set 2025",
      "highlights": [
        "Desenvolvimento de aplicações web com Java, vRaptor, JSP e MySQL.",
        "Implementação e manutenção de funcionalidades no sistema (back-end e front-end).",
        "Integração e automação de cadastros entre módulos."
      ]
    },
    {
      "id": 4,
      "company": "Freelancer",
      "role": "Desenvolvimento React",
      "period": "Ago 2024 – Nov 2024",
      "highlights": [
        "Desenvolvimento de aplicações em React integradas ao Google Looker Studio.",
        "Criação de dashboards personalizados para análise de campanhas no Google Ads.",
        "Integração de dados e construção de interfaces focadas em visualização e tomada de decisão."
      ]
    },
    {
      "id": 5,
      "company": "Conceito LTDA",
      "role": "Suporte Técnico",
      "period": "Abr 2024 – Set 2024",
      "highlights": [
        "Diagnóstico e resolução de problemas técnicos em ambiente remoto e presencial.",
        "Montagem, manutenção e formatação de computadores."
      ]
    }
  ],
  "non_profit": [
    {
      "id": 1,
      "institution": "UFFS",
      "project": "GATILAB",
      "role": "Desenvolvedor Fullstack",
      "year": "2026"
    },
    {
      "id": 2,
      "institution": "UFFS",
      "project": "AWS Student Builder Group",
      "role": "Coordenador de eventos",
      "year": "2026"
    },
    {
      "id": 3,
      "institution": "IFSC - Xanxerê",
      "project": "Oficina de robótica",
      "role": "Mentor de oficina",
      "year": "2024"
    },
    {
      "id": 4,
      "institution": "IFSC",
      "project": "Projeto de monitoramento de arborização com imagens via satélite",
      "role": "Execução de projeto",
      "year": "2023"
    }
  ]
};

export default function Experience() {
  return (
    <section id="experience">
      <h2>Experiência Profissional</h2>
      <div className="experience-group">
        {/* Mapeando as experiências For-Profit */}
        {experiencesData.for_profit.map((exp) => (
          <div className="card" key={`fp-${exp.id}`}>
            <h3>{exp.role}</h3>
            <h4>{exp.company}</h4>
            <span>{exp.period}</span>
            <ul>
              {exp.highlights.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2>Projetos e Voluntariado</h2>
      <div className="experience-group">
        {/* Mapeando as experiências Non-Profit */}
        {experiencesData.non_profit.map((exp) => (
          <div className="card" key={`np-${exp.id}`}>
            <h3>{exp.role}</h3>
            <h4>{exp.project} — {exp.institution}</h4>
            <span>{exp.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
