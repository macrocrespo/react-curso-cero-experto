import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <>
            <nav className="my-4 rounded-3 navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">useContext</NavLink>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink
                                to="/"
                                className={({ isActive }) => {
                                    return `nav-link ${isActive ? 'active' : ''}`
                                }}
                            >
                                Home
                            </NavLink>

                            <NavLink
                                to="/about"
                                className={({ isActive }) => {
                                    return `nav-link ${isActive ? 'active' : ''}`
                                }}
                            >
                                About
                            </NavLink>

                            <NavLink
                                to="/login"
                                className={({ isActive }) => {
                                    return `nav-link ${isActive ? 'active' : ''}`
                                }}
                            >
                                Login
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>

        </>

    );
}
