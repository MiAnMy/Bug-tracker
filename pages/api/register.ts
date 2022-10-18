import type { NextApiRequest, NextApiResponse } from "next";
import { RegisterUser, Type } from "../../types/user";
import { insertNewRow } from "../../modules/database";
import { hash } from "../../modules/bcrypt";

const registerQuery =
  "INSERT INTO USERS (login, password, name, surname, type_id) VALUES (@login, @password, @name, @surname, @type)";

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const form: RegisterUser = req.body;
  form.type = Type.User;
  form.password = await hash(form.password);

  const userCreated = insertNewRow(registerQuery, form);

  userCreated ? res.status(200).end() : res.status(401).end();
}
