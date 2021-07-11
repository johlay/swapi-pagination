import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";

/* Material-UI styles */
const useStyles = makeStyles({
  container: {
    border: "1px solid black",
    borderRadius: "1px",
    height: "600px",
    margin: "auto",
    width: "80%",
  },
});

const List = () => {
  /* styles */
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <ul>
        <li>hello</li>
      </ul>
    </Grid>
  );
};

export default List;
