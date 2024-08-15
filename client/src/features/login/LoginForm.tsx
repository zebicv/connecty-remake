import { Form } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Input from "../../ui/Input";
import Button from "../../ui/Button";
import ErrorMessage from "../../ui/ErrorMessage";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleEmail = (email: string) => {
    setEmail(email);
  };

  const handlePassword = (password: string) => {
    setPassword(password);
    setError("");
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      console.log(response);

      if (response.status === 500)
        throw new Error("Email or password is not correct");

      const data = await response.json();
      const authorizedId = data.data.id;
      const authorizedUsername = data.data.username;
      console.log(data);
      localStorage.setItem(
        "currentUser",
        `${authorizedId};${authorizedUsername}`,
      );

      navigate("/home");
    } catch (error) {
      setError(error.message);
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
        </div>
        <div>
          <Input
            fieldName="password"
            type="password"
            placeholder="*********"
            onChange={handlePassword}
          />
          {error && (
            <ul>
              <ErrorMessage>{error}</ErrorMessage>
            </ul>
          )}
        </div>

        <div className="flex justify-between gap-4">
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
