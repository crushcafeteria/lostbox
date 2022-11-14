import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container">
                <Link className="navbar-brand text-white" to="/">Lostbox</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/">Browse Items</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/report-lost">Report lost item</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}