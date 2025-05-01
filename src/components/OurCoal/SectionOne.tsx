const SectionOne = () => (
	<div className="flex flex-row gap-8 justify-between items-center">
		<img
			src="/ourCoal/1.png"
			alt="#"
			className="w-[650px] h-[350px] object-cover rounded-[16px]"
		/>
		<div className="flex flex-col gap-6 w-2/3">
			<h2 className="text-[24px] bebas-neue text-[#F99200]">Кам’яне вугілля</h2>
			<h2 className="text-[18px] bebas-neue text-[#002834] leading-[36px]">
				Один із найцінніших природних енергетичних ресурсів. Воно утворилося
				впродовж мільйонів років із рослинних залишків під впливом високого
				тиску та температури.
				<br /> Наше підприємство спеціалізується якісному кам'яному вугіллі, що
				характеризується високою теплотворною здатністю, низьким вмістом сірки
				та стабільними фізико-хімічними властивостями.
				<br /> Кам'яне вугілля, яке ми пропонуємо, ідеально підходить для
				використання в теплоенергетиці, металургії, цементній промисловості та
				інших галузях.
			</h2>
		</div>
	</div>
);

export default SectionOne;
