

const MenuCard = ({title}) => {

	const menus = [
    { name: "Coca Bottle", price: 10 },
    { name: "Gold light", price: 13 },
    { name: "Realy Good", price: 10 },
    { name: "Stick Bottle", price: 20 },
    { name: "Costomapo", price: 16 },
    { name: "Atay", price: 20 }
  ];
	const menuItems = menus.map(m => <div className="drink-item flex justify-between text-xs text-gray-500 "><span className="relative z-10  bg-gray-100 pr-3">{m.name}</span><p>${m.price}</p></div>)

	return (
    <div className="mt-12">
      <div className="text-center">
        <h3 className="text-orange-500 font-mono text-xl ">Drink Menu</h3>
        <h1 className="text-3xl font-bold my-2 text-zinc-800">{title}</h1>
      </div>
      <div className="p-4">
        <div className="flex items-center mb-4">
          <div className="w-2 h-2 rounded-full bg-orange-500"></div>
          <div className="w-8 h-1 rounded-full ml-2 bg-orange-500"></div>
        </div>
        {menuItems}
      </div>
    </div>
  );
};

export default MenuCard;