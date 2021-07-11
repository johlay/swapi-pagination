import { Button, Grid } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { useContext } from "react";
import { APIContext } from "../../contexts/APIContext";

const PaginationComponent = () => {
  /* Context */
  const {
    currentPage,
    setCurrentPage,
    setEndpoint,
    totalPages,
    previousPage,
    nextPage,
  } = useContext(APIContext);

  return (
    <Grid container justifyContent="center">
      <Button
        onClick={() => {
          setEndpoint(previousPage);
          setCurrentPage((previousPage) => {
            return previousPage - 1;
          });
        }}
        disabled={previousPage === null}
      >
        Previous
      </Button>
      <Pagination
        page={currentPage}
        hidePrevButton
        hideNextButton
        count={totalPages}
      />
      <Button
        onClick={() => {
          setEndpoint(nextPage);
          setCurrentPage((previousPage) => {
            return previousPage + 1;
          });
        }}
        disabled={nextPage === null}
      >
        Next
      </Button>
    </Grid>
  );
};

export default PaginationComponent;
