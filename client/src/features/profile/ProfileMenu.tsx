import ProfileMenuItem from "./ProfileMenuItem";

function ProfileMenu({
  activeTabIndex,
  handleActiveTab,
  profileMenuData,
  isMenuVisible,
}) {
  return (
    <ul
      className={`text-xs md:block md:text-sm  ${isMenuVisible ? "mt-2 block" : "hidden"}`}
    >
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
