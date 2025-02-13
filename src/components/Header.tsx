import { Link } from "react-router-dom"

const Header = () => {
    return <div className="header">
        <Link className="headerLink" to="/">
            <h1 className="headertitle">Cinema</h1>
            <img className="favicon" src="../public/favicon.png" alt="" />
        </Link>
        <Link className="githubLink" to="https://github.com/h1toh">
            <img className="githubImg" src="../src/assets/images/github/github-mark-white.png" alt="" />
        </Link>
    </div>
}
export default Header