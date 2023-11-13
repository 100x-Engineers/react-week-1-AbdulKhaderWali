import Button from "../Button";
import { useNavigate } from "react-router-dom";

const LoginMain = () => {
	const navigate = useNavigate();
	return (
		<main className='w-full'>
			<section className='flex flex-col gap-10 px-7'>
				<div className='text-neutral-50 flex flex-col gap-3 items-start'>
					<p className='text-3xl font-extrabold leading-normal'>
						Happening now
					</p>
					<p className='text-base font-medium leading-normal'>join today.</p>
				</div>
				{/* <div className='w-full'> */}
				<Button
					variant='default-white'
					size={"base"}
					full={true}
					version={"normal"}
					onClick={() => navigate("/signup1")}
				>
					Create Account
				</Button>

				<div className='flex items-center justify-center gap-1 self-stretch'>
					<hr className='w-full border-neutral-700' />
					<span className='text-center text-neutral-50 text-base leading-normal'>
						or
					</span>
					<hr className='w-full border-neutral-700' />
				</div>
				<div className='flex flex-col gap-5'>
					<p className='text-neutral-50 font-medium text-xl'>
						already have an account?
					</p>
					<Button
						variant={"outlined-blue"}
						size={"base"}
						full={true}
						version={"normal"}
						onClick={() => alert("bittp click")}
					>
						Sign in
					</Button>
				</div>
			</section>
		</main>
	);
};

export default LoginMain;
