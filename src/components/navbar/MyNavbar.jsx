import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../img/logo.png";
import { Link, NavLink } from "react-router-dom";


function MyNavbar() {

    const handleLogoClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }



    return (
        <Navbar className='border-bottom' bg="light" expand="md" fixed="top">
            <Container>
                <Link to="/" onClick={handleLogoClick}>
                    <img alt="" src={logo} />
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
                        <NavLink
                            className="nav-link fs-4 me-5"
                            to="/"
                            style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}
                            onClick={handleLogoClick}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className="nav-link fs-4 me-4"
                            to="/About"
                            style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}
                        >
                            About
                        </NavLink>
                        <a
                            
                            href="https://github.com/iamfatihay"
                            className="nav-link fs-4"
                            target="_blank"
                            rel="noreferrer"
                        >
                           🌟 Github
                        </a>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;