// loading.js

import classes from "./loading.module.css";

export default function MealsLoadingPage() {
  return (
    <div className={classes.loadingContainer}>
      <p className={classes.loadingText}>
        Please be patient; all the data is coming…
      </p>
    </div>
  );
}
