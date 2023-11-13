import React, { useState } from "react";

const Input = ({ type, label, value, setValue, verified, ...args }) => {
	const [showPassword, setShowPassword] = useState(true);
	function passwordToggle() {
		setShowPassword(!showPassword);
	}
	return (
		<div className='flex items-center justify-between focus-within:border-blue-default rounded border border-neutral-500 py-4 px-3 relative w-full'>
			<label className='absolute peer-focus:text-blue-default text-neutral-500 font-medium left-4 -top-2 text-xs px-1 leading-regular bg-black pointer-events-none'>
				<p className='text-center'>{label}</p>
			</label>
			<input
				className='bg-transparent peer focus:outline-none grow'
				placeholder={label}
				value={value}
				onChange={(e) => setValue(e.target.value)}
				type={showPassword ? "text" : type}
				{...args}
			/>
			{verified ? (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
				>
					<path
						d='M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z'
						fill='#00BE74'
					/>
				</svg>
			) : (
				<></>
			)}
			{type === "password" &&
				(showPassword ? (
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						onClick={passwordToggle}
						className='cursor-pointer'
					>
						<path
							d='M2 2L22 22'
							stroke='#737373'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335'
							stroke='#737373'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818'
							stroke='#737373'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				) : (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width={24}
						height={24}
						viewBox='0 0 24 24'
						fill='none'
						onClick={passwordToggle}
						className='cursor-pointer'
					>
						<path
							d='M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z'
							stroke='#737373'
							strokeWidth={2}
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z'
							stroke='#737373'
							strokeWidth={2}
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				))}
		</div>
	);
};

export default Input;
