import Banner from "@/components/Home/Banner";
import Blogs from "@/components/Home/Blogs/Blogs";
import CustomarReviews from "@/components/Home/CustomarReviews/CustomarReviews";
import FeatureService from "@/components/Home/FeatureService";
import FoodSection from "@/components/Home/FoodSection/FoodSection";
import HomeAbout from "@/components/Home/HomeAbout/HomeAbout";
import OurChefs from "@/components/Home/OurChefs/OurChefs";
import Reservations from "@/components/Home/Reservations/Reservations";
import SetMenus from "@/components/Home/SetMenus/SetMenus";
import SpeacialMenus from "@/components/Home/SpeacialMenus/SpeacialMenus";


export default function Home() {
  return (
    <main >
      
      <div>
        <Banner />
        <FeatureService />
        <SpeacialMenus />
        <FoodSection/>
        <Blogs/>
        <HomeAbout />
        <SetMenus />
        <OurChefs />
        <Reservations />
        <CustomarReviews/>
</div>
     

    </main>
  )
}
