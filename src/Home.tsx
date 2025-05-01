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
//? make design
//? add responsive design
//? implement request sending functionality
//? add form phone number validation
//? make links
//? make button in table working

const Home = () => (
	<div className="min-w-screen min-h-screen p-8 flex flex-col gap-30">
		<Header />
		<Advantages />
		<AboutUs />
		<OurCoal />
		<DeliveryOffer />
		<Partners />
		<OurPartners />
		<Contacts />
		<Footer />
	</div>
);

export default Home;
