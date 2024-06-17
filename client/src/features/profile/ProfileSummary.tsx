function ProfileSummary() {
  return (
    <div className="mb-10 flex gap-4">
      <img
        src="./src/assets/profile1.png"
        alt="Profile picture"
        className="h-16 w-16 rounded-full object-cover"
      ></img>

      <div>
        <p className="font-semibold">Anette Black</p>
        <p className="font-light">annette_black@email.com</p>
      </div>
    </div>
  );
}

export default ProfileSummary;
