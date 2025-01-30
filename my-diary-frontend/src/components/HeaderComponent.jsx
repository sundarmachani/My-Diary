import { Link } from "react-router-dom";
import { useAuth } from "./security/AuthContext";
export default function HeaderComponent() {
  const authContext = useAuth();
  const isAuthenticated = authContext.isAuthenticated;
  const welcomeUrl = `/welcome/${authContext.username}`;
  function Logout() {
    authContext.Logout();
  }
  
  return (
    <header className="border-bottom border-light border-5 mb-5 p-2">
      <div className="container headerComponent">
        <div className="row">
          <nav className="navbar navbar-expand-lg">
            <a
              className="navbar-brand ms-2 fs-2 fw-bold text-black"
              href="https://sundarmachani.wixsite.com/portfolio"
            >
              My Diary
            </a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item fs-5">
                  {isAuthenticated && (
                    <Link className="nav-link" to={welcomeUrl}>
                      Home
                    </Link>
                  )}
                </li>
                <li className="nav-item fs-5">
                  {isAuthenticated && (
                    <Link className="nav-link" to="/entries">
                      Entries
                    </Link>
                  )}
                </li>
              </ul>
            </div>
            <ul className="navbar-nav">
              <li className="nav-item fs-5">
                {!isAuthenticated && (
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                )}
              </li>
              <li className="nav-item fs-5">
                {isAuthenticated && (
                  <Link className="nav-link" to="/logout" onClick={Logout}>
                    Logout
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
