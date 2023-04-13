import Footer from "../Shareds/Footer/Footer";
import Navbar from "../Shareds/Navbar/Navbar";


const MainLayout = ({children}) => {
	return (
		<div>
			<Navbar />
			<main>{ children}</main>
			<Footer />
		</div>
	);
};

export default MainLayout;