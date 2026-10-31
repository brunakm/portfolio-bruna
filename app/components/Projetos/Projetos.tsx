import styles from "./Projetos.module.css";
import Image from "next/image";

const projetos = [
  {
    numero: "01",
    nome: "Agência Criativa Web",
    categoria: "Site institucional",
    descricao:
      "Site institucional de uma agência criativa, desenvolvido com foco em organização visual, responsividade e boas práticas de estilização.",
    tecnologias: ["HTML", "CSS", "Sass"],
    imagem: "/projetos/agencia-criativa.png",
    github: "https://github.com/brunakm/agencia-criativa-web",
  },

  {
    numero: "02",
    nome: "Barbearia Estilo Livre",
    categoria: "Site institucional",
    descricao:
      "Projeto de site para barbearia, com interface moderna, componentes de navegação e layout adaptável a diferentes dispositivos.",
    tecnologias: ["HTML", "CSS", "Bootstrap"],
    imagem: "/projetos/barbearia.png",
    github: "https://github.com/brunakm/barbearia-estilo-livre",
  },

  {
    numero: "03",
    nome: "Pet&Style",
    categoria: "E-commerce",
    descricao:
      "Loja virtual fictícia de produtos para pets, com banner promocional, catálogo de produtos e navegação responsiva.",
    tecnologias: ["HTML", "CSS", "Bootstrap", "Tailwind"],
    imagem: "/projetos/petstyle.png",
    github: "https://github.com/brunakm/petstyle-loja-virtual",
  },

  {
    numero: "04",
    nome: "Todo List",
    categoria: "Aplicação Web",
    descricao:
      "Aplicação de gerenciamento de tarefas com filtros, Context API, hooks personalizados e armazenamento no LocalStorage.",
    tecnologias: ["React", "Vite", "Context API"],
    imagem: "/projetos/todo-list.png",
    github: "https://github.com/brunakm/todo-list",
  },

  {
    numero: "05",
    nome: "Portal de Viagens",
    categoria: "Site de viagens",
    descricao:
      "Portal desenvolvido com Next.js, contendo navegação entre páginas e apresentação de destinos utilizando componentes reutilizáveis.",
    tecnologias: ["Next.js", "TypeScript", "CSS Modules"],
    imagem: "/projetos/portal-viagens.png",
    github: "https://github.com/brunakm/portal-viagens",
  },
  
  {
    numero: "06",
    nome: "Catálogo de Livros",
    categoria: "Aplicação Web",
    descricao:
      "Aplicação para gerenciamento de livros, com integração a uma API REST, cadastro de livros e identificação de leitura.",
    tecnologias: ["React", "TypeScript", "Axios"],
    imagem: "/projetos/catalogo-livros.png",
    github: "https://github.com/brunakm/catalogo-livros",
  },
];

export default function Projetos() {
  return (
    <section id="projetos" className={styles.projetos}>
      <div className={styles.container}>

        <div className={styles.cabecalho}>
          <span className={styles.etiqueta}>
            MEU PORTFÓLIO
          </span>

          <h2>
            Projetos que desenvolvi
            <span> ao longo da minha trajetória.</span>
          </h2>

          <p>
            Conheça alguns dos meus projetos acadêmicos e pessoais,
            desenvolvidos durante minha jornada de aprendizado
            em tecnologia e desenvolvimento web.
          </p>
        </div>

        <div className={styles.grade}>
          {projetos.map((projeto) => (
            <article
              key={projeto.numero}
              className={styles.card}
            >
              <div className={styles.imagemContainer}>
                <Image
                  src={projeto.imagem}
                  alt={projeto.nome}
                  width={600}
                  height={400}
                  className={styles.imagem}
                />

                <span className={styles.categoria}>
                  {projeto.categoria}
                </span>
              </div>

              <div className={styles.conteudo}>
                <span className={styles.numero}>
                  PROJETO {projeto.numero}
                </span>

                <h3>{projeto.nome}</h3>

                <p>{projeto.descricao}</p>

                <div className={styles.tecnologias}>
                  {projeto.tecnologias.map((tecnologia) => (
                    <span key={tecnologia}>
                      {tecnologia}
                    </span>
                  ))}
                </div>

                <a
                  href={projeto.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Ver no GitHub
                  <span aria-hidden="true"> ↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}