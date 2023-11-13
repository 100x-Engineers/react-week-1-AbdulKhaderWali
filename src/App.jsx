import Login from "./pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Signup1 from "./pages/signup/Signup1";
import Signup2 from "./pages/signup/step-2";
import Signup3 from "./pages/signup/step-3";
import Signup4 from "./pages/signup/step-4";
import ProfilePage from "./pages/user-profile/ProfilePage";
import EditProfile from "./pages/user-profile/EditProfile";
import HomeFeed from "./pages/HomeFeed";
import ComposeTweet from "./pages/ComposeTweet";

function App() {
	// return <div>{isLoggedIn ? <Tweet /> : <Login />}</div>;
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Login />,
		},
		{
			path: "/signup1",
			element: <Signup1 />,
		},
		{
			path: "/signup2",
			element: <Signup2 />,
		},
		{
			path: "/signup3",
			element: <Signup3 />,
		},
		{
			path: "/signup4",
			element: <Signup4 />,
		},
		{
			path: "/profile",
			element: <ProfilePage />,
		},
		{
			path: "/home",
			element: <HomeFeed />,
		},
		{
			path: "/editprofile",
			element: <EditProfile />,
		},
		{
			path: "/tweet",
			element: <ComposeTweet />,
		},
	]);
	return (
		<UserProvider>
			<RouterProvider router={router} />
		</UserProvider>
	);
}

export default App;
