export enum Type {
  "Admin" = 1,
  "User",
}

export type User = {
  login: string;
  name: string;
  surname: string;
  type: string;
  access: string[];
};

export type UserDB = {
  login: string;
  password: string;
  name: string;
  surname: string;
  type: string;
  access: string;
};

export type LoginUser = {
  login: string;
  password: string;
  autologin: boolean;
};

export type RegisterUser = {
  login: string;
  name: string;
  surname: string;
  password: string;
  type: Type;
};
