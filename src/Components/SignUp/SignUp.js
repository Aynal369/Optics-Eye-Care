import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {
  const {
    setUser,
    setIsLoading,
    signInWithGoogle,
    registerUser,
    updateUserName,
  } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const url = location.state?.from || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleGoogleAuth = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setIsLoading(true);
        setUser(user);
        swal("Good job!", "Google Authentication Successfully", "success");
        navigate(url);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onSubmit = (data) => {
    registerUser(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setIsLoading(true);
        updateUserName(data.name);
        setUser(user);
        swal(
          "Good job!",
          "Registered New User Successfully Please LogIn Now",
          "success"
        );
        navigate(url);
      })
      .catch((error) => {
        const errorMessage = error.message;
        swal("Alert!", { errorMessage }, "error");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <section id="signup">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-5">
            <div className="bg-light shadow pt-4">
              <h3 className="text-center">SignUp</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-75">
                <div className="mb-4">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="your name"
                    className="form-control rounded-pill"
                    {...register("name", {
                      required: "required",
                      minLength: {
                        value: 4,
                        message: "min length is 4 characters",
                      },
                    })}
                  />
                  {errors.name && (
                    <span
                      style={{ color: "red", fontSize: "12px" }}
                      role="alert"
                    >
                      {errors.name.message}
                    </span>
                  )}
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="name@example.com"
                    className="form-control rounded-pill"
                    {...register("email", {
                      required: "required",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format",
                      },
                    })}
                  />
                  {errors.email && (
                    <span
                      style={{ color: "red", fontSize: "12px" }}
                      role="alert"
                    >
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    className="form-control rounded-pill"
                    {...register("password", {
                      required: "required",
                      pattern: {
                        value:
                          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
                        message: "Password min length is 8)",
                      },
                    })}
                  />
                  {errors.password && (
                    <span
                      style={{ color: "red", fontSize: "12px" }}
                      role="alert"
                    >
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <button
                  type="submit"
                  className="btn btn-dark form-control rounded-pill"
                >
                  Create New Account
                </button>
              </form>
              <div className="text-center mt-4">
                <p>
                  Already have an account
                  <button
                    type="button"
                    className="btn btn-outline-dark rounded-pill mx-2 px-4"
                  >
                    <Link style={{ textDecoration: "none" }} to="/login">
                      Login
                    </Link>
                  </button>
                </p>
              </div>

              <hr />
              <div className="text-center pb-4">
                <p>
                  <span className="fs-5 fw-bold me-2">Or</span>
                  Connect with social media
                </p>
                <button
                  onClick={handleGoogleAuth}
                  type="button"
                  className="btn btn-danger rounded-pill w-50"
                >
                  <FontAwesomeIcon icon={faGoogle} /> Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
