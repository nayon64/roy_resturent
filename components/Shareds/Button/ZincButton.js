

const ZincButton = ({value}) => {
	return (
    <div className="uppercase border border-zinc-600 inline-block py-1 px-3 text-zinc-600 rounded font-mono cursor-pointer  duration-500 mt-4 mx-2 hover:text-white hover:bg-orange-500 hover:border-orange-500">
      {value}
    </div>
  );
};

export default ZincButton;