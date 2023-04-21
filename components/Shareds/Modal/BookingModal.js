import { useEffect, useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsXLg } from "react-icons/bs";
import PrimaryButton from "../Button/PrimaryButton";
import SecondaryButton from "../Button/SecondaryButton";
const BookingModal = ({ setBookingModalOpen }) => {
  const [bookedTimes, setBookedTimes] = useState([]);

  useEffect(() => {
    fetch("bookedTimes.json")
      .then((res) => res.json())
      .then((data) => {
        setBookedTimes(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const bookingTime = (e) => {
    const booked = e.time;
    let findTime = bookedTimes.find((t) => t.time == booked);
    const checkTime = findTime["booked"];
    if (checkTime === false) {
      findTime["booked"] = true;
    }
  };

  return (
    <div className="fixed z-50 w-full h-full top-0 bg-gray-400/70 flex justify-center items-center overflow-y-auto scrollbar-thin scrollbar-thumb-orange-500  scrollbar-rounded-full">
      <div className="max-w-3xl bg-white grid grid-cols-6 my-4 ">
        <div className="col-span-2 bg-orange-500 text-white p-4 flex flex-col justify-center">
          <AiOutlineInfoCircle className="text-5xl mx-auto mb-3 z-50 " />
          <h3>By booking the table you agree to these points:</h3>
          <ul className="text-xs pl-4 list-disc">
            <li className="my-2">
              Vivamus sagitits lacus vel augue laoreet ruturn faucibus dolor
              auctor.
            </li>
            <li className="my-2">
              Cum socils natoque penatibus et magins dis parturient montes,
              nascetur fidiculs mus.
            </li>
            <li className="my-2">
              cras mattis consectetur purus sit amet fermentum.
            </li>
            <li className="my-2">
              Lorem ipsum dolor sit amet. consectetur adipiscing elit.
            </li>
          </ul>
        </div>
        <div className="col-span-4 py-4 relative px-8">
          <BsXLg
            className="absolute right-3 top-3 cursor-pointer hover:text-orange-500 duration-300"
            onClick={() => setBookingModalOpen(false)}
          />
          <h2 className="text-2xl font-mono text-orange-500 text-center">
            Booking Table
          </h2>
          <div className="mt-2">
            <label className="text-zinc-700" htmlFor="">
              Select your table booking date:
            </label>
            <input
              className="border border-orange-500 w-full rounded outline-none px-2 py-1 text-sm mt-1"
              type="date"
            />
          </div>
          <div className="mt-2">
            <label className="text-zinc-700" htmlFor="">
              Select your table booking time:
            </label>
            <div className="grid grid-cols-4 gap-2 mt-2">
              {bookedTimes.map((b, i) => (
                <div
                  key={i}
                  onClick={() => bookingTime(b)}
                  className={`border text-center px-2 py-1 text-sm  rounded-sm hover:bg-orange-500 hover:text-white duration-300 ${
                    b.booked
                      ? "bg-orange-500 text-white"
                      : "text-zinc-800  cursor-pointer"
                  }`}
                >
                  {b.time}
                </div>
              ))}
            </div>
          </div>
          <div className="border-t mt-4 flex justify-center">
            <div onClick={() => setBookingModalOpen(false)}>
              <SecondaryButton value={"Cencle"} />
            </div>
            <PrimaryButton value={"Booking Table"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
