import { AiOutlineSave } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";

import Input from "../../ui/Input";

function EditPersonalInfo() {
  return (
    <div className="rounded-lg py-4">
      <div className="mb-5">
        <h1 className="mb-[-4px] text-base font-semibold md:text-xl lg:text-2xl">
          Personal Info
        </h1>
        <p className="text-slate-400 md:text-sm">
          Manage your personal information
        </p>
      </div>

      <div>
        <form>
          <Input fieldName="Username" type="text" />
          <Input fieldName="Email" type="email" />

          <div className="mt-4 flex justify-between">
            <button
              type="submit"
              className="flex cursor-pointer items-center justify-center gap-1 rounded-lg bg-yellow-400 p-2.5 text-xs font-semibold text-stone-700 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 md:px-4 md:py-3 md:text-sm"
            >
              <AiOutlineSave />
              <span>Save changes</span>
            </button>

            <button
              type="submit"
              className="flex cursor-pointer items-center justify-center gap-1 rounded-lg bg-white p-2.5 text-xs font-semibold text-yellow-700 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 md:text-sm"
            >
              <AiOutlineDelete />
              <span>Delete account</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditPersonalInfo;
