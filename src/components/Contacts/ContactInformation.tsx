import { EmailIcon, PhoneIcon, TimeIcon, WarningIcon } from './Icons';

const ContactInformation = () => (
	<div className="w-1/2 max-sm:w-full max-sm:mx-auto md:max-lg:w-full">
		<p className="jetbrains-mono text-[20px] text-[#F99200] max-sm:text-center">
			КОНТАКТНА ІНФОРМАЦІЯ
		</p>
		<div className="flex flex-col gap-12 mt-10 max-sm:items-center max-sm:gap-6">
			<div className="flex flex-row gap-4">
				<PhoneIcon />
				<div className="flex flex-col max-sm:min-w-[200px]">
					<p className="jetbrains-mono text-[20px] text-[#002834]">Телефон</p>
					<div className="inter text-[16px] text-[#4B5563] flex flex-col">
						<a href="tel:+380679351265">+380 67 935 12 65</a>
						<a href="tel:+380671342000">+380 67 134 20 00</a>
					</div>
				</div>
			</div>
			<div className="flex flex-row gap-4">
				<EmailIcon />
				<div className="flex flex-col max-sm:min-w-[200px]">
					<p className="jetbrains-mono text-[20px] text-[#002834]">Email</p>
					<div className="inter text-[16px] text-[#4B5563]">
						<a href="mailto:pavlogradmash@gmail.com" className="underline">
							pavlogradmash@gmail.com
						</a>
					</div>
				</div>
			</div>
			<div className="flex flex-row gap-4">
				<TimeIcon />
				<div className="flex flex-col max-sm:min-w-[200px]">
					<p className="jetbrains-mono text-[20px] text-[#002834]">
						Часи роботи
					</p>
					<div className="inter text-[16px] text-[#4B5563]">
						<p>09:00-17:00</p>
					</div>
				</div>
			</div>
			<div className="flex flex-row gap-4">
				<div className="min-w-[49px]">
					<WarningIcon />
				</div>
				<div className="flex flex-col max-sm:min-w-[200px]">
					<p className="jetbrains-mono text-[20px] text-[#002834]">Увага!</p>
					<div className="inter text-[16px] text-[#4B5563] w-4/5 max-sm:max-w-[200px] max-sm:w-full">
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
