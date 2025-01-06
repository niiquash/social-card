import ProfilePhoto from "./components/ProfilePhoto";
import Bio from "./components/Bio";
import Info from "./components/Info";
import FollowButton from "./components/FollowButton";
import data from "./data.js";

const App = () => {
  return (
    <div className="App">
      <ProfilePhoto background={data.background} photo={data.photo} />
      <Bio name={data.name} desc={data.description} />
      <Info
        location={data.location}
        email={data.email}
        followers={data.followers}
        following={data.following}
      />
      <FollowButton />
    </div>
  );
};

export default App;
