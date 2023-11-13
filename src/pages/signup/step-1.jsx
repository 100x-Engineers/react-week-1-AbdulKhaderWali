import Input from "../../components/Input";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Button from "../../components/Button";
const Signup1 = () => {
	const { userData, setUserData } = useContext(UserContext);
	const handleChange = (field, value) => {
		setUserData((preValue) => ({
			...preValue,
			[field]: value,
		}));
	};
	return (
		<div className='bg-neutral-1000 text-neutral-50 px-4 font-inter w-full min-h-screen flex flex-col justify-between'>
			<div>
				<header className='flex gap-5 py-3 items-center'>
					<a href='./index.html'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
						>
							<path
								d='M18 6L6 18'
								stroke='#F9F9F9'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M6 6L18 18'
								stroke='#F9F9F9'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</a>
					<p className='leading-normal text-base font-bold'>Step 1 of 4</p>
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
							setValue={(value) => handleChange("name", value)}
							type='text'
						/>
						{/* Email  */}
						<Input
							label={"Email"}
							value={userData.email}
							setValue={(value) => handleChange("email", value)}
							type='email'
						/>
						{/* DOB info */}
						<div className='flex flex-col self-stretch gap-2'>
							<p className='text-base leading-normal font-bold'>
								Date of birth
							</p>
							<p className='text-sm leading-normal font-normal'>
								This will not be shown publicly. Confirm your own age, even if
								this account is for a business, a pet, or something else.
							</p>
						</div>
						{/* DOB Inputs  */}
						<Input
							label={"Date of Birth"}
							value={userData.day}
							setValue={(value) => handleChange("day", value)}
						/>
					</section>
				</main>
			</div>
			<footer className='mb-5'>
				<Button
					text={"Create Account"}
					size={"base"}
					variant={"default-white"}
					version={"normal"}
					full={true}
				>
					Create Account
				</Button>
			</footer>
		</div>
	);
};

export default Signup1;
