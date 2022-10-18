import type { NextPage } from "next";
import Head from "next/head";
import LoginForm from "../../components/Form/Login/Login";
import StyledLogin from "./Login.styled";

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <StyledLogin>
        <LoginForm />
      </StyledLogin>
    </>
  );
};


export default Login;
