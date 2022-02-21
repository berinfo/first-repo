import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../store";
import classes from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.isAuth);
  const logout = () => {
    dispatch(userActions.logout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {user && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
