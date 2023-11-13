import Button from "../../components/Button";
import Input from "../../components/Input";

const EditProfile = () => {
	return (
		<div className='bg-neutral-1000 text-neutral-50 font-inter w-full px-4 min-h-screen'>
			<header className='py-3 w-full flex items-center justify-between'>
				<a href='./index.html' className='flex gap-5'>
					<img src='/arrow-left.svg' alt='Arrow Left' />
					<p>Edit profile</p>
				</a>
				<a href='./index.html'>
					<Button variant={"default-white"} size={"base"} version={"normal"}>
						Save
					</Button>
				</a>
			</header>
			<section>
				<div className='relative flex w-full'>
					<img
						className='h-52 w-full object-cover'
						src='/user_background.png'
						alt='Background'
					/>
					<div className='absolute flex h-full w-full items-center justify-center gap-2'>
						<a
							href='#'
							className='rounded-full bg-neutral-1000 bg-opacity-60 p-1'
						>
							<img className='h-6 w-6' src='/cameraPlus.png' />
						</a>
						<a
							href='#'
							className='rounded-full bg-neutral-1000 bg-opacity-60 p-1'
						>
							<img className='h-6 w-6' src='/cross.png' />
						</a>
					</div>
				</div>
				<button className='top-52 left-9 absolute rounded-full bg-neutral-1000 bg-opacity-60 p-1'>
					<img
						className='h-20 w-20 rounded-full border-4 border-neutral-1000'
						src='/user_avatar.png'
					/>
				</button>
			</section>
			<main className='mt-8'>
				{/* Inputs */}
				<section className='flex flex-col gap-8 items-center self-stretch'>
					<Input label={"Name"} value={"something"} setValue={function () {}} />
					<Input label={"Bio"} value={"something"} setValue={function () {}} />
					<Input
						label={"Location"}
						value={"something"}
						setValue={function () {}}
					/>
					<Input
						label={"Website"}
						value={"something"}
						setValue={function () {}}
					/>
				</section>
			</main>
		</div>
	);
};

export default EditProfile;
