import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const ShowSubmitMessage = () =>
	createPortal(<SubmitMessage />, document.querySelector('#portal')!);

const SubmitMessage = () => {
	const [animationStage, setAnimationStage] = useState('hidden');

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
			}`}>
			<div
				className={`flex flex-col gap-2 bg-white w-fit px-7 py-10 text-center max-sm:mx-8 absolute transition-all duration-1000 ease-in-out ${
					animationStage === 'hidden'
						? 'top-full'
						: animationStage === 'started'
						? 'top-[40%]'
						: animationStage === 'end' && 'top-[-25%]'
				}`}>
				<p className="text-[#F99200] jetbrians-mono">МИ ПРИЙНЯЛИ ВАШ ЗАПИТ</p>
				<p className="inter text-[#4B5563] w-4/5 mx-auto">
					Наші менеджери нададуть вам зворотній зв’язок за першої можливості
				</p>
			</div>
		</div>
	);
};

export default ShowSubmitMessage;
