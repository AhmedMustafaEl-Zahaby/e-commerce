import React, { useContext } from "react";
import { ShopContext } from "../Contexts/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescribtionBox from "../Components/DescribtionBox/DescribtionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";
function Product() {
  const { all_products, addToCart } = useContext(ShopContext);
  const { id } = useParams();
  const product = all_products.find((product) => product.id === Number(id));
  return (
    <div className="product">
      <Breadcrum product={product} />
      <ProductDisplay product={product} addToCart={addToCart} />
      {/* <DescribtionBox />
      <RelatedProducts /> */}
    </div>
  );
}

export default Product;
