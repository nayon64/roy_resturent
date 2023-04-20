import BlogMainBanner from "@/components/Blog/BlogMainBanner/BlogMainBanner";
import PageMainBanner from "@/components/Shareds/PageMainBanner/PageMainBanner";


const index = () => {
	return (
    <div className="pt-6">
      <PageMainBanner title={"blogs"} />
      <BlogMainBanner/>
    </div>
  );
};

export default index;