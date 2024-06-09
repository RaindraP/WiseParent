import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jsonwebtoken";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    //req api
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/auth/login",
        {
          email,
          password,
        }
      );

      console.log("Login successful:", response.data);
      const userData = response.data;

      localStorage.setItem(
        "user",
        JSON.stringify({ name: userData.user.name, email: userData.user.email })
      );

      localStorage.setItem("token", userData.authorization.token);
    } catch (error) {
      console.error("Login error:", error);
    }

    // Redirect user to "/"
    navigate("/");
  };

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <div className="grid lg:grid-cols-12 min-h-full">
        <div className="col-span-6">
          <img src="/img/login.jpg" alt="Login" />
        </div>
        <div className="flex flex-1 flex-col justify-center col-span-6 px-6 lg:px-8 py-12">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-primary600">
              Login
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full max-w-sm lg:max-w-md">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary700 sm:text-sm sm:leading-6 px-4"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary700 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-primary600 hover:text-primary700"
                >
                  Forgot password?
                </a>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-primary600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary700"
                >
                  Log In
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-600">
              Not a member?{" "}
              <a
                href="/register"
                className="font-semibold leading-6 text-primary600 hover:text-primary700"
              >
                Register Now
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
