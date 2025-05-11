import { useEffect, useState } from 'react';

const images = [
	'/imageSlider/1.png',
	'/imageSlider/2.png',
	'/imageSlider/3.png',
	'/imageSlider/4.png',
	'/imageSlider/5.png',
];

const ImageSlider = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);

	const handlePrevious = () => {
		if (isAnimating) return;
		setIsAnimating(true);

		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + images.length) % images.length
		);
		setIsAnimating(false);
	};

	const handleNext = () => {
		if (isAnimating) return;
		setIsAnimating(true);

		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
		setIsAnimating(false);
	};

	useEffect(() => {
		setInterval(() => {
			if (isAnimating) return;
			handleNext();
		}, 5000);
	}, []);

	return (
		<div className="relative flex items-center justify-center">
			<div className="relative w-[500px] h-[500px] max-sm:h-[330px] md:max-lg:h-[330px] md:max-lg:w-[330px]">
				{images.map((image, index) => (
					<img
						key={index}
						src={image}
						alt={`Slide ${index + 1}`}
						className={`absolute top-0 left-0 w-full h-full rounded-[16px] object-cover transition-opacity duration-300 ${
							index === currentIndex ? 'opacity-100' : 'opacity-0'
						}`}
					/>
				))}
			</div>
			<button
				onClick={handlePrevious}
				className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-3 bg-gray-200/30 transition-all hover:bg-gray-200/75 cursor-pointer">
				<svg
					width="14"
					height="25"
					viewBox="0 0 14 25"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M13 23.75L1.75 12.5L13 1.25"
						stroke="white"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</button>
			<button
				onClick={handleNext}
				className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-3 bg-gray-200/30 transition-all hover:bg-gray-200/75 cursor-pointer">
				<svg
					width="14"
					height="25"
					viewBox="0 0 14 25"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M1 23.75L12.25 12.5L1 1.25"
						stroke="white"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</button>
		</div>
	);
};

export default ImageSlider;
