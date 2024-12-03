import React, { memo } from "react";
import styles from "./Footer.module.css";

const Section1 = React.lazy(() => import("./Section1")) ;
const Section2 = React.lazy(() => import("./Section2")) ;
const Section3 = React.lazy(() => import("./Section3")) ;

function Footer(){
    return (
        <div className={`d-flex flex-column ${styles['footer']}`}>
            <div className={`d-flex justify-between ${styles['upper-section']}`}>
                <Section1/>
                <Section2/>
                <Section3 screen="Legal Pages"/>
                <Section3 screen="Important Links"/>
            </div>
            <div className={`d-flex justify-between ${styles['lower-section']}`}>
                <p>
                    Order.uk Copyright 2024, All Rights Reserved.
                </p>
                <div className={`d-flex ${styles['section-2-text']}`}>
                    <p>Privacy Policy</p>
                    <p>Terms</p>
                    <p>Pricing </p>
                    <p>Do not sell or share my personal information</p>
                </div>
            </div>
        </div>
    )
}

export default memo(Footer);