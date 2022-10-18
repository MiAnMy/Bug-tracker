import type { NextPage } from "next";
import { queryAllRows } from "../../modules/database";
import { Report } from "../../types/report";
import { useReducer } from "react";
import { MdDone, MdClear } from "react-icons/md";
import { User } from "../../types/user";
import { patch } from "../../modules/fetch";
import Head from "next/head";
import StyledBugs from "./Bugs.styled";
import Navbar from "../../components/Navbar/Navbar";
import siteAccess from "../../modules/siteAccess";
import Button from "../../components/Global/Button/Button";
import StyledTable from "../../components/Table/Table.styled";
import reducer from "../../modules/bugsReducer";

type Props = {
  user: User;
  reports: Report[];
};

const Bugs: NextPage<Props> = ({ user, reports }) => {
  const [bugs, dispatch] = useReducer(reducer, reports);

  const toggleStatus = async (report: Report) => {
    const response = await patch(`/api/report/${report.bug_id}`, {
      status: !report.status,
      resolvedBy: user.login
    });

    if (response.status === 200)
      dispatch({ type: "TOGGLE", id: report.bug_id });
  };

  return (
    <>
      <Head>
        <title>Bugs</title>
      </Head>

      <Navbar fullName={`${user.name} ${user.surname}`} access={user.access} />

      <StyledBugs>
        {bugs.length === 0 ? (
          <h1>No data available</h1>
        ) : (
          <StyledTable>
            <thead>
              <tr>
                <th>Description</th>
                <th>Created</th>
                <th>Status</th>
                <th>Resolved</th>
              </tr>
            </thead>
            <tbody>
              {bugs.map((bug, index) => (
                <tr key={index}>
                  <td>{bug.description}</td>
                  <td>
                    {bug.date_created} <br /> by {bug.created_by}
                  </td>
                  <td>
                    <Button
                      onClick={() => toggleStatus(bug)}
                      theme={bug.status ? "success" : "warning"}
                    >
                      {bug.status ? <MdDone /> : <MdClear />}
                      <span>{bug.status ? "Resolved" : "Unresolved"}</span>
                    </Button>
                  </td>
                  <td>{bug.date_resolved}</td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        )}
      </StyledBugs>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const data: User | false = siteAccess(
    context.req.headers.cookie,
    context.resolvedUrl
  );

  return data
    ? {
        props: {
          user: { ...data },
          reports: queryAllRows("SELECT * FROM BUGS")
        }
      }
    : {
        redirect: {
          destination: "/"
        }
      };
}

export default Bugs;
