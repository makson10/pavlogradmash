import InformationText from './InformationText';
import NavigationHeader from './NavigationHeader';

const InformationSection = () => (
	<div className="bg-[#E9E9EB] w-[66%] min-h-screen rounded-[40px] p-5 flex flex-col justify-between">
		<NavigationHeader />
		<InformationText />
		<div />
	</div>
);

export default InformationSection;
