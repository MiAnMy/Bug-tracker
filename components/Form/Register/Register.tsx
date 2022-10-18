import { FC, useEffect, useState } from "react";
import { MdDone } from "react-icons/md";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import { RegisterUser } from "../../../types/user";
import { post } from "../../../modules/fetch";
import Input from "../../Global/Input/Input";
import Button from "../../Global/Button/Button";
import Link from "next/link";
import StyledForm from "../Form.styled";

const Register: FC = () => {
  const router = useRouter();
  const [message, setMessage] = useState<string>();
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors }
  } = useForm<RegisterUser>();

  const onFocus = () => setMessage(undefined);

  const onSubmit: SubmitHandler<RegisterUser> = async form => {
    const response = await post("/api/register", form);
    if (response.status === 200) {
      router.push({
        pathname: "/",
        query: {
          message: "You can now sign in"
        }
      });
    } else if (response.status === 401) {
      setMessage("Username is already taken");
    }
  };

  useEffect(() => {
    setFocus("name");
  }, [setFocus]);
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <header>
        <p>Register</p>
      </header>
      <div className="row">
        <Input
          className={errors.name && "error"}
          placeholder="name"
          maxLength={10}
          {...register("name", { required: "*Name is required" })}
          onFocus={onFocus}
        />
      </div>
      <label className="message">{errors.name?.message}</label>
      <div className="row">
        <Input
          className={errors.surname && "error"}
          placeholder="surname"
          maxLength={10}
          {...register("surname", { required: "*Surname is required" })}
          onFocus={onFocus}
        />
      </div>
      <label className="message">{errors.surname?.message}</label>
      <div className="row">
        <Input
          className={errors.login && "error"}
          placeholder="login"
          {...register("login", {
            required: "*Username is required",
            minLength: {
              value: 6,
              message: "*Login need to have at least 6 letters"
            }
          })}
          onFocus={onFocus}
          maxLength={20}
        />
      </div>
      <label className="message">{errors.login?.message}</label>
      <div className="row">
        <Input
          className={errors.password && "error"}
          type="password"
          placeholder="password"
          {...register("password", {
            required: "*Password is required",
            minLength: {
              value: 6,
              message: "*Password need to have at least 6 letters"
            }
          })}
          onFocus={onFocus}
          maxLength={20}
        />
      </div>
      <label className="message">{errors.password?.message}</label>
      <label className="message">{message}</label>
      <Button className="row" type="submit">
        <MdDone />
        <span>Register</span>
      </Button>
      <footer>
        <Link href="/">Sign In</Link>
      </footer>
    </StyledForm>
  );
};

export default Register;
