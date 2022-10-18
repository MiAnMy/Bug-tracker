import Database from "better-sqlite3";
const db = new Database("db.db", { verbose: console.log });

export const queryFirstRow = (query: string, parameters: any[] = []) =>
  db.prepare(query).get(...parameters);

export const queryAllRows = (query: string, parameters: any[] = []) =>
  db.prepare(query).all(...parameters);

export const insertNewRow = (
  query: string,
  parameters: { [key: string]: any }
): boolean => {
  try {
    db.prepare(query).run(parameters);
    return true;
  } catch (e) {
    return false;
  }
};

export const updateRow = (query: string, parameters: any[]) => {
  try {
    db.prepare(query).run(...parameters);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};
