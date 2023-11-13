import { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";

const Signup3 = () => {
	const [value, setValue] = useState("");
	const navigate = useNavigate();
	return (
		<div className='bg-neutral-1000 text-neutral-50 px-4 font-inter w-full min-h-screen flex flex-col justify-between'>
			<div>
				<header className='flex gap-5 py-3 items-center'>
					<Link to={"/signup2"}>
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
					</Link>
					<p className='leading-normal text-base font-bold'>Step 3 of 4</p>
				</header>
				<main className='flex flex-col gap-10 self-stretch justify-between'>
					<section className='flex flex-col gap-2'>
						<h1 className='text-2xl leading-normal font-bold pt-3'>
							We sent you a code
						</h1>
						<p className='text-sm font-normal text-neutral-500'>
							Enter it below to verify dwaynejohnson@email.com
						</p>
					</section>
					{/* Inputs */}
					<section className='flex flex-col gap-3 items-center self-stretch'>
						<Input
							label={"Verification code"}
							value={value}
							setValue={setValue}
						/>
						<a
							href='#'
							className='text-end w-full text-sm leading-normal font-normal text-blue-default'
						>
							Didn’t receive a code?
						</a>
					</section>
				</main>
			</div>
			<footer className='mb-5'>
				<Button
					variant='default-white'
					size={"base"}
					disabled={value.length < 6}
					version={"normal"}
					full={true}
					onClick={() => {
						if (value.length >= 6) {
							navigate("/signup4");
						}
					}}
				>
					Next
				</Button>
			</footer>
		</div>
	);
};

export default Signup3;
