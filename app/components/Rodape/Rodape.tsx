
import styles from "./Rodape.module.css";

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.container}>
        <a href="#inicio" className={styles.logo}>
          BM<span>.</span>
        </a>

        <nav className={styles.navegacao}>
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>

        <div className={styles.redes}>
          <a
            href="https://www.linkedin.com/in/brunakm/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>

          <a
            href="https://github.com/brunakm"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
        </div>

        <div className={styles.divisor}></div>

        <p className={styles.copyright}>
          &copy; 2026 Bruna Machado. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
