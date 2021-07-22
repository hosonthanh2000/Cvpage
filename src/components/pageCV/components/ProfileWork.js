import React, { useState } from 'react'
import styles from '../styles/ProfileWork.module.scss'
import icon from '../constant/styles/Icon.module.scss'

const ProfileWork = () =>{
    const product = "fa fa-bookmark " + icon.style;
    const [work,setWork] = useState(
        [{link:'https://hosonthanh2000.github.io/ContentBox/'}]
    )

    const element = work.map((value,index)=>{
        return (
            <a key={index} className={styles.content_title} target="_target"  href={value.link}>{value.link}</a>   
        )
    })


    return(
    <div className={styles.profile_work_wrapper}>
        <div className={icon.pd_10}>
            <span className={product}></span>
            <span className={styles.title}>
                SẢN PHẨM CÁ NHÂN
            </span>
        </div>      
        <div className={styles.content}>
            {element}
        </div>
    </div>
    )
}

export default ProfileWork