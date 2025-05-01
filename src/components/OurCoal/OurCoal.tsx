import SectionTitle from '../common/SectionTitle';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';

const OurCoal = () => (
	<div className="flex flex-col gap-8 mx-40 my-8">
		<SectionTitle title="НАШЕ ВУГІЛЛЯ" />
		<div className="mt-8 flex flex-col gap-8">
			<SectionOne />
			<SectionTwo />
		</div>
	</div>
);

export default OurCoal;
