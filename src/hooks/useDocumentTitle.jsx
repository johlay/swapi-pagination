import { useEffect, useState } from "react";

const initialTitle = document.title;

const useDocumentTitle = (newTitle) => {
  const [title, setTitle] = useState(newTitle);

  useEffect(() => {
    if (!title) return;

    if (initialTitle && title) document.title = `${initialTitle} - ${title}`;
  }, [title]);

  return [title, setTitle];
};

export default useDocumentTitle;
