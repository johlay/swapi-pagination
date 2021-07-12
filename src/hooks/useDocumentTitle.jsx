import { useEffect } from "react";

const initialTitle = document.title;

const useDocumentTitle = (newTitle) => {
  useEffect(() => {
    if (newTitle === undefined) return;

    if (initialTitle && newTitle)
      document.title = `${initialTitle} - ${newTitle}`;
  }, [newTitle]);
};

export default useDocumentTitle;
