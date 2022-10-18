import { NextPage } from "next";
import { User } from "../../types/user";
import { queryAllRows } from "../../modules/database";
import Head from "next/head";
import Navbar from "../../components/Navbar/Navbar";
import StyledTable from "../../components/Table/Table.styled";
import siteAccess from "../../modules/siteAccess";
import StyledUsers from "./Users.styled";

type Props = {
  user: User;
  users: Omit<User, "access">[];
};

const Users: NextPage<Props> = ({ user, users }) => {
  return (
    <>
      <Head>
        <title>Users</title>
      </Head>

      <Navbar fullName={`${user.name} ${user.surname}`} access={user.access} />
      <StyledUsers>
        {users.length === 0 ? (
          <h1>No data available</h1>
        ) : (
          <StyledTable>
            <thead>
              <tr>
                <th>Login</th>
                <th>Fullname</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.login}>
                  <td>{user.login}</td>
                  <td>
                    {user.name} {user.surname}
                  </td>
                  <td>{user.type}</td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        )}
      </StyledUsers>
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
          user: data,
          users: queryAllRows(
            "SELECT login, name, surname,TYPES.type FROM USERS LEFT JOIN TYPES ON USERS.type_id = TYPES.type_id"
          )
        }
      }
    : {
        redirect: {
          destination: "/"
        }
      };
}

export default Users;
