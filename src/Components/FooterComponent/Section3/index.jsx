import { memo } from "react";
import styles from "./section3.module.css";
import { text } from "../../../Constants/text";

const Section3 = ({screen}) => {
    return (
        <div className={`${styles['section-3']}`}>
            <p className={`${styles['legalImportant-text']}`}>{screen}</p>
            {
                text?.(screen).map((item)=>{
                    return (
                        <p key={item?.id} className={`${styles['item-text']}`}>{item?.itemType}</p>
                    )
                })
            }
        </div>
    )
}

export default memo(Section3);