const ImageSection = () => {
	return (
		<div className="relative rounded-[40px] w-1/2 bg-[url('/header-image-background.png')] bg-cover bg-center">
			<div className="flex flex-row justify-center mt-9">
				<div className="w-fit px-12 py-0.5 rounded-full bg-[rgba(194,194,194,0.66)]">
					<p className="infer text-white">+380 67 935 12 65</p>
				</div>
			</div>
			<img
				src="header-image.png"
				alt="#"
				className="absolute top-[26%] -left-[30%] scale-[210%]"
				draggable="false"
			/>
		</div>
	);
};

export default ImageSection;
