import { Link } from "react-router-dom";
import PNF from "../assets/images/page-not-found.jpg";
import { useTitle } from "../hooks/useTitle";

export const PageNotFound = () => {
  useTitle("PageNotFound");
  return (
    <section className="pageNotFound">
      <p>404/ PAGE NOTE FOUND</p>
      <img src={PNF} alt=" Page Note Found" />
      <Link to="/">
        <button>Back To Home</button>
      </Link>
    </section>
  );
};
