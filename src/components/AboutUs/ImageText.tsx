const ImageText = () => (
	<div className="w-1/2 flex flex-col gap-8 mt-10 max-sm:mt-0 max-sm:w-full md:max-lg:mt-4 md:max-lg:gap-6">
		<div className="flex flex-col gap-2 max-sm:hidden md:max-lg:gap-1">
			<p className="bebas-neue text-xl text-[#002834] md:max-lg:text-lg">
				ПРО НАШЕ ПІДПРИЄМСТВО
			</p>
			<div className="flex flex-col gap-4 md:max-lg:gap-3">
				<div className="w-[410px] border-1 border-[#F99200] md:max-lg:border-[1px] md:max-lg:w-4/5" />
				<div className="w-[304px] border-1 border-[#F99200] md:max-lg:border-[1px] md:max-lg:w-3/5" />
			</div>
		</div>
		<p className="inter text-[#002834] text-[18px] max-sm:tracking-wide max-sm:text-base md:max-lg:text-sm">
			Ми з 2017 року впевнено працюємо на ринку продажу вугілля та вугільного
			шламу, не виступаючи посередниками, а повністю контролюючи весь процес —
			від видобутку сировини до відвантаження готової продукції. Пропонуємо
			якісне кам’яне вугілля, вугільний концентрат, шлам, антрацит та паливні
			брикети для промислових і побутових потреб. Власна сертифікована
			лабораторія дозволяє нам гарантувати стабільну якість кожної партії
			продукції відповідно до високих стандартів. Завдяки професіоналізму
			команди, фокусу на безпеці, відповідальному ставленню до екології та
			оперативній логістиці, ми заслужили репутацію одного з надійних
			постачальників вугільної продукції в Україні. Співпраця з нами — це
			гарантія стабільних поставок, конкурентних цін і високоякісного палива.
		</p>
	</div>
);

export default ImageText;
