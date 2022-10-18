import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginUser } from "../../../types/user";
import { MdPerson, MdLock, MdLogin } from "react-icons/md";
import { post } from "../../../modules/fetch";
import { setCookies } from "../../../modules/cookies";
import Input from "../../Global/Input/Input";
import Button from "../../Global/Button/Button";
import Link from "next/link";
import StyledForm from "../Form.styled";

const Login: FC = () => {
  const router = useRouter();
  const [message, setMessage] = useState<string>();
  const [queryMessage, setQueryMessage] = useState<string>();
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<LoginUser>();

  const onFocus = () => setMessage(undefined);

  const onSubmit: SubmitHandler<LoginUser> = async (form) => {
    const response = await post("/api/login", form);
    if (response.status === 200) {
      const data = await response.json();
      setCookies({ token: data.token }, form.autologin);
      router.push(`/${data.redirect}`);
    } else if (response.status === 401) {
      setMessage("Login/password is/are incorrect");
    }
  };

  useEffect(() => {
    setFocus("login");
    setQueryMessage(router.query.message as string);
  }, [setFocus, router.query.message]);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <header>
        <p>Sign In</p>
      </header>
      <div className="row">
        <MdPerson />
        <Input
          className={errors.login && "error"}
          type="text"
          placeholder="login"
          {...register("login", { required: "*Login is required" })}
          onFocus={onFocus}
        />
      </div>
      <label className="message">{errors.login?.message}</label>
      <div className="row">
        <MdLock />
        <Input
          className={errors.password && "error"}
          type="password"
          placeholder="password"
          {...register("password", { required: "*Password is required" })}
          onFocus={onFocus}
        />
      </div>
      <label className="message">{errors.password?.message}</label>
      <div className="row">
        <label htmlFor="rememberMe">
          <Input type="checkbox" id="rememberMe" {...register("autologin")} />
          Remember me
        </label>
      </div>
      <label className="message">{message}</label>
      <label className="message success">{queryMessage}</label>
      <Button className="row" type="submit">
        <MdLogin />
        <span>Login</span>
      </Button>
      <footer>
        <Link href="/register">Register</Link>
      </footer>
    </StyledForm>
  );
};

export default Login;
