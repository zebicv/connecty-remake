import { useNavigate, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl font-semibold md:text-5xl">
        Page not found
      </h1>

      <div className="mb-2 md:text-lg">
        <p>{error.data || error.message}</p>

        <p>Try going back to the previous page:</p>
      </div>

      <button
        className="text-base text-yellow-600 hover:text-yellow-700 hover:underline md:text-lg"
        onClick={() => navigate(-1)}
      >
        &larr; Go back
      </button>
    </div>
  );
}

export default ErrorPage;
