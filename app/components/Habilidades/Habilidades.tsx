import styles from "./Habilidades.module.css";

const categorias = [
  {
    numero: "01",
    titulo: "Desenvolvimento Web",
    descricao: "Fundamentos para criação de interfaces e aplicações web.",
    tecnologias: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
  },
  {
    numero: "02",
    titulo: "Frameworks e bibliotecas",
    descricao: "Tecnologias utilizadas no desenvolvimento de interfaces.",
    tecnologias: ["React", "Next.js", "Bootstrap", "Tailwind CSS", "Sass"],
  },
  {
    numero: "03",
    titulo: "Design e prototipação",
    descricao: "Ferramentas e conceitos voltados à experiência visual.",
    tecnologias: ["Figma", "Canva", "UX/UI Design", "Design Responsivo"],
  },
  {
    numero: "04",
    titulo: "Ferramentas e banco de dados",
    descricao: "Recursos utilizados durante o desenvolvimento de projetos.",
    tecnologias: ["Git", "GitHub", "MySQL"],
  },
];

export default function Habilidades() {
  return (
    <section id="habilidades" className={styles.habilidades}>
      <div className={styles.container}>

        <div className={styles.cabecalho}>
          <span className={styles.etiqueta}>
            HABILIDADES
          </span>

          <h2>
            Tecnologias e ferramentas
            <span> que utilizo.</span>
          </h2>

          <p>
            Conhecimentos desenvolvidos ao longo da minha
            formação e aplicados em projetos acadêmicos e
            pessoais.
          </p>
        </div>

        <div className={styles.grade}>
          {categorias.map((categoria) => (
            <article
              key={categoria.numero}
              className={styles.card}
            >
              <span className={styles.numero}>
                {categoria.numero}
              </span>

              <h3>{categoria.titulo}</h3>

              <p className={styles.descricao}>
                {categoria.descricao}
              </p>

              <div className={styles.tecnologias}>
                {categoria.tecnologias.map((tecnologia) => (
                  <span
                    key={tecnologia}
                    className={styles.tag}
                  >
                    {tecnologia}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}