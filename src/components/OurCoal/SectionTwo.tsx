const SectionTwo = () => (
	<div className="flex flex-row gap-8 justify-between items-center max-sm:flex-col-reverse">
		<div className="flex flex-col gap-6 w-2/3 max-sm:text-center max-sm:gap-2 max-sm:w-full md:max-lg:w-full md:max-lg:gap-2">
			<h2 className="text-[24px] bebas-neue text-[#F99200]">
				Шлам вугільний (аргіліт)
			</h2>
			<h2 className="text-[18px] bebas-neue text-[#002834] leading-[36px] max-sm:leading-normal max-sm:text-[15px] max-sm:w-4/5 max-sm:mx-auto md:max-lg:text-sm md:max-lg:leading-[1.5]">
				Природний осадовий матеріал, що утворюється під час збагачення кам'яного
				вугілля. Він являє собою суміш дрібних частинок вугілля та глинистих
				порід. Наше підприємство спеціалізується на шламовому вугіллі
				(аргілітом), яке має стабільний вміст органічної речовини та придатне
				для використання в різних галузях. Зокрема, шлам широко застосовується в
				цементній промисловості, виробництві будівельних матеріалів,
				рекультиваційних роботах та як допоміжне паливо.
			</h2>
		</div>
		<img
			src="/ourCoal/2.png"
			alt="coal-image"
			className="w-[650px] h-[350px] object-cover object-top rounded-[16px] max-sm:w-[200px] max-sm:h-[200px] md:max-lg:w-[600px] md:max-lg:h-[230px]"
		/>
	</div>
);

export default SectionTwo;
