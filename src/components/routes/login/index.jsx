import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import Axios from "axios";
import { Link } from "react-router-dom";

import LoginSection from "./styled";

const Login = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (values) => {
    const loggedUser = await Axios.post(
      "http://localhost:5000/users/login",
      {
        username: values.username,
        password: values.password,
      },
      { headers: { "Access-Control-Allow-Origin": "*" } }
    );

    if (loggedUser) {
      history.push("/boards");
    } else {
      console.error("User not exists");
    }
  };

  return (
    <LoginSection>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="rowInput">
          <input
            type="text"
            placeholder="John Doe"
            {...register("username", { required: "Username is required" })}
            className={errors.username && "inputError"}
          />
          {errors.username && (
            <p className="error">{errors.username.message}</p>
          )}
        </div>
        <div className="rowInput">
          <input
            type="password"
            placeholder="*********"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 5,
                message: "Password min length is 5",
              },
            })}
            className={errors.password && "inputError"}
          />
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}
        </div>
        <input
          type="submit"
          value="Login"
          disabled={!!errors.username || !!errors.password}
        />
      </form>
      <p>
        Don&apos;t have an account? <Link to="signUp"> Signup here</Link>
      </p>
    </LoginSection>
  );
};

export default Login;
