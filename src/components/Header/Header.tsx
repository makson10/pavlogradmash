import InformationSection from './InformationSection';
import ImageSection from './ImageSection';

const Header = () => (
	<div
		className="min-w-full px-30 flex flex-row gap-4 max-sm:px-0 max-sm:flex-col md:max-lg:p-0 md:max-lg:flex-row"
		id="home">
		<InformationSection />
		<ImageSection />
	</div>
);

export default Header;
