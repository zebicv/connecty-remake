import ProfileMenuItem from "./ProfileMenuItem";

function ProfileMenu({ activeTabIndex, handleActiveTab, profileMenuData }) {
  return (
    <ul className="divide-y">
      {profileMenuData.map((item, index: number) => (
        <ProfileMenuItem
          item={item}
          key={index}
          index={index}
          activeTabIndex={activeTabIndex}
          handleActiveTab={handleActiveTab}
        />
      ))}
    </ul>
  );
}

export default ProfileMenu;
