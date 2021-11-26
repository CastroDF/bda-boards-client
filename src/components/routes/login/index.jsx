import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import Axios from "axios";

import LoginSection from "./styled";

const Login = () => {
  const history = useHistory();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (values) => {
    const loggedUser = await Axios.post("http://localhost:5000/users/login", {
      username: values.username,
      password: values.password
    }, {headers: {"Access-Control-Allow-Origin": "*"}})

    if (loggedUser) {
      history.push("/boards")
    } else {
      console.error("User not exists")
    }
  };

  return (
    <LoginSection>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="John Doe"
            {...register("username", { required: true })}
            className={errors.username && "inputError"}
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
            disabled={!!errors.username || !!errors.password}
          />
        </form>
        <p>Forgot password? <a href="/#">Recover here</a></p>
        <p>Don&apos;t have an account? <a href="/#">Signup here</a></p>
    </LoginSection>
  );
};

export default Login;
