import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link to="/">
          <h4>Workout body</h4>
        </Link>
      </div>
    </nav>
  );
}
