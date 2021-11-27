import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import Axios from "axios";
import { Link } from "react-router-dom";

import SignUpSection from "./styled";

const SignUp = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (values) => {
    const loggedUser = await Axios.post(
      "users",
      {
        username: values.username,
        password: values.password,
      },
      {
        baseURL: process.env.REACT_APP_BACKEND_URL_PORT,
        headers: { "Access-Control-Allow-Origin": "*" },
      }
    );

    if (loggedUser) {
      history.push("/login");
    } else {
      console.error("Error creating user");
    }
  };

  return (
    <SignUpSection>
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
          value="SignUp"
          disabled={!!errors.username || !!errors.password}
        />
      </form>
      <p>
        Already have an account? <Link to="login"> Login here</Link>
      </p>
    </SignUpSection>
  );
};

export default SignUp;
