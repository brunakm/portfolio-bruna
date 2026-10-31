import Cabecalho from "./components/Cabecalho/Cabecalho";
import Apresentacao from "./components/Apresentacao/Apresentacao";
import Sobre from "./components/Sobre/Sobre";
import Habilidades from "./components/Habilidades/Habilidades";
import Projetos from "./components/Projetos/Projetos";
import Contato from "./components/Contato/Contato";
import Rodape from "./components/Rodape/Rodape";

export default function Home() {
  return (
    <>
      <Cabecalho />

      <main>
        <Apresentacao />
        <Sobre />
        <Habilidades />
        <Projetos />
        <Contato />
      </main>

      <Rodape />
    </>
  );
}