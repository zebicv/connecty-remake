import { useState } from "react";

import * as AiIcons from "react-icons/ai";

import ProfileMenu from "./ProfileMenu";
import ProfileSummary from "./ProfileSummary";
import EditPersonalInfo from "./EditPersonalInfo";
import EditPassword from "./EditPassword";

const profileMenuData = [
  {
    title: "Personal Info",
    icon: <AiIcons.AiOutlineUser />,
    page: <EditPersonalInfo />,
  },
  {
    title: "Password & Security",
    icon: <AiIcons.AiOutlineLock />,
    page: <EditPassword />,
  },
];

function Profile() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleActiveTab = (index: number) => {
    setActiveTabIndex(index);
  };

  const handleIsMenuVisible = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <main className="mx-4 mb-4 flex max-w-[95%] flex-col text-xs sm:mx-auto sm:max-w-xl md:mx-auto md:max-w-4xl md:flex-row md:gap-4 md:px-4 md:py-10">
      <aside className="mb-4 rounded-lg border bg-white px-8 py-4 shadow-lg md:mb-0 md:basis-4/12 md:px-6 md:py-8">
        <ProfileSummary
          handleIsMenuVisible={handleIsMenuVisible}
          isMenuVisible={isMenuVisible}
        />

        <ProfileMenu
          activeTabIndex={activeTabIndex}
          handleActiveTab={handleActiveTab}
          profileMenuData={profileMenuData}
          isMenuVisible={isMenuVisible}
        />
      </aside>

      <section className="basis-full rounded-lg bg-white px-4 shadow-lg md:basis-8/12">
        {profileMenuData[activeTabIndex].page}
      </section>
    </main>
  );
}

export default Profile;
