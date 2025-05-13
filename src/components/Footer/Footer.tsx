const Footer = () => (
	<footer className="min-h-[200px] bg-[#002834] px-[12%] py-4 max-sm:mt-0 max-sm:px-8 max-sm:pt-8 md:max-lg:px-16">
		<div className="flex flex-col gap-2 text-white">
			<div className="flex flex-row gap-4 justify-between mb-4 max-sm:flex-col max-sm:gap-8 md:max-lg:gap-6">
				<div className="w-1/4 md:max-lg:bebas-neue max-sm:w-full md:max-lg:w-1/2">
					<p className="text-[17px] max-sm:font-[Jetbrains_mono]">
						ТОВ "ПАВЛОГРАДМАШ"
					</p>
					<p className="text-[#D1D5DB] mt-2">
						З 2017 року несемо енергію з надр для вашого завтра
					</p>
				</div>
				<div className="w-1/4 max-sm:hidden md:max-lg:hidden">
					<p className="bebas-neue text-lg">Швидкі посилання</p>
					<ul className="inter text-[#D1D5DB] text-sm flex flex-col gap-2 mt-2">
						<li>
							<a href="#advantages" className="hover:underline">
								Переваги
							</a>
						</li>
						<li>
							<a href="#about" className="hover:underline">
								Про нас
							</a>
						</li>
						<li>
							<a href="#offers" className="hover:underline">
								Пропозиції
							</a>
						</li>
						<li>
							<a href="#contacts" className="hover:underline">
								Контакти
							</a>
						</li>
					</ul>
				</div>
				<div className="w-1/4 flex flex-col gap-3 max-sm:w-full md:max-lg:w-1/2">
					<p className="md:max-lg:bebas-neue text-lg max-sm:font-[Jetbrains_mono]">
						Потрібна допомога? Телефонуй
					</p>
					<div className="inter flex flex-col gap-1">
						<p>+380 67 563 06 95</p>
						<p className="md:max-lg:hidden">+380 67 134 20 00</p>
					</div>
					<p className="bebas-neue text-sm text-[#D1D5DB] max-sm:text-base">
						В неробочий час виклики не приймаються <br /> Дякуємо за розуміння
					</p>
				</div>
			</div>
			<hr style={{ color: '#374151' }} />
			<div className="text-center text-[#9CA3AF] inter text-sm">
				© 2025 ТОВ “Павлоградмаш”. Всі права захищені.
			</div>
		</div>
	</footer>
);

export default Footer;
