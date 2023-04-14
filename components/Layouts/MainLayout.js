import BottomToTopBtn from "../Shareds/BottomToTop/BottomToTop";
import Footer from "../Shareds/Footer/Footer";
import Navbar from "../Shareds/Navbar/Navbar";


const MainLayout = ({children}) => {
	return (
		<div>
			<Navbar />
			<main>{ children}</main>
			<Footer />
			<BottomToTopBtn/>
		</div>
	);
};

export default MainLayout;