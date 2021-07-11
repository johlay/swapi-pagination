import { makeStyles } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";
import { useContext } from "react";
import { APIContext } from "../../contexts/APIContext";

/* Material-UI styles */
const useStyles = makeStyles({
  container: {
    // border: "1px solid black",
    borderRadius: "1px",
    height: "600px",
    margin: "auto",
    width: "80%",
  },
});

const List = () => {
  /* Styles */
  const classes = useStyles();

  /* Context */
  const { list, loading } = useContext(APIContext);

  return (
    <>
      <Grid container className={classes.container}>
        {loading ? <Typography>Loading...</Typography> : ""}
        <ul>
          {loading !== true &&
            list &&
            list.map((listItem, index) => {
              return <li key={index}>{listItem.name}</li>;
            })}
        </ul>
      </Grid>
    </>
  );
};

export default List;
