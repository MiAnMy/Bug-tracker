import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { compare } from "../../modules/bcrypt";
import { LoginUser, User, UserDB } from "../../types/user";
import { queryFirstRow } from "../../modules/database";

const loginQuery =
  "SELECT login, password, name, surname, TYPES.type, TYPES.access FROM USERS  INNER JOIN TYPES ON USERS.type_id=TYPES.type_id WHERE login = ?";

export default async function validation(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { login, password, autologin }: LoginUser = req.body;
  const userDB: UserDB | undefined = queryFirstRow(loginQuery, [login]);
  console.log(userDB);

  const isValid = userDB ? await compare(password, userDB.password) : false;

  if (isValid && userDB) {
    const user: User = {
      login: userDB.login,
      name: userDB.name,
      surname: userDB.surname,
      type: userDB.type,
      access: userDB.access.split(","),
    };
    const expiresIn = autologin ? "365d" : "30m";
    res.status(200).json({
      token: jwt.sign(user, process.env.PRIVATE_KEY!, { expiresIn }),
      redirect: user.access[0],
    });
  } else {
    res.status(401).end();
  }
}
