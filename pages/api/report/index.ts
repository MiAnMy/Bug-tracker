import type { NextApiRequest, NextApiResponse } from "next";
import { insertNewRow } from "../../../modules/database";
import { Report } from "../../../types/report";

const reportQuery =
  "INSERT INTO BUGS (description, created_by) VALUES (@description, @created_by)";

export default async function report(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const form: Report = req.body;

  const userCreated = insertNewRow(reportQuery, form);

  userCreated ? res.status(200).end() : res.status(500).end();
}
