import ContactInfo from "@/components/Contact/ContactInfo/ContactInfo";
import Message from "@/components/Contact/Message/Message";
import PageMainBanner from "@/components/Shareds/PageMainBanner/PageMainBanner";

const index = () => {
  return (
    <div className="pt-6">
      <PageMainBanner title={"contact"} />
      <section className="max-w-5xl mx-auto my-20 grid grid-cols-10">
        <ContactInfo />
        <div className="col-span-6"></div>
      </section>
      <Message/>
    </div>
  );
};

export default index;
