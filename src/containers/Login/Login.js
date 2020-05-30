import React, { useEffect, useContext } from "react";
import styles from "./Login.module.scss";
import { Formik } from "formik";
import LoginInput from "./Input/Input";

import { useMutation } from "@apollo/client";
import SIGNIN_USER from "../../graphql/mutations/signIn";

import AuthContext from "../../utils/Auth.context";

const Login = (props) => {
  const [signInUser, { data, loading }] = useMutation(SIGNIN_USER);
  const { handleAuthFlow } = useContext(AuthContext);

  useEffect(() => {
    const authSaved = localStorage.getItem("authInfo");
    if (authSaved) {
      props.history.push("/classroom");
    }
  }, [props.history]);

  useEffect(() => {
    if (!loading) {
      if (data?.signInUser.usr) {
        handleAuthFlow(data.signInUser);
        props.history.push("/classroom");
      } else {
        console.log("Not exist");
      }
    }
  }, [data, loading, handleAuthFlow, props.history]);

  const handleSubmit = (values) => {
    signInUser({ variables: { usr: values.user, password: values.password } });
  };

  return (
    <div className={styles.login__container}>
      <Formik
        initialValues={{ user: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.user) {
            errors.user = "Please enter your user";
          }
          if (!values.password) {
            errors.password = "Please enter a password";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values);
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <LoginInput
              className={styles.input__container}
              type="text"
              inputName="user"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.user}
              placeholder="david@uni.com.co"
              errors={errors.user}
              errorsClass={styles.inputError}
              errorMessageClass={styles.errorMessage}
              touched={touched}
            ></LoginInput>

            <LoginInput
              className={styles.input__container}
              type="password"
              inputName="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder=""
              errors={errors.password}
              errorsClass={styles.inputError}
              errorMessageClass={styles.errorMessage}
              touched={touched}
            ></LoginInput>
            <button
              type="submit"
              disabled={isSubmitting || errors.user || errors.password}
            >
              {loading ? "Loading..." : "Login"}
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
