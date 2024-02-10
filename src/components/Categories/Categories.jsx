import { Link } from "react-router-dom";

const Categories = ({ category }) => {
  return (
    <div>
      <Link to={`/category/${category}`} className="chip">
        {category}
      </Link>
    </div>
  );
};

export default Categories;
