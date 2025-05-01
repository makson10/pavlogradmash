import {
	FirstIcon,
	SecondIcon,
	ThirdIcon,
	FourthIcon,
	FifthIcon,
} from './Icons';
import PartnerCard from './PartnerCard';

const PartnersList = () => (
	<div className="bg-[#E9E9EB] w-full flex flex-row gap-10 p-8">
		<PartnerCard
			icon={<FirstIcon />}
			title="Фермерські господарства"
			description="Для обігріву ферм та господарських будівель у холодну пору року."
		/>
		<PartnerCard
			icon={<SecondIcon />}
			title="Заводи"
			description="Паливо для промислових котлів та виробничих процесів."
		/>
		<PartnerCard
			icon={<ThirdIcon />}
			title="Теплиці"
			description="Ефективне опалення для цілорічного вирощування рослин."
		/>
		<PartnerCard
			icon={<FourthIcon />}
			title="Кузні"
			description="Основне паливо для кувальних та ливарних робіт."
		/>
		<PartnerCard
			icon={<FifthIcon />}
			title="Комерційні підприємства"
			description="Рішення для автономного опалення складів, магазинів та офісних приміщень."
		/>
	</div>
);

export default PartnersList;
