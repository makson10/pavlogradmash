import SectionTitle from '../common/SectionTitle';
import ContactInformation from './ContactInformation';
import ContactForm from './ContactForm';

const Contacts = () => (
	<div id="contacts">
		<SectionTitle title="ЗВ’ЯЗАТИСЯ З НАМИ" />
		<div className="my-20 mx-[12%] flex flex-row gap-8 max-sm:mx-0 max-sm:flex-col max-sm:gap-14 max-sm:mt-16 md:max-lg:mx-8 md:max-lg:my-8">
			<ContactInformation />
			<ContactForm />
		</div>
	</div>
);

export default Contacts;
