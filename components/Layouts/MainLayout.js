import BottomToTopBtn from "../Shareds/BottomToTop/BottomToTop";
import Footer from "../Shareds/Footer/Footer";
import Navbar from "../Shareds/Navbar/Navbar";
import SocialMedia from "../Shareds/SocialMedia/SocialMedia";


const MainLayout = ({children}) => {
	return (
		<div>
			<Navbar />
			<main>{ children}</main>
			<Footer />
			<BottomToTopBtn />
			<SocialMedia/>
		</div>
	);
};

export default MainLayout;