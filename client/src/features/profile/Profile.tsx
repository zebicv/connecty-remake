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

  const handleActiveTab = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <main className="mx-auto flex max-w-7xl bg-white px-20">
      <aside className="w-96 ">
        <ProfileSummary />

        <ProfileMenu
          activeTabIndex={activeTabIndex}
          handleActiveTab={handleActiveTab}
          profileMenuData={profileMenuData}
        />
      </aside>

      <section className="basis-full">
        <h1 className="pl-4 text-3xl font-semibold">
          {profileMenuData[activeTabIndex].page}
        </h1>
      </section>
    </main>
  );
}

export default Profile;
