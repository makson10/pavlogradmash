import { EmailIcon, PhoneIcon, TimeIcon, WarningIcon } from './Icons';

const ContactInformation = () => (
	<div className="w-1/2 max-sm:w-full max-sm:mx-auto">
		<p className="jetbrains-mono text-[20px] text-[#F99200]">
			КОНТАКТНА ІНФОРМАЦІЯ
		</p>
		<div className="flex flex-col gap-12 mt-10">
			<div className="flex flex-row gap-4">
				<PhoneIcon />
				<div className="flex flex-col">
					<p className="jetbrains-mono text-[20px] text-[#002834]">Телефон</p>
					<div className="inter text-[16px] text-[#4B5563]">
						<p>+380 67 935 12 65</p>
						<p>+380 67 134 20 00</p>
					</div>
				</div>
			</div>
			<div className="flex flex-row gap-4">
				<EmailIcon />
				<div className="flex flex-col">
					<p className="jetbrains-mono text-[20px] text-[#002834]">Email</p>
					<div className="inter text-[16px] text-[#4B5563]">
						<p>pavlogradmash@gmail.com</p>
					</div>
				</div>
			</div>
			<div className="flex flex-row gap-4">
				<TimeIcon />
				<div className="flex flex-col">
					<p className="jetbrains-mono text-[20px] text-[#002834]">
						Часи роботи
					</p>
					<div className="inter text-[16px] text-[#4B5563]">
						<p>09:00-17:00</p>
					</div>
				</div>
			</div>
			<div className="flex flex-row gap-4">
				<WarningIcon />
				<div className="flex flex-col">
					<p className="jetbrains-mono text-[20px] text-[#002834]">Увага!</p>
					<div className="inter text-[16px] text-[#4B5563] w-4/5">
						<p>
							Наші менеджери нададуть вам зворотній зв’язок за першої можливості
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default ContactInformation;
