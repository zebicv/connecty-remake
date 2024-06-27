import Input from "../../ui/Input";

import { AiOutlineLock } from "react-icons/ai";

function EditPassword() {
  return (
    <div className="rounded-lg py-4">
      <div className="mb-5">
        <h1 className="mb-[-4px] text-base font-semibold lg:text-2xl">
          Password & Security
        </h1>
        <p className="text-slate-400 md:text-sm">
          Manage your password settings and secure your account
        </p>
      </div>

      <form>
        <Input fieldName="Current password" type="password" />
        <Input fieldName="New password" type="password" />
        <Input fieldName="Confirm password" type="password" />

        <div className="mt-4 flex justify-between">
          <button
            type="submit"
            className="flex cursor-pointer items-center justify-center gap-1 rounded-lg bg-yellow-400 p-2.5 text-xs font-semibold text-stone-700 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 md:px-4 md:py-3 md:text-sm"
          >
            <AiOutlineLock />
            <span>Update password</span>
          </button>

          <button className="cursor-pointer text-yellow-600 underline underline-offset-2">
            Forgot password?
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditPassword;
