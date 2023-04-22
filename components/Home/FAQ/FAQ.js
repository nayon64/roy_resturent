import { useState } from "react";

const FAQ = () => {
	const [accordingOpen, setAccordingOpen] = useState(0);
	

	const handleAccording = (e) => {
		if (e == accordingOpen) {	
			setAccordingOpen(0)
		} else {
			setAccordingOpen(e)
			
		}
	}
	
  return (
    <section className="max-w-5xl mx-auto grid grid-cols-5 gap-8">
      <div className="col-span-2 bg-green-600"></div>
      <div className="col-span-3">
        <div className="">
          <div className="rounded overflow-hidden shadow cursor-pointer mb-2">
            <div
              onClick={() => handleAccording(1)}
              className={`duration-500 bg-gradient-to-r  ${
                accordingOpen == 1
                  ? "  from-orange-600 to-orange-400 text-white"
                  : "from-gray-300 to-gray-200 text-slate-700 "
              }  p-3 flex justify-between items-center text-sm font-semibold  tracking-wide `}
            >
              Acording One
              <div className="  w-4 h-4  flex justify-center items-center relative">
                <div
                  className="w-full bg-black "
                  style={{ height: "2px" }}
                ></div>
                <div
                  className={`w-full  duration-300 absolute ${
                    accordingOpen == 1 ? "bg-white" : "-rotate-90 bg-black"
                  }`}
                  style={{ height: "2px" }}
                ></div>
              </div>
            </div>
            <div
              onClick={() => setAccordingOpen(1)}
              className={`px-3 duration-300 ${
                accordingOpen == 1 ? "py-3 " : "  h-0"
              }`}
            >
              <p
                className={`duration-700  ${
                  accordingOpen == 1 ? "scale-100" : "scale-75"
                }`}
              >
                According value...
              </p>
            </div>
          </div>
          <div className="rounded overflow-hidden shadow cursor-pointer mb-2">
            <div
              onClick={() => handleAccording(2)}
              className={`duration-500 bg-gradient-to-r  ${
                accordingOpen == 2
                  ? "  from-orange-600 to-orange-400 text-white"
                  : "from-gray-300 to-gray-200 text-slate-700"
              }  p-3 flex justify-between items-center text-sm font-semibold  tracking-wide  `}
            >
              Acording TWo
              <div className="  w-4 h-4  flex justify-center items-center relative">
                <div
                  className="w-full bg-black "
                  style={{ height: "2px" }}
                ></div>
                <div
                  className={`w-full  duration-300 absolute ${
                    accordingOpen == 2 ? "bg-white" : "-rotate-90 bg-black"
                  }`}
                  style={{ height: "2px" }}
                ></div>
              </div>
            </div>
            <div
              onClick={() => setAccordingOpen(2)}
              className={`px-3 duration-300 ${
                accordingOpen == 2 ? "py-3 " : "  h-0"
              }`}
            >
              <p
                className={`duration-700  ${
                  accordingOpen == 2 ? "scale-100" : "scale-75"
                }`}
              >
                According value...
              </p>
            </div>
          </div>
          <div className="rounded overflow-hidden shadow cursor-pointer">
            <div
              onClick={() => handleAccording(3)}
              className={`duration-500 bg-gradient-to-r  ${
                accordingOpen == 3
                  ? "  from-orange-600 to-orange-400 text-white"
                  : "from-gray-300 to-gray-200 text-slate-700"
              }  p-3 flex justify-between items-center text-sm font-semibold  tracking-wide `}
            >
              Acording Three
              <div className="  w-4 h-4  flex justify-center items-center relative">
                <div
                  className="w-full bg-black "
                  style={{ height: "2px" }}
                ></div>
                <div
                  className={`w-full  duration-300 absolute ${
                    accordingOpen == 3 ? "bg-white" : "-rotate-90 bg-black"
                  }`}
                  style={{ height: "2px" }}
                ></div>
              </div>
            </div>
            <div
              className={`px-3 duration-300 ${
                accordingOpen == 3 ? "py-3 " : "  h-0"
              }`}
            >
              <p
                className={`duration-700  ${
                  accordingOpen == 3 ? "scale-100" : "scale-75"
                }`}
              >
                According value...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
