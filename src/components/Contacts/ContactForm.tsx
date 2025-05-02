import { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import validationSchema from '@/assets/validationSchema';
import sendFeedbackNotification from '@/assets/feedbackNotification';
import { IFormData } from '@/types/formData.types';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import '@/styles/input.css';

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

const ContactForm = () => {
	const initialValues: IFormData = {
		firstName: '',
		lastName: '',
		phoneNumber: '',
		message: '',
		fuelType: '',
	};

	const handleSubmit = async (values: IFormData) => {
		await sendFeedbackNotification(values);
	};

	const handlePhoneNumberFocus = (e: React.FocusEvent<HTMLInputElement>) => {
		if (
			!e.target.value ||
			e.target.value === '+' ||
			e.target.value === '+3' ||
			e.target.value === '+38'
		) {
			e.target.value = '+380';
		}
	};

	return (
		<div className="w-1/2">
			<p className="jetbrains-mono text-[20px] text-[#F99200] text-center cursor-pointer">
				ЗАЛИШИТИ ПОВІДОМЛЕННЯ
			</p>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}>
				{({ values, handleChange }) => (
					<>
						<SyncFuelTypeWithRedux />

						<Form className="flex flex-col gap-8 mt-10 mx-auto w-2/3">
							<div>
								<Field
									type="text"
									name="firstName"
									placeholder="Ім’я"
									className="form-input"
								/>
								<ErrorMessage
									name="firstName"
									component="div"
									className="input-error"
								/>
							</div>
							<div>
								<Field
									type="text"
									name="lastName"
									placeholder="Прізвище"
									className="form-input"
								/>
								<ErrorMessage
									name="lastName"
									component="div"
									className="input-error"
								/>
							</div>
							<div>
								<Field
									type="text"
									name="phoneNumber"
									placeholder="Номер телефону"
									className="form-input"
									onFocus={handlePhoneNumberFocus}
								/>
								<ErrorMessage
									name="phoneNumber"
									component="div"
									className="input-error"
								/>
							</div>
							<div>
								<Field
									as="textarea"
									name="message"
									placeholder="Напишіть ваше повідомлення"
									className="form-input min-h-[72px] max-h-[150px] resize-none overflow-auto"
									onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
										e.target.style.height = 'auto';
										e.target.style.height = `${Math.min(
											e.target.scrollHeight,
											150
										)}px`;
									}}
								/>
								<ErrorMessage
									name="message"
									component="div"
									className="input-error"
								/>
							</div>
							<div>
								<Field
									as="select"
									name="fuelType"
									className="form-input"
									value={values.fuelType}
									onChange={handleChange}>
									<option value="" disabled>
										Вид палива, який цікавить
									</option>
									<option value="nevermind">
										Будь-який/не можу визначитися
									</option>
									<hr />
									<option value="coal_dg">ВУГІЛЛЯ ДГ</option>
									<option value="coal_gj">ВУГІЛЛЯ ГЖ</option>
									<option value="coal_dgr">ВУГІЛЛЯ ДГР</option>
									<option value="shlamokontsentrat">
										ШЛАМОКОНЦЕНТРАТ АГРІЛІТ
									</option>
								</Field>
								<ErrorMessage
									name="fuelType"
									component="div"
									className="input-error"
								/>
							</div>
							<button
								type="submit"
								className="bg-[#F99200] text-white py-3 rounded-[5px] font-[Jetbrains_mono] font-500 cursor-pointer">
								НАДІСТАЛИ ПОВІДОМЛЕННЯ
							</button>
						</Form>
					</>
				)}
			</Formik>
		</div>
	);
};

export default ContactForm;
