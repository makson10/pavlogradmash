import { ChangeEvent, FocusEvent, KeyboardEvent, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import validationSchema from '@/assets/validationSchema';
import sendFeedbackNotification from '@/assets/feedbackNotification';
import { IFormData } from '@/types/formData.types';
import ShowSubmitMessage from './ShowSubmitMessage';
import useDeviceDetection from '@/hooks/useDeviceDetection';
import SyncFuelTypeWithRedux from '@/store/SyncFuelTypeWithRedux';
import '@/styles/input.css';

const ContactForm = () => {
	const { isMobile } = useDeviceDetection();
	const [showSubmitMessage, setShowSubmitMessage] = useState(false);

	const initialValues: IFormData = {
		firstName: '',
		lastName: '',
		phoneNumber: '',
		message: '',
		fuelType: '',
	};

	const handlePhoneNumberFocus = (e: FocusEvent<HTMLInputElement>) => {
		if (
			!e.target.value ||
			e.target.value === '+' ||
			e.target.value === '+3' ||
			e.target.value === '+38'
		) {
			e.target.value = '+380';
		}
	};

	const handlePhoneNumberKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
		if (!/[\d+]/.test(e.key)) e.preventDefault();
	};

	const handleMessageInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
		e.target.style.height = 'auto';
		e.target.style.height = `${Math.min(e.target.scrollHeight, 150)}px`;
	};

	const handleMessageKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === 'Enter') e.preventDefault();
	};

	const handleCloseSubmitMessage = () => {
		setShowSubmitMessage(false);
	};

	return (
		<>
			{showSubmitMessage && (
				<ShowSubmitMessage
					handleCloseSubmitMessage={handleCloseSubmitMessage}
				/>
			)}

			<div className="w-1/2 max-sm:w-full md:max-lg:w-full" id="contact-form">
				<p className="jetbrains-mono text-[20px] text-[#F99200] text-center">
					ЗАЛИШИТИ ПОВІДОМЛЕННЯ
				</p>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={async (values, { resetForm }) => {
						await sendFeedbackNotification(values);
						resetForm();

						setShowSubmitMessage(true);
						setTimeout(() => setShowSubmitMessage(false), 5000);
					}}>
					{({ values, handleChange }) => (
						<>
							<SyncFuelTypeWithRedux />

							<Form className="flex flex-col gap-7 mt-10 mx-auto w-2/3 max-sm:w-4/5 max-sm:mt-6 md:max-lg:mx-4 md:max-lg:w-fit">
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
										type="tel"
										name="phoneNumber"
										placeholder="Номер телефону"
										className="form-input"
										onFocus={handlePhoneNumberFocus}
										onKeyPress={handlePhoneNumberKeyPress}
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
										onInput={handleMessageInput}
										onKeyDown={handleMessageKeyDown}
									/>
									<ErrorMessage
										name="message"
										component="div"
										className="input-error"
									/>
								</div>
								<div className={isMobile ? 'form-input' : ''}>
									<Field
										as="select"
										name="fuelType"
										className="form-input cursor-pointer"
										value={values.fuelType}
										onChange={handleChange}>
										<option value="" disabled>
											Вид палива, який цікавить
										</option>
										<option value="nevermind">
											Будь-який/не можу визначитися
										</option>
										<hr />
										<option value="shlamokontsentrat">
											ШЛАМОКОНЦЕНТРАТ АГРІЛІТ
										</option>
										<option value="coal_dg">ВУГІЛЛЯ ДГ</option>
										<option value="coal_gj">ВУГІЛЛЯ ГЖ</option>
										<option value="coal_dgr">ВУГІЛЛЯ ДГР</option>
									</Field>
									<div>
										<ErrorMessage
											name="fuelType"
											component="div"
											className="input-error"
										/>
									</div>
								</div>
								<button
									type="submit"
									className="mt-2 bg-[#F99200] text-white py-3 rounded-[5px] font-[Jetbrains_mono] font-500 cursor-pointer transition-all hover:bg-[#ffcb82]">
									НАДІСТАЛИ ПОВІДОМЛЕННЯ
								</button>
							</Form>
						</>
					)}
				</Formik>
			</div>
		</>
	);
};

export default ContactForm;
