import Link from 'next/link';

const Navbar = () => {

	

	const navMenus = [
		{
			name: "Home",
			path:"/",
		},
		{
			name: "About",
			path:"/about",
		}
	]
	const menus = navMenus.map((m,i )=> <Link key={i} href={m.path}>{m.name}</Link>)

	return (
		<nav>{menus}
		</nav>
	);
};

export default Navbar;