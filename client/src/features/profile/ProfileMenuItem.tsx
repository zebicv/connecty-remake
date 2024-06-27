function ProfileMenuItem({ item, index, activeTabIndex, handleActiveTab }) {
  const { title, icon } = item;

  const isActiveTab = index === activeTabIndex;

  return (
    <li
      className={`flex cursor-pointer items-center  gap-2 py-3 pl-2 ${isActiveTab ? "border-l-4 border-yellow-400 font-semibold text-yellow-800" : ""} transition-all`}
      onClick={() => handleActiveTab(index)}
    >
      <div>{icon}</div>
      <p>{title}</p>
    </li>
  );
}

export default ProfileMenuItem;
