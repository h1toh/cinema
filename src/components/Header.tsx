import { Link } from "react-router-dom"

const Header = () => {
    return <div className="header">
        <Link to="/">
            <h1 className="headertitle">Cinema</h1>
        </Link>
    </div>
}

export default Header