import SectionTitle from '../common/SectionTitle';
import CoalTable from './CoalTable';
import SectionDescription from './SectionDescription';

const DeliveryOffer = () => (
	<div className="flex flex-col gap-8 items-center mx-26" id="offers">
		<SectionTitle title="ПРОПОНУЄМО ДО ПОСТАЧАННЯ" />
		<CoalTable />
		<SectionDescription />
	</div>
);

export default DeliveryOffer;
