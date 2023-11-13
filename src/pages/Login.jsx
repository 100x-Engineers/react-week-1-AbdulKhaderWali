import LoginHeader from "../components/login/LoginHeader";
import LoginMain from "../components/login/LoginMain";

const Login = () => {
	return (
		<div className='bg-neutral-1000 min-h-screen'>
			<div className=' font-inter flex flex-wrap gap-48 '>
				<LoginHeader />
				<LoginMain />
			</div>
		</div>
	);
};

export default Login;
