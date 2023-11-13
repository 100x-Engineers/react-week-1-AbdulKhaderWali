import Button from "../Button";

const LoginMain = () => {
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
				>
					Create Account
				</Button>
				{/* <button className='bg-neutral-50 w-full rounded-5xl shadow-1 backdrop-blur-xl hover:bg-neutral-200 font-bold leading-normal text-base flex items-center justify-center gap-2.5'>
							<a href='./create-account-step-1.html' className='px-6 py-2'>
								Create account
							</a>
						</button> */}
				{/* </div> */}
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
					>
						Sign in
					</Button>
				</div>
			</section>
		</main>
	);
};

export default LoginMain;
