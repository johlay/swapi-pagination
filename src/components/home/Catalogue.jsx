import { makeStyles } from "@material-ui/styles";
import { Button, Grid, Typography } from "@material-ui/core";

/* Material-UI */
const useStyles = makeStyles({
  header: {
    textAlign: "center",
  },
});

const Catalogue = () => {
  /* styles */
  const classes = useStyles();

  return (
    <>
      <header className={classes.header}>
        <Typography
          variant="h4"
          component="h2"
          justifyContent="center"
          gutterBottom
        >
          Catalogue
        </Typography>
      </header>
      <Grid container item direction="row" justifyContent="center">
        <Button>People</Button>
        <Button>Starships</Button>
        <Button>Vehicles</Button>
        <Button>Species</Button>
        <Button>Planets</Button>
      </Grid>
    </>
  );
};

export default Catalogue;
