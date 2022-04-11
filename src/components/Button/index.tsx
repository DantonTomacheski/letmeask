import { ButtonHTMLAttributes } from "react";

import "./index.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
  return <Button className="button" {...props} />;
};

export { Button };
