import AdvantageCard from './AdvantageCard';
import { FirstIcon, SecondIcon, ThirdIcon, FourthIcon } from './Icons';

const AdvantagesList = () => (
	<div className="mx-28 flex flex-row justify-between gap-12 max-sm:flex-col max-sm:mx-0 max-sm:justify-center max-sm:gap-6 md:max-lg:grid md:max-lg:grid-cols-2 md:max-lg:gap-8 md:max-lg:mx-8 lg:max-xl:mx-[4%]">
		<AdvantageCard
			icon={<FirstIcon />}
			title="Висока якість вугілля"
			description="Добуваємо кам’яне вугілля та антрацит в Україні відповідно до усіх галузевих стандартів.
Наша продукція забезпечує стабільну енергетичну ефективність для промисловості та приватного використання."
		/>
		<AdvantageCard
			icon={<SecondIcon />}
			title="Сучасне обладнання"
			description="Використовуємо передові технології для ефективного та екологічного видобутку вугілля.
Завдяки цьому ми пропонуємо якісне вугілля з мінімальним впливом на довкілля."
		/>
		<AdvantageCard
			icon={<ThirdIcon />}
			title="Стабільні поставки"
			description="Гарантуємо безперервне постачання вугілля по Україні завдяки налагодженій логістиці та професійному плануванню.
Можна купити вугілля оптом чи в роздріб з доставкою."
		/>
		<AdvantageCard
			icon={<FourthIcon />}
			title="Досвідчена команда"
			description="Наша команда має багаторічний досвід у сфері видобутку та продажу вугілля, що дозволяє підтримувати високий рівень надійності та безпеки постачань."
		/>
	</div>
);

export default AdvantagesList;
