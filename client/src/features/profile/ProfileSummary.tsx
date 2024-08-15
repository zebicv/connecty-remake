import { AiOutlineMenu } from "react-icons/ai";

function ProfileSummary({ handleIsMenuVisible, isMenuVisible }) {
  return (
    <div>
      <div className="mb-6 flex gap-2 md:flex-col md:gap-1">
        <img
          src="./src/assets/profile2.png"
          alt="Profile picture"
          className="h-12 w-12 rounded-full object-cover md:h-20 md:w-20"
        ></img>

        <div className="grow">
          <p className="mb-[-3px] text-sm font-semibold md:text-lg">Test</p>
          <p className="text-xs text-slate-400 md:text-sm">test@email.com</p>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <button
          className="flex basis-full items-center justify-center gap-0.5 rounded-lg bg-yellow-400 px-6 py-2.5 text-xs font-semibold duration-200 ease-linear md:hidden"
          onClick={handleIsMenuVisible}
        >
          <AiOutlineMenu />
          <span>Menu</span>
        </button>
      </div>
    </div>
  );
}

export default ProfileSummary;
