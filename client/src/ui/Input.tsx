import { formatLabel } from "../utils/helpers";

function Input({ fieldName, type, onChange, placeholder }) {
  const label = formatLabel(fieldName);

  return (
    <div className="mb-2.5 flex flex-col items-center gap-1">
      <label
        htmlFor={fieldName}
        className="self-start pl-1 text-sm font-medium"
      >
        {label}
      </label>

      <input
        type={type}
        name={fieldName}
        id={fieldName}
        placeholder={placeholder}
        required
        className="h-10 w-full grow rounded-lg border border-stone-200 px-4 py-2 text-xs focus:outline-none focus:outline-offset-4 focus:ring focus:ring-yellow-400 focus:ring-offset-1 sm:h-10  sm:text-sm"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default Input;
