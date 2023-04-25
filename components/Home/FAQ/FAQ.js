import { useState } from "react";

const FAQ = () => {
  const [accordingOpen, setAccordingOpen] = useState(0);
  

  const faqs = [
    {
      _id: 1,
      question: "How to search city wise restaurant?",
      ans: "To search restaurants in particular city is very simple with foodchow. Enter preferred city name in search bar and click on search. All restaurant listed in searched city will be display.",
    },
    {
      _id: 2,
      question: "How to search restaurants of different country?",
      ans: "To discover restaurants of different countries is very easy with foodchow. User can view restaurant of various countries on foodchow. Scroll down welcome page of foodchow and click on the country flag to view restaurant of that particular country.",
    },
    {
      _id: 3,
      question: "How to register restaurant on foodchow?",
      ans: "Anyone can start their restaurant business online within few minutes. Click on Add Your Restaurant from foodchow welcome page. Enter your mail id and receive mail to add your restaurant details. Add whole details and restaurant will be online.",
    },
    {
      _id: 4,
      question: "How to search restaurant for particular cuisine?",
      ans: "On foodchow you can also find restaurant according to your choice of cuisine. Search restaurant list in your city and click on your favourite cuisine from left hand side panel. All restaurants will be listed with your selected cuisine.",
    },
    {
      _id: 5,
      question: "How to go on particular restaurant page?",
      ans: "There are multiple ways to go on particular restaurant page. Search restaurant city wise or cuisine wise and select restaurant from list. Foodchow providing one unique functionality too i.e. unique URL for every restaurant. If restaurant URL on foodchow is known then type URL and directly go to restaurant page.",
    },
    {
      _id: 6,
      question: "How to view only non-veg item from restaurant menu?",
      ans: "Searching your favourite item from whole menu is headache. Foodchow providing solution for this also. If you are interested in only Non-Veg items then view menu of only Non-Veg items. Go to Cuisine page of your selected restaurant and click on Non-Veg.",
    },
    {
      _id: 7,
      question: "How to view only Veg item from restaurant menu?",
      ans: "Searching your favourite item from whole menu is headache. Foodchow providing solution for this also. If you are interested in only Pure Veg items then view menu of only Veg items. Go to Cuisine page of your selected restaurant and click on Pure-Veg.",
    },
    {
      _id: 8,
      question: "How to view restaurant details?",
      ans: "Foodchow providing personal pages for every restaurant to add their details and contents. Customer can view details of restaurant from restaurant page. Go to restaurant page and click on About to view details of restaurant.",
    },
  ];
	

	const handleAccording = (e) => {
		if (e == accordingOpen) {	
			setAccordingOpen(0)
		} else {
			setAccordingOpen(e)
			
		}
	}
	
  return (
    <section className="max-w-5xl mx-auto grid grid-cols-5 gap-8 mt-16">
      {/* left side section  */}
      <div
        className="col-span-2  object-cover bg-cover bg-center rounded-lg overflow-hidden"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80")`,
        }}
      >
        <div className="bg-black/50 p-4 text-white h-full">
          <h5 className="text-orange-500">Common Question</h5>
          <h2 className="uppercase text-2xl font-bold tracking-wide  my-3">
            Most Popular <br />
            Questions.
          </h2>
          <p className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel illum
            unde nam esse reiciendis odit eos voluptatem eum aliquid? Ducimus
            maiores ea accusamus veniam cumque!
          </p>
        </div>
      </div>
      <div className="col-span-3">
        {faqs.map((f,i) => (
          <div key={i} className="rounded overflow-hidden shadow cursor-pointer mb-2">
            <div
              onClick={() => handleAccording(f._id)}
              className={`duration-500 bg-gradient-to-r  ${
                accordingOpen == f._id
                  ? "  from-orange-600 to-orange-400 text-white"
                  : "from-gray-300 to-gray-200 text-slate-700 "
              }  p-3 flex justify-between items-center text-sm font-semibold  tracking-wide `}
            >
              {f.question}
              <div className="  w-4 h-4  flex justify-center items-center relative">
                <div
                  className="w-full bg-black "
                  style={{ height: "2px" }}
                ></div>
                <div
                  className={`w-full  duration-300 absolute ${
                    accordingOpen == f._id ? "bg-white" : "-rotate-90 bg-black"
                  }`}
                  style={{ height: "2px" }}
                ></div>
              </div>
            </div>
            <div
              onClick={() => setAccordingOpen(f._id)}
              className={`px-3 duration-300 ${
                accordingOpen == f._id ? "py-3 " : "  h-0"
              }`}
            >
              <p
                className={`duration-700 text-xs text-zinc-600  ${
                  accordingOpen == f._id ? "scale-100" : "scale-75"
                }`}
              >
                {f.ans}
              </p>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default FAQ;
