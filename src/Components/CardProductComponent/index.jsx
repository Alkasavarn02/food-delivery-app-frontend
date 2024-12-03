import { memo } from "react";
import ProductCard from "../ProductCardComponent";
import styles from "./cardproduct.module.css";

const CategoryComponent = ({ categoryName, products, categorykey }) => {

    return (
        <div className={styles['category-section']} key={categorykey}>
            <h2 style={{color: categoryName === "Burger" ? "#000" : "#FC8A06"}}>{categoryName}</h2>
            <div className={`d-flex ${styles['products-grid']}`}>
                {
                    products?.map((product) => (
                        <ProductCard key={product._id} products={product} productkey={product._id} />
                    ))
                }
            </div>
        </div>
  );
};

export default memo(CategoryComponent);
