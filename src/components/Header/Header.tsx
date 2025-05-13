import InformationSection from './InformationSection';
import ImageSection from './ImageSection';

const Header = () => (
	<header
		className="min-w-full px-30 flex flex-row gap-4 max-sm:px-0 max-sm:flex-col md:max-lg:p-0 md:max-lg:flex-row lg:max-xl:px-12"
		id="home">
		<InformationSection />
		<ImageSection />
	</header>
);

export default Header;
