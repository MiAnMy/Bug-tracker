import { NextPage } from "next";
import { useRouter } from "next/router";
import Button from "../../components/Global/Button/Button";
import Styled404 from "./404.styled";

const PageNotFound: NextPage = () => {
  const router = useRouter();
  return (
    <Styled404>
      <h1>Page not found</h1>
      <hr />
      <Button onClick={() => router.back()}>Go back</Button>
    </Styled404>
  );
};

export default PageNotFound;
