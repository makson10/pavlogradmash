import SectionTitle from '../common/SectionTitle';
import OurPartnersList from './OurPartnersList';

const OurPartners = () => (
	<div className="flex flex-col gap-8 items-center mx-26">
		<SectionTitle title="НАШІ ПАРТНЕРИ" />
		<p className="bebas-neue text-[20px] text-[#002834]">
			Наше підприємство співпрацює з великою кількістю організацій. Серед них ви
			можете побачити:
		</p>
		<OurPartnersList />
	</div>
);

export default OurPartners;
