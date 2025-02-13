import { Link } from "react-router-dom"

const Header = () => {
    return <div className="header">
        <Link className="headerLink" to="/">
            <h1 className="headertitle">Cinema.com</h1>
        </Link>
        <Link className="githubLink" to="https://github.com/h1toh">
            <img className="githubImg" src="../src/assets/images/github/github-mark-white.svg" title="Github" alt="Github" />
        </Link>
    </div>
}
export default Header