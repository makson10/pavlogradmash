import SectionTitle from '../common/SectionTitle';
import AdvantagesList from './AdvantagesList';

const Advantages = () => (
	<div className="flex flex-col gap-16 max-sm:gap-14" id="advantages">
		<SectionTitle title="ЧОМУ ВАРТО КУПИТИ ВУГІЛЛЯ В НАС" />
		<AdvantagesList />
	</div>
);

export default Advantages;
