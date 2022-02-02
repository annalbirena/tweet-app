import { Link, useLocation } from "react-router-dom";

function CustomLink({ children, to }) {
    const location = useLocation();
    const match = location.pathname === to;

    return (
        <div className={`link ${match ? 'active' : ''}`}>
            <Link to={to}>
                {children}
            </Link>
        </div>
    )
}

export default CustomLink;