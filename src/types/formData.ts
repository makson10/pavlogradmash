export interface IFormData {
	firstName: string;
	lastName: string;
	phoneNumber: string;
	message: string;
	fuelType:
		| ''
		| 'nevermind'
		| 'coal_dg'
		| 'coal_gj'
		| 'coal_dgr'
		| 'shlamokontsentrat';
}
