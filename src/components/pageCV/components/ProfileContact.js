import React from 'react'
import styles from '../styles/ProfileContact.module.scss'
const ProfileContact = () =>{

    const profile = [
        {text:'03/06/2000',icon:'fa fa-birthday-cake'  },
        {text:'Nam',icon:'fa fa-male'},
        {text:'0903803404',icon:'fa fa-phone'},
        {text:'hosonthanh00@gmail.com',icon:'fa fa-envelope-square'},
        {text:'15/Đường S2/Phường Tây Thạnh/Quận Tân Phú/TP.HCM',icon:'fa fa-map-marker'},
    ]
    
    const profile_details = profile.map((value,index)=>{
        return(
            <div
                key={index} 
                style={
                { marginBottom: "5px" }
            }>
                  <i 
                  style={
                      {padding:"5px"}
                  }
                  className={value.icon}></i>
                  <span>{value.text}</span>       
            </div>
        )
    })

    return (
        <div className={styles.profile_contact_wrapper}>
            <div className={styles.title}>
                THÔNG TIN LIÊN HỆ
            </div>
            <div className={styles.content}>
            {profile_details}
            </div>  
        </div>
    )
}

export default ProfileContact