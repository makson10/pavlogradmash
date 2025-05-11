const SectionDescription = () => {
	const handleClick = () => (window.location.href = '#contact-form');

	return (
		<div className="text-center bebas-neue text-[#002834] text-[20px] tracking-wide max-sm:mx-4 max-sm:text-[15px] md:max-lg:text-lg">
			<p>Даний список пропонованих до постачання вугілля не є вичерпним.</p>
			<p>
				У разі Вашої зацікавленості в інших марках/фракціях вугільної продукції
				просимо вас{' '}
				<a
					href="#contact-form"
					className="text-black underline decoration-[#F99200] hover:text-[#D56400] max-sm:hidden">
					залишити нам повідомлення
				</a>
			</p>
			<button
				className="hidden max-sm:block row-button w-full mt-3"
				onClick={handleClick}>
				ЗАЛИШИТИ ПОВІДОМЛЕННЯ
			</button>
		</div>
	);
};

export default SectionDescription;
