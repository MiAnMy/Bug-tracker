import type { NextPage } from "next";
import Head from "next/head";
import RegisterForm from "../../components/Form/Register/Register";
import { parseCookies } from "../../modules/cookies";
import { verifyCookie } from "../../modules/siteAccess";
import { User } from "../../types/user";
import StyledRegister from "./Register.styled";

const Register: NextPage = () => {
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>

      <StyledRegister>
        <RegisterForm />
      </StyledRegister>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const cookie = parseCookies(context.req.headers.cookie);
  const data: User | false = cookie ? verifyCookie(cookie.token) : false;

  return data
    ? {
        redirect: {
          destination: `/${data.access[0]}`,
        },
      }
    : {
        props: {},
      };
}

export default Register;
