import { ReactElement } from 'react';

interface Props {
	icon: ReactElement;
	title: string;
	description: string;
}

const PartnerCard = ({ icon, title, description }: Props) => (
	<div className="text-center flex flex-col justify-between gap-2 items-center">
		<div className="mx-auto h-1/3">{icon}</div>
		<p className="jetbrains-mono text-[20px] text-[#002834] h-1/3 flex flex-col justify-center">
			{title}
		</p>
		<p className="jetbrains-mono text-[13px] text-[#002834] h-1/3 flex flex-col justify-center">
			{description}
		</p>
	</div>
);

export default PartnerCard;
