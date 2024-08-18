import { Link } from "react-router-dom";

function SuccessMessage() {
  return (
    <div>
      <p>You have successfully created your account</p>
      <Link
        to="/"
        className=" mt-2 text-xs font-light text-yellow-600 underline underline-offset-2 sm:text-sm"
      >
        Go back to login
      </Link>
    </div>
  );
}

export default SuccessMessage;
