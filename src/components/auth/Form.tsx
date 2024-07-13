import { FC, useState } from "react";
import "./Form.css";

interface FormProp {
  title: string;
  handleClick: (email: string, pass: string) => void;
}


const Form: FC<FormProp> = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className="form">
      <input
        className="myInp"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="  введите почту"
      />
      <input
        className="myInp"
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="  введите пароль"
      />
      <button className="myBtn" onClick={() => handleClick(email, pass)}>
        {title}
      </button>
    </div>
  );
};

export { Form };
