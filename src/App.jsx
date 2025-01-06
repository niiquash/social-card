import ProfilePhoto from "./components/ProfilePhoto";
import Bio from "./components/Bio";
import Info from "./components/Info";
import FollowButton from "./components/FollowButton";

const App = () => {
  return (
    <div className="App">
      <ProfilePhoto />
      <Bio />
      <Info />
      <FollowButton />
    </div>
  );
};

export default App;
