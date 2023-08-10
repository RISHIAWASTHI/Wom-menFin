import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header style={{position:"fixed", zIndex:"1000", width:"100%"}}> 
			<h3>Wom-Men-Fin</h3>
			<nav ref={navRef}>
				<a href="/">Home</a>
				<a href="/Quiz">Quiz</a>
				<a href="/News">News Letter</a>
				<a href="/AboutUs">About Us</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;