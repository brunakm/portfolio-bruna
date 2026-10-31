
import styles from "./Contato.module.css";

export default function Contato() {
  return (
    <section id="contato" className={styles.contato}>
      <div className={styles.container}>
        <span className={styles.subtitulo}>CONTATO</span>

        <h2>
          Vamos conversar<span>?</span>
        </h2>

        <p className={styles.descricao}>
          Tenho interesse em novas oportunidades na área de tecnologia,
          desenvolvimento Front-End e Web Design. Se você acredita que
          podemos trabalhar juntos, entre em contato!
        </p>

        <div className={styles.links}>
          {/* E-mail */}
          <div className={styles.link}>
            <span className={styles.icone}>✉</span>

            <span>
              <strong>E-mail</strong>
              <small>
                <a href="mailto:km.bruna04@gmail.com">
                  km.bruna04@gmail.com
                </a>
              </small>
            </span>

            <span className={styles.seta}>↗</span>
          </div>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/brunakm/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <span className={styles.icone}>in</span>

            <span>
              <strong>LinkedIn</strong>
              <small>Meu perfil profissional</small>
            </span>

            <span className={styles.seta}>↗</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/brunakm"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <span className={styles.icone}>⌘</span>

            <span>
              <strong>GitHub</strong>
              <small>Meus projetos e repositórios</small>
            </span>

            <span className={styles.seta}>↗</span>
          </a>
        </div>

        <a
          href="mailto:km.bruna04@gmail.com"
          className={styles.botao}
        >
          Enviar um e-mail
          <span>↗</span>
        </a>
      </div>
    </section>
  );
}