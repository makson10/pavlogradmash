const SectionTwo = () => (
	<div className="flex flex-row gap-8 justify-between items-center">
		<div className="flex flex-col gap-6 w-2/3">
			<h2 className="text-[24px] bebas-neue text-[#F99200]">
				Шлам вугільний (аргіліт)
			</h2>
			<h2 className="text-[18px] bebas-neue text-[#002834] leading-[36px]">
				Природний осадовий матеріал, що утворюється під час збагачення кам'яного
				вугілля. Він являє собою суміш дрібних частинок вугілля та глинистих
				порід.
				<br /> Наше підприємство спеціалізується на шламовому вугіллі
				(аргілітом), яке має стабільний вміст органічної речовини та придатне
				для використання в різних галузях. Зокрема, шлам широко застосовується в
				цементній промисловості, виробництві будівельних матеріалів,
				рекультиваційних роботах та як допоміжне паливо.
			</h2>
		</div>
		<img
			src="/ourCoal/2.png"
			alt="#"
			className="w-[650px] h-[350px] object-cover object-top rounded-[16px]"
		/>
	</div>
);

export default SectionTwo;
