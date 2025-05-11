import SectionTitle from '../common/SectionTitle';
import CoalTable from './CoalTable';
import SectionDescription from './SectionDescription';

const DeliveryOffer = () => (
	<div
		className="flex flex-col gap-8 items-center mx-26 max-sm:mx-0 max-sm:gap-4 max-sm:max-w-screen md:max-lg:max-w-screen md:max-lg:m-0 md:max-lg:gap-6"
		id="offers">
		<SectionTitle title="ПРОПОНУЄМО ДО ПОСТАЧАННЯ" />
		<CoalTable />
		<SectionDescription />
	</div>
);

export default DeliveryOffer;
