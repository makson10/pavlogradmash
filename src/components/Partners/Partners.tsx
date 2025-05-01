import SectionTitle from '../common/SectionTitle';
import PartnersList from './PartnersList';
import SectionDescription from './SectionDescription';

const Partners = () => (
	<div className="flex flex-col gap-8 items-center mx-26">
		<SectionTitle title="З КИМ МИ ПРАЦЮЄМО" />
		<PartnersList />
		<SectionDescription />
	</div>
);

export default Partners;
