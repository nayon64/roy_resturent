import Banner from "@/components/Home/Banner";
import Blogs from "@/components/Home/Blogs/Blogs";
import CustomarReviews from "@/components/Home/CustomarReviews/CustomarReviews";
import FAQ from "@/components/Home/FAQ/FAQ";
import FeatureService from "@/components/Home/FeatureService";
import FoodSection from "@/components/Home/FoodSection/FoodSection";
import OurChefs from "@/components/Home/OurChefs/OurChefs";
import Reservations from "@/components/Home/Reservations/Reservations";
import SetMenus from "@/components/Home/SetMenus/SetMenus";
import SpeacialMenus from "@/components/Home/SpeacialMenus/SpeacialMenus";


export default function Home() {
  return (
    <main>
      <div>
        <Banner />
        <FeatureService />
        <SpeacialMenus />
        <FoodSection />
        <SetMenus />
        <OurChefs />
        <FAQ />
        <Blogs />
        <Reservations />
        <CustomarReviews />
      </div>
    </main>
  );
}
