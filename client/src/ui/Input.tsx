import { formatLabel } from "../utils/helpers";

function Input({ fieldName, type, onChange, placeholder = "" }) {
  const label = formatLabel(fieldName);

  return (
    <div className="mb-2.5 flex grow flex-col items-center gap-0.5">
      <label
        htmlFor={fieldName}
        className="self-start pl-1 text-xs font-medium sm:text-sm"
      >
        {label}
      </label>

      <input
        type={type}
        name={fieldName}
        id={fieldName}
        placeholder={placeholder}
        required
        className={`h-10 w-full rounded-lg border border-stone-200 px-4 py-2 text-xs focus:outline-none focus:outline-offset-4 focus:ring focus:ring-yellow-400 focus:ring-offset-1 sm:text-sm`}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default Input;
