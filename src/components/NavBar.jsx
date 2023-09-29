import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <Link to="/" >Home</Link>
            <div>
                <span>
                <Link to="/posts">Posts</Link> <br></br>
                <Link to="/profile">Profile</Link>
                </span>
                
            </div>
        </nav>
    )
}