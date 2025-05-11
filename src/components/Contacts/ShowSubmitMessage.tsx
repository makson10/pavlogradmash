import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface Props {
	handleCloseSubmitMessage: () => void;
}

const ShowSubmitMessage = ({ handleCloseSubmitMessage }: Props) =>
	createPortal(
		<SubmitMessage handleCloseSubmitMessage={handleCloseSubmitMessage} />,
		document.querySelector('#portal')!
	);

const SubmitMessage = ({ handleCloseSubmitMessage }: Props) => {
	const [animationStage, setAnimationStage] = useState('hidden');

	const handleCloseMessage = () => {
		setAnimationStage('end');
		setTimeout(() => {
			handleCloseSubmitMessage();
		}, 1000);
	};

	useEffect(() => {
		document.body.style.overflowY = 'hidden';

		return () => {
			document.body.style.overflowY = 'auto';
		};
	}, []);

	useEffect(() => {
		setTimeout(() => setAnimationStage('started'));

		setTimeout(() => {
			setAnimationStage('end');
		}, 4000);
	}, []);

	return (
		<div
			className={`h-screen flex justify-center items-center transition-colors duration-1000 ${
				animationStage === 'hidden'
					? 'bg-transparent'
					: animationStage === 'started'
					? 'bg-black/50'
					: animationStage === 'end' && 'bg-transparent'
			}`}
			onClick={handleCloseMessage} // Close modal when clicking outside
		>
			<div
				className={`flex flex-col gap-2 bg-white w-fit px-7 py-10 text-center max-sm:mx-8 absolute transition-all duration-1000 ease-in-out ${
					animationStage === 'hidden'
						? 'top-full'
						: animationStage === 'started'
						? 'top-[40%]'
						: animationStage === 'end' && 'top-[-25%]'
				}`}
				onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the message
			>
				<button
					className="absolute top-2 right-4 text-2xl text-[#F99200] cursor-pointer"
					onClick={handleCloseMessage}>
					&times;
				</button>
				<p className="text-[#F99200] jetbrians-mono">МИ ПРИЙНЯЛИ ВАШ ЗАПИТ</p>
				<p className="inter text-[#4B5563] w-4/5 mx-auto">
					Наші менеджери нададуть вам зворотній зв’язок за першої можливості
				</p>
			</div>
		</div>
	);
};

export default ShowSubmitMessage;
