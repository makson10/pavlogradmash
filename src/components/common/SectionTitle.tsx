interface Props {
	title: string;
}

const SectionTitle = ({ title }: Props) => (
	<div className="w-full flex flex-col gap-2 items-center">
		<p className="uppercase bebas-neue text-[24px]">{title}</p>
		<div className="flex flex-col gap-4 items-center">
			<div className="w-[410px] h-[2px] bg-[#F99200]" />
			<div className="w-[304px] h-[3px] bg-[#F99200]" />
		</div>
	</div>
);

export default SectionTitle;
