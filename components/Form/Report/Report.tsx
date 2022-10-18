import { FC, useState } from "react";
import { MdBugReport } from "react-icons/md";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../../Global/Button/Button";
import Input from "../../Global/Input/Input";
import StyledForm from "../Form.styled";
import { post } from "../../../modules/fetch";
import { Report } from "../../../types/report";

const Report: FC<{ reported_by: string }> = ({ reported_by }) => {
  const [message, setMessage] = useState<string>();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Report>();
  const onSubmit: SubmitHandler<Report> = async (form) => {
    form.created_by = reported_by;
    const response = await post("/api/report", form);
    if (response.status === 200) {
      setMessage("Bug reported");
      reset();
    }
  };

  return (
    <StyledForm formWidth="50%" onSubmit={handleSubmit(onSubmit)}>
      <header>
        <p>Bug report</p>
      </header>
      <div className="row">
        <MdBugReport />
        <Input
          placeholder="description"
          {...register("description", {
            required: "*Description is required",
            minLength: {
              value: 10,
              message: "*Description need to have at least 10 letters",
            },
          })}
          autoComplete="off"
          onFocus={() => setMessage("")}
        />
      </div>
      <label className="message">{errors.description?.message}</label>
      <label className="message success">{message}</label>
      <Button className="row" type="submit">
        <MdBugReport />
        <span>Report</span>
      </Button>
    </StyledForm>
  );
};

export default Report;
