import bannerImage from "../../assets/banner.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Recipe App</h1>
      </header>
      <div className={classes["main-image"]}>
        <img src={bannerImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;
