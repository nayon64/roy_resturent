import Banner from "@/components/Home/Banner";
import FeatureService from "@/components/Home/FeatureService";
import HomeAbout from "@/components/Home/HomeAbout/HomeAbout";


export default function Home() {
  return (
    <main >
      
      <div>
        <Banner />
        <FeatureService />
        <HomeAbout/>
        {/* <BannerCard /> */}
        {/* <h1>This is main section</h1> */}
</div>
     

    </main>
  )
}
