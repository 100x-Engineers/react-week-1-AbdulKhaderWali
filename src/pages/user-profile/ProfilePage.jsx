import React from "react";
import Button from "../../components/Button";
import Tweet from "../../components/Tweet";
// import user_background from "../../../public/user_background.png";

const ProfilePage = () => {
	const componentsArray = Array.from({ length: 10 }, (_, index) => (
		<Tweet key={index} /> // Make sure to provide a unique key
	));
	return (
		<div className='bg-neutral-1000 text-neutral-50 font-inter w-full'>
			<header className='w-full'>
				<img
					src='/user_background.png'
					alt='Background'
					className='w-full object-cover h-[150px]'
				/>

				<section className='pl-5 pr-[14px] relative'>
					<img
						src='/user_avatar.png'
						alt='User'
						className='w-[68px] h-[68px] rounded-full absolute -top-9'
					/>
					<div>
						<a href='./edit-profile.html' className='flex justify-end pt-2'>
							<Button
								variant={"outlined-white"}
								size={"base"}
								version={"normal"}
							>
								Edit profile
							</Button>
						</a>
					</div>
				</section>
			</header>
			{componentsArray}
			<footer className='fixed bottom-0 left-0 w-full'>
				<div className='flex justify-end mb-9 items-center gap-1 mr-5'>
					<div className='bg-blue-default p-4 rounded-full'>
						<a href='../compose-tweet/'>
							<svg
								width='32'
								height='32'
								viewBox='0 0 32 32'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<g id='Content/Add'>
									<path
										id='Vector'
										d='M25.3333 17.3334H17.3333V25.3334H14.6667V17.3334H6.66666V14.6667H14.6667V6.66675H17.3333V14.6667H25.3333V17.3334Z'
										fill='#F9F9F9'
									/>
								</g>
							</svg>
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default ProfilePage;
