import styles from "./Sobre.module.css";

export default function Sobre() {
  return (
    <section id="sobre" className={styles.sobre}>
      <div className={styles.container}>

        <div className={styles.conteudo}>
          <span className={styles.etiqueta}>
            SOBRE MIM
          </span>

          <h2>
            Conheça um pouco da minha
            <span> trajetória.</span>
          </h2>

          <p>
            Sou formada em Análise e Desenvolvimento de Sistemas
            e atualmente estou em formação em Engenharia Front-End
            pela EBAC.
          </p>

          <p>
            Tenho interesse no desenvolvimento de interfaces
            digitais, unindo tecnologia, criatividade e design
            para criar experiências intuitivas, funcionais e
            visualmente agradáveis.
          </p>

          <p>
            Ao longo da minha formação, desenvolvi projetos
            acadêmicos utilizando diferentes tecnologias,
            buscando aprimorar meus conhecimentos e evoluir
            constantemente na área.
          </p>
        </div>

        <div className={styles.destaques}>

          <div className={styles.card}>
            <div className={styles.icone}>
              <span>01</span>
            </div>

            <div>
              <h3>Formação</h3>
              <p>
                Análise e Desenvolvimento de Sistemas
              </p>
              <span className={styles.detalhe}>
                Engenharia Front-End em andamento
              </span>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.icone}>
              <span>02</span>
            </div>

            <div>
              <h3>Áreas de interesse</h3>
              <p>
                Front-End, Web Design e UX/UI Design
              </p>
              <span className={styles.detalhe}>
                Tecnologia e experiência do usuário
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}