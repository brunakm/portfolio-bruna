import styles from "./Cabecalho.module.css";

export default function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <div className={styles.container}>
        <a href="#inicio" className={styles.logo}>
          BM<span>.</span>
        </a>

        <nav className={styles.navegacao}>
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#projetos">Projetos</a>
        </nav>

        <a href="#contato" className={styles.botaoContato}>
          Vamos conversar
        </a>
      </div>
    </header>
  );
}