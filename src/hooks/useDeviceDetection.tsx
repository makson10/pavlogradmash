import { useState, useEffect } from 'react';

const useDeviceDetection = () => {
	const [device, setDevice] = useState('');
	const [isMobile, setIsMobile] = useState(false);
	const [isTablet, setIsTablet] = useState(false);
	const [isDesktop, setIsDesktop] = useState(true);

	useEffect(() => {
		const handleDeviceDetection = () => {
			const userAgent = navigator.userAgent.toLowerCase();
			const isMobile =
				/iphone|ipad|ipod|android|blackberry|windows phone/g.test(userAgent);
			const isTablet =
				/(ipad|tablet|playbook|silk)|(android(?!.*mobile))/g.test(userAgent);

			if (isMobile) {
				setDevice('Mobile');
			} else if (isTablet) {
				setDevice('Tablet');
			} else {
				setDevice('Desktop');
			}
		};

		handleDeviceDetection();
		window.addEventListener('resize', handleDeviceDetection);

		return () => {
			window.removeEventListener('resize', handleDeviceDetection);
		};
	}, []);

	useEffect(() => {
		setIsMobile(device === 'Mobile');
		setIsTablet(device === 'Tablet');
		setIsDesktop(device === 'Desktop');
	}, [device, isDesktop, isMobile, isTablet]);

	return { device, isMobile, isTablet, isDesktop };
};

export default useDeviceDetection;
