import NavigationHeader from './NavigationHeader';
import InformationText from './InformationText';

const InformationSection = () => (
	<div className="bg-[#E9E9EB] w-[66%] min-h-[90vh] rounded-[40px] p-5 flex flex-col justify-between max-sm:w-full max-sm:p-0 max-sm:justify-start max-sm:pt-2 max-sm:rounded-0 max-sm:min-h-fit md:max-lg:w-full md:max-lg:bg-transparent md:max-lg:min-h-fit md:max-lg:gap-10 lg:max-xl:px-3">
		<NavigationHeader />
		<InformationText />
		<div className="md:max-lg:hidden" />
	</div>
);

export default InformationSection;
