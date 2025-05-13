const SectionTwo = () => (
	<div className="flex flex-row gap-8 justify-between items-center max-sm:flex-col-reverse">
		<div className="flex flex-col gap-6 w-2/3 max-sm:text-center max-sm:gap-2 max-sm:w-full md:max-lg:w-full md:max-lg:gap-2">
			<h2 className="text-[24px] bebas-neue text-[#F99200] max-sm:w-4/5 max-sm:mx-auto">
				Вугільний шлам (аргіліт) — ефективне рішення для вашого бізнесу
			</h2>
			<h2 className="text-[18px] bebas-neue text-[#002834] leading-[36px] max-sm:leading-normal max-sm:text-[15px] max-sm:w-4/5 max-sm:mx-auto md:max-lg:text-sm md:max-lg:leading-[1.5]">
				Вугільний шлам (аргіліт) — це суміш дрібних частинок вугілля та глини,
				що утворюється при збагаченні. Ми пропонуємо шлам із стабільним вмістом
				органіки, придатний для цементної промисловості, виготовлення
				будматеріалів, рекультивації та як допоміжне паливо. Гарантуємо якість,
				оптові поставки та швидке відвантаження.
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
