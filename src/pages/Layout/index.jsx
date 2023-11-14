import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/list">List</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Layout;
