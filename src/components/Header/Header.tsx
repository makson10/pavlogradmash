import InformationSection from './InformationSection';
import ImageSection from './ImageSection';

const Header = () => (
	<div className="min-w-full px-30 flex flex-row gap-4 max-sm:px-0 max-sm:flex-col" id="home">
		<InformationSection />
		<ImageSection />
	</div>
);

export default Header;
