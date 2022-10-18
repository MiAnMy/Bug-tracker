import type { NextPage } from "next";
import { User } from "../../types/user";
import ReportForm from "../../components/Form/Report/Report";
import Head from "next/head";
import Navbar from "../../components/Navbar/Navbar";
import siteAccess from "../../modules/siteAccess";
import StyledReport from "./Report.styled";

type Props = {
  user: User;
};

const Report: NextPage<Props> = ({ user }) => {
  return (
    <>
      <Head>
        <title>Report</title>
      </Head>

      <Navbar fullName={`${user.name} ${user.surname}`} access={user.access} />
      <StyledReport>
        <ReportForm reported_by={user.login} />
      </StyledReport>
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
          user: { ...data }
        }
      }
    : {
        redirect: {
          destination: "/"
        }
      };
}

export default Report;
