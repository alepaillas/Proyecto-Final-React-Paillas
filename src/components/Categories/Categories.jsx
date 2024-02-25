import { Link } from "react-router-dom";

const Categories = ({ category }) => {
  return (
    <Link to={`/category/${category}`} className="chip">
      {category}
    </Link>
  );
};

export default Categories;
