import { React, useState, useContext } from "react";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { BASE_URL, TOKEN_PATH } from "../../constants/api";
import AuthContext from "../../context/AuthContext";

const url = BASE_URL + TOKEN_PATH;

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Please enter your email address.")
    .email("Please enter a valid email address"),
  password: yup.string().required("Password is required"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export default function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [auth, setAuth] = useContext(AuthContext);

  const onSubmit = async (data) => {
    setSubmitting(true);
    setLoginError(null);

    console.log(data);

    try {
      const res = await axios.post(url, {
        identifier: data.email,
        password: data.password,
      });
      console.log("response", res.data);
      setAuth(res.data);
      history.push("/dashboard");
    } catch (error) {
      console.log("error", error);
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  };

  console.log(errors);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="modal__right">
        {loginError && <p>{loginError}</p>}
        <h2 className="heading-medium">Login</h2>
        <fieldset disabled={submitting}>
          {" "}
          <input
            {...register("email")}
            type="text"
            placeholder="Type you email"
          />
          {errors.email && <span>{errors.email.message}</span>}
          <input
            {...register("password")}
            type="password"
            placeholder="Type your password"
          />
          {errors.password && <span>{errors.password.message}</span>}
          <button type="submit" className="btn-main">
            {submitting ? "Logging in..." : "Login"}
          </button>
        </fieldset>
      </form>
    </div>
  );
}