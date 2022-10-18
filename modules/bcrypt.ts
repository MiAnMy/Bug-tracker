import bcrypt from "bcrypt";
const saltRounds = 10;

export const hash = (password: string) => bcrypt.hash(password, saltRounds);

export const compare = (password: string, hash: string) =>
  bcrypt.compare(password, hash);
