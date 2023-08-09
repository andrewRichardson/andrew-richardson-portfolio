import { useContext } from "react";
import { ContentfulContext } from "../contexts/ContentfulContext";

const useContentful = () => useContext(ContentfulContext);

export default useContentful;
