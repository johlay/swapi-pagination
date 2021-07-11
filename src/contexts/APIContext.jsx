import { createContext, useEffect, useState } from "react";

export const APIContext = createContext();

const APIContextProvider = ({ children }) => {
  const [endpoint, setEndpoint] = useState("");
  const [list, setList] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [previousPage, setPreviousPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    fetchList();
  }, [endpoint]);

  async function fetchList() {
    try {
      // Loading...
      setLoading(true);

      // Fetch data from API.
      const response = await fetch(`${endpoint}`);
      const data = await response.json();

      // Pages
      setPreviousPage(data.previous);
      setNextPage(data.next);
      countTotalPages(data.count);

      // If successful, set new list to fetched data.
      setList(data.results);
    } catch (error) {
      // If unsuccessful, set error message.
      setErrorMsg("Error fetching data...");

      throw Error;
    } finally {
      // Set loading to false, regardless of outcome.
      setLoading(false);
    }
  }

  function countTotalPages(totalCount) {
    const pages = Math.ceil(totalCount / 10);

    setTotalPages(pages);
  }
  /* Props */
  const values = {
    currentPage,
    setCurrentPage,
    errorMsg,
    setErrorMsg,
    endpoint,
    setEndpoint,
    list,
    loading,
    previousPage,
    setPreviousPage,
    nextPage,
    setNextPage,
    totalPages,
  };

  return <APIContext.Provider value={values}>{children}</APIContext.Provider>;
};

export default APIContextProvider;
