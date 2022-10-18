import { parseCookies } from "../modules/cookies";
import { verifyCookie } from "../modules/siteAccess";
import { User } from "../types/user";
import Login from "./login";

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

export default Login;
