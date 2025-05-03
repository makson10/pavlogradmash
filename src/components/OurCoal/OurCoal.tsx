import SectionTitle from '../common/SectionTitle';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';

const OurCoal = () => (
	<div className="flex flex-col gap-8 mx-40 max-sm:m-0">
		<SectionTitle title="НАШЕ ВУГІЛЛЯ" />
		<div className="mt-8 flex flex-col gap-8 max-sm:gap-12">
			<SectionOne />
			<SectionTwo />
		</div>
	</div>
);

export default OurCoal;
