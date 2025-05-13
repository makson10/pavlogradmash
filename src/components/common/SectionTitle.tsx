interface Props {
	title: string;
}

const SectionTitle = ({ title }: Props) => (
	<div className="w-full flex flex-col gap-2 items-center max-sm:gap-3">
		<h2 className="uppercase bebas-neue text-[22px] text-[#002834] max-sm:text-xl md:max-lg:text-lg">
			{title}
		</h2>
		<div className="flex flex-col gap-4 items-center max-sm:w-full md:max-lg:w-full max-sm:gap-3 md:max-lg:gap-3">
			<div className="w-[410px] border-1 border-[#F99200] max-sm:w-3/5 md:max-lg:border-[1px] md:max-lg:w-2/5" />
			<div className="w-[304px] border-1 border-[#F99200] max-sm:w-2/5 md:max-lg:border-[1px] md:max-lg:w-1/5" />
		</div>
	</div>
);

export default SectionTitle;
