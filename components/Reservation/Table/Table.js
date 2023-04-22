import React from 'react';

const Table = ({ setBookingModalOpen }) => {
  const tableImg = [
    "https://template-html.egprojets.com/food-lover/assets/img/demo/reservation/table_8.png",
    "https://template-html.egprojets.com/food-lover/assets/img/demo/reservation/table_1.png",
    "https://template-html.egprojets.com/food-lover/assets/img/demo/reservation/table_6.png",
    "https://template-html.egprojets.com/food-lover/assets/img/demo/reservation/table_1.png",
    "https://template-html.egprojets.com/food-lover/assets/img/demo/reservation/table_8.png",
    "https://template-html.egprojets.com/food-lover/assets/img/demo/reservation/table_8.png",
    "https://template-html.egprojets.com/food-lover/assets/img/demo/reservation/table_1.png",
    "https://template-html.egprojets.com/food-lover/assets/img/demo/reservation/table_6.png",
    "https://template-html.egprojets.com/food-lover/assets/img/demo/reservation/table_1.png",
    "https://template-html.egprojets.com/food-lover/assets/img/demo/reservation/table_8.png",
    "https://template-html.egprojets.com/food-lover/assets/img/demo/reservation/table_8.png",
    "https://template-html.egprojets.com/food-lover/assets/img/demo/reservation/table_1.png",
    "https://template-html.egprojets.com/food-lover/assets/img/demo/reservation/table_6.png",
    "https://template-html.egprojets.com/food-lover/assets/img/demo/reservation/table_1.png",
    "https://template-html.egprojets.com/food-lover/assets/img/demo/reservation/table_8.png",
  ];

  const tableArrange = tableImg.map((t, i) => (
    <div
      onClick={() => setBookingModalOpen(true)}
      key={i}
      className={`flex justify-center relative h-32 `}
    >
      <img className="p-2" src={t} alt="" />
      <span
        className={`absolute top-1/2 -translate-y-1/2 w-full h-full flex  justify-center items-center cursor-pointer  duration-500 hover:text-white  `}
      >
        {i + 1}
      </span>
    </div>
  ));

  return (
    <section className="grid grid-cols-5 gap-5  my-12 max-w-4xl mx-auto">
      {tableArrange}
    </section>
  );
};

export default Table;