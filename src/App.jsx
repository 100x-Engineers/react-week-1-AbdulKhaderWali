import Login from "./pages/Login";
import { UserProvider } from "./context/UserContext";
import Signup1 from "./pages/signup/Step-1";
import Signup2 from "./pages/signup/step-2";
import Signup3 from "./pages/signup/step-3";
import Signup4 from "./pages/signup/step-4";
import ProfilePage from "./pages/user-profile/ProfilePage";
import EditProfile from "./pages/user-profile/EditProfile";
import HomeFeed from "./pages/HomeFeed";

function App() {
	// return <div>{isLoggedIn ? <Tweet /> : <Login />}</div>;
	return (
		<UserProvider>
			<Login />
			<Signup1 />
			<Signup2 />
			<Signup3 />
			<Signup4 />
			<ProfilePage />
			<EditProfile />
			<HomeFeed />
		</UserProvider>
	);
}

export default App;
