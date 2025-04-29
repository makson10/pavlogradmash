import Header from './components/Header/Header';
import Advantages from './components/Advantages/Advantages';
import AboutUs from './components/AboutUs/AboutUs';

// TODO:
//? make design
//? add responsive design
//? implement request sending functionality

const Home = () => (
	<div className="min-w-screen min-h-screen p-8 flex flex-col gap-30">
		<Header />
		<Advantages />
        <AboutUs />
	</div>
);

export default Home;
