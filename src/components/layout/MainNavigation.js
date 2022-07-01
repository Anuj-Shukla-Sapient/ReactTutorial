import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import FavoritesContext from "../../store/favorite-context";
const MainNAvigation = () => {
  const favoriteCtx = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
          <ul>
        <li>
          <Link path to="/">
            All The Meetups
          </Link>
        </li>
        <li>
          <Link path to="/new-meetups">
            Add NEw Meetups
          </Link>
        </li>
        <li>
          <Link path to="/favorites">
            My Favorites<span className={classes.badge}>{favoriteCtx.totalFavorites}</span>
          </Link>
        </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNAvigation;
