import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import login from "../../../assets/images/login/login.svg";
import { AuthContext } from "../../../Context/UserContex";
import { setAuthToken } from "../../../Utlits/Apis";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const { signIn, signInGithub, signInGoogle, resetPassword } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const froms = location.state?.from?.pathname || "/";

  const handleGoogleSign = () => {
    signInGoogle()
      .then((result) => {
        const user = result.user;
        console.error(user);
        setAuthToken(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGithubSign = () => {
    signInGithub()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const passwordReset = () => {
    resetPassword(userEmail)
      .then(() => {
        toast.success("Successfully please check your email!");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const currentUser = {
          email: user.email,
        };
        console.log(currentUser);
        fetch("https://genis-car-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("genis-Car-Token", data.token);
            navigate(froms, { replace: true });
          });
        Swal.fire("Good job!", "You clicked the button!", "success");
        from.reset();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="hero w-full my-20">
      <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center w-3/4 lg:text-left">
          <img src={login} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100 py-8">
          <form onSubmit={handleSubmit} className="card-body">
            <h1 className="text-5xl py-3 font-bold text-center">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-2xl">Email</span>
              </label>
              <input
                type="email"
                onBlur={(e) => setUserEmail(e.target.value)}
                name="email"
                placeholder="email"
                className="input input-bordered text-xl"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-2xl">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered text-xl"
                required
              />
              <label className="label">
                <p
                  onClick={passwordReset}
                  className="label-text-alt link text-lg link-hover"
                >
                  Forgot password?
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn hover:bg-blue-500 bg-blue-600 outline-0 border-0 text-white"
              >
                Login
              </button>
            </div>
          </form>
          <p className="pb-4 text-center font-medium text-base">
            Or Sign In with
          </p>
          <div className="flex justify-center font-medium text-3xl">
            <p
              onClick={handleGoogleSign}
              className="mr-5 h-12 w-12  bg-slate-300 rounded-full text-blue-500 flex justify-center items-center"
            >
              {" "}
              <FaGoogle></FaGoogle>{" "}
            </p>
            <span className="mr-5 h-12 w-12  bg-slate-300 rounded-full text-blue-500 flex justify-center items-center">
              {" "}
              <FaFacebookF></FaFacebookF>{" "}
            </span>
            <p
              onClick={handleGithubSign}
              className="h-12 w-12 bg-slate-300 rounded-full text-black flex justify-center items-center"
            >
              <FaGithub></FaGithub>
            </p>
          </div>
          <p className="py-4 text-center label-text-alt link link-hover font-medium text-base">
            New To Genius Car Please?{" "}
            <Link to="/signup" className="text-orange-600">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
