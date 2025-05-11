import SectionTitle from '../common/SectionTitle';
import OurPartnersList from './OurPartnersList';

const OurPartners = () => (
	<div className="flex flex-col gap-8 items-center mx-26 max-sm:mx-0 max-sm:gap-4 md:max-lg:mx-10">
		<SectionTitle title="НАШІ ПАРТНЕРИ" />
		<p className="bebas-neue max-sm:w-4/5 text-[19px] text-center text-[#002834] md:max-lg:text-base max-sm:text-base">
			Наше підприємство співпрацює з великою кількістю організацій. <br /> Серед
			них ви можете побачити:
		</p>
		<OurPartnersList />
	</div>
);

export default OurPartners;
