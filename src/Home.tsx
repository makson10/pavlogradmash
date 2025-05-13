import Header from './components/Header/Header';
import Advantages from './components/Advantages/Advantages';
import AboutUs from './components/AboutUs/AboutUs';
import OurCoal from './components/OurCoal/OurCoal';
import DeliveryOffer from './components/DeliveryOffer/DeliveryOffer';
import Partners from './components/Partners/Partners';
import OurPartners from './components/OurPartners/OurPartners';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

// TODO:
//? fix responsive design for laptop and big tablet

const Home = () => (
	<div className="min-w-screen min-h-screen max-sm:overflow-x-hidden">
		<div className="p-8 flex flex-col gap-36 max-sm:p-0 max-sm:gap-16 max-sm:mb-14 md:max-lg:gap-24">
			<Header />
			<Advantages />
			<AboutUs />
			<OurCoal />
			<DeliveryOffer />
			<Partners />
			<OurPartners />
			<Contacts />
		</div>
		<Footer />
	</div>
);

export default Home;
