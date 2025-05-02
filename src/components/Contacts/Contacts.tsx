import SectionTitle from '../common/SectionTitle';
import ContactInformation from './ContactInformation';
import ContactForm from './ContactForm';

const Contacts = () => (
	<div id="contacts">
		<SectionTitle title="ЗВ’ЯЗАТИСЯ З НАМИ" />
		<div className="mt-20 mx-[12%] flex flex-row gap-8">
			<ContactInformation />
			<ContactForm />
		</div>
	</div>
);

export default Contacts;
