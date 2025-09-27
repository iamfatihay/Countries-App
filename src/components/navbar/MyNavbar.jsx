import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import logo from "../../img/Fatih-Ay-1.png";

function MyNavbar() {
    const { theme, toggleTheme } = useTheme();

    const handleLogoClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <Navbar
            className="modern-navbar"
            expand="md"
            fixed="top"
            style={{ backgroundColor: "var(--bg-card)" }}
        >
            <Container>
                <Link to="/" onClick={handleLogoClick}>
                    <img alt="logo" src={logo} width="100px" />
                </Link>
                <Navbar.Toggle
                    aria-controls="navbarScroll"
                    style={{ borderColor: "var(--border-color)" }}
                />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: "200px" }}
                        navbarScroll
                    >
                        <NavLink
                            className="nav-link fs-5 me-4"
                            to="/"
                            style={({ isActive }) => ({
                                fontWeight: isActive ? "bold" : "normal",
                                color: "var(--text-primary)",
                            })}
                            onClick={handleLogoClick}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className="nav-link fs-5 me-4"
                            to="/about"
                            style={({ isActive }) => ({
                                fontWeight: isActive ? "bold" : "normal",
                                color: "var(--text-primary)",
                            })}
                        >
                            About
                        </NavLink>
                        <a
                            href="https://github.com/iamfatihay"
                            className="nav-link fs-5 me-4"
                            target="_blank"
                            rel="noreferrer"
                            style={{ color: "var(--text-primary)" }}
                        >
                            🌟 Github
                        </a>
                        <button
                            className="theme-toggle"
                            onClick={toggleTheme}
                            style={{
                                backgroundColor: "var(--bg-card)",
                                borderColor: "var(--border-color)",
                                color: "var(--text-primary)",
                            }}
                        >
                            {theme === "light" ? <FaMoon /> : <FaSun />}
                            <span className="d-none d-md-inline">
                                {theme === "light" ? "Dark" : "Light"}
                            </span>
                        </button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;
