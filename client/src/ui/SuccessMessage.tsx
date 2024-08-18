import { Link } from "react-router-dom";

function SuccessMessage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src="./src/assets/check.png" alt="Account successfully created" />
      <p className="mb-1 mt-4 text-center text-lg font-semibold sm:mx-auto sm:text-xl">
        You have successfully created your account
      </p>
      <Link
        to="/"
        className="text-sm font-light text-yellow-600 underline underline-offset-2 sm:text-base"
      >
        Go back to login
      </Link>
    </div>
  );
}

export default SuccessMessage;
