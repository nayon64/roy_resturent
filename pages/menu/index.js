import LunchMenu from "@/components/Menu/LunchMenu/LunchMenu";
import Price from "@/components/Menu/Price/Price";
import PageMainBanner from "@/components/Shareds/PageMainBanner/PageMainBanner";


const index = () => {


	return (
    <div className="pt-6">
      <PageMainBanner title={"menu"} />
      <LunchMenu  sectionTitle={"LUNCH MENU"} />
      <LunchMenu customStyle={"dark"} sectionTitle={"APPETIZER"} />
      <LunchMenu sectionTitle={"MAIN COURSE"} />
      <Price/>
    </div>
  );
};

export default index;