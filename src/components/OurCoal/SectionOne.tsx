const SectionOne = () => (
	<div className="flex flex-row gap-8 justify-between items-center max-sm:flex-col">
		<img
			src="/ourCoal/1.png"
			alt="coal-image"
			className="w-[650px] h-[350px] object-cover rounded-[16px] max-sm:w-[200px] max-sm:h-[200px] md:max-lg:w-1/2 md:max-lg:h-[230px] max-md:max-lg:object-top"
		/>
		<div className="flex flex-col gap-6 w-2/3 max-sm:text-center max-sm:gap-2 max-sm:w-full md:max-lg:gap-2">
			<h2 className="text-[24px] bebas-neue text-[#F99200]">Кам’яне вугілля — надійне паливо для промисловості</h2>
			<h2 className="text-[18px] bebas-neue text-[#002834] leading-[36px] max-sm:leading-normal max-sm:text-[15px] max-sm:w-4/5 max-sm:mx-auto md:max-lg:text-sm md:max-lg:leading-[1.5]">
				Кам’яне вугілля — цінне енергетичне паливо, утворене з рослинних
				залишків під тиском і температурою. Ми спеціалізуємось на постачанні
				якісного кам’яного вугілля з високою теплотворною здатністю, низьким
				вмістом сірки та вологи. Продукція ідеально підходить для ТЕС, котелень,
				металургії, цементної галузі. Прямі поставки, сертифікована якість і
				гнучкі умови роблять нас надійним постачальником кам’яного вугілля в
				Україні.
			</h2>
		</div>
	</div>
);

export default SectionOne;
