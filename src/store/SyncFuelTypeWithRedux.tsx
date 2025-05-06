import { useEffect } from 'react';
import { useFormikContext } from 'formik';
import { useAppSelector } from './hooks';
import { RootState } from './store';

const SyncFuelTypeWithRedux = () => {
	const { setFieldValue } = useFormikContext();
	const fuelType = useAppSelector((state: RootState) => state.fuelType);

	useEffect(() => {
		if (fuelType) {
			setFieldValue('fuelType', fuelType);
		}
	}, [fuelType, setFieldValue]);

	return null;
};

export default SyncFuelTypeWithRedux;
