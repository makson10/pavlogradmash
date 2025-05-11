const InformationText = () => {
	const handleClick = () => (window.location.href = '#contact-form');

	return (
		<div className="md:max-lg:flex md:max-lg:flex-row md:max-lg:gap-4">
			<div className="w-[80%] bebas-neue ml-12 flex flex-col gap-6 z-10 max-sm:bg-[url('/header/header-image-background.png')] max-sm:bg-cover max-sm:bg-bottom max-sm:w-full max-sm:m-0 max-sm:min-h-[450px] max-sm:px-6 max-sm:pt-20 max-sm:relative md:max-lg:ml-0 md:max-lg:bg-[#E9E9EB] md:max-lg:p-8 md:max-lg:py-24 md:max-lg:rounded-[40px] md:max-lg:w-[70%] md:max-lg:flex-row">
				<div className="flex flex-col gap-6">
					<div className="hidden max-sm:block bg-[#002834]/76 absolute w-full h-full top-0 left-0 -z-10" />
					<img
						src="header/header-image.png"
						alt="#"
						className="hidden max-sm:block absolute left-0 scale-[120%] -z-20"
						draggable="false"
					/>
					<p className="text-[34px] max-sm:text-white max-sm:inter max-sm:text-3xl md:max-lg:text-2xl md:max-lg:bebas-neue">
						Енергія глибин — сила майбутнього
					</p>
					<p className="text-xl max-sm:text-[#ACABAE] max-sm:inter max-sm:text-base md:max-lg:bebas-neue">
						Надійний видобуток вугілля для сталого розвитку промисловості та
						енергетики України
					</p>
					<button
						className="bg-[#002834] text-white rounded-full flex flex-row gap-2 w-[380px] h-[60px] mt-8 cursor-pointer z-10 max-sm:bg-[#F99200] max-sm:h-fit max-sm:py-2 max-sm:mt-auto max-sm:mb-10 max-sm:w-full"
						onClick={handleClick}>
						<div className="jetbrains-mono m-auto text-sm flex flex-row gap-2 items-center">
							<p>Залишай заявку</p>
							<svg
								width="24"
								height="24"
								viewBox="0 0 32 33"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M17.96 7.79334C18.1475 7.60607 18.4016 7.50089 18.6666 7.50089C18.9316 7.50089 19.1858 7.60607 19.3733 7.79334L27.3733 15.7933C27.5606 15.9808 27.6658 16.235 27.6658 16.5C27.6658 16.765 27.5606 17.0192 27.3733 17.2067L19.3733 25.2067C19.2818 25.3049 19.1714 25.3837 19.0487 25.4384C18.926 25.493 18.7936 25.5224 18.6593 25.5248C18.5251 25.5272 18.3917 25.5025 18.2672 25.4522C18.1427 25.4019 18.0296 25.327 17.9346 25.2321C17.8396 25.1371 17.7648 25.024 17.7145 24.8995C17.6642 24.775 17.6395 24.6416 17.6419 24.5073C17.6442 24.373 17.6736 24.2406 17.7283 24.118C17.7829 23.9953 17.8617 23.8849 17.96 23.7933L24.2533 17.5H5.33331C5.0681 17.5 4.81374 17.3946 4.62621 17.2071C4.43867 17.0196 4.33331 16.7652 4.33331 16.5C4.33331 16.2348 4.43867 15.9804 4.62621 15.7929C4.81374 15.6054 5.0681 15.5 5.33331 15.5H24.2533L17.96 9.20667C17.7727 9.01917 17.6675 8.76501 17.6675 8.50001C17.6675 8.235 17.7727 7.98084 17.96 7.79334Z"
									fill="white"
								/>
							</svg>
						</div>
					</button>
				</div>
			</div>
			<div className="relative rounded-[40px] w-1/2 bg-[url('/header/header-image-background.png')] bg-cover bg-center hidden md:max-lg:block">
				<img
					src="header/header-image.png"
					alt="#"
					className="absolute top-[26%] -left-[30%] scale-[210%] md:max-lg:scale-[150%] md:max-lg:-left-[10%] md:max-lg:top-[40%]"
					draggable="false"
				/>
			</div>
		</div>
	);
};

export default InformationText;
