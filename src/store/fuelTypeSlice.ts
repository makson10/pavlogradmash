import { createSlice } from '@reduxjs/toolkit';

const fuelTypeSlice = createSlice({
	name: 'fuelType',
	initialState: '',
	reducers: {
		changeFuelType: (_, action) => {
			return action.payload;
		},
	},
});

export const { changeFuelType } = fuelTypeSlice.actions;
export default fuelTypeSlice.reducer;
