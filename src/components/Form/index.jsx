import { useState } from "react";
import FormHeader from "../FormHeader";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container } from "./styles";
import { useAuth } from "../../providers/AuthContext";

const Form = () => {
  const [login, setLogin] = useState(true);

  const { loginOrRegisterUser } = useAuth();

  const requiredFieldMessage = "Campo Obrigatório!";

  const formSchema = yup.object().shape({
    email: yup.string().required(requiredFieldMessage).email("Email inválido"),
    password: yup
      .string()
      .required(requiredFieldMessage)
      .min(6, "Senha deve conter no mínimo 6 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const changeForm = () => {
    setLogin(!login);
  };

  const onSubmitFunction = (data) => {
    const endpoint = login ? "login" : "users";

    let user = {
      email: data.email,
      password: data.password,
    };

    if (!login) {
      user = {
        ...user,
        firstLogin: true,
        avatarUrl:
          "https://www.ecp.org.br/wp-content/uploads/2017/12/default-avatar-1.png",
      };
    }
    loginOrRegisterUser(user, endpoint);
  };

  return (
    <Container login={login}>
      <FormHeader />
      <h1>{login ? "Entrar" : "Cadastre-se no ReactIn — é grátis!"}</h1>
      {login && <p>Acompanhe as novidades do seu mundo profissional</p>}
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <div className="label-container">
          <label htmlFor="email">Email</label>
        </div>
        <input
          type="text"
          {...register("email")}
          className={errors.email && "invalid"}
          placeholder={login ? "E-mail" : ""}
        />
        <span className="error-message">
          {errors.email && errors.email.message}
        </span>
        <div className="label-container">
          <label htmlFor="password">Senha (6 ou mais caracteres)</label>
        </div>
        <input
          type="password"
          {...register("password")}
          className={errors.password && "invalid"}
          placeholder={login ? "Senha" : ""}
        />
        <span className="error-message">
          {errors.password && errors.password.message}{" "}
        </span>
        <span className="terms">
          {login ? (
            <span>Esqueceu a senha?</span>
          ) : (
            <>
              Ao clicar em Aceite e cadastre-se, você aceita o{" "}
              <span>Contrato do Usuário</span>, a{" "}
              <span>Política de Privacidade</span> e a{" "}
              <span>Política de Cookies</span> do ReactIn.
            </>
          )}{" "}
        </span>
        <button>{login ? "Entrar" : "Continuar"}</button>
      </form>
      <span className="registered-user">
        {login ? (
          <>
            Novo no ReactIn? <span onClick={changeForm}>Cadastre-se</span>
          </>
        ) : (
          <>
            Já se cadastrou no ReactIn? <span onClick={changeForm}>Entre</span>
          </>
        )}
      </span>
      <footer>
        <ul>
          <li>English</li>
          <li>Español</li>
          <li>Français</li>
          <li>简体中文</li>
          <li>Mais</li>
        </ul>
      </footer>
    </Container>
  );
};

export default Form;
