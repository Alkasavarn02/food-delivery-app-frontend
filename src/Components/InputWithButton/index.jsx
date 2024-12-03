import { memo } from "react";
import styles from "./inputbtn.module.css";
import CustomButton from "../ButtonComponent";

const InputWithButton = ({classes,title,placeholder}) => {
    return (
        <div className={`d-flex ${styles['input-subscribe-container']} ${classes || ""}`}>
            <input type="text" placeholder={placeholder} readOnly/>
            <CustomButton
                title={title}
                classes={`${styles[`subscribe`]}`}
            />
        </div>
    )
}

export default memo(InputWithButton);