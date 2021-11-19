import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import LoginSection from "./styled";

const Login = () => {
  const history = useHistory();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = () => history.push("/boards");;

  return (
    <LoginSection>
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
        <p>Forgot password? <a href="/#">Recover here</a></p>
        <p>Don&apos;t have an account? <a href="/#">Signup here</a></p>
    </LoginSection>
  );
};

export default Login;
