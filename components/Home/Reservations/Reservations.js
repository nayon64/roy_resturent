import { useState } from "react";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";



const Reservations = () => {
	const { register, handleSubmit, formState: { errors } } = useForm();

  const [dayModal,setDayModal]=useState(false)
  const [selectDate, setSelectDate] = useState(new Date())
  const [selected, setSelected] = useState();

	const bookingSubmit = (data) => {
		// console.log(data);
  }
  let footer = <p className="w-52">Please pick a day.</p>;
  if (selected) {
    const date = format(selected, "PP");
    footer = <p className="w-52">You picked {date}.</p>;
    // setSelectDate(date) 
  }

	const currentDate = new Date()
	const date = currentDate.getMonth()+1 + "/" + currentDate.getDate() + "/" + currentDate.getFullYear();
	return (
    <section
      className=" text-center my-12 bg-center object-cover bg-fixed"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1592417817038-d13fd7342605?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,
      }}
    >
      <div className="py-24 bg-gradient-to-r from-black/70 to-black/30">
        <h4 className="text-white font-serif">Reservations</h4>
        <h1 className="text-4xl font-bold font-mono mt-4 mb-8 text-orange-300">BOOK A TABLE</h1>
        <form
          action=""
          onSubmit={handleSubmit(bookingSubmit)}
          className="flex justify-center gap-3 text-white"
        >
          <div className="">
            <input
              className="border border-orange-300 outline-none px-2 py-1 bg-transparent"
              type="text"
              {...register("persons", { required: true })}
            />
            {errors.persons && (
              <span className="block">This is field is required!</span>
            )}
          </div>
          <div>
            <div className="relative text-center">
              <div
                onClick={() => setDayModal(!dayModal)}
                className="border border-orange-300 outline-none px-2 py-1 relative w-48"
              >
                4/12/2023
              </div>
              {/* <input
                className="absolute left-0 top-0"
                type="date"
                {...register("date", { required: true })}
                Value={currentDate}
              /> */}
              <div
                className={`absolute left-0 top-9 ${dayModal ? "" : "hidden"}`}
              >
                <div>
                  <DayPicker
                    mode="single"
                    selected={selected}
                    onSelect={setSelected}
                    footer={footer}
                  ></DayPicker>
                </div>
              </div>
            </div>

            {errors.date && (
              <span className="block">This is field is required!</span>
            )}
          </div>
          <div>
            <input
              className="border border-orange-300 outline-none px-2 py-1 bg-transparent"
              type="text"
              {...register("time", { required: true })}
            />
            {errors.time && (
              <span className="block">This is field is required!</span>
            )}
          </div>
          <div>
            <input
              className="py-1 px-4 border border-orange-300 cursor-pointer"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Reservations;