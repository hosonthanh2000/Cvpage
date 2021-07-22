import React, { useState } from 'react'
import styles from '../styles/ProfileCertificate.module.scss'
import icon from '../constant/styles/Icon.module.scss'
const ProfileCertificate = () =>{

    const V_certificate = "fa fa-file-text-o " + icon.style;
    const [certificate,setCertificate] = useState(
        [{certificateName:'BASIC SOFTWARE TESTING'}]
    )

    const element = certificate.map((value,index)=>{
        return(
            <span key={index} className={styles.content_title}>{value.certificateName}</span>            
        )
    })


    return(
    <div className={styles.profile_certificate_wrapper}>
        <div className={icon.pd_10}>  
            <span className={V_certificate}></span>
            <span className={styles.title}>
                CHỨNG CHỈ
            </span>
        </div>
        <div className={styles.content}>
            {element}
        </div>
    </div>
    )
}

export default ProfileCertificate