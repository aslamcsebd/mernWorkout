import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <Link to="/">
          <h4>Workout body</h4>
        </Link>
      </div>
    </nav>
  );
}
