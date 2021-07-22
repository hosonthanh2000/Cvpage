import React from 'react'
import styles from '../styles/ProfileImage.module.scss'
const ProfileImage = () =>{
    const img = process.env.PUBLIC_URL + '/logo192.png';
    return(
    <div  className={styles.box_img}>
        <img alt="" className={styles.img} src={img}></img>
        <div>
        <div className={styles.full_name}>Hồ SƠN THẠNH</div> 
        </div>
    </div>
    )
}

export default ProfileImage