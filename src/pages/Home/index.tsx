import { Button } from "../../components/Button";
import { InputText } from "../../components/InputText";

import IllustrationImg from "../../assets/images/illustration.svg";
import LogoImg from "../../assets/images/logo.svg";

import "./index.scss";

const Home = () => {
  return (
    <div id="page-auth">
      <aside>
        <img
          src={IllustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="mainContent">
          <img src={LogoImg} alt="Logo do projeto Letmeask" />
          <Button>Crie sua sala com o google</Button>
          <div className="separator">ou entre em uma sala</div>
          <InputText text="Digite o código da sala" />
        </div>
      </main>
    </div>
  );
};

export { Home };
