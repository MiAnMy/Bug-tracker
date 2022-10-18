import type { NextApiRequest, NextApiResponse } from "next";
import { updateRow } from "../../../modules/database";

const updateReportQuery =
  "UPDATE BUGS SET `status` = ?, `date_resolved`= ?,`resolved_by`= ? WHERE bug_id = ?";

export default async function reportID(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const bugID = req.query.id;
  const { status, resolvedBy } = req.body;
  const datetime = status
    ? new Date().toISOString().slice(0, 19).replace("T", " ")
    : null;
  const updated = updateRow(updateReportQuery, [
    Number(status),
    datetime,
    resolvedBy,
    bugID
  ]);

  updated ? res.status(200).end() : res.status(501).end();
}
