type ObjCookie = {
  [key: string]: string;
};

const parseToObj = (cookies: string) => {
  try {
    return cookies.split("; ").reduce((prev, current) => {
      const [name, ...value] = current.split("=");
      prev[name] = value.join("=");
      return prev;
    }, {} as ObjCookie);
  } catch {
    return undefined;
  }
};

export const setCookies = (cookies: ObjCookie, remember: boolean) => {
  Object.keys(cookies).forEach(key => {
    document.cookie = `${key}=${cookies[key]};${
      remember && "expires=Fri, 31 Dec 9999 23:59:59 GMT"
    };SameSite=None; Secure`;
  });
};

export const getCookies = () => parseToObj(document.cookie);

export const parseCookies = (cookies: string) => parseToObj(cookies);

export const deleteCookies = () => {
  const cookies = getCookies();
  if (!cookies) return;
  Object.keys(cookies).forEach(key => {
    document.cookie = `${key}=${cookies[key]};${"Max-Age=0"}`;
  });
};
