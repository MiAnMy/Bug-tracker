import Link from "next/link";
import { FC, memo } from "react";
import { deleteCookies } from "../../modules/cookies";
import { useRouter } from "next/router";
import { MdLogout } from "react-icons/md";
import StyledNavbar from "./Navbar.styled";
import Button from "../Global/Button/Button";

type Props = {
  fullName: string;
  access: string[];
};

const Navbar: FC<Props> = ({ access, fullName }) => {
  const router = useRouter();

  const logout = () => {
    deleteCookies();
    router.push("/");
  };

  return (
    <StyledNavbar>
      <div>
        {access.map((link, index) => (
          <Link key={index} href={"/" + link}>
            <a className={router.asPath === "/" + link ? "active" : ""}>
              {link}
            </a>
          </Link>
        ))}
      </div>
      <div>
        <span>{fullName}</span>
      </div>
      <div>
        <Button onClick={logout}>
          <MdLogout />
          <span>Logout</span>
        </Button>
      </div>
    </StyledNavbar>
  );
};

export default memo(Navbar);
