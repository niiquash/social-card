const ProfilePhoto = (props) => {
  return (
    <header className="background">
      <img
        className="background--backdrop"
        src={props.background.src}
        alt={props.background.alt}
      />
      <img
        className="background--profile__photo"
        src={props.photo.src}
        alt={props.photo.alt}
      />
    </header>
  );
};

export default ProfilePhoto;
