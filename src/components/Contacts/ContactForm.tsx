import { Formik, Form, Field, ErrorMessage } from 'formik';
import validationSchema from '../../assets/validationSchema';
import sendFeedbackNotification from '../../assets/feedbackNotification';
import { IFormData } from '../../types/formData';
import '@/styles/input.css';

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

	return (
		<div className="w-1/2">
			<p className="jetbrains-mono text-[20px] text-[#F99200] text-center">
				ЗАЛИШИТИ ПОВІДОМЛЕННЯ
			</p>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}>
				{() => (
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
								className="form-input"
							/>
							<ErrorMessage
								name="message"
								component="div"
								className="input-error"
							/>
						</div>
						<div>
							<Field as="select" name="fuelType" className="form-input">
								<option value="" disabled>
									Вид палива, який цікавить
								</option>
								<option value="nevermind">Будь-який/не можу визначитися</option>
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
							className="bg-[#F99200] text-white py-3 rounded-[5px] font-[Jetbrains_mono] font-500">
							НАДІСТАЛИ ПОВІДОМЛЕННЯ
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default ContactForm;
