import styles from "./checkoutitem.module.css"
import Line from "../lineComponent"

const CheckOutItem = ({itemList=[]}) => {

    const productCount = {}

    itemList.forEach((item) => {
        if (productCount[item._id]) {
          productCount[item._id].quantity += 1; 
          productCount[item._id].totalPrice += Number(item.price);
        } else {
          productCount[item._id] = { ...item, quantity: 1, totalPrice: Number(item.price) };
        }
    });

    const uniqueProducts = Object.values(productCount);
    
    return (
        <div className={`d-flex flex-column ${styles['checkout-item']}`}>
            {
                uniqueProducts?.map((item) => {
                    return (
                        <div key={item._id}>
                            <div className={`d-flex align-center ${styles['upper-section']}`}>
                                <div className={`d-flex align-center ${styles['left-section']}`}>
                                    <div className={styles['checkout-item-img']}>
                                        <img src={item?.imageUrl} alt="item-img" />
                                    </div>
                                    <div className={styles['checkout-item-description']}>
                                        <p className={styles['para-1']}>{item?.name}</p>
                                        <p className={styles['para-2']}>{item?.quantity}x item</p>
                                    </div>
                                </div>
                                <p className={`${styles['right-section']}`}>₹{item?.totalPrice}</p>
                            </div>
                            <Line classes={`${styles['horizonatl-line']}`}/>
                        </div>
                    )
                })
            }
            <div className={`d-flex flex-column ${styles['input-section']}`}>
                <label htmlFor="input">Notes</label>
                <input type="text" placeholder="Add order notes" id="input" />
            </div>
        </div>
    )
}

export default CheckOutItem