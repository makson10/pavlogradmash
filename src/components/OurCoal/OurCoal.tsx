import SectionTitle from '../common/SectionTitle';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';

const OurCoal = () => (
	<div className="flex flex-col gap-8 mx-40 max-sm:m-0 md:max-lg:m-0 lg:max-xl:mx-20">
		<SectionTitle title="НАШЕ ВУГІЛЛЯ" />
		<div className="mt-8 flex flex-col gap-8 max-sm:gap-12 max-sm:mt-4 md:max-lg:mt-4 md:max-lg:gap-12 md:max-lg:mx-4">
			<SectionOne />
			<SectionTwo />
		</div>
	</div>
);

export default OurCoal;
