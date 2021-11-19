import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import BoardsSection from "./styled";

const Login = () => {
  const history = useHistory();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = () => history.push("/boards");;

  return (
    <BoardsSection>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="john.smit@radiumrocket.com"
            {...register("email", { required: true })}
            className={errors.email && "inputError"}
          />
          <input
            type="password"
            placeholder="*********"
            {...register("password", { required: true })}
            className={errors.password && "inputError"}
          />
            
          <input
            type="submit"
            value="Login"
            disabled={!!errors.email || !!errors.password}
          />
        </form>
        <p>Forgot password? <a>Recover here</a></p>
        <p>Don&apos;t have an account? <a>Signup here</a></p>
    </BoardsSection>
  );
};

export default Login;
