import AdvantageCard from './AdvantageCard';
import { FirstIcon, SecondIcon, ThirdIcon, FourthIcon } from './Icons';

const AdvantagesList = () => (
	<div className="mx-28 flex flex-row justify-between gap-12 max-sm:flex-col max-sm:mx-0 max-sm:justify-center max-sm:gap-6 md:max-lg:grid md:max-lg:grid-cols-2 md:max-lg:gap-8 md:max-lg:mx-8">
		<AdvantageCard
			icon={<FirstIcon />}
			title="Висока якість вугілля"
			description="Добуваємо сировину, що відповідає усім галузевим стандартам і забезпечує стабільну енергетичну ефективність."
		/>
		<AdvantageCard
			icon={<SecondIcon />}
			title="Сучасне обладнання"
			description="Використовуємо передові технології для безпечного, екологічного та ефективного видобутку."
		/>
		<AdvantageCard
			icon={<ThirdIcon />}
			title="Стабільні поставки"
			description="Гарантуємо безперервне постачання вугілля завдяки налагодженій логістиці й професійному плануванню."
		/>
		<AdvantageCard
			icon={<FourthIcon />}
			title="Досвідчена команда"
			description="Наші фахівці мають багаторічний досвід у галузі, що дозволяє підтримувати високий рівень надійності й безпеки."
		/>
	</div>
);

export default AdvantagesList;
