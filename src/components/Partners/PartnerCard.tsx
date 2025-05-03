import { ReactElement } from 'react';

interface Props {
	icon: ReactElement;
	title: string;
	description: string;
}

const PartnerCard = ({ icon, title, description }: Props) => (
	<>
		<div className="text-center flex flex-col justify-between gap-2 items-center max-sm:hidden">
			<div className="mx-auto h-1/3">{icon}</div>
			<p className="jetbrains-mono text-[20px] text-[#002834] h-1/3 flex flex-col justify-center">
				{title}
			</p>
			<p className="jetbrains-mono text-[13px] text-[#002834] h-1/3 flex flex-col justify-center">
				{description}
			</p>
		</div>

		<div className="hidden max-sm:flex flex-row items-center gap-6 bg-[#E9E9EB] rounded-[8px] shadow px-2 py-3">
			<div>{icon}</div>
			<div className="flex flex-col">
				<p className="font-[Jetbrains_mono] font-[600] text-[18px] text-[#002834] h-1/3 flex flex-col justify-center">
					{title}
				</p>
				<p className="jetbrains-mono text-[11px] text-[#002834] h-1/3 flex flex-col justify-center">
					{description}
				</p>
			</div>
		</div>
	</>
);

export default PartnerCard;
