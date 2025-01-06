import Marker from "../assets/marker.svg";
import Email from "../assets/email.svg";

const Info = () => {
  return (
    <div className="info">
      <div className="info--location-contact">
        <a href="#" className="info--location">
          <img
            src={Marker}
            alt="location icon"
            className="info--location__icon"
          />
          <span className="info--location__text">Kittenville</span>
        </a>
        <a href="#" className="info--email">
          <img src={Email} alt="email icon" className="info--email__icon" />
          <span className="info--email__text">Send Email</span>
        </a>
      </div>
      <div className="info--followers-following">
        <div className="info--followers">
          <span className="info--followers__number">8,100</span>
          <span className="info--followers__text">Followers</span>
        </div>
        <div className="info--following">
          <span className="info--following__number">3,650</span>
          <span className="info--following__text">Following</span>
        </div>
      </div>
    </div>
  );
};

export default Info;
