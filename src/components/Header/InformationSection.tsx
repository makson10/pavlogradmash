import InformationText from './InformationText';
import NavigationHeader from './NavigationHeader';

const InformationSection = () => (
	<div className="bg-[#E9E9EB] w-[66%] min-h-screen rounded-[40px] p-5 flex flex-col justify-between max-sm:w-full max-sm:p-0 max-sm:justify-start max-sm:pt-2 max-sm:rounded-0 max-sm:min-h-fit">
		<NavigationHeader />
		<InformationText />
		<div />
	</div>
);

export default InformationSection;
