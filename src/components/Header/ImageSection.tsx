const ImageSection = () => {
	return (
		<div className="relative rounded-[40px] w-1/2 bg-[url('/header/header-image-background.png')] bg-cover bg-center">
			<div className="flex flex-row justify-center mt-9">
				<div className="z-10 w-fit px-12 py-0.5 rounded-full bg-[rgba(194,194,194,0.66)]">
					<a className="infer text-white" href="tel:+380679351265">
						+380 67 935 12 65
					</a>
				</div>
			</div>
			<img
				src="header/header-image.png"
				alt="#"
				className="absolute top-[26%] -left-[30%] scale-[210%]"
				draggable="false"
			/>
		</div>
	);
};

export default ImageSection;
