import SectionTitle from '../common/SectionTitle';
import ImageSlider from './ImageSlider';
import ImageText from './ImageText';

const AboutUs = () => (
	<div className="flex flex-col gap-12">
		<div className="hidden max-sm:block">
			<SectionTitle title="ПРО НАШЕ ПІДПРИЄМСТВО" />
		</div>
		<div
			className="rounded-[40px] bg-[#E9E9EB] mx-40 p-10 flex flex-row gap-12 max-sm:mx-8 max-sm:p-6 max-sm:flex-col max-sm:gap-8 md:max-lg:p-0 md:max-lg:m-0 md:max-lg:px-6 md:max-lg:py-4 md:max-lg:gap-10"
			id="about">
			<ImageSlider />
			<ImageText />
		</div>
	</div>
);

export default AboutUs;
