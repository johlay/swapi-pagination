import { makeStyles } from "@material-ui/styles";
import { Button, Grid, Typography } from "@material-ui/core";
import { useContext, useState } from "react";
import { APIContext } from "../../contexts/APIContext";
import useDocumentTitle from "../../hooks/useDocumentTitle";

/* Material-UI */
const useStyles = makeStyles({
  header: {
    textAlign: "center",
  },
});

/* URL */
const url = "https://swapi.dev/api/";

const Catalogue = () => {
  /* Styles */
  const classes = useStyles();

  const [title, setTitle] = useDocumentTitle("");

  /* Context */
  const { setCurrentPage, setEndpoint } = useContext(APIContext);

  /* Handler */
  const handleCatalogue = (newEndpoint) => {
    // Reset page to "1".
    setCurrentPage(1);

    // New endpoint.
    setEndpoint(url + newEndpoint);

    // Set new page title.
    setTitle(newEndpoint);
  };

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
            handleCatalogue("people");
          }}
        >
          People
        </Button>
        <Button
          onClick={() => {
            handleCatalogue("vehicles");
          }}
        >
          Vehicles
        </Button>
        <Button
          onClick={() => {
            handleCatalogue("starships");
          }}
        >
          Starships
        </Button>
        <Button
          onClick={() => {
            handleCatalogue("species");
          }}
        >
          Species
        </Button>
        <Button
          onClick={() => {
            handleCatalogue("planets");
          }}
        >
          Planets
        </Button>
      </Grid>
    </>
  );
};

export default Catalogue;
