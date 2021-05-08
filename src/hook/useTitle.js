import { useEffect, useState } from "react";

function useTitle(myTitle) {
  const [title, setTitle] = useState("E-Comm")

  useEffect(() => {
    setTitle(document.title = `${title} - ${myTitle}`)
  }, [])
}

export { useTitle }