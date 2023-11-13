import { useState } from "react";
import Button from "../components/Button";

const ComposeTweet = () => {
	const [tweet, setTweet] = useState("");
	return (
		<div className='bg-neutral-1000 text-neutral-50 font-inter w-full px-4 min-h-screen'>
			<header className='py-3 w-full flex items-center justify-between'>
				<a href='../home-feed/'>
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
				<a href='../home-feed/'>
					<Button size={"base"} variant={"default-blue"} version={"normal"}>
						Post
					</Button>
				</a>
			</header>
			<main>
				<section className='py-2'>
					<div className='w-full bg-transparent flex gap-3'>
						<img src='/user_avatar.png' className='rounded-full w-9' />
						<input
							type='text'
							placeholder="What's happening?"
							value={tweet}
							onChange={(e) => setTweet(e.target.value)}
							className='w-full break-normal bg-transparent focus:outline-none caret-blue-default text-neutral-50 text-20 font-regular placeholder:text-neutral-600'
						/>
					</div>
				</section>
			</main>
			<footer className='fixed bottom-0 left-0 w-full'>
				<p className='px-4 py-3 border-t text-sm leading-normal font-normal text-neutral-500'>
					{tweet.length}/280
				</p>
			</footer>
		</div>
	);
};

export default ComposeTweet;
