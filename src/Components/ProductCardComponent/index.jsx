import { memo, useContext } from "react";
import styles from "./productCard.module.css"; 
import { updateUserDetails } from "../../services/api";
import { AppContext } from "../../Context/appcontext";

const ProductCard = ({products, productkey}) => {

    const {setUserInfo} = useContext(AppContext)

    const handleClick = (id) => {
        const data = {productId:id}
        updateUserDetails(data)
        .then((res)=>{
            setUserInfo(res?.data?.data)
        })
    }

    return (
        <div className={`d-flex ${styles['product-card']}`} key={productkey}>
            <div className={styles['card-content']}>
                <h3 className={styles['card-title']}>{products?.name}</h3>
                <p className={styles['card-description']}>{products?.description}</p>
                <p className={styles['card-price']}>₹{products?.price}</p>
            </div>
            <div className={styles['img-conatiner']}>
                <img
                    src={products?.imageUrl}
                    alt="Royal Cheese Burger"
                    className={styles['product-image']}
                />
                <div className={styles['btn-section']}>
                    <button className={styles['add-button']} onClick={()=>{handleClick(productkey)}}>+</button>
                </div>
            </div>
        </div>
  );
};

export default memo(ProductCard);
