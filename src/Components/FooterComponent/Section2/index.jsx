import { memo } from "react";
import styles from "./section2.module.css";
import { ImageIconType } from "../../../Constants/imageIcon";
import InputWithButton from "../../InputWithButton";

const Section2 = () => {
    return (
        <div className={`${styles['section-2']}`}>
            <p>Get Exclusive Deals in your Inbox</p>
            <InputWithButton classes={`${styles['subscribe-text']}`} title={"Subscribe"} placeholder="youremail@gmail.com"/>
            <p className={`${styles['spam-text']}`}>we wont spam, read our <span>email policy</span></p>
            <div className={`d-flex ${styles['icon-box']}`}>
                {
                   ImageIconType?.map((type)=>{
                        return (
                            <div key={type?.id} className={styles['icon-img-container']}>
                                <img src={type?.imageType} alt={type?.imageType} />
                            </div>
                        )
                   }) 
                }
            </div>
        </div>
    )
}

export default memo(Section2);