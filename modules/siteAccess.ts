import { verify } from "jsonwebtoken";
import { User } from "../types/user";
import { parseCookies } from "./cookies";

const userHasAccess = (resolvedUrl: string, access: User["access"]) => {
  return access.includes(resolvedUrl.slice(1));
};

export const verifyCookie = (token: string): User | false => {
  try {
    return verify(token, process.env.PRIVATE_KEY!) as User;
  } catch (e: any) {
    console.log(e.message);
    return false;
  }
};

const siteAccess = (cookie: string, resolvedUrl: string) => {
  const cookies = parseCookies(cookie);
  if (cookies === undefined) return false;
  const data = verifyCookie(cookies.token);
  if (!data) return false;
  const hasAccess = userHasAccess(resolvedUrl, data.access);
  if (hasAccess) return data;
  return false;
};

export default siteAccess;
