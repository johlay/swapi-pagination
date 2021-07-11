import { makeStyles } from "@material-ui/styles";
import { Button, Grid, Typography } from "@material-ui/core";
import { useContext } from "react";
import { APIContext } from "../../contexts/APIContext";

/* Material-UI */
const useStyles = makeStyles({
  header: {
    textAlign: "center",
  },
});

const Catalogue = () => {
  /* Styles */
  const classes = useStyles();

  /* Context */
  const { setCurrentPage, setEndpoint } = useContext(APIContext);

  const url = "https://swapi.dev/api";

  return (
    <>
      <header className={classes.header}>
        <Typography variant="h4" component="h2" gutterBottom>
          Catalogue
        </Typography>
      </header>
      <Grid container item direction="row" justifyContent="center">
        <Button
          onClick={() => {
            setCurrentPage(1);
            setEndpoint(`${url}/people`);
          }}
        >
          People
        </Button>
        <Button
          onClick={() => {
            setCurrentPage(1);
            setEndpoint(`${url}/vehicles`);
          }}
        >
          Vehicles
        </Button>
        <Button
          onClick={() => {
            setCurrentPage(1);
            setEndpoint(`${url}/starships`);
          }}
        >
          Starships
        </Button>
        <Button
          onClick={() => {
            setCurrentPage(1);
            setEndpoint(`${url}/species`);
          }}
        >
          Species
        </Button>
        <Button
          onClick={() => {
            setCurrentPage(1);
            setEndpoint(`${url}/planets`);
          }}
        >
          Planets
        </Button>
      </Grid>
    </>
  );
};

export default Catalogue;
