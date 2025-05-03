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
//? add responsive design for mobile and tablet
//? check all text

const Home = () => (
	<div className="min-w-screen min-h-screen max-sm:overflow-x-hidden">
		<div className="p-8 flex flex-col gap-30 max-sm:p-0 max-sm:gap-16">
			<Header />
			<Advantages />
			<AboutUs />
			<OurCoal />
			<DeliveryOffer />
			<Partners />
			<OurPartners />
			<Contacts />
		</div>
		{/* <Footer /> */}
	</div>
);

export default Home;
