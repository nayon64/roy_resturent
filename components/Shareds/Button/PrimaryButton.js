

const PrimaryButton = ({value}) => {
	return (
		<div className="uppercase bg-orange-400 inline-block py-1 px-3 text-white rounded font-mono cursor-pointer hover:bg-zinc-800  duration-300 mt-4">
			{value}
		</div>
	);
};

export default PrimaryButton;