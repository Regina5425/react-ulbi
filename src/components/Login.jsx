import React, { useContext } from "react";
import { AuthContext } from "../context/index";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const Login = () => {
  const { setIsAuth } = useContext(AuthContext);

  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };
  return (
    <div>
      <h1>Страница для логина</h1>
      <form onSubmit={login}>
        <MyInput type='text' placeholder='введите логин' />
        <MyInput type='password' placeholder='введите пароль' />
        <MyButton>Войти</MyButton>
      </form>
    </div>
  );
};

export default Login;
