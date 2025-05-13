import { useAppDispatch } from '@/store/hooks';
import { changeFuelType } from '@/store/fuelTypeSlice';
import '@/styles/table.css';

const CoalTable = () => {
	const dispatch = useAppDispatch();

	const handleClick = (fuelType: string) => {
		dispatch(changeFuelType(fuelType));
		window.location.href = '#contact-form';
	};

	return (
		<div className="w-full overflow-x-auto">
			<table className="w-full border-separate border-spacing-y-5 max-sm:border-spacing-y-0 max-sm:mt-4 md:max-lg:mt-0 md:max-lg:border-spacing-y-0">
				<thead>
					<tr className="bg-[#D9D9D9]">
						<th className="header-cell">ВИД ПАЛИВА</th>
						<th className="header-cell">МАРКА</th>
						<th className="header-cell">ФРАКЦІЯ</th>
						<th className="header-cell">ЗОЛЬНІСТЬ</th>
						<th className="header-cell">ВОЛОГА</th>
						<th className="header-cell">КАЛОРІЙНІСТЬ</th>
						<th className="header-cell">ВИХІД ЛЕТУЧИХ</th>
						<th className="header-cell"></th>
					</tr>
				</thead>
				<tbody>
					<tr className="bg-[#E9E9EB]">
						<td className="row-cell">ШЛАМОКОНЦЕНТРАТ</td>
						<td className="row-cell">АГРІЛІТ</td>
						<td className="row-cell">0.3 мм</td>
						<td className="row-cell">10-45%</td>
						<td className="row-cell">25%</td>
						<td className="row-cell">3400-5100</td>
						<td className="row-cell">38-42%</td>
						<td className="row-cell">
							<button
								className="row-button"
								onClick={() => handleClick('shlamokontsentrat')}>
								ЗАМОВИТИ
							</button>
						</td>
					</tr>
					<tr className="bg-[#E9E9EB]">
						<td className="row-cell">ВУГІЛЛЯ</td>
						<td className="row-cell">ДГ</td>
						<td className="row-cell">0-13, 13-100</td>
						<td className="row-cell">10-20%</td>
						<td className="row-cell">6-8%</td>
						<td className="row-cell">5300-5800</td>
						<td className="row-cell">38-42%</td>
						<td className="row-cell">
							<button
								className="row-button"
								onClick={() => handleClick('coal_dg')}>
								ЗАМОВИТИ
							</button>
						</td>
					</tr>
					<tr className="bg-[#E9E9EB]">
						<td className="row-cell">ВУГІЛЛЯ</td>
						<td className="row-cell">ГЖ</td>
						<td className="row-cell">0-13, 13-100</td>
						<td className="row-cell">10-20%</td>
						<td className="row-cell">6-8%</td>
						<td className="row-cell">5300-5800</td>
						<td className="row-cell">38-42%</td>
						<td className="row-cell">
							<button
								className="row-button"
								onClick={() => handleClick('coal_gj')}>
								ЗАМОВИТИ
							</button>
						</td>
					</tr>
					<tr className="bg-[#E9E9EB]">
						<td className="row-cell">ВУГІЛЛЯ</td>
						<td className="row-cell">ДГР</td>
						<td className="row-cell">0-200</td>
						<td className="row-cell">10-20%</td>
						<td className="row-cell">6-8%</td>
						<td className="row-cell">5300-5800</td>
						<td className="row-cell">38-42%</td>
						<td className="row-cell">
							<button
								className="row-button"
								onClick={() => handleClick('coal_dgr')}>
								ЗАМОВИТИ
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default CoalTable;
