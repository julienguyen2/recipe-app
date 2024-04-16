import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Welcome to our Recipe App!</h2>
      <p>We're delighted to have you here.</p>
      <p>
        Ready to add your special touch to our recipe collection? Share your
        favorite recipe with us and inspire others in the kitchen! Your recipe
        could be the next favorite among our users!
      </p>
    </section>
  );
};

export default MealsSummary;
