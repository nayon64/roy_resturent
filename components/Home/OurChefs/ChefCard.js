import Image from "next/image";


const ChefCard = () => {
	const chefDetails = {
    picture:
      "https://images.unsplash.com/photo-1614436163996-25cee5f54290?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=442&q=80",
		name: "Danni Wyatt",
	degignation:"Manager"
  };
	return (
    <div>
      <div className="overflow-hidden">
        <Image
          className="hover:scale-125  duration-700"
          src={chefDetails.picture}
          width={300}
          height={10}
          alt=""
        />
      </div>
      <h2>{chefDetails.name}</h2>
      <h5>{chefDetails.degignation}</h5>
    </div>
  );
};

export default ChefCard;