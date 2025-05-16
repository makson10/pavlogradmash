const NavigationHeader = () => (
	<div className="z-10 flex flex-row justify-between items-center pr-10 max-sm:pr-0 max-sm:justify-center md:max-lg:pr-0 lg:max-2xl:pr-0">
		<div className="flex flex-row gap-1 max-sm:flex-col max-sm:gap-2">
			<img
				src="/logo2.png"
				alt="pavlogradmash-logo"
				className="max-sm:w-1/2 max-sm:h-1/2 max-sm:mx-auto lg:max-xl:w-1/3"
			/>
			<p className="bebas-neue text-[#002834] flex flex-col justify-center text-lg tracking-wider max-sm:text-lg max-sm:mt-0 max-sm:tracking-normal lg:max-xl:text-sm">
				ПАВЛОГРАДМАШ
			</p>
		</div>
		<NavigationBar />
	</div>
);

const NavigationBar = () => (
	<nav className="max-sm:hidden md:max-lg:bg-[#E9E9EB] md:max-lg:p-4 md:max-lg:rounded-[22px]">
		<ul className="flex flex-row gap-8 text-[13px] md:max-lg:gap-6 hover:text-[#F99200] lg:max-xl:gap-2">
			<li>
				<a
					href="#advantages"
					className="text-[#002834] jetbrains-mono cursor-pointer transition hover:text-[#F99200]">
					ПЕРЕВАГИ
				</a>
			</li>
			<li>
				<a
					href="#about"
					className="text-[#002834] jetbrains-mono cursor-pointer transition hover:text-[#F99200]">
					ПРО НАС
				</a>
			</li>
			<li>
				<a
					href="#offers"
					className="text-[#002834] jetbrains-mono cursor-pointer transition hover:text-[#F99200]">
					ПРОПОЗИЦІЇ
				</a>
			</li>
			<li>
				<a
					href="#contacts"
					className="text-[#002834] jetbrains-mono cursor-pointer transition hover:text-[#F99200]">
					КОНТАКТИ
				</a>
			</li>
		</ul>
	</nav>
);

export default NavigationHeader;
