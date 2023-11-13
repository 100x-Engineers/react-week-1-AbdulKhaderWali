import React from "react";
import Input from "../../components/Input";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Button from "../../components/Button";

const Signup2 = () => {
	const { userData } = useContext(UserContext);
	return (
		<div className='bg-neutral-1000 text-neutral-50 px-4 font-inter w-full min-h-screen flex flex-col justify-between'>
			<div>
				<header className='flex gap-5 py-3 items-center'>
					<a href='./create-account-step-1.html'>
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
					<p className='leading-normal text-base font-bold'>Step 2 of 4</p>
				</header>
				<main className='flex flex-col gap-5 self-stretch justify-between'>
					<section>
						<h1 className='text-2xl leading-normal font-bold pt-3'>
							Create your account
						</h1>
					</section>
					{/* Inputs */}
					<section className='flex flex-col gap-8 items-center self-stretch'>
						<Input
							label={"Name"}
							value={userData.name}
							disabled
							verified={true}
						/>
						{/* Email  */}
						<Input
							label={"Email"}
							value={userData.email}
							disabled
							verified={true}
						/>
						{/* DOB */}
						<Input
							label={"Date of Birth"}
							value={userData.day}
							disabled
							verified={true}
						/>
					</section>
				</main>
			</div>
			<footer className='mb-5'>
				<Button
					variant={"default-blue"}
					size={"base"}
					version={"fat"}
					full={true}
				>
					Sign Up
				</Button>
			</footer>
		</div>
	);
};

export default Signup2;
