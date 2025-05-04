const ImageText = () => (
	<div className="w-1/2 flex flex-col gap-8 mt-10 max-sm:mt-0 max-sm:w-full">
		<div className="flex flex-col gap-2 max-sm:hidden">
			<p className="bebas-neue text-xl text-[#002834]">ПРО НАШЕ ПІДПРИЄМСТВО</p>
			<div className="flex flex-col gap-4">
				<div className="w-[410px] border-2 border-[#F99200]" />
				<div className="w-[304px] border-2 border-[#F99200]" />
			</div>
		</div>
		<p className="inter text-[#002834] text-[18px] max-sm:tracking-wide max-sm:text-lg">
			Із 2017 року впевнено працюємо на ринку, не виступаючи посередниками, а
			повністю контролюючи процес — від видобутку до відвантаження. Власна
			лабораторія дозволяє нам гарантувати стабільну якість продукції, що
			відповідає високим стандартам. Завдяки професіоналізму, фокусу на безпеці
			та відповідальному ставленню до довкілля, ми заслужили репутацію одного з
			лідерів вугільної галузі України.
		</p>
	</div>
);

export default ImageText;
