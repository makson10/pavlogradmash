const NavigationHeader = () => (
	<div className="z-10 flex flex-row justify-between items-center pr-10 max-sm:pr-0 max-sm:justify-center md:max-lg:pr-0">
		<div className="flex flex-row gap-1 max-sm:flex-col max-sm:gap-2">
			<img
				src="/logo.png"
				alt="#"
				className="max-sm:w-1/2 max-sm:h-1/2 max-sm:mx-auto"
			/>
			<p className="bebas-neue text-[#002834] flex flex-col justify-center mt-2 text-lg tracking-wider max-sm:text-lg max-sm:mt-0 max-sm:tracking-normal">
				ПАВЛОГРАДМАШ
			</p>
		</div>
		<NavigationBar />
	</div>
);

const NavigationBar = () => (
	<nav className="max-sm:hidden md:max-lg:bg-[#E9E9EB] md:max-lg:p-4 md:max-lg:rounded-[22px]">
		<ul className="flex flex-row gap-4 md:max-lg:gap-6">
			<li>
				<a
					href="#advantages"
					className="text-[#002834] text-sm jetbrains-mono cursor-pointer">
					ПЕРЕВАГИ
				</a>
			</li>
			<li>
				<a
					href="#about"
					className="text-[#002834] text-sm jetbrains-mono cursor-pointer">
					ПРО НАС
				</a>
			</li>
			<li>
				<a
					href="#offers"
					className="text-[#002834] text-sm jetbrains-mono cursor-pointer">
					ПРОПОЗИЦІЇ
				</a>
			</li>
			<li>
				<a
					href="#contacts"
					className="text-[#002834] text-sm jetbrains-mono cursor-pointer">
					КОНТАКТИ
				</a>
			</li>
		</ul>
	</nav>
);

export default NavigationHeader;
