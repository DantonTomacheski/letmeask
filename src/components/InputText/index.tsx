import { Button } from "../Button";
import "./index.scss";

interface InputProps {
  text: string;
}

const InputText = (props: InputProps) => {
  return (
    <form>
      <input type="text" placeholder={props.text} />
      <Button type="submit">Entrar na sala</Button>
    </form>
  );
};

export { InputText };
