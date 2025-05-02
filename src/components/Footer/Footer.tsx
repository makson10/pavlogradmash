const Footer = () => (
	<div className="min-h-[200px] bg-[#002834] mt-[8%] px-[12%] py-4">
		<div className="flex flex-col gap-2 text-white">
			<div className="flex flex-row gap-4 justify-between mb-4">
				<div className="w-1/4 bebas-neue">
					<p className="text-[17px]">ТОВ "ПАВЛОГРАДМАШ"</p>
					<p className="text-[#D1D5DB] mt-2">
						З 2017 року несемо енергію з надр для вашого завтра
					</p>
				</div>
				<div className="w-1/4">
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
				<div className="w-1/4 flex flex-col gap-3">
					<p className="bebas-neue text-lg">Потрібна допомога? Телефонуй</p>
					<div className="inter flex flex-col gap-1">
						<p>+380 67 563 06 95</p>
						<p>+380 67 134 20 00</p>
					</div>
					<p className="bebas-neue text-sm text-[#D1D5DB]">
						В неробочий час виклики не приймаються, дякуємо за розуміння
					</p>
				</div>
			</div>
			<hr style={{ color: '#374151' }} />
			<div className="text-center text-[#9CA3AF] inter text-sm">
				© 2025 ТОВ “Павлоградмаш”. Всі права захищені.
			</div>
		</div>
	</div>
);

export default Footer;
