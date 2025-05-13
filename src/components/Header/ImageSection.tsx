const ImageSection = () => (
	<div className="relative rounded-[40px] w-1/2 bg-[url('/header/header-image-background.png')] bg-cover bg-center max-sm:hidden md:max-lg:hidden md:max-lg:w-[20%]">
		<img
			src="header/header-image.png"
			alt="header-tractor"
			className="absolute top-[26%] -left-[30%] scale-[210%]"
			draggable="false"
		/>
	</div>
);

export default ImageSection;
