function ErrorMessage({ children }) {
  return (
    <li className="mt-2 rounded-lg bg-red-100 p-2 text-xs text-red-700">
      {children}
    </li>
  );
}

export default ErrorMessage;
