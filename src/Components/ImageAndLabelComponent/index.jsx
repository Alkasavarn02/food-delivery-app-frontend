import { memo } from "react";
import styles from "./imageandlabel.module.css"
import CustomButton from "../ButtonComponent";
import { useNavigate } from "react-router-dom";

const ImageAndLabel = ({label1, label2, labelList, imgList, classes, popupClasses, labelistclasses, uppersectionClasses, scroll, gridColumn, imgContainer, bgcolor, margintop}) => {

    const navigate = useNavigate()

    const onClick = (img) => {
        if(img?.name === "Restaurant"){
            setTimeout(()=>{
                navigate(`/productpage/${img?.type}`)
            },1000)
        }
    }

    return (
        <div className={`${styles['image-label-section']} ${bgcolor? bgcolor: null}`} >
            <div className={`d-flex align-center ${styles['upper-section']} ${uppersectionClasses || ""}`}>
                <p className={`${styles['right-section']}`}>
                    <span className={styles['desktop-para']}>{label1}</span>
                    <span className={styles['mobile-para']}>{label2}</span>
                </p>
                {
                    labelList ?
                    <div className={`d-flex align-center ${styles['left-section']} ${labelistclasses || ""}`}>
                        {
                            labelList.map((item)=>{
                                return <p key={item?.id} className={styles[item?.classes]}>
                                    {item?.lebel}
                                </p>
                            })
                        }
                    </div>
                    : null
                }
            </div> 
            <div className={`d-flex ${styles['image-section']} ${ scroll ? scroll : gridColumn}`}>
                {
                    imgList?.map((img)=>{
                        return (
                            <div 
                                key={img?.id}
                                className={`${styles['each-img-section']} 
                                ${classes || ''}`} 
                                onClick={()=>onClick(img)}
                                style={{cursor: img?.name === "Restaurant" ? "pointer" : null}}
                            >
                                <div className={`${imgContainer ? imgContainer :styles['img-container']}`} key={img?.id}>
                                    <img src={img?.label} alt="restaurantImg" />
                                    {
                                        img?.popup ?
                                        <p className={`${styles['discount-position']} ${popupClasses || ""}`}>{img?.popup}</p>
                                        :null
                                    }
                                </div>
                                <div className={`${styles[img?.classes]}`}>
                                    <p className={`${styles['type']}`}>{img?.type}</p>
                                    <p className={styles['text']}>{img?.text}</p>
                                    {
                                        img?.btn ?
                                        <CustomButton title={img?.btn} classes={`${styles['get-started-btn']}`}/>
                                        : null
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default memo(ImageAndLabel)