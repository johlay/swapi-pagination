import { useEffect, useState } from "react";

const initialTitle = document.title;

const useDocumentTitle = () => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (!title) return;

    if (initialTitle && title) document.title = `${initialTitle} - ${title}`;
  }, [title]);

  return [title, setTitle];
};

export default useDocumentTitle;
