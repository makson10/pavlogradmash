import { configureStore } from '@reduxjs/toolkit';
import fuelTypeReducer from './fuelTypeSlice';

const store = configureStore({
	reducer: {
		fuelType: fuelTypeReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
