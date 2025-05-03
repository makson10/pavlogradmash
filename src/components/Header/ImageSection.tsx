const ImageSection = () => (
	<div className="relative rounded-[40px] w-1/2 bg-[url('/header/header-image-background.png')] bg-cover bg-center max-sm:hidden">
		<img
			src="header/header-image.png"
			alt="#"
			className="absolute top-[26%] -left-[30%] scale-[210%]"
			draggable="false"
		/>
	</div>
);

export default ImageSection;
