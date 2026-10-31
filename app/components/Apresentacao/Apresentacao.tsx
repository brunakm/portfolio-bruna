import styles from "./Apresentacao.module.css";

export default function Apresentacao() {
  return (
    <section id="inicio" className={styles.apresentacao}>
      <div className={styles.container}>

        <div className={styles.conteudo}>
          <span className={styles.etiqueta}>
            PORTFÓLIO • 2026
          </span>

          <h1>
            Olá, eu sou <span>Bruna Machado.</span>
          </h1>

          <h2>
            Desenvolvedora Front-End
            <br />
            e Web Designer em formação.
          </h2>

          <p>
            Sou formada em Análise e Desenvolvimento de Sistemas
            e apaixonada por criar experiências digitais funcionais,
            intuitivas e visualmente agradáveis.
          </p>

          <div className={styles.botoes}>
            <a href="#projetos" className={styles.botaoPrincipal}>
              Conheça meus projetos
            </a>

            <a href="#contato" className={styles.botaoSecundario}>
              Entre em contato
            </a>
          </div>
        </div>

        <div className={styles.detalheVisual}>
          <div className={styles.cartao}>
            <span className={styles.iniciais}>BM</span>
            <div className={styles.linha}></div>
            <span className={styles.descricao}>
              DESIGN & DEVELOPMENT
            </span>
            <span className={styles.numero}>01 / 05</span>
          </div>
        </div>

      </div>
    </section>
  );
}