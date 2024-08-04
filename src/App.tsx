import UserProfile from "./pages/user-profile/UserProfile";
import UserProfileProduction from "./pages/user-profile/UserProfileProduction";

import "./assets/styles/tailwind.css";

const projectStatus = process.env.NODE_ENV;

function App() {
  console.log(projectStatus);

  return projectStatus === "development" ? (
    <UserProfile />
  ) : (
    <UserProfileProduction />
  );
}

export default App;
