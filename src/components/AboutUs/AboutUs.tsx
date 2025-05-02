import ImageSlider from './ImageSlider';
import ImageText from './ImageText';

const AboutUs = () => (
	<div
		className="rounded-[40px] bg-[#E9E9EB] mx-40 p-10 flex flex-row gap-12"
		id="about">
		<ImageSlider />
		<ImageText />
	</div>
);

export default AboutUs;
