import Background from "../assets/backdrop.jpg";
import Photo from "../assets/mr-mittens.jpg";

const ProfilePhoto = () => {
  return (
    <header className="background">
      <img
        className="background--backdrop"
        src={Background}
        alt="background photo"
      />
      <img
        className="background--profile__photo"
        src={Photo}
        alt="photo of mr mittens"
      />
    </header>
  );
};

export default ProfilePhoto;
