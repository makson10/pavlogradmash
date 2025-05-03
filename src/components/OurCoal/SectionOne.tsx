const SectionOne = () => (
	<div className="flex flex-row gap-8 justify-between items-center max-sm:flex-col">
		<img
			src="/ourCoal/1.png"
			alt="#"
			className="w-[650px] h-[350px] object-cover rounded-[16px] max-sm:w-[200px] max-sm:h-[200px]"
		/>
		<div className="flex flex-col gap-6 w-2/3 max-sm:text-center max-sm:gap-2 max-sm:w-full">
			<h2 className="text-[24px] bebas-neue text-[#F99200]">Кам’яне вугілля</h2>
			<h2 className="text-[18px] bebas-neue text-[#002834] leading-[36px] max-sm:leading-normal max-sm:text-base max-sm:w-4/5 max-sm:mx-auto">
				Наше підприємство спеціалізується якісному кам'яному вугіллі, що
				характеризується високою теплотворною здатністю, низьким вмістом сірки
				та стабільними фізико-хімічними властивостями. Кам'яне вугілля, яке ми
				пропонуємо, ідеально підходить для використання в теплоенергетиці,
				металургії, цементній промисловості та інших галузях.
			</h2>
		</div>
	</div>
);

export default SectionOne;
