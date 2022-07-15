import React from "react";
import LoginForm from "../components/Form/LoginForm";
import LogoutForm from "../components/Form/LogoutForm";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/auth-context";

const LoginPage = () => {
  const {
    user: { isLogged },
  } = useAuth();

  return (
    <>
      <Navbar />
      {isLogged ? <LogoutForm /> : <LoginForm />}
    </>
  );
};

export default LoginPage;
