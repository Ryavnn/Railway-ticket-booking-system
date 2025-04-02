import { useEffect, useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove authentication token
    localStorage.removeItem("role");
    localStorage.removeItem("username"); // Remove username
    setUsername(null);
    navigate("/login");
  };

  return (
    <nav className="nav-bar">
      <ul>
        <Link className="logo" to="/">
          GREEN<span>LINE</span>
        </Link>
        <Link className="nav-items" to="/tours">
          Tours
        </Link>
        <Link className="nav-items" to="/aboutUs">
          About us
        </Link>

        {username ? (
          <div className="user-info">
            <span className="username">Welcome, {username}</span>{" "}
            {/* Display username */}
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <Link className="login-nav-btn" to="/login">
            Login
          </Link>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
