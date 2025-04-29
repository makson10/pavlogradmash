import { ReactElement } from 'react';

interface Props {
	icon: ReactElement;
	title: string;
	description: string;
}

const AdvantageCard = ({ icon, title, description }: Props) => (
	<div className="bg-[#F9FAFB] shadow rounded-[8px] w-[328px] flex flex-col gap-2.5 p-7 pr-5">
		{icon}
		<p className="font-bold font-[JetBrains_Mono] text-[16px] text-[#002834]">
			{title}
		</p>
		<p className="jetbrains-mono text-[14px] text-[#264752]">{description}</p>
	</div>
);

export default AdvantageCard;
