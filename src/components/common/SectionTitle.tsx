interface Props {
	title: string;
}

const SectionTitle = ({ title }: Props) => (
	<div className="w-full flex flex-col gap-2 items-center max-sm:gap-3">
		<p className="uppercase bebas-neue text-[22px] max-sm:text-xl text-[#002834]">
			{title}
		</p>
		<div className="flex flex-col gap-4 items-center max-sm:w-full max-sm:gap-3">
			<div className="w-[410px] border-2 border-[#F99200] max-sm:w-3/5" />
			<div className="w-[304px] border-2 border-[#F99200] max-sm:w-2/5" />
		</div>
	</div>
);

export default SectionTitle;
