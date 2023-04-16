import LunchMenu from "@/components/Menu/LunchMenu/LunchMenu";
import PageMainBanner from "@/components/Shareds/PageMainBanner/PageMainBanner";


const index = () => {


	return (
    <div className="pt-6">
      <PageMainBanner />
      <LunchMenu  sectionTitle={"LUNCH MENU"} />
      <LunchMenu customStyle={"dark"} sectionTitle={"APPETIZER"} />
      <LunchMenu  sectionTitle={"MAIN COURSE"} />
      <h1>this is menu pages......</h1>
    </div>
  );
};

export default index;