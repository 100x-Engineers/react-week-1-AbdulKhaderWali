import { Link } from "react-router-dom";
import Tweet from "../components/Tweet";

const HomeFeed = () => {
	const componentsArray = Array.from({ length: 10 }, (_, index) => (
		<Tweet key={index} />
	));
	return (
		<div className='bg-neutral-1000 text-neutral-50 font-inter w-full min-h-screen'>
			<header className='px-4 py-3 w-full flex items-center justify-between'>
				<Link to={"/profile"}>
					<img
						src='/user_avatar.png'
						alt='UserAvatar'
						className='w-9 h-9 shrink-0 rounded-full'
					/>
				</Link>
				<div className='flex items-end'>
					<svg
						width={42}
						height={19}
						viewBox='0 0 42 19'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<g id={100}>
							<path
								d='M7.73038 0.238636V17.6932H4.56845V3.31534H4.46618L0.383789 5.9233V3.02557L4.72186 0.238636H7.73038Z'
								fill='#F9F9F9'
							/>
							<path
								d='M18.6139 18.0256C17.2105 18.0256 16.0059 17.6705 15.0003 16.9602C14.0003 16.2443 13.2304 15.2131 12.6906 13.8665C12.1565 12.5142 11.8895 10.8864 11.8895 8.98295C11.8952 7.07955 12.165 5.46023 12.6991 4.125C13.2389 2.78409 14.0088 1.76136 15.0088 1.05682C16.0145 0.352273 17.2162 0 18.6139 0C20.0116 0 21.2133 0.352273 22.219 1.05682C23.2247 1.76136 23.9946 2.78409 24.5287 4.125C25.0684 5.46591 25.3383 7.08523 25.3383 8.98295C25.3383 10.892 25.0684 12.5227 24.5287 13.875C23.9946 15.2216 23.2247 16.25 22.219 16.9602C21.219 17.6705 20.0173 18.0256 18.6139 18.0256ZM18.6139 15.358C19.7048 15.358 20.5656 14.821 21.1963 13.7472C21.8327 12.6676 22.1508 11.0795 22.1508 8.98295C22.1508 7.59659 22.0059 6.43182 21.7162 5.48864C21.4264 4.54545 21.0173 3.83523 20.4889 3.35796C19.9605 2.875 19.3355 2.63352 18.6139 2.63352C17.5287 2.63352 16.6707 3.1733 16.04 4.25284C15.4094 5.3267 15.0912 6.90341 15.0855 8.98295C15.0798 10.375 15.219 11.5455 15.5031 12.4943C15.7929 13.4432 16.202 14.1591 16.7304 14.642C17.2588 15.1193 17.8866 15.358 18.6139 15.358Z'
								fill='#F9F9F9'
							/>
							<path
								d='M34.6217 18.0256C33.2183 18.0256 32.0138 17.6705 31.0081 16.9602C30.0081 16.2443 29.2382 15.2131 28.6984 13.8665C28.1643 12.5142 27.8973 10.8864 27.8973 8.98295C27.903 7.07955 28.1729 5.46023 28.7069 4.125C29.2467 2.78409 30.0166 1.76136 31.0166 1.05682C32.0223 0.352273 33.224 0 34.6217 0C36.0194 0 37.2211 0.352273 38.2268 1.05682C39.2325 1.76136 40.0024 2.78409 40.5365 4.125C41.0763 5.46591 41.3461 7.08523 41.3461 8.98295C41.3461 10.892 41.0763 12.5227 40.5365 13.875C40.0024 15.2216 39.2325 16.25 38.2268 16.9602C37.2268 17.6705 36.0251 18.0256 34.6217 18.0256ZM34.6217 15.358C35.7126 15.358 36.5734 14.821 37.2041 13.7472C37.8405 12.6676 38.1586 11.0795 38.1586 8.98295C38.1586 7.59659 38.0138 6.43182 37.724 5.48864C37.4342 4.54545 37.0251 3.83523 36.4967 3.35796C35.9683 2.875 35.3433 2.63352 34.6217 2.63352C33.5365 2.63352 32.6785 3.1733 32.0479 4.25284C31.4172 5.3267 31.099 6.90341 31.0933 8.98295C31.0876 10.375 31.2268 11.5455 31.5109 12.4943C31.8007 13.4432 32.2098 14.1591 32.7382 14.642C33.2666 15.1193 33.8944 15.358 34.6217 15.358Z'
								fill='#F9F9F9'
							/>
						</g>
					</svg>
					<svg
						width={13}
						height={15}
						viewBox='0 0 13 15'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<g id='Group 27162'>
							<path
								id='x'
								d='M2.10187 0.93457L5.47687 6.51696L8.85187 0.93457H10.6161L6.40585 7.48003L10.6161 14.0255H8.85187L5.47687 8.62207L2.10187 14.0255H0.346191L4.50528 7.48003L0.346191 0.93457H2.10187Z'
								fill='#F9F9F9'
							/>
							<path
								id='x_2'
								d='M4.10187 0.93457L7.47687 6.51696L10.8519 0.93457H12.6161L8.40585 7.48003L12.6161 14.0255H10.8519L7.47687 8.62207L4.10187 14.0255H2.34619L6.50528 7.48003L2.34619 0.93457H4.10187Z'
								fill='#F9F9F9'
							/>
						</g>
					</svg>
				</div>
				{/* Intentionally kept this empty */}
				<div />
			</header>
			<section className='w-full pt-5 border-t border-neutral-700'>
				<div className='w-full flex items-center justify-center text-neutral-50 gap-40 shrink-0 border-b border-neutral-700'>
					<div className='pb-3 border-blue-default border-b-2'>For you</div>
					<div className='pb-3'>Following</div>
				</div>
			</section>
			{componentsArray}
			<footer className='fixed bottom-0 left-0 w-full'>
				<div className='flex justify-end mb-3 items-center gap-1 mr-5'>
					{/* <div className='px-8 py-3 bg-searchbar-fill rounded-5xl'>
						Copied to clipboard
					</div> */}
					<Link to={"/tweet"} className='bg-blue-default p-4 rounded-full'>
						<img src='/Add.svg' alt='' />
					</Link>
				</div>
				<div className='bg-neutral-1000 flex gap-10 items-center justify-center px-6 py-5'>
					<img src='/homeFill.svg' alt='Home' />
					<img src='/userEmpty.svg' alt='User' />
				</div>
			</footer>
		</div>
	);
};

export default HomeFeed;
