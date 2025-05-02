const NavigationHeader = () => (
	<div className="z-10 flex flex-row justify-between items-center pr-10">
		<div className="flex flex-row gap-1">
			<img src="/logo.png" alt="#" />
			<p className="bebas-neue text-[#002834] flex flex-col justify-center mt-2 text-lg tracking-wider">
				ПАВЛОГРАДМАШ
			</p>
		</div>
		<NavigationBar />
	</div>
);

const NavigationBar = () => (
	<nav>
		<ul className="flex flex-row gap-4">
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
