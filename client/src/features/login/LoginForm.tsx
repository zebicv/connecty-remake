import { Form } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Input from "../../ui/Input";
import Button from "../../ui/Button";

function LoginForm() {
  const navigate = useNavigate();

  function handleSwitch() {
    navigate("/signup");
  }

  return (
    <main className="flex h-lvh items-center justify-center border">
      <Form
        method="POST"
        className="rounded-lg bg-white p-10 shadow-lg sm:w-[440px]"
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

        <Input fieldName="email" type="email" placeholder="me@example.com" />
        <Input fieldName="password" type="password" placeholder="*********" />

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
      </Form>
    </main>
  );
}

export default LoginForm;
