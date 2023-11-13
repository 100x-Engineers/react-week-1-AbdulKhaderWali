import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Signup4 = () => {
	const [password, setPassword] = useState("");
	return (
		<div className='bg-neutral-1000 text-neutral-50 px-4 font-inter w-full min-h-screen flex flex-col justify-between'>
			<div>
				<header className='flex gap-5 py-3 items-center'>
					<a href='./create-account-step-3.html'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width={24}
							height={24}
							viewBox='0 0 24 24'
							fill='none'
						>
							<path
								d='M18 6L6 18'
								stroke='#F9F9F9'
								strokeWidth={2}
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M6 6L18 18'
								stroke='#F9F9F9'
								strokeWidth={2}
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</a>
					<p className='leading-normal text-base font-bold'>Step 4 of 4</p>
				</header>
				<main className='flex flex-col gap-10 self-stretch justify-between'>
					<section className='flex flex-col gap-2'>
						<h1 className='text-2xl leading-normal font-bold pt-3'>
							You’ll need a password
						</h1>
						<p className='text-sm font-normal text-neutral-500'>
							Make sure it’s 8 characters or more
						</p>
					</section>
					{/* Inputs */}
					<section className='flex flex-col gap-3 items-center self-stretch'>
						<Input
							label={"Password"}
							value={password}
							setValue={setPassword}
							type={"password"}
						/>
					</section>
				</main>
			</div>
			<footer className='mb-5'>
				<Button
					size={"base"}
					variant={"default-white"}
					version={"normal"}
					disabled={password.length < 8}
					full={true}
				>
					Next
				</Button>
			</footer>
		</div>
	);
};

export default Signup4;
