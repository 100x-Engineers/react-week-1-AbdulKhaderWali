const Button = ({ children, disabled, size, variant, version, full }) => {
	const base = `font-bold rounded-4xl`;
	const versionType = {
		normal: "px-5 py-2",
		fat: "p-5",
	};
	const variantStyles = {
		"default-white": "text-neutral-1000 bg-neutral-50 hover:bg-neutral-200",
		"default-blue": "text-neutral-50 bg-blue-default hover:bg-blue-hover",
		"outlined-blue":
			"text-blue-default border-stroke border shadow-1 backdrop-blur-xl",
		"outlined-white":
			"text-neutral-50 border-stroke border shadow-1 backdrop-blur-xl",
	};
	const sizeStyles = {
		base: "text-base",
		sm: "text-sm",
		md: "text-md",
		lg: "text-lg",
	};
	const disabledStyle = disabled ? "cursor-not-allowed opacity-50" : "";
	const classes = `${base} ${variantStyles[variant]} ${
		sizeStyles[size]
	} ${disabledStyle} ${versionType[version]} ${full ? "w-full" : ""}`;
	return <button className={classes}>{children}</button>;
};

export default Button;
