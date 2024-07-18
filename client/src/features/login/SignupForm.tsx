import { Form } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Input from "../../ui/Input";
import Button from "../../ui/Button";
import ErrorMessage from "../../ui/ErrorMessage";

import { validateInput } from "../../utils/helpers";
import { State, Errors } from "../../utils/interfaces";

function SingupForm() {
  const [state, setState] = useState<State>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    bio: "",
  });
  const [errors, setErrors] = useState<Errors>({
    username: [],
    email: [],
    password: [],
    confirmPassword: [],
  });

  const navigate = useNavigate();

  const handleUsername = (username: string) => {
    setState((curState: State) => ({
      ...curState,
      username: username,
    }));

    setErrors((curState: Errors) => ({
      ...curState,
      username: [],
    }));
  };

  const handleEmail = (email: string) => {
    setState((curState: State) => ({
      ...curState,
      email: email,
    }));

    setErrors((curState: Errors) => ({
      ...curState,
      email: [],
    }));
  };

  const handlePassword = (password: string) => {
    setState((curState: State) => ({
      ...curState,
      password: password,
    }));

    setErrors((curState: Errors) => ({
      ...curState,
      password: [],
    }));
  };

  const handleConfirmPassword = (password: string) => {
    setState((curState: State) => ({
      ...curState,
      confirmPassword: password,
    }));

    setErrors((curState: Errors) => ({
      ...curState,
      confirmPassword: [],
    }));
  };

  const handleSwitch = () => {
    navigate("/");
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateInput(state);
    setErrors(validationErrors);

    if (
      !Object.values(validationErrors).every(
        (fieldError) => fieldError.length === 0,
      )
    )
      return;

    try {
      const response = await fetch("http://localhost:8080/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: state.email,
          username: state.username,
          password: state.password,
          confirmPassword: state.confirmPassword,
          bio: state.bio,
        }),
      });

      const result = await response.json();

      if (result.message === "User already exists.") {
        throw new Error(result.message);
      }

      navigate("/home");
    } catch (error) {
      setErrors((curState: Errors) => ({
        ...curState,
        email: [...curState.email, error.message || error.toString()],
      }));
    }
  };

  return (
    <main className="flex h-lvh items-center justify-center border">
      <form
        method="POST"
        className="rounded-lg bg-white p-10 shadow-lg sm:w-[440px]"
        onSubmit={handleOnSubmit}
      >
        <div className="mb-6 flex items-center justify-between gap-10 max-[350px]:gap-6">
          <h1 className="text-lg font-semibold">Sign up</h1>
          <button
            type="button"
            className="text-sm text-yellow-600 underline underline-offset-4"
            onClick={handleSwitch}
          >
            I have an account
          </button>
        </div>

        <div>
          <Input
            fieldName="username"
            placeholder="John Doe"
            type="text"
            onChange={handleUsername}
          />

          <ul>
            {errors.username.length > 0 &&
              errors.username.map((err: string, index: number) => (
                <ErrorMessage key={index}>{err}</ErrorMessage>
              ))}
          </ul>
        </div>

        <div>
          <Input
            fieldName="email"
            placeholder="me@example.com"
            type="email"
            onChange={handleEmail}
          />

          <ul>
            {errors.email.length > 0 &&
              errors.email.map((err: string, index: number) => (
                <ErrorMessage key={index}>{err}</ErrorMessage>
              ))}
          </ul>
        </div>

        <div>
          <Input
            fieldName="create_password"
            placeholder="*********"
            type="password"
            onChange={handlePassword}
          />

          <ul>
            {errors.password.length > 0 &&
              errors.password.map((err: string, index: number) => (
                <ErrorMessage key={index}>{err}</ErrorMessage>
              ))}
          </ul>
        </div>

        <div>
          <Input
            fieldName="confirm_password"
            placeholder="*********"
            type="password"
            onChange={handleConfirmPassword}
          />

          <ul>
            {errors.confirmPassword.length > 0 &&
              errors.confirmPassword.map((err: string, index: number) => (
                <ErrorMessage key={index}>{err}</ErrorMessage>
              ))}
          </ul>
        </div>

        <div className="flex justify-between gap-4">
          {/* <Button type="button" onClick={handleSwitch}>
        Switch to login
      </Button> */}
          <Button type="submit">Sign up</Button>
        </div>
      </form>
    </main>
  );
}

export default SingupForm;

// <main className="flex h-lvh items-center justify-center">
//   <Form method="post">
//     <Input
//       fieldName="username"
//       placeholder="John Doe"
//       type="text"
//       onChange={handleUsername}
//     />
//     <Input
//       fieldName="email"
//       placeholder="me@example.com"
//       type="email"
//       onChange={handleEmail}
//     />
//     <Input
//       fieldName="create_password"
//       placeholder="*********"
//       type="password"
//       onChange={handlePassword}
//     />
//     <Input
//       fieldName="confirm_password"
//       placeholder="*********"
//       type="password"
//       onChange={handleConfirmPassword}
//     />

//     <div className="flex justify-between gap-4">
//       <Button type="button" onClick={handleSwitch}>
//         Switch to login
//       </Button>
//       <Button type="submit">Sign up</Button>
//     </div>
//   </Form>
// </main>
