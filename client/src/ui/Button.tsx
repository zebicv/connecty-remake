function Button({ children, type, onClick }) {
  const isSubmit = type === "submit" ? true : false;

  if (isSubmit)
    return (
      <button
        type={type}
        className={`mt-2.5 ${isSubmit ? "w-full" : ""} rounded-lg bg-yellow-400 p-2.5 text-sm font-semibold text-stone-700 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 sm:px-4 sm:py-3 sm:text-sm`}
        onClick={onClick}
      >
        {children}
      </button>
    );

  if (!isSubmit)
    return (
      <button
        type={type}
        className={`${isSubmit ? "w-full" : ""} rounded-lg bg-yellow-400 p-2.5 text-sm font-semibold text-stone-700 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 sm:px-4 sm:py-3 sm:text-sm`}
        onClick={onClick}
      >
        {children}
      </button>
    );
}

export default Button;
