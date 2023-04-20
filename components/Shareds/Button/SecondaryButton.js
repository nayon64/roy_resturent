

const SecondaryButton = ({value}) => {
	return (
    <div className="uppercase border border-orange-500 inline-block py-1 px-3 text-orange-500 rounded font-mono cursor-pointer hover:bg-orange-500 hover:text-white  duration-500 mt-4 mx-2">
      {value}
    </div>
  );
};

export default SecondaryButton;