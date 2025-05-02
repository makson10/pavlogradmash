import { IFormData } from '@/types/formData.types';
import axios from 'axios';
import fuelDict from './fuelDict';

const formatFeedbackNotificationText = (data: IFormData) => {
	return `🔥 Новий запит 🔥

Прізвище та iм'я користувача: ${data.lastName} ${data.firstName}
Номер телефону: ${data.phoneNumber}
Вид палива: ${fuelDict[data.fuelType as keyof typeof fuelDict]}
${
	data.message &&
	`
Повідомлення від користувача:
${data.message}
`
}    
Будь ласка, зв'яжіться з користувачем для підтвердження замовлення 💼`;
};

const sendFeedbackNotification = async (data: IFormData) => {
	const formattedText = formatFeedbackNotificationText(data);
	const url = `https://api.telegram.org/bot${
		import.meta.env.VITE_TELEGRAM_BOT_TOKEN
	}/sendMessage`;
	const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

	await axios
		.post(url, {
			chat_id: chatId,
			text: formattedText,
			parse_mode: 'html',
		})
		.catch((error) => {
			console.error('Error:', error);
		});
};

export default sendFeedbackNotification;
