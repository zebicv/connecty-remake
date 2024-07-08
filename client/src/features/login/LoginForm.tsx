import { Form } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Input from "../../ui/Input";
import Button from "../../ui/Button";
import ErrorMessage from "../../ui/ErrorMessage";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleEmail = (email: string) => {
    setEmail(email);
  };

  const handlePassword = (password: string) => {
    setPassword(password);
    setErrors((curState) => ({
      ...curState,
      password: "",
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.status === 500) throw new Error("Password is not correct");

      navigate("/home");
    } catch (error) {
      setErrors({
        email: "",
        password: error.message,
      });
    }
  };

  const handleSwitch = () => {
    navigate("/signup");
  };

  return (
    <main className="flex h-lvh items-center justify-center border">
      <form
        method="POST"
        className="rounded-lg bg-white p-10 shadow-lg sm:w-[440px]"
        onSubmit={handleOnSubmit}
      >
        <div className="mb-6 flex items-center justify-between gap-10 max-[350px]:gap-6">
          <h1 className="text-lg font-semibold">Sign in</h1>
          <button
            type="button"
            className="text-xs text-yellow-600 underline underline-offset-4 sm:text-sm"
            onClick={handleSwitch}
          >
            I don't have an account
          </button>
        </div>

        <div>
          <Input
            fieldName="email"
            type="email"
            placeholder="me@example.com"
            onChange={handleEmail}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </div>
        <div>
          <Input
            fieldName="password"
            type="password"
            placeholder="*********"
            onChange={handlePassword}
          />
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </div>

        <div className="flex justify-between gap-4">
          {/* <Button type="button" onClick={handleSwitch}>
            Switch to login
          </Button> */}
          <Button type="submit">Sign in</Button>
        </div>

        <div className="flex items-center justify-center">
          <p className=" mt-2 text-xs font-light text-yellow-600 underline underline-offset-2 sm:text-sm">
            Can't sign in?
          </p>
        </div>
      </form>
    </main>
  );
}

export default LoginForm;
