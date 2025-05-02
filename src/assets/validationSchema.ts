import * as Yup from 'yup';

const validationSchema = Yup.object({
	firstName: Yup.string()
		.min(2, 'Ім’я повинно містити щонайменше 2 символи')
		.required("Ім’я є обов'язковим"),
	lastName: Yup.string()
		.min(2, 'Прізвище повинно містити щонайменше 2 символи')
		.required("Прізвище є обов'язковим"),
	phoneNumber: Yup.string()
		.matches(
			/^\+380\d{9}$/,
			'Номер телефону повинен починатися з +380 і містити 12 цифр'
		)
		.required("Номер телефону є обов'язковим"),
	message: Yup.string(),
	fuelType: Yup.string().required("Вибір виду палива є обов'язковим"),
});

export default validationSchema;
