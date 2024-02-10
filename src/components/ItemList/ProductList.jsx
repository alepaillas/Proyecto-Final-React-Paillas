import Product from "../Item/Product";

const ProductList = ({ products }) => {
  return (
    <div className="row itemList1">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
