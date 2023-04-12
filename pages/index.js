import Banner from "@/components/Home/Banner";
import FeatureService from "@/components/Home/FeatureService";
import HomeAbout from "@/components/Home/HomeAbout/HomeAbout";
import OurChefs from "@/components/Home/OurChefs/OurChefs";
import Reservations from "@/components/Home/Reservations/Reservations";
import SetMenus from "@/components/Home/SetMenus/SetMenus";


export default function Home() {
  return (
    <main >
      
      <div>
        <Banner />
        <FeatureService />
        <HomeAbout />
        <SetMenus />
        <OurChefs />
        <Reservations/>
        {/* <BannerCard /> */}
        {/* <h1>This is main section</h1> */}
</div>
     

    </main>
  )
}
